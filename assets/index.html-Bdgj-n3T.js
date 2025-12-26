import { r as reactExports, j as jsxRuntimeExports, f as Logout, g as Refresh, h as Setting2, I as Image, B as BrushSquare, i as ChartSquare, b as TickCircle, k as CloudChange, l as Import, m as Export, n as Code, H as Heart, o as CloseSquare, A as ArrowDown2, M as Minus, p as Add, c as clientExports } from "./vendor-rGln_nN_.js";
import { u as useSettings, A as AutoBackupSettings, e as exportBackup, i as importBackup } from "./index.tsx-B43scfvm.js";
import { G as GoogleDriveService } from "./service-worker.ts-Dz236_1K.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const CURRENT_VERSION = "1.8.0";
const REPO_OWNER = "010101-sans";
const REPO_NAME = "moctale-plus";
const DEFAULT_KEYWORDS = "die, died, death, killed, kill, murder, murdered, ending, climax, twist, reveal, spoiler, cameo, post-credit, dead, alive, survive, betray, traitor, plot hole, sacrifice, villain, killer, secret, finale";
const ToolIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Setting2, { size: "18", color: "currentColor", variant: "Linear" });
const PaintIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(BrushSquare, { size: "18", color: "currentColor", variant: "Linear" });
const ChartIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ChartSquare, { size: "18", color: "currentColor", variant: "Linear" });
const ChevronDown = ({ style }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown2, { size: "16", color: "currentColor", style });
const UpdateIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Refresh, { size: "12", color: "currentColor" });
const GithubIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { size: "20", color: "currentColor" });
const HeartIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: "20", color: "currentColor", variant: "Linear" });
const CloseIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(CloseSquare, { size: "20", color: "currentColor" });
const MinusIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: "16", color: "currentColor" });
const PlusIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Add, { size: "16", color: "currentColor" });
const DownloadIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Import, { size: "20", color: "currentColor" });
const UploadIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Export, { size: "20", color: "currentColor" });
const CloudIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(CloudChange, { size: "20", color: "currentColor", variant: "Bulk" });
const CloudCheckIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(TickCircle, { size: "20", className: "text-green-400", variant: "Bold" });
const Section = ({ title, icon, isOpen, onToggle, children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `section ${isOpen ? "active" : ""}`, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", onClick: onToggle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-icon-box", children: icon }),
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { style: { transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" } })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `section-content ${isOpen ? "open" : ""}`, style: isOpen ? { maxHeight: "2000px" } : {}, children })
] });
const ToggleItem = ({ label, desc, checked, onChange }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-text", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "setting-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "setting-desc", children: desc })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "switch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked, onChange: (e) => onChange(e.target.checked) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "slider" })
  ] })
] });
const SelectItem = ({ label, value, options, onChange }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item setting-item-block", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "setting-label", style: { marginBottom: 12, marginLeft: 4 }, children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "theme-select-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "theme-select", value, onChange: (e) => onChange(e.target.value), children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value)) }) })
] });
const StepperItem = ({ label, value, min, max, onChange, formatLabel }) => {
  const handleDec = () => {
    if (value > min) onChange(value - 1);
  };
  const handleInc = () => {
    if (value < max) onChange(value + 1);
  };
  const isMin = value <= min;
  const isMax = value >= max;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item-block", style: { marginBottom: "15px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "setting-label", style: { marginBottom: "10px", marginLeft: "25px" }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "85%", height: "42px", marginLeft: "23px", marginRight: "40px", backgroundColor: "#27272a", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", overflow: "hidden", userSelect: "none" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDec, disabled: isMin, style: { width: "44px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", borderRight: "1px solid rgba(255, 255, 255, 0.08)", cursor: isMin ? "default" : "pointer", color: isMin ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.8)", transition: "background 0.2s" }, onMouseEnter: (e) => !isMin && (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"), onMouseLeave: (e) => !isMin && (e.currentTarget.style.backgroundColor = "transparent"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(MinusIcon, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, textAlign: "center", fontSize: "0.9rem", fontWeight: 500, color: "#f4f4f5", letterSpacing: "0.02em" }, children: formatLabel(value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleInc, disabled: isMax, style: { width: "44px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", borderLeft: "1px solid rgba(255, 255, 255, 0.08)", cursor: isMax ? "default" : "pointer", color: isMax ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.8)", transition: "background 0.2s" }, onMouseEnter: (e) => !isMax && (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"), onMouseLeave: (e) => !isMax && (e.currentTarget.style.backgroundColor = "transparent"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {}) })
    ] })
  ] });
};
const StickerControl = () => {
  const [url, setUrl] = reactExports.useState("");
  const fileInputRef = reactExports.useRef(null);
  const sendToContent = (payload) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "ADD_STICKER", payload });
      }
    });
  };
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => sendToContent(reader.result);
      reader.readAsDataURL(file);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item-block", style: { marginBottom: 20, marginTop: 10, padding: "0 25px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-label", style: { marginBottom: 8, display: "flex", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sticker Studio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "10px", color: "#71717a", fontWeight: 400 }, children: "Drag & Drop also supported" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: url,
          onChange: (e) => setUrl(e.target.value),
          placeholder: "Image URL...",
          style: {
            width: "100%",
            background: "#27272a",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "8px 10px",
            color: "#fff",
            fontSize: "12px",
            outline: "none",
            boxSizing: "border-box"
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" && url) {
              sendToContent(url);
              setUrl("");
            }
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => url && (sendToContent(url), setUrl("")),
          disabled: !url,
          style: {
            background: url ? "#3b82f6" : "#27272a",
            border: "none",
            borderRadius: 8,
            width: 32,
            cursor: url ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            opacity: url ? 1 : 0.5
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => fileInputRef.current?.click(),
          style: {
            background: "#27272a",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            width: 32,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#a1a1aa"
            /* Explicit text color for inheritance */
          },
          title: "Upload Local Image",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: "16", color: "currentColor", variant: "Bold" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, hidden: true, onChange: handleFile })
    ] })
  ] });
};
const isNewerVersion = (latest, current) => {
  const l = latest.replace("v", "").split(".").map(Number);
  const c = current.replace("v", "").split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (l[i] > c[i]) return true;
    if (l[i] < c[i]) return false;
  }
  return false;
};
function App() {
  const { settings, updateSetting, loading } = useSettings();
  const [openSection, setOpenSection] = reactExports.useState(null);
  const [updateAvailable, setUpdateAvailable] = reactExports.useState(null);
  const [showSupport, setShowSupport] = reactExports.useState(false);
  const [spoilerKeywords, setSpoilerKeywords] = reactExports.useState("");
  const [isImporting, setIsImporting] = reactExports.useState(false);
  const [syncStatus, setSyncStatus] = reactExports.useState("idle");
  const [userProfile, setUserProfile] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const initData = async () => {
      chrome.storage.local.get(["cachedUserProfile", "spoilerKeywords"], (items) => {
        const result = items;
        if (result.cachedUserProfile) {
          setUserProfile(result.cachedUserProfile);
        }
        if (result.spoilerKeywords) {
          setSpoilerKeywords(result.spoilerKeywords);
        } else {
          setSpoilerKeywords(DEFAULT_KEYWORDS);
        }
      });
      try {
        const profile = await GoogleDriveService.getUserProfile();
        setUserProfile(profile);
        chrome.storage.local.set({ cachedUserProfile: profile });
      } catch (e) {
      }
      fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`).then((res) => res.ok ? res.json() : null).then((data) => {
        if (data && data.tag_name && isNewerVersion(data.tag_name, CURRENT_VERSION)) {
          setUpdateAvailable(data.tag_name);
        }
      }).catch(console.warn);
    };
    initData();
  }, []);
  const handleKeywordChange = (e) => {
    const val = e.target.value;
    setSpoilerKeywords(val);
    updateSetting("spoilerKeywords", val);
  };
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsImporting(true);
    try {
      await importBackup(file);
      setTimeout(() => {
        setIsImporting(false);
        self.location.reload();
      }, 800);
    } catch (err) {
      console.error("Import failed", err);
      setIsImporting(false);
    }
  };
  const handleCloudSync = async () => {
    setSyncStatus("uploading");
    try {
      const profile = await GoogleDriveService.getUserProfile();
      setUserProfile(profile);
      const folderId = await GoogleDriveService.ensureBackupPath();
      const cloudFile = await GoogleDriveService.getLatestBackupFile(folderId);
      const localItems = await new Promise((r) => chrome.storage.local.get(null, r));
      const localSyncTime = localItems.lastSyncedAt || 0;
      const cloudTime = cloudFile ? new Date(cloudFile.createdTime).getTime() : -1;
      if (cloudFile && cloudTime > localSyncTime) {
        const json = await GoogleDriveService.downloadFile(cloudFile.id);
        const dataToRestore = json.data || json;
        await new Promise((r) => chrome.storage.local.set(dataToRestore, r));
        chrome.storage.local.set({ lastSyncedAt: cloudTime });
        setSyncStatus("success");
        setTimeout(() => {
          setSyncStatus("idle");
          self.location.reload();
        }, 1e3);
      } else {
        const now = Date.now();
        const payload = {
          meta: { version: CURRENT_VERSION, exportedAt: (/* @__PURE__ */ new Date()).toISOString() },
          data: { ...localItems, lastSyncedAt: now }
        };
        await GoogleDriveService.uploadBackup(payload);
        chrome.storage.local.set({ lastSyncedAt: now });
        setSyncStatus("success");
        setTimeout(() => setSyncStatus("idle"), 2e3);
      }
    } catch (error) {
      console.error("Sync Failed:", error);
      setSyncStatus("error");
      setTimeout(() => setSyncStatus("idle"), 3e3);
    }
  };
  const handleSignOut = async () => {
    try {
      chrome.storage.local.remove("cachedUserProfile");
      chrome.identity.getAuthToken({ interactive: false }, async (result) => {
        const token = typeof result === "string" ? result : result?.token;
        if (token) {
          await GoogleDriveService.signOutUser(token);
        }
        setUserProfile(null);
        setSyncStatus("idle");
      });
    } catch (e) {
      console.error("Sign out error", e);
      setUserProfile(null);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-screen", style: { color: "#fff", background: "#050505", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", minHeight: "100vh", background: "#050505", color: "#ffffff", fontFamily: "Inter, system-ui, sans-serif" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        /* 1. Base Button Styles (Boxy & Robust) */
        .footer .footer-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
          color: #a1a1aa; /* Removed !important to allow hover override */
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 4px;
          border-radius: 8px;
          transition: all 0.2s ease-in-out;
          outline: none;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        /* 2. FORCE HOVER EFFECTS (Color + Border + Glow) */
        
        /* Generic Hover Fallback */
        .footer .footer-btn:hover {
           background: rgba(255, 255, 255, 0.1);
           color: #ffffff;
           border-color: rgba(255, 255, 255, 0.2);
        }

        /* Cloud Sync: Cyan Glow */
        .footer .footer-btn.sync:hover {
            color: #22d3ee !important; 
            border-color: #22d3ee !important;
            background: rgba(34, 211, 238, 0.1) !important;
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.3) !important;
        }

        .footer .footer-btn.auto-backup-btn:hover {
            color: #22d3ee !important; 
            border-color: #22d3ee !important;
            background: rgba(34, 211, 238, 0.1) !important;
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.3) !important;
        }

        /* Import: Green Glow */
        .footer .footer-btn.import:hover {
            color: #4ade80 !important;
            border-color: #4ade80 !important;
            background: rgba(74, 222, 128, 0.1) !important;
            box-shadow: 0 0 12px rgba(74, 222, 128, 0.3) !important;
        }

        /* Export: Yellow Glow */
        .footer .footer-btn.export:hover {
            color: #facc15 !important;
            border-color: #facc15 !important;
            background: rgba(250, 204, 21, 0.1) !important;
            box-shadow: 0 0 12px rgba(250, 204, 21, 0.3) !important;
        }

        /* GitHub: Purple Glow */
        .footer .footer-btn.github:hover {
            color: #c084fc !important;
            border-color: #c084fc !important;
            background: rgba(192, 132, 252, 0.1) !important;
            box-shadow: 0 0 12px rgba(192, 132, 252, 0.3) !important;
        }

        /* Support: Pink Glow */
        .footer .footer-btn.support:hover {
            color: #f472b6 !important;
            border-color: #f472b6 !important;
            background: rgba(244, 114, 182, 0.1) !important;
            box-shadow: 0 0 12px rgba(244, 114, 182, 0.3) !important;
        }

        /* 3. Layout Grid */
        .footer-stack {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
        }
        .footer-row-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            width: 100%;
        }

        /* 4. Avatar & Sync Split */
        .split-btn-container {
            display: grid;
            grid-template-columns: 1fr 48px;
            gap: 12px;
            width: 100%;
        }
        .user-avatar-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            position: relative;
            height: 100%;
            width: 100%;
        }
        .user-avatar-btn img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 7px;
        }
        .user-avatar-btn:hover {
            border-color: #ef4444;
            background: rgba(239, 68, 68, 0.2);
            box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }
        .user-avatar-btn:hover .avatar-img { opacity: 0; }
        .user-avatar-btn .logout-icon {
            position: absolute; opacity: 0; transition: opacity 0.2s;
        }
        .user-avatar-btn:hover .logout-icon { opacity: 1; }

        /* Update this class to accommodate 3 items */
        .split-btn-container {
          display: grid;
          /* Settings (48px) | Sync Button (Auto) | Avatar (48px) */
          grid-template-columns: 48px 1fr 48px;
          gap: 8px; /* Slightly tighter gap */
          width: 100%;
          height: 42px; /* Force height for alignment */
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logo-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icons/logo.png", alt: "Moctale Plus", width: "28", height: "28", style: { borderRadius: 6 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-text", children: "Moctale Plus" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: updateAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "update-badge",
          title: `New version ${updateAvailable} available!`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateIcon, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Update" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "version-badge", children: [
        "Beta v",
        CURRENT_VERSION
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", style: { flex: 1, paddingBottom: "30px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Section,
        {
          title: "Enhancements",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ToolIcon, {}),
          isOpen: openSection === "utils",
          onToggle: () => toggleSection("utils"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "More Platforms",
                desc: "IMDB, TMDB & Letterboxd links",
                checked: settings.enablePlatforms,
                onChange: (val) => updateSetting("enablePlatforms", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Reviews & Discussions",
                desc: "Reddit threads & YouTube reviews",
                checked: settings.enableDiscussions,
                onChange: (val) => updateSetting("enableDiscussions", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Creative Content",
                desc: "Show Fan Art, Cosplay & OSTs",
                checked: settings.enableCreative,
                onChange: (val) => updateSetting("enableCreative", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Linkifier",
                desc: "Make raw text links clickable",
                checked: settings.enableLinkifier,
                onChange: (val) => updateSetting("enableLinkifier", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Advanced Spoiler Shield",
                desc: "Blur spoilers in reviews & posts",
                checked: settings.enableSpoilerShield,
                onChange: (val) => updateSetting("enableSpoilerShield", val)
              }
            ),
            settings.enableSpoilerShield && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "keyword-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "keyword-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "keyword-label", children: "Risk Keywords (Comma Separated)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "keyword-textarea",
                  value: spoilerKeywords,
                  onChange: handleKeywordChange,
                  placeholder: "die, killed, ending, twist...",
                  spellCheck: false
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Review Templates",
                desc: "Helper dropdown in review box",
                checked: settings.enableReviewTemplates,
                onChange: (val) => updateSetting("enableReviewTemplates", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Context Menu",
                desc: "Right-click to search Moctale",
                checked: settings.enableContextMenu,
                onChange: (val) => updateSetting("enableContextMenu", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Keyboard Shortcuts",
                desc: "Nav keys (1-6) enabled",
                checked: settings.enableShortcuts,
                onChange: (val) => updateSetting("enableShortcuts", val)
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Section,
        {
          title: "Theme & Visuals",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PaintIcon, {}),
          isOpen: openSection === "visuals",
          onToggle: () => toggleSection("visuals"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectItem,
              {
                label: "Active Theme",
                value: settings.activeTheme,
                onChange: (val) => updateSetting("activeTheme", val),
                options: [
                  { value: "default", label: "Default (Dark)" },
                  { value: "light", label: "Light Mode" },
                  { value: "oled", label: "OLED (True Black)" },
                  { value: "coffee", label: "Coffee (Sepia)" },
                  { value: "midnight", label: "Midnight (Deep Blue)" }
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/5 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StepperItem,
              {
                label: "Poster Layout",
                value: settings.gridColumns,
                min: 0,
                max: 8,
                onChange: (val) => updateSetting("gridColumns", val),
                formatLabel: (v) => {
                  if (v === 0) return "Default";
                  if (v === 1) return "List View";
                  return `${v} Columns`;
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/5 pt-3 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickerControl, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Section,
        {
          title: "Stats & Data",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartIcon, {}),
          isOpen: openSection === "data",
          onToggle: () => toggleSection("data"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Export Collections",
                desc: "Enable CSV export button",
                checked: settings.enableCollectionExport,
                onChange: (val) => updateSetting("enableCollectionExport", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Pick Random Content",
                desc: "Shuffle button for collections",
                checked: settings.enablePickRandom,
                onChange: (val) => updateSetting("enablePickRandom", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Box Office Tracker",
                desc: "Revenue data in sidebar",
                checked: settings.enableBoxOffice,
                onChange: (val) => updateSetting("enableBoxOffice", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Episode Tracker",
                desc: "Track watched episodes per season",
                checked: settings.enableEpisodeTracker,
                onChange: (val) => updateSetting("enableEpisodeTracker", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Search Plus",
                desc: "External search buttons",
                checked: settings.enableSearchPlus,
                onChange: (val) => updateSetting("enableSearchPlus", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Private Notes",
                desc: "Local text editor for content",
                checked: settings.enablePrivateNotes,
                onChange: (val) => updateSetting("enablePrivateNotes", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Image Preview",
                desc: "Hover images to enlarge",
                checked: settings.enableImagePreview,
                onChange: (val) => updateSetting("enableImagePreview", val)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleItem,
              {
                label: "Watch Status",
                desc: "Show watched indicator on posters",
                checked: settings.enableWatchStatus,
                onChange: (val) => updateSetting("enableWatchStatus", val)
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "footer",
        style: {
          padding: "0 20px 24px 20px",
          background: "transparent",
          marginTop: "auto",
          borderTop: "none"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-stack", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", marginBottom: "10px" }, children: userProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split-btn-container", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoBackupSettings, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleCloudSync,
                  className: `footer-btn sync ${syncStatus}`,
                  title: "Sync Now",
                  style: { height: "100%" },
                  children: [
                    syncStatus === "uploading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 16, height: 16, border: "2px solid rgba(34, 211, 238, 0.3)", borderTopColor: "#22d3ee", borderRadius: "50%", animation: "spin 1s linear infinite" } }) : syncStatus === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CloudCheckIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(CloudIcon, {}),
                    syncStatus === "success" ? "Synced!" : "Sync"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "user-avatar-btn",
                  onClick: handleSignOut,
                  title: `Signed in as ${userProfile.name}. Click to Sign Out.`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: userProfile.picture, alt: "User", className: "avatar-img" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logout-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logout, { size: "20", color: "#ef4444", variant: "Bold" }) })
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleCloudSync,
                className: `footer-btn sync ${syncStatus}`,
                title: "Sign in with Google",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CloudIcon, {}),
                  "Connect Cloud"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-row-split", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => fileInputRef.current?.click(), className: "footer-btn import", title: "Import Backup", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon, {}),
                "Import"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportBackup, className: "footer-btn export", title: "Export Backup", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UploadIcon, {}),
                "Export"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-row-split", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://github.com/${REPO_OWNER}/${REPO_NAME}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "footer-btn github",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GithubIcon, {}),
                    "GitHub"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowSupport(true),
                  className: "footer-btn support",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(HeartIcon, {}),
                    "Support"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-copyright", style: { marginTop: "20px", fontSize: "14px", color: "#71717a", textAlign: "center", fontWeight: 500, letterSpacing: "0.02em" }, children: [
            "Made with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f43f5e", margin: "0 3px", fontSize: "12px" }, children: "❤️" }),
            " by ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noopener noreferrer", style: { color: "#a1a1aa", textDecoration: "none", transition: "color 0.2s", borderBottom: "1px dotted rgba(255,255,255,0.2)" }, onMouseEnter: (e) => e.currentTarget.style.color = "#fff", onMouseLeave: (e) => e.currentTarget.style.color = "#a1a1aa", children: "010101-sans" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, className: "hidden", style: { display: "none" }, accept: ".json" })
        ]
      }
    ),
    showSupport && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overlay-backdrop", onClick: () => setShowSupport(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overlay-card", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "close-btn", onClick: () => setShowSupport(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qr-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icons/upi-qr.jpg", alt: "UPI QR Code", className: "qr-image" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "support-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upi-id", children: "UPI ID: 010101-sans@pingpay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Buy me a coffee? ☕" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Your financial support keeps Moctale Plus ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ad-free and constantly updated."
        ] })
      ] })
    ] }) })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
