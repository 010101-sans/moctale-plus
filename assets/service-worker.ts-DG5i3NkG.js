const FOLDER_MIME = "application/vnd.google-apps.folder";
const FILE_MIME = "application/json";
const getAuthToken = (interactive) => {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive }, (token) => {
      if (chrome.runtime.lastError || !token) {
        reject(new Error(chrome.runtime.lastError?.message || "Login failed"));
      } else {
        resolve(token);
      }
    });
  });
};
const clearCachedToken = (token) => {
  return new Promise((resolve) => {
    chrome.identity.removeCachedAuthToken({ token }, () => resolve());
  });
};
const fetchWithAuth = async (url, options = {}, retry = true) => {
  let token;
  try {
    token = await getAuthToken(false);
  } catch (silentError) {
    try {
      console.log("Silent login failed, triggering popup...");
      token = await getAuthToken(true);
    } catch (interactiveError) {
      throw new Error(`Authentication failed: ${interactiveError.message}`);
    }
  }
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${token}`);
  let response = await fetch(url, { ...options, headers });
  if (response.status === 401 && retry) {
    console.log("Token expired, refreshing...");
    await clearCachedToken(token);
    token = await getAuthToken(true);
    headers.set("Authorization", `Bearer ${token}`);
    response = await fetch(url, { ...options, headers });
  }
  if (!response.ok) {
    throw new Error(`Drive API Error: ${response.statusText}`);
  }
  return response;
};
const GoogleDriveService = {
  // ... (Keep the rest of the file exactly as it was) ...
  // ... (getUserProfile, getFolderId, createFolder, ensureBackupPath, uploadBackup, downloadFile) ...
  async getUserProfile() {
    const res = await fetchWithAuth("https://www.googleapis.com/drive/v3/about?fields=user(displayName,photoLink)");
    const data = await res.json();
    return {
      name: data.user.displayName,
      picture: data.user.photoLink
    };
  },
  async getFolderId(name, parentId = "root") {
    const query = `mimeType='${FOLDER_MIME}' and name='${name}' and '${parentId}' in parents and trashed=false`;
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id)`;
    const res = await fetchWithAuth(url);
    const data = await res.json();
    return data.files && data.files.length > 0 ? data.files[0].id : null;
  },
  async createFolder(name, parentId = "root") {
    const metadata = { name, mimeType: FOLDER_MIME, parents: [parentId] };
    const res = await fetchWithAuth("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metadata)
    });
    const data = await res.json();
    return data.id;
  },
  async ensureBackupPath() {
    let rootId = await this.getFolderId("Moctale Plus");
    if (!rootId) rootId = await this.createFolder("Moctale Plus");
    let backupId = await this.getFolderId("Backups", rootId);
    if (!backupId) backupId = await this.createFolder("Backups", rootId);
    return backupId;
  },
  async getLatestBackupFile(folderId) {
    const query = `'${folderId}' in parents and mimeType='${FILE_MIME}' and trashed=false`;
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&orderBy=createdTime desc&pageSize=1&fields=files(id,name,createdTime)`;
    const res = await fetchWithAuth(url);
    const data = await res.json();
    return data.files && data.files.length > 0 ? data.files[0] : null;
  },
  async uploadBackup(data) {
    const folderId = await this.ensureBackupPath();
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    const filename = `Moctale_Plus_Backup_${timestamp}.json`;
    const metadata = {
      name: filename,
      parents: [folderId],
      mimeType: FILE_MIME
    };
    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("file", new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    await fetchWithAuth("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      body: form
    });
  },
  async downloadFile(fileId) {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
    const res = await fetchWithAuth(url);
    return await res.json();
  },
  // Add inside GoogleDriveService object in src/services/GoogleDrive.ts
  async signOutUser(token) {
    try {
      await fetch(`https://oauth2.googleapis.com/revoke?token=${token}`, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" }
      });
    } catch (e) {
      console.warn("Revocation failed (token might be invalid already)", e);
    }
    return new Promise((resolve) => {
      chrome.identity.removeCachedAuthToken({ token }, () => resolve());
    });
  }
};
if (typeof self !== "undefined" && typeof self === "undefined") {
  self.window = self;
}
const MOCTALE_SEARCH_URL = "https://www.moctale.in/explore#auto_search=";
const createContextMenu = () => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "search-on-moctale",
      title: "Search '%s' on Moctale",
      contexts: ["selection"]
    }, () => {
      if (chrome.runtime.lastError) return;
    });
  });
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["enableContextMenu"], (result) => {
    if (result.enableContextMenu !== false) createContextMenu();
  });
});
chrome.contextMenus.onClicked.addListener((info, _) => {
  if (info.menuItemId === "search-on-moctale" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    chrome.tabs.create({ url: `${MOCTALE_SEARCH_URL}${query}` });
  }
});
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local" && changes.enableContextMenu) {
    if (changes.enableContextMenu.newValue) {
      createContextMenu();
    } else {
      chrome.contextMenus.removeAll();
    }
  }
});
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local" && changes.backupFrequency) {
    const freq = changes.backupFrequency.newValue;
    handleAlarmSetup(freq);
  }
});
const handleAlarmSetup = async (frequency) => {
  await chrome.alarms.clear("moctale_auto_backup");
  if (!frequency || frequency === "none") return;
  const periodInMinutes = frequency === "daily" ? 1440 : 10080;
  chrome.alarms.create("moctale_auto_backup", {
    delayInMinutes: periodInMinutes,
    // Wait this long before first run
    periodInMinutes
    // Then repeat
  });
  console.log(`[Moctale+] Auto-backup scheduled: ${frequency}`);
};
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "moctale_auto_backup") {
    performBackgroundBackup();
  }
});
const performBackgroundBackup = async () => {
  if (!navigator.onLine) {
    console.log("[Moctale+] Offline, skipping auto-backup.");
    return;
  }
  try {
    const localItems = await new Promise((resolve) => chrome.storage.local.get(null, resolve));
    const payload = {
      meta: {
        version: "BACKGROUND_AUTO",
        // Or import current version
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        mode: "auto"
      },
      data: { ...localItems, lastSyncedAt: Date.now() }
    };
    console.log("[Moctale+] Starting background upload...");
    await GoogleDriveService.uploadBackup(payload);
    chrome.storage.local.set({ lastSyncedAt: Date.now() });
    console.log("[Moctale+] Auto-backup successful.");
  } catch (error) {
    console.error("[Moctale+] Auto-backup failed:", error);
  }
};
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.type === "FETCH_IMAGE_BLOB") {
    fetch(request.url).then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.blob();
    }).then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        sendResponse({ success: true, dataUrl: reader.result });
      };
      reader.onerror = () => {
        sendResponse({ success: false, error: "Failed to read blob" });
      };
      reader.readAsDataURL(blob);
    }).catch((error) => {
      console.error("Image fetch failed:", error);
      sendResponse({ success: false, error: error.message });
    });
    return true;
  }
});
export {
  GoogleDriveService as G
};
