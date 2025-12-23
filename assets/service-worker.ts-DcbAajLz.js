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
