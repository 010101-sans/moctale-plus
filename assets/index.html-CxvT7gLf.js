import { r as reactExports, j as jsxRuntimeExports, c as clientExports } from "./vendor-ycAf6xIx.js";
import { u as useSettings, e as exportBackup, i as importBackup } from "./index.tsx-6BMR8J1N.js";
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
const CURRENT_VERSION = "1.7.0";
const REPO_OWNER = "010101-sans";
const REPO_NAME = "moctale-plus";
const DEFAULT_KEYWORDS = "die, died, death, killed, kill, murder, murdered, ending, climax, twist, reveal, spoiler, cameo, post-credit, dead, alive, survive, betray, traitor, plot hole, sacrifice, villain, killer, secret, finale";
const ToolIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }) });
const PaintIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m5 2 5 5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 13h15" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
] });
const ChartIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3v18h18" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 9-5 5-4-4-3 3" })
] });
const ChevronDown = ({ style }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "chevron", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) });
const UpdateIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" })
] });
const GithubIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
] });
const HeartIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor", children: [
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" }),
  " "
] });
const CloseIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6 6 18" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 6 12 12" })
] });
const MinusIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }) });
const PlusIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14" })
] });
const DownloadIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" })
] });
const UploadIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "17 8 12 3 7 8" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "12", y1: "3", y2: "15" })
] });
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
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const initData = async () => {
      fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`).then((res) => res.ok ? res.json() : null).then((data) => {
        if (data && data.tag_name && isNewerVersion(data.tag_name, CURRENT_VERSION)) {
          setUpdateAvailable(data.tag_name);
        }
      }).catch(console.warn);
      if (typeof chrome !== "undefined" && chrome.storage) {
        chrome.storage.local.get(null, (result) => {
          let savedKeys = result.spoilerKeywords;
          if (result.settings && result.settings.spoilerKeywords) {
            savedKeys = result.settings.spoilerKeywords;
          }
          setSpoilerKeywords(savedKeys || DEFAULT_KEYWORDS);
        });
      } else {
        setSpoilerKeywords(DEFAULT_KEYWORDS);
      }
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-screen", children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logo-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icons/logo.png", alt: "Moctale Plus", width: "28", height: "28", style: { borderRadius: 6 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-text", children: "Moctale Plus" })
      ] }),
      updateAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
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
            ) })
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
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-links", style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px 4px", width: "100%", maxWidth: "280px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => fileInputRef.current?.click(),
            className: "footer-link",
            style: { justifySelf: "end" },
            children: [
              isImporting ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                width: "12px",
                height: "12px",
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon, {}),
              "Import"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "divider", style: { alignSelf: "center", justifySelf: "center" }, children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: exportBackup,
            className: "footer-link",
            style: { justifySelf: "start" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UploadIcon, {}),
              "Export"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://github.com/010101-sans/moctale-plus`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "footer-link",
            style: { justifySelf: "end" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GithubIcon, {}),
              "GitHub"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "divider", style: { alignSelf: "center", justifySelf: "center" }, children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "footer-link support-btn",
            onClick: () => setShowSupport(true),
            style: { justifySelf: "start" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HeartIcon, {}),
              "Support"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            onChange: handleFileChange,
            className: "hidden",
            style: { display: "none" },
            accept: ".json"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-copyright", style: { marginTop: "12px" }, children: [
        "Made with ❤️ by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noopener noreferrer", children: "010101-sans" })
      ] })
    ] }),
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
