import { j as jsxRuntimeExports, c as clientExports, r as reactExports, S as Shuffle, R as RefreshCircle, a as RefreshLeftSquare, T as TickSquare, E as Edit2, L as Lock, b as TickCircle, d as reactDomExports, e as Timer1 } from "./vendor-DWMKswWr.js";
const getIcon = (name) => {
  const iconClass = "w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300";
  if (name === "tvtropes") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: iconClass, fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "10 9 9 9 8 9" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: `https://cdn.simpleicons.org/${name}/white`,
      alt: name,
      className: iconClass,
      loading: "lazy"
    }
  );
};
const LinkButton = ({ label, icon, url }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "a",
  {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "\n      group flex items-center gap-3 p-3 rounded-xl \n      bg-[#252833]/40 border border-transparent \n      hover:bg-white/10 hover:border-white/30\n      transition-all duration-200 h-full\n    ",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex items-center justify-center w-6 h-6 text-white/80 -mr-2", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-medium text-[#E2E2E2] group-hover:text-white transition-colors leading-none mt-0.5", children: label })
    ]
  }
);
const Footer = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full pt-3 mt-1 text-center border-t border-[#252833]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#555]", children: [
  "Powered by",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "hover:text-[#888] underline decoration-dotted", children: "Moctale Plus" }),
  " ",
  "by",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noreferrer", className: "hover:text-[#888] underline decoration-dotted", children: "010101-sans" })
] }) });
const DiscussionSection = ({ title, year, type, isAnime }) => {
  const query = encodeURIComponent(`${title} ${year}`);
  const typeLabel = type === "Movie" ? "Movie" : "Series";
  const links = [
    { label: "YouTube Reviews", icon: getIcon("youtube"), url: `https://www.youtube.com/results?search_query=${query.replace(`%20${year}`, "")}${isAnime ? "+anime" : ""}+${typeLabel}+review` },
    { label: "YouTube Podcasts", icon: getIcon("youtube"), url: `https://www.youtube.com/results?search_query=${query.replace(`%20${year}`, "")}${isAnime ? "+anime" : ""}+podcast+discussion` },
    { label: "Hidden Details", icon: getIcon("youtube"), url: `https://www.youtube.com/results?search_query=${query.replace(`%20${year}`, "")}${isAnime ? "+anime" : ""}+detailed+analysis+and+breakdown` },
    { label: "Twitter / X", icon: getIcon("x"), url: `https://twitter.com/search?q=${query.replace(`%20${year}`, "")}${isAnime ? "+anime" : ""}+review+sand+discussion&f=top` },
    { label: "Reddit", icon: getIcon("reddit"), url: `https://www.reddit.com/search/?q=${query.replace(`%20${year}`, "")}${isAnime ? "+anime" : ""}+reviews+and+discussion` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-5 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[#252833] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[#E2E2E2] w-full border-b border-[#252833] pb-3 tracking-[0.1px]", children: "Reviews & Discussions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-full gap-2", children: links.map((link, i) => (
      // <LinkButton key={i} {...link} subtext={`Search ${title}`} />
      /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { ...link }, i)
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const PlatformSection = ({ title, isAnime }) => {
  const queryTitleOnly = encodeURIComponent(title);
  const links = [
    // --- Anime Specific ---
    ...isAnime ? [
      { label: "MyAnimeList", icon: getIcon("myanimelist"), url: `https://myanimelist.net/search/all?q=${queryTitleOnly}` },
      { label: "AniList", icon: getIcon("anilist"), url: `https://anilist.co/search/anime?search=${queryTitleOnly}` },
      { label: "Kitsu", icon: getIcon("kitsu"), url: `https://kitsu.io/anime?text=${queryTitleOnly}` }
    ] : [],
    // --- Movie/TV Giants ---
    { label: "IMDb", icon: getIcon("imdb"), url: `https://www.imdb.com/find/?q=${queryTitleOnly}` },
    { label: "TMDB", icon: getIcon("themoviedatabase"), url: `https://www.themoviedb.org/search?query=${queryTitleOnly}` },
    { label: "Letterboxd", icon: getIcon("letterboxd"), url: `https://letterboxd.com/search/${queryTitleOnly}/` },
    // --- Critics & Scores ---
    { label: "Rotten Tomatoes", icon: getIcon("rottentomatoes"), url: `https://www.rottentomatoes.com/search?search=${queryTitleOnly}` },
    { label: "Metacritic", icon: getIcon("metacritic"), url: `https://www.metacritic.com/search/${queryTitleOnly}/` },
    // --- Wikis & Lore ---
    { label: "Wikipedia", icon: getIcon("wikipedia"), url: `https://en.wikipedia.org/w/index.php?search=${queryTitleOnly}` },
    { label: "Fandom", icon: getIcon("fandom"), url: `https://community.fandom.com/wiki/Special:Search?query=${queryTitleOnly}` },
    { label: "TV Tropes", icon: getIcon("tvtropes"), url: `https://tvtropes.org/pmwiki/search_result.php?q=${queryTitleOnly}` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-3 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[#252833] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[#E2E2E2] w-full border-b border-[#252833] pl-2 pb-3 tracking-[0.1px]", children: "More Platforms" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 w-full gap-2.5", children: links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { ...link }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const GenericIcons = {
  Cosplay: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-70 group-hover:opacity-100 transition-opacity duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 22c0-3.87 3.13-7 7-7h6c3.87 0 7 3.13 7 7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" })
  ] }),
  FanFic: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-70 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }) }),
  Merch: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-70 group-hover:opacity-100 transition-opacity duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] })
};
const CreativeSection = ({ title, year, type, isAnime }) => {
  const query = encodeURIComponent(`${title}`);
  const links = [
    // 1. Music Platforms (Brands -> getIcon)
    {
      label: "Spotify",
      icon: getIcon("spotify"),
      url: `https://open.spotify.com/search/${query}`
    },
    {
      label: "YouTube Music",
      icon: getIcon("youtubemusic"),
      url: `https://music.youtube.com/search?q=${query}`
    },
    {
      label: "Behind The Scenes",
      icon: getIcon("youtube"),
      url: `https://www.youtube.com/results?search_query={query}+Behind+The+Scenes`
    },
    {
      label: "Fan Edits",
      icon: getIcon("youtube"),
      url: `https://www.youtube.com/results?search_query=${query}+Fan+Edits`
    },
    // 2. Visual Platforms (Brands -> getIcon)
    {
      label: "Pinterest",
      icon: getIcon("pinterest"),
      url: `https://www.pinterest.com/search/pins/?q=${query}`
    },
    {
      label: "ArtStation",
      icon: getIcon("artstation"),
      url: `https://www.artstation.com/search?sort_by=relevance&query=${query}`
    },
    // 3. Concepts (Generic -> Custom Icons)
    {
      label: "Merchandise",
      icon: GenericIcons.Merch,
      url: `https://www.google.com/search?q=${query}+official+merchandise`
      // &tbm=shop
    },
    {
      label: "Cosplay",
      icon: GenericIcons.Cosplay,
      url: `https://www.google.com/search?tbm=isch&q=${query}+cosplay`
    },
    {
      label: "Fan Fiction",
      icon: GenericIcons.FanFic,
      url: `https://www.google.com/search?q=${query}+fan+fiction`
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-5 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[#252833] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center justify-between border-b border-[#252833] pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[#E2E2E2] tracking-[0.1px]", children: "Creative Corner" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 w-full gap-2", children: links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      LinkButton,
      {
        ...link
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}) })
  ] });
};
const SearchIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "text-[#888] group-hover:text-white transition-colors",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
    ]
  }
);
const BoxOfficeLink = ({ label, url, colorClass }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "a",
  {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: `
      flex items-center gap-3 px-3 py-2.5 rounded-xl
      bg-[#252833]/40 border border-[#333] 
      hover:bg-[#303440] hover:border-[#555] hover:text-white
      transition-all duration-200 group
      text-xs font-medium text-[#C6C6C6]
      h-full
      ${colorClass || ""}
    `,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate line-clamp-2 break-words whitespace-normal leading-tight text-left", children: label })
    ]
  }
);
const BoxOfficeSection = ({ title }) => {
  const qTitle = encodeURIComponent(title);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-5 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[#252833] rounded-2xl transition-all hover:border-[#3a3f50]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[#E2E2E2] w-full border-b border-[#252833] pb-3 tracking-[0.1px] flex justify-between items-center", children: "Box Office" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "Google Box Office",
          url: `https://www.google.com/search?q=${qTitle}+box+office+report`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "Box Office Mojo",
          url: `https://www.boxofficemojo.com/search/?q=${qTitle}`,
          colorClass: "hover:border-yellow-500/40"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "Sacnilk Verdict",
          url: `https://www.google.com/search?q=${qTitle}+box+office+collection+site:sacnilk.com`,
          colorClass: "hover:border-red-500/40"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "Bollywood Hungama",
          url: `https://www.google.com/search?q=${qTitle}+box+office+site:bollywoodhungama.com`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "The Numbers",
          url: `https://www.the-numbers.com/search?search_term=${qTitle}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoxOfficeLink,
        {
          label: "Wikipedia Budget",
          url: `https://en.wikipedia.org/wiki/Special:Search?search=${qTitle}+film+box+office`
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const getPageMediaInfo = () => {
  try {
    let titleEl = document.querySelector("h1.text-\\[20px\\], h1.lg\\:text-\\[28px\\]");
    if (!titleEl) {
      const h1s = Array.from(document.querySelectorAll("h1"));
      titleEl = h1s.find((el) => {
        const text = el.textContent?.trim() || "";
        return text.length > 1 && !["Menu", "Home", "Search", "Moctale"].includes(text);
      }) || null;
    }
    let title = titleEl?.textContent?.trim() || "";
    title = title.replace(/\(\d{4}\)/, "").trim();
    if (!title) return null;
    const metaEl = document.querySelector("div.text-\\[14px\\].text-\\[\\#ABABAB\\]");
    const metaText = metaEl?.textContent?.trim() || "";
    let year = "";
    let type = "Unknown";
    if (metaText) {
      const yearMatch = metaText.match(/\b(19|20)\d{2}\b/);
      if (yearMatch) year = yearMatch[0];
      if (metaText.includes("Movie")) {
        type = "Movie";
      } else if (metaText.includes("Show") || metaText.includes("TV") || metaText.includes("Series") || metaText.includes("Season")) {
        type = "Show";
      }
    }
    const potentialTags = /* @__PURE__ */ new Set();
    document.querySelectorAll('a[href*="/genre/"]').forEach(
      (el) => potentialTags.add(el.textContent?.trim().toLowerCase() || "")
    );
    document.querySelectorAll("button span.text-\\[\\#E1E6F0\\], button span.capitalize").forEach(
      (el) => potentialTags.add(el.textContent?.trim().toLowerCase() || "")
    );
    const countryNode = document.querySelector('a[href*="/country/"]');
    const country = countryNode?.textContent?.trim().toLowerCase() || "";
    if (metaText) potentialTags.add(metaText.toLowerCase());
    const animeKeywords = [
      "anime",
      "donghua",
      "seinen",
      "shonen",
      "shojo",
      "josei",
      "isekai",
      "mecha",
      "slice of life",
      "animation"
    ];
    let isAnime = false;
    for (const tag of potentialTags) {
      if (animeKeywords.some((keyword) => tag.includes(keyword.toLowerCase()))) {
        isAnime = true;
        break;
      }
    }
    if (!isAnime && country.toLowerCase() === "japan") {
      if (potentialTags.has("animation") || potentialTags.has("animated")) {
        isAnime = true;
      }
    }
    return { title, year, isAnime, type };
  } catch (e) {
    console.error("[Moctale+] Error scraping page info:", e);
    return null;
  }
};
const SidebarApp = ({ mediaInfo, settings }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-full mt-6 transition-all duration-300 ease-in-out", children: [
    settings.enableBoxOffice && mediaInfo.type === "Movie" && /* @__PURE__ */ jsxRuntimeExports.jsx(BoxOfficeSection, { title: mediaInfo.title, year: mediaInfo.year }),
    settings.enableDiscussions && /* @__PURE__ */ jsxRuntimeExports.jsx(DiscussionSection, { ...mediaInfo }),
    settings.enablePlatforms && /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformSection, { ...mediaInfo }),
    settings.enableCreative && /* @__PURE__ */ jsxRuntimeExports.jsx(CreativeSection, { ...mediaInfo })
  ] });
};
const LINK_CLASS = "moctale-linkified";
const URL_REGEX = /\b(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s"'<>]*)?\b/g;
const normalizeUrl = (url) => {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  try {
    return new URL(normalized).href;
  } catch {
    return null;
  }
};
const runLinkifier = () => {
  const root = document.body;
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("a, button, input, textarea, code, pre")) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue?.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        const val = node.nodeValue || "";
        if (!val.includes(".") || val.length < 4) {
          return NodeFilter.FILTER_SKIP;
        }
        if (!/(?:https?:\/\/|www\.|[\w-]+\.[\w]{2,})/.test(val)) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  const textNodes = [];
  let current;
  while (current = walker.nextNode()) {
    textNodes.push(current);
  }
  textNodes.forEach((textNode) => {
    const text = textNode.nodeValue;
    URL_REGEX.lastIndex = 0;
    if (!URL_REGEX.test(text)) return;
    URL_REGEX.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let foundMatch = false;
    text.replace(URL_REGEX, (match, offset) => {
      foundMatch = true;
      fragment.append(text.slice(lastIndex, offset));
      const href = normalizeUrl(match);
      if (!href) {
        fragment.append(match);
      } else {
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.textContent = match;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.className = `${LINK_CLASS} text-blue-400 hover:underline cursor-pointer z-10 relative`;
        anchor.addEventListener("click", (e) => e.stopPropagation());
        fragment.append(anchor);
      }
      lastIndex = offset + match.length;
      return match;
    });
    if (foundMatch) {
      fragment.append(text.slice(lastIndex));
      textNode.parentNode?.replaceChild(fragment, textNode);
    }
  });
};
const removeLinkifier = () => {
  const links = document.querySelectorAll(`a.${LINK_CLASS}`);
  links.forEach((link) => {
    const text = document.createTextNode(link.textContent || "");
    link.parentNode?.replaceChild(text, link);
  });
};
const DownloadIcon$1 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
    ]
  }
);
const scrapeCollectionData = () => {
  const items = [];
  const cardNodes = document.querySelectorAll('a[href^="/content/"].group');
  if (cardNodes.length === 0) {
    alert("[Moctale+] No content items found. Please scroll down to ensure items are loaded.");
    return [];
  }
  cardNodes.forEach((card) => {
    let rawTitle = card.getAttribute("aria-label");
    if (!rawTitle) {
      const titleNode = card.querySelector("h3");
      rawTitle = titleNode?.textContent?.trim() || "Unknown Title";
    }
    const metaNode = card.querySelector("p");
    const metaText = metaNode?.textContent?.trim() || "";
    let type = "Unknown";
    let year = "N/A";
    const metaRegex = /^(.*?)\s+•\s+(\d{4})$/;
    const match = metaText.match(metaRegex);
    if (match) {
      type = match[1].trim();
      year = match[2];
    } else {
      const yearOnlyMatch = metaText.match(/\d{4}/);
      if (yearOnlyMatch) year = yearOnlyMatch[0];
      if (metaText.toLowerCase().includes("movie")) type = "Movie";
      else if (metaText.toLowerCase().includes("show") || metaText.toLowerCase().includes("tv")) type = "Show";
      else if (metaText.toLowerCase().includes("season")) type = "Show";
    }
    items.push({ title: rawTitle, year, type });
  });
  return items;
};
const downloadCSV$1 = (data, fileName) => {
  const csvContent = [
    ["Title", "Year", "Type"].join(","),
    ...data.map((item) => `"${item.title.replace(/"/g, '""')}",${item.year},${item.type}`)
  ].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const safeName = fileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").trim();
  link.setAttribute("download", `${safeName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const ExportButton = () => {
  const handleExport = () => {
    const data = scrapeCollectionData();
    if (data && data.length > 0) {
      const titleEl = document.querySelector("h1.text-lg.lg\\:text-2xl");
      const filename = titleEl?.textContent?.trim() || "Moctale_Collection";
      downloadCSV$1(data, filename);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleExport,
      className: "\n        h-10 px-3 ml-2 rounded-md\n        inline-flex items-center justify-center gap-2\n        transition-colors duration-200\n        focus:outline-none focus:ring-1\n        bg-[#1A1A1A] hover:bg-[#252525] focus:ring-[#404040]\n        cursor-pointer \n      ",
      title: "Tip: Scroll to bottom of the collection first.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: "Export Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-white/60 leading-none whitespace-nowrap", children: [
            "Powered by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/010101-sans/moctale-plus",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white/70 hover:text-[#DDD] transition-colors underline decoration-dotted",
                onClick: (e) => e.stopPropagation(),
                children: "Moctale Plus"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
const injectCollectionExporter = () => {
  const allButtons = Array.from(document.querySelectorAll("button"));
  const saveButtons = allButtons.filter(
    (btn) => btn.getAttribute("aria-label") === "Save" || btn.textContent && btn.textContent.trim() === "Save"
  );
  if (saveButtons.length === 0) return;
  saveButtons.forEach((saveButton, index) => {
    const container = saveButton.parentElement;
    if (!container) return;
    if (container.querySelector(".moctale-plus-export-wrapper")) return;
    const rootEl = document.createElement("div");
    rootEl.className = "moctale-plus-export-wrapper";
    rootEl.style.display = "inline-flex";
    rootEl.style.alignItems = "center";
    if (saveButton.nextSibling) {
      container.insertBefore(rootEl, saveButton.nextSibling);
    } else {
      container.appendChild(rootEl);
    }
    clientExports.createRoot(rootEl).render(/* @__PURE__ */ jsxRuntimeExports.jsx(ExportButton, {}));
    console.log(`[Moctale+] Export Button Injected (Instance ${index + 1})`);
  });
};
const DownloadIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
    ]
  }
);
const scrapeMyCollectionData = () => {
  const items = [];
  const cardNodes = document.querySelectorAll('div[role="link"]');
  if (cardNodes.length === 0) {
    const gridFallback = document.querySelectorAll(".grid > div.group");
    if (gridFallback.length === 0) {
      alert("[Moctale+] No items found. Please wait for the collection to load.");
      return [];
    }
  }
  cardNodes.forEach((card) => {
    const titleNode = card.querySelector("h3");
    const rawTitle = titleNode?.textContent?.trim() || "Unknown Title";
    const metaNode = card.querySelector("p");
    const metaText = metaNode?.textContent?.trim() || "";
    let type = "Unknown";
    let year = "N/A";
    const metaRegex = /^(.*?)\s+•\s+(\d{4})$/;
    const match = metaText.match(metaRegex);
    if (match) {
      type = match[1].trim();
      year = match[2];
    } else {
      const yearOnlyMatch = metaText.match(/\d{4}/);
      if (yearOnlyMatch) year = yearOnlyMatch[0];
      if (metaText.toLowerCase().includes("movie")) type = "Movie";
      else if (metaText.toLowerCase().includes("show")) type = "Show";
    }
    items.push({ title: rawTitle, year, type });
  });
  return items;
};
const downloadCSV = (data, fileName) => {
  const csvContent = [
    ["Title", "Year", "Type"].join(","),
    ...data.map((item) => `"${item.title.replace(/"/g, '""')}",${item.year},${item.type}`)
  ].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const safeName = fileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").trim();
  link.setAttribute("download", `${safeName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const MyCollectionExportButton = () => {
  const handleExport = () => {
    const data = scrapeMyCollectionData();
    if (data && data.length > 0) {
      const titleEl = document.querySelector("h1.text-xl.lg\\:text-2xl.font-bold");
      const filename = titleEl?.textContent?.trim() || "My_Moctale_Collection";
      downloadCSV(data, filename);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleExport,
      className: "\n        h-10 px-3 ml-2 rounded-md\n        inline-flex items-center justify-center gap-2\n        transition-colors duration-200\n        focus:outline-none focus:ring-1\n        bg-[#1A1A1A] hover:bg-[#252525] focus:ring-[#404040]\n        cursor-pointer \n      ",
      title: "Tip: Scroll to bottom of the collection first.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: "Export Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-white/60 leading-none whitespace-nowrap", children: [
            "Powered by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/010101-sans/moctale-plus",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white/70 hover:text-[#DDD] transition-colors underline decoration-dotted",
                onClick: (e) => e.stopPropagation(),
                children: "Moctale Plus"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
const injectMyCollectionExporter = () => {
  if (document.getElementById("moctale-plus-my-export-btn")) return;
  const allButtons = Array.from(document.querySelectorAll("button"));
  const addContentBtn = allButtons.find((btn) => btn.textContent?.includes("Add Content"));
  if (addContentBtn && addContentBtn.parentElement) {
    const container = addContentBtn.parentElement;
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "8px";
    const rootEl = document.createElement("div");
    rootEl.id = "moctale-plus-my-export-btn";
    container.appendChild(rootEl);
    clientExports.createRoot(rootEl).render(/* @__PURE__ */ jsxRuntimeExports.jsx(MyCollectionExportButton, {}));
    console.log("[Moctale+] My Collection Export Button Injected");
  }
};
const checkAndPerformSearch = () => {
  if (!self.location.hash.startsWith("#auto_search=")) return;
  const rawQuery = self.location.hash.replace("#auto_search=", "");
  const query = decodeURIComponent(rawQuery);
  history.replaceState(null, "", self.location.pathname + self.location.search);
  const openSearchInterval = setInterval(() => {
    const searchButton = document.querySelector('button[aria-label="Search"]');
    if (searchButton) {
      clearInterval(openSearchInterval);
      searchButton.click();
      waitForInputAndType(query);
    }
  }, 300);
  setTimeout(() => clearInterval(openSearchInterval), 3e3);
};
const waitForInputAndType = (query) => {
  const typeInterval = setInterval(() => {
    const input = document.querySelector('input[placeholder*="Search for Movies"]');
    if (input) {
      clearInterval(typeInterval);
      simulateReactTyping(input, query);
    }
  }, 200);
  setTimeout(() => clearInterval(typeInterval), 3e3);
};
const simulateReactTyping = (input, text) => {
  input.focus();
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    self.HTMLInputElement.prototype,
    "value"
  )?.set;
  if (nativeInputValueSetter) {
    nativeInputValueSetter.call(input, text);
  } else {
    input.value = text;
  }
  const inputEvent = new Event("input", { bubbles: true });
  input.dispatchEvent(inputEvent);
  setTimeout(() => {
    const enterEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    input.dispatchEvent(enterEvent);
  }, 300);
};
let isListenerAttached = false;
let isReloadPending = false;
const navigate = (path) => {
  self.location.href = path;
};
const clickSearch = () => {
  const searchBtn = document.querySelector('button[aria-label="Search"]');
  if (searchBtn) {
    searchBtn.click();
  } else {
    self.location.hash = "#auto_search=";
  }
};
const openProfile = () => {
  const profileTrigger = document.querySelector('button[aria-label="Open profile menu"]');
  if (profileTrigger) {
    profileTrigger.click();
    setTimeout(() => {
      const dialog = document.querySelector('div[role="dialog"]');
      if (dialog) {
        const links = Array.from(dialog.querySelectorAll("a"));
        const myProfileLink = links.find((a) => a.textContent?.includes("My Profile"));
        if (myProfileLink) {
          myProfileLink.click();
        } else {
          const firstLink = dialog.querySelector("a");
          if (firstLink) firstLink.click();
        }
      }
    }, 50);
  } else {
    const avatar = document.querySelector('img[alt="Profile"]');
    if (avatar) {
      const btn = avatar.closest("button");
      if (btn) btn.click();
    }
  }
};
const toggleNotifications = () => {
  let notifBtn = document.querySelector('button[aria-label="Notifications"]');
  if (!notifBtn) {
    const bellIcon = document.querySelector(".lucide-bell");
    if (bellIcon) notifBtn = bellIcon.closest("button");
  }
  if (notifBtn) {
    const opts = {
      view: self,
      bubbles: true,
      cancelable: true,
      buttons: 1
      // Left mouse button
    };
    notifBtn.dispatchEvent(new PointerEvent("pointerdown", opts));
    notifBtn.dispatchEvent(new MouseEvent("mousedown", opts));
    notifBtn.dispatchEvent(new PointerEvent("pointerup", opts));
    notifBtn.dispatchEvent(new MouseEvent("mouseup", opts));
    notifBtn.click();
    console.log("[Moctale+] Notification toggle triggered");
  } else {
    console.warn("[Moctale+] Notification button not found");
  }
};
const showToast = (message, isReloading = false) => {
  const existing = document.getElementById("moctale-toast");
  if (existing) {
    existing.style.transform = "translateX(120%)";
    existing.style.opacity = "0";
    setTimeout(() => existing.remove(), 300);
  }
  const logoUrl = chrome.runtime.getURL("icons/logo.png");
  const toast = document.createElement("div");
  toast.id = "moctale-toast";
  toast.className = `
    fixed right-8 bottom-10 z-[10000]
    flex items-center gap-4
    pl-4 pr-6 py-4
    rounded-xl
    text-white font-sans
    bg-[#0B0716]/95 backdrop-blur-xl
    border border-[#7C3AED]/30
    shadow-[0_16px_50px_-18px_rgba(124,58,237,0.6)]
    transform translate-x-[120%] opacity-0
    transition-transform transition-opacity
    duration-[420ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
  `;
  const iconHtml = isReloading ? `
      <div class="w-10 h-10 flex items-center justify-center
                  border border-[#7C3AED]/40
                  bg-[#7C3AED]/15 rounded-lg">
        <svg class="w-5 h-5 text-[#A78BFA] animate-spin"
             viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      </div>` : `
      <div class="w-10 h-10 flex items-center justify-center
                  border border-[#7C3AED]/40
                  bg-[#7C3AED]/15 rounded-lg">
        <img
          src="${logoUrl}"
          alt="Moctale Plus"
          class="w-6 h-6 object-contain
                 drop-shadow-[0_0_8px_rgba(124,58,237,0.7)]"
          onerror="
            this.replaceWith(
              Object.assign(document.createElement('div'), {
                innerHTML:
                  '<svg width=18 height=18 viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#A78BFA\\' stroke-width=\\'2.5\\'><path d=\\'M12 2v20M2 12h20\\'/></svg>'
              })
            )
          "
        />
      </div>`;
  toast.innerHTML = `
    <div class="absolute left-0 top-0 h-full w-[3px]
                bg-gradient-to-b
                from-[#A78BFA]
                via-[#7C3AED]
                to-[#4C1D95]"></div>

    ${iconHtml}

    <div class="flex flex-col gap-1">
      <span class="text-[13px] font-semibold tracking-wide">
        ${message}
      </span>
      <span class="text-[10px] uppercase tracking-widest text-white/45
                   flex items-center gap-2">
        ${isReloading ? `<span class="w-1.5 h-1.5 rounded-full
                     bg-[#A78BFA] animate-pulse"></span>
               Applying Changes` : "Moctale Plus"}
      </span>
    </div>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = "translateX(0)";
    toast.style.opacity = "1";
  });
  if (!isReloading) {
    setTimeout(() => {
      const t = document.getElementById("moctale-toast");
      if (t) {
        t.style.transform = "translateX(120%)";
        t.style.opacity = "0";
        setTimeout(() => t.remove(), 300);
      }
    }, 3600);
  }
};
const toggleSetting = (key, name) => {
  if (isReloadPending) return;
  if (typeof chrome === "undefined" || !chrome.runtime?.id) {
    console.warn("[Moctale+] Context Invalidated. Refreshing...");
    self.location.reload();
    return;
  }
  if (!chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get([key], (result) => {
    if (chrome.runtime.lastError) return;
    const current = result[key] === true;
    const newValue = !current;
    chrome.storage.local.set({ [key]: newValue }, () => {
      const needsReload = key === "enableSpoilerShield";
      if (needsReload) {
        isReloadPending = true;
        showToast(`${name}: ${newValue ? "ON" : "OFF"}`, true);
        setTimeout(() => self.location.reload(), 800);
      } else {
        showToast(`${name}: ${newValue ? "ON" : "OFF"}`, false);
      }
    });
  });
};
const triggerRandomPick = () => {
  const randomBtn = document.querySelector(".moctale-pick-random button");
  if (randomBtn) randomBtn.click();
};
const scrollToTop = () => {
  self.scrollTo({ top: 0, behavior: "smooth" });
};
const closeModals = () => {
  const randomClose = document.querySelector(".moctale-pick-random-modal-close");
  if (randomClose) randomClose.click();
  const helpModal = document.getElementById("moctale-shortcuts-help");
  if (helpModal) helpModal.remove();
  const backdrop = document.querySelector(".fixed.inset-0.z-\\[100\\]");
  if (backdrop && backdrop instanceof HTMLElement) backdrop.click();
  if (self.location.hash.includes("#auto_search")) {
    history.pushState("", document.title, self.location.pathname + self.location.search);
  }
};
const handleScheduleCycle = () => {
  const current = self.location.href;
  if (current.includes("timeFilter=today")) navigate("/schedule?timeFilter=upcoming");
  else if (current.includes("timeFilter=upcoming")) navigate("/schedule?timeFilter=announced");
  else navigate("/schedule?timeFilter=today");
};
const handleExploreCycle = () => {
  const current = self.location.pathname;
  if (current === "/explore/categories") navigate("/explore/genres");
  else if (current === "/explore/genres") navigate("/explore/anime");
  else if (current === "/explore/anime") navigate("/explore/franchise");
  else navigate("/explore/categories");
};
const showHelpModal = () => {
  if (document.getElementById("moctale-shortcuts-help")) return;
  const modal = document.createElement("div");
  modal.id = "moctale-shortcuts-help";
  modal.className = "fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200 font-sans";
  const logoUrl = typeof chrome !== "undefined" && chrome.runtime ? chrome.runtime.getURL("icons/logo.png") : "";
  const sections = [
    {
      title: "Navigation",
      items: [
        { k: "1", d: "Explore" },
        { k: "2", d: "Schedule" },
        { k: "3", d: "Clubs" },
        { k: "4", d: "Categories" },
        { k: "5", d: "Search" },
        { k: "6", d: "My Profile" },
        { k: "N", d: "Notifications" },
        { k: "Shift + S", d: "Settings" },
        { k: "[", d: "My Collections" },
        { k: "]", d: "Saved Collections" }
      ]
    },
    {
      title: "Actions",
      items: [
        { k: "R", d: "Pick Random" },
        { k: "T", d: "Scroll Top" },
        { k: "Ctrl + Shift", d: "Preview Images with Mouse" },
        { k: "Shift + /", d: "Show Shortcuts Guide" }
      ]
    },
    {
      title: "Toggles",
      items: [
        { k: "S", d: "Spoiler Shield", setting: "enableSpoilerShield" },
        { k: "L", d: "Linkifier", setting: "enableLinkifier" },
        { k: "C", d: "Context Menu", setting: "enableContextMenu" },
        { k: "D", d: "Discussions", setting: "enableDiscussions" },
        { k: "P", d: "More Platforms", setting: "enablePlatforms" },
        { k: "K", d: "Creative Corner", setting: "enableCreative" },
        { k: "E", d: "Export Collection", setting: "enableCollectionExport" },
        { k: "B", d: "Box Office", setting: "enableBoxOffice" },
        { k: "X", d: "Pick Random", setting: "enablePickRandom" },
        { k: "M", d: "Review Templates", setting: "enableReviewTemplates" },
        { k: "F", d: "Search Plus", setting: "enableSearchPlus" },
        { k: "Q", d: "Private Notes", setting: "enablePrivateNotes" },
        { k: "I", d: "Image Preview", setting: "enableImagePreview" },
        { k: "W", d: "Watch Status", setting: "enableWatchStatus" }
      ]
    }
  ];
  const renderKey = (key) => `<kbd class="min-w-[24px] px-2 h-6 flex items-center justify-center bg-[#1F1F1F] border-b-2 border-white/10 rounded text-xs font-bold text-white shadow-sm font-sans">${key}</kbd>`;
  modal.innerHTML = `
    <div class="bg-[#0A0A0A] border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] w-full max-w-5xl h-[70vh] flex flex-col relative overflow-hidden">
      
      <div class="px-6 py-5 border-b border-white/5 bg-[#0A0A0A]/95 flex justify-between items-center shrink-0">
        <h3 class="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
           <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <!-- Keyboard outline -->
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />

              <!-- Keys --> 
              <line x1="6" y1="9" x2="6" y2="9" /> <line x1="10" y1="9" x2="10" y2="9" /> <line x1="14" y1="9" x2="14" y2="9" /> <line x1="18" y1="9" x2="18" y2="9" />
              <line x1="6" y1="13" x2="6" y2="13" /> <line x1="10" y1="13" x2="10" y2="13" /> <line x1="14" y1="13" x2="14" y2="13" /> <line x1="18" y1="13" x2="18" y2="13" />
            </svg>
          </span>

           Keyboard Shortcuts
        </h3>
        <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 group hover:border-[#8b5cf6]/30 transition-colors">
                <img src="${logoUrl}" class="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" alt="Moctale" onerror="this.style.display='none'" />
                <span class="text-[11px] font-bold text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-wider">Moctale Plus</span>
            </div>
            <button id="moctale-help-close" class="text-white/30 hover:text-white hover:bg-white/10 transition-all p-2 rounded-full active:scale-90">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>
      </div>

      <div class="flex-1 grid grid-cols-3 divide-x divide-white/5 overflow-hidden">
        ${sections.map((section) => `
            <div class="flex flex-col h-full">
                <div class="px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                    <h4 class="text-[11px] font-bold uppercase tracking-widest text-[#8b5cf6] opacity-90">${section.title}</h4>
                </div>
                <div class="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-1">
                    ${section.items.map((item) => `
                        <div class="flex items-center justify-between group py-2 px-2 rounded hover:bg-white/[0.02] transition-colors">
                            <span class="text-sm text-white/50 group-hover:text-white/90 transition-colors">${item.d}</span>
                            <div class="flex gap-1">
                                ${renderKey(item.k)}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("")}
      </div>

      <div class="px-6 py-3 bg-[#121212] border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 shrink-0">
        <span>Moctale Plus v1.9.5</span>
        <div class="flex gap-4">
            <span>Press <kbd class="font-mono text-white/50">Esc</kbd> to close</span>
            <a href="https://github.com/010101-sans/moctale-plus" target="_blank" class="hover:text-[#8b5cf6] transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const closeBtn = document.getElementById("moctale-help-close");
  if (closeBtn) closeBtn.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
};
const initKeyboardShortcuts = (isEnabled) => {
  if (!isEnabled) return;
  if (isListenerAttached) return;
  isListenerAttached = true;
  self.addEventListener("keydown", (e) => {
    const target2 = e.target;
    const isInput = target2.tagName === "INPUT" || target2.tagName === "TEXTAREA" || target2.isContentEditable;
    if (isInput) {
      if (e.key === "Escape") target2.blur();
      else return;
    }
    if (!e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
      const key = e.key.toLowerCase();
      switch (key) {
        case "s":
          e.preventDefault();
          toggleSetting("enableSpoilerShield", "Spoiler Shield");
          return;
        case "l":
          e.preventDefault();
          toggleSetting("enableLinkifier", "Linkifier");
          return;
        case "c":
          e.preventDefault();
          toggleSetting("enableContextMenu", "Context Menu");
          return;
        case "d":
          e.preventDefault();
          toggleSetting("enableDiscussions", "Discussions");
          return;
        case "p":
          e.preventDefault();
          toggleSetting("enablePlatforms", "More Platforms");
          return;
        case "k":
          e.preventDefault();
          toggleSetting("enableCreative", "Creative Corner");
          return;
        case "e":
          e.preventDefault();
          toggleSetting("enableCollectionExport", "Export Collection");
          return;
        case "b":
          e.preventDefault();
          toggleSetting("enableBoxOffice", "Box Office");
          return;
        case "x":
          e.preventDefault();
          toggleSetting("enablePickRandom", "Pick Random");
          return;
        case "m":
          e.preventDefault();
          toggleSetting("enableReviewTemplates", "Review Templates");
          return;
        case "f":
          e.preventDefault();
          toggleSetting("enableSearchPlus", "Search Plus");
          return;
        case "q":
          e.preventDefault();
          toggleSetting("enablePrivateNotes", "Private Notes");
          return;
        case "i":
          e.preventDefault();
          toggleSetting("enableImagePreview", "Image Preview");
          return;
        case "w":
          e.preventDefault();
          toggleSetting("enableWatchStatus", "Watch Status");
          return;
      }
    }
    if ((e.key === "?" || e.key === "/" && e.shiftKey) && !isInput) {
      e.preventDefault();
      e.stopPropagation();
      showHelpModal();
      return;
    }
    if (e.shiftKey && !e.ctrlKey && !e.altKey) {
      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        navigate("https://www.moctale.in/accounts/edit?section=settings");
        return;
      }
    }
    if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    switch (e.key.toLowerCase()) {
      case "1":
        e.preventDefault();
        navigate("/explore");
        break;
      case "2":
        e.preventDefault();
        handleScheduleCycle();
        break;
      case "3":
        e.preventDefault();
        navigate("/clubs");
        break;
      case "4":
        e.preventDefault();
        handleExploreCycle();
        break;
      case "5":
        e.preventDefault();
        clickSearch();
        break;
      case "6":
        e.preventDefault();
        openProfile();
        break;
      case "n":
        e.preventDefault();
        toggleNotifications();
        break;
      case "r":
        if (document.querySelector(".moctale-pick-random button")) {
          e.preventDefault();
          triggerRandomPick();
        }
        break;
      case "t":
        e.preventDefault();
        scrollToTop();
        break;
      case "[":
        e.preventDefault();
        navigate("/my-collections");
        break;
      case "]":
        e.preventDefault();
        navigate("/saved-collections");
        break;
      case "escape":
        closeModals();
        break;
    }
  }, { capture: true });
};
const LoaderIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "none", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
] });
const PoweredBySubtext = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-white/60 leading-none whitespace-nowrap", children: [
  "Powered by",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://github.com/010101-sans/moctale-plus",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-white/70 hover:text-[#DDD] transition-colors underline decoration-dotted",
      onClick: (e) => e.stopPropagation(),
      children: "Moctale Plus"
    }
  )
] });
const generateUrlFromCard = (element) => {
  try {
    const titleEl = element.querySelector("h3");
    const rawTitle = titleEl?.textContent?.trim() || element.getAttribute("aria-label") || "";
    const metaEl = element.querySelector("p");
    const rawMeta = metaEl?.textContent?.trim() || "";
    const yearMatch = rawMeta.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : "";
    if (!rawTitle || !year) return null;
    const slugTitle = rawTitle.toLowerCase().replace(/&/g, "and").replace(/[':]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return `${self.location.origin}/content/${slugTitle}-${year}`;
  } catch (error) {
    return null;
  }
};
const extractAllTitles = () => {
  let candidates = Array.from(document.querySelectorAll('a[href^="/content/"]'));
  if (candidates.length === 0) {
    candidates = Array.from(document.querySelectorAll('div[role="link"]'));
  }
  const titles = candidates.map((el) => {
    const h3 = el.querySelector("h3");
    return h3?.textContent?.trim() || el.getAttribute("aria-label") || "";
  }).filter((t) => t.length > 0);
  return [...new Set(titles)];
};
const fixCollectionLayout = (buttonContainer) => {
  if (!self.location.pathname.includes("/explore/collection/")) return;
  const wrapper = buttonContainer.parentElement;
  if (!wrapper) return;
  if (wrapper.dataset.moctaleLayoutFixed === "true") return;
  wrapper.style.flexDirection = "column-reverse";
  wrapper.style.alignItems = "flex-end";
  wrapper.style.gap = "16px";
  const titleDiv = wrapper.firstElementChild;
  if (titleDiv) {
    titleDiv.style.width = "100%";
    titleDiv.style.alignSelf = "flex-start";
  }
  wrapper.dataset.moctaleLayoutFixed = "true";
};
const PickRandomButton = () => {
  const [loading, setLoading] = reactExports.useState(false);
  const [label, setLabel] = reactExports.useState("Pick Random");
  const handlePick = () => {
    if (loading) return;
    setLoading(true);
    setLabel("Picking...");
    let candidates = Array.from(document.querySelectorAll('a[href^="/content/"]'));
    if (candidates.length === 0) {
      candidates = Array.from(document.querySelectorAll('div[role="link"]'));
    }
    if (candidates.length === 0) {
      alert("[Moctale+] No content found. Please scroll down.");
      setLoading(false);
      setLabel("Pick Random");
      return;
    }
    const randomElement = candidates[Math.floor(Math.random() * candidates.length)];
    setTimeout(() => {
      let targetUrl = randomElement.getAttribute("href");
      if (!targetUrl) targetUrl = generateUrlFromCard(randomElement);
      if (targetUrl) {
        if (targetUrl.startsWith("/")) targetUrl = `${self.location.origin}${targetUrl}`;
        self.open(targetUrl, "_blank")?.focus();
      } else {
        randomElement.click();
      }
      setLoading(false);
      setLabel("Pick Random");
    }, 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handlePick,
      disabled: loading,
      className: `
                h-10 px-3 ml-2 rounded-md
                inline-flex items-center justify-center gap-2
                transition-colors duration-200
                focus:outline-none focus:ring-1
                bg-[#1A1A1A] hover:bg-[#252525] focus:ring-[#404040]
                cursor-pointer shadow-sm
                ${loading ? "opacity-80 cursor-wait" : ""}
            `,
      title: "Pick a random item & open in new tab",
      children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffle, { size: 20, color: "currentColor", variant: "Outline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PoweredBySubtext, {})
        ] })
      ]
    }
  );
};
const SpinWheelButton = () => {
  const [status, setStatus] = reactExports.useState("idle");
  const handleSpin = () => {
    if (status === "loading") return;
    setStatus("loading");
    const titles = extractAllTitles();
    if (titles.length === 0) {
      alert("[Moctale+] No titles found. Please scroll down to load items first.");
      setStatus("idle");
      return;
    }
    const commaSeparated = titles.join(", ");
    navigator.clipboard.writeText(commaSeparated).then(() => {
      const win = self.open(
        "https://ahaslides.com/features/spinner-wheel/food-spinner-wheel/",
        "_blank"
      );
      win?.focus();
    }).catch(() => {
      alert("[Moctale+] Failed to copy titles to clipboard.");
    }).finally(() => {
      setStatus("idle");
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleSpin,
      className: "\n                h-10 px-3 ml-4 rounded-md\n                inline-flex items-center justify-center gap-2\n                transition-colors duration-200\n                focus:outline-none focus:ring-1\n                bg-[#1A1A1A] hover:bg-[#252525] focus:ring-[#404040]\n                cursor-pointer shadow-sm group\n            ",
      title: "Open Spin Wheel on this page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-transform duration-500 group-hover:rotate-180`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCircle, { size: 20, color: "currentColor", variant: "Outline" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: "Spin Wheel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PoweredBySubtext, {})
        ] })
      ]
    }
  );
};
const injectPickRandom = () => {
  const path = self.location.pathname;
  const isCollection = path.startsWith("/explore/collection/") || path.startsWith("/my-collections");
  if (!isCollection) return;
  const allButtons = Array.from(document.querySelectorAll("button"));
  const anchorButtons = allButtons.filter(
    (btn) => btn.getAttribute("aria-label") === "Save" || btn.textContent && btn.textContent.trim() === "Save"
  );
  const fallbackToolbar = document.querySelector("div.absolute.bottom-4.right-4");
  const headerToolbar = document.querySelector(".flex.items-center.gap-3.ml-auto");
  let targets = anchorButtons.length > 0 ? anchorButtons.map((b) => b.parentElement) : [fallbackToolbar, headerToolbar].filter(Boolean);
  targets.forEach((container, _) => {
    if (!container) return;
    fixCollectionLayout(container);
    if (container.querySelector(".moctale-plus-random-wrapper")) return;
    const rootEl = document.createElement("div");
    rootEl.className = "moctale-plus-random-wrapper";
    rootEl.style.display = "inline-flex";
    rootEl.style.alignItems = "center";
    if (container.querySelector(".moctale-plus-export-wrapper") || container.querySelector(".moctale-plus-tier-wrapper")) {
      rootEl.style.marginLeft = "4px";
    }
    const exportWrapper = container.querySelector("#moctale-plus-my-export-btn");
    if (exportWrapper) {
      exportWrapper.insertAdjacentElement("afterend", rootEl);
    } else {
      container.appendChild(rootEl);
    }
    clientExports.createRoot(rootEl).render(
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PickRandomButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpinWheelButton, {})
      ] })
    );
  });
};
const DEFAULT_RISK_KEYWORDS = [
  "die",
  "died",
  "dies",
  "death",
  "killed",
  "kill",
  "murder",
  "murdered",
  "ending",
  "climax",
  "twist",
  "reveal",
  "spoiler",
  "cameo",
  "post-credit",
  "dead",
  "alive",
  "survive",
  "betray",
  "traitor",
  "plot hole",
  "sacrifice",
  "villain",
  "killer",
  "secret",
  "final",
  // TESTING PURPOSE
  "deadly",
  "hijacks",
  "bollywood",
  "force",
  "poster",
  "indian",
  "reinvent",
  "understand",
  "hmm"
];
const TARGET_SELECTORS = [
  'div[class*="text-[16px]"] p',
  'div[class*="text-[14px]"] p',
  ".whitespace-pre-wrap",
  '[class*="text-[#C6C6C6]"][class*="text-sm"]',
  '.relative [class*="text-[#C6C6C6]"]'
];
let activeKeywords = [];
let observer$4 = null;
let scanTimeout = null;
const getRiskPattern = () => {
  const safeKeywords = activeKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp(`\\b(${safeKeywords.join("|")})\\b`, "gi");
};
const isTitleElement = (element) => {
  if (!element) return false;
  const tag = element.tagName;
  if (/^H[1-6]$/.test(tag)) return true;
  const cls = element.className;
  if (typeof cls === "string") {
    if (cls.includes("font-bold") && tag === "A") return true;
    if (cls.includes("text-xl") || cls.includes("text-2xl")) return true;
    if (cls.includes("font-semibold") && tag === "A") return true;
  }
  return false;
};
const shouldIgnoreElement = (element) => {
  if (!element) return false;
  return element.closest(".no-spoiler-shield") !== null;
};
const redactTextNode = (textNode) => {
  const text = textNode.nodeValue;
  if (!text || text.length < 15) return;
  const regex = getRiskPattern();
  if (!regex.test(text)) return;
  const parent = textNode.parentElement;
  if (!parent) return;
  if (shouldIgnoreElement(parent)) return;
  if (isTitleElement(parent) || parent.dataset.moctaleProcessed) return;
  parent.dataset.moctaleProcessed = "true";
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  let match;
  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    const beforeText = text.slice(lastIndex, match.index);
    if (beforeText) fragment.appendChild(document.createTextNode(beforeText));
    const span = document.createElement("span");
    span.className = "moctale-redacted-word";
    span.textContent = match[0];
    span.title = "Click to reveal word";
    span.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      span.classList.add("revealed");
      span.title = "";
    });
    fragment.appendChild(span);
    lastIndex = regex.lastIndex;
  }
  const remainingText = text.slice(lastIndex);
  if (remainingText) fragment.appendChild(document.createTextNode(remainingText));
  parent.replaceChild(fragment, textNode);
  if (!parent.classList.contains("moctale-spoiler-blur")) {
    parent.classList.add("moctale-spoiler-blur");
    const badge = document.createElement("div");
    badge.className = "moctale-spoiler-badge";
    badge.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moctale-spoiler-icon">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            <div class="moctale-spoiler-text-col">
                <span class="moctale-spoiler-title">Reveal Spoiler</span>
                <span class="moctale-spoiler-sub">Powered by Moctale Plus</span>
            </div>
        `;
    parent.appendChild(badge);
    parent.addEventListener("click", (e) => {
      if (e.target.classList.contains("moctale-redacted-word")) return;
      e.preventDefault();
      e.stopPropagation();
      parent.classList.remove("moctale-spoiler-blur");
      badge.remove();
    }, { once: true });
  }
};
const scanTargetZones = () => {
  if (activeKeywords.length === 0) return;
  const containers = [];
  TARGET_SELECTORS.forEach((selector) => {
    try {
      const found = document.querySelectorAll(selector);
      found.forEach((el) => containers.push(el));
    } catch (e) {
    }
  });
  if (containers.length === 0) return;
  containers.forEach((container) => {
    if (container.dataset.moctaleProcessed) return;
    if (shouldIgnoreElement(container)) return;
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    const nodesToProcess = [];
    while (walker.nextNode()) {
      nodesToProcess.push(walker.currentNode);
    }
    nodesToProcess.forEach(redactTextNode);
  });
};
const initSpoilerShield = (customKeywords) => {
  activeKeywords = customKeywords.map((k) => k.trim()).filter((k) => k.length > 0);
  if (activeKeywords.length === 0) activeKeywords = DEFAULT_RISK_KEYWORDS;
  console.log(`[Moctale+] Spoiler Shield: ACTIVE (${activeKeywords.length} keywords) 🛡️`);
  scanTargetZones();
  if (observer$4) observer$4.disconnect();
  observer$4 = new MutationObserver((mutations) => {
    if (!mutations.some((m) => m.addedNodes.length > 0)) return;
    if (scanTimeout) clearTimeout(scanTimeout);
    scanTimeout = setTimeout(scanTargetZones, 800);
  });
  observer$4.observe(document.body, { childList: true, subtree: true });
};
const stopSpoilerShield = () => {
  if (observer$4) observer$4.disconnect();
  observer$4 = null;
  document.querySelectorAll(".moctale-spoiler-blur").forEach((el) => el.classList.remove("moctale-spoiler-blur"));
  document.querySelectorAll(".moctale-spoiler-badge").forEach((el) => el.remove());
  document.querySelectorAll(".moctale-redacted-word").forEach((el) => el.classList.add("revealed"));
  console.log("[Moctale+] Spoiler Shield: STOPPED");
};
const isAllowedGridRoute = () => {
  try {
    const path = location.pathname;
    return path === "/explore" || path.startsWith("/explore/collection") || path.startsWith("/my-collections") || path.startsWith("/schedule") || location.href.includes("watchlist");
  } catch {
    return false;
  }
};
const isSchedulePath = () => {
  try {
    return location.pathname.startsWith("/schedule");
  } catch {
    return false;
  }
};
const isPosterContentGrid = (grid) => {
  let contentItem = grid.querySelector('a[href^="/content/"]');
  if (!contentItem) {
    contentItem = grid.querySelector('div[role="link"][aria-label]');
  }
  if (!contentItem) return false;
  const aspect = contentItem.querySelector('div[class*="aspect-"]');
  if (location.pathname.startsWith("/my-collections")) {
    if (aspect && aspect.className.includes("aspect-video")) return false;
    return true;
  }
  if (!aspect) return false;
  if (aspect.className.includes("aspect-video")) return false;
  return true;
};
const injectGridStyles = () => {
  if (document.getElementById("moctale-grid-css")) return;
  const style = document.createElement("style");
  style.id = "moctale-grid-css";
  style.innerHTML = `
        @media (min-width: 1024px) {

            /* ===============================
               1. GRID COLUMNS (Non-List Mode)
            =============================== */
            [data-moctale-content-grid="true"]:not([data-moctale-list-view="true"]) {
                grid-template-columns: repeat(var(--moctale-cols, 5), minmax(0, 1fr)) !important;
            }

            [data-moctale-schedule-grid="true"]:not([data-moctale-list-view="true"]) {
                 grid-template-columns: repeat(var(--moctale-cols, 5), minmax(0, 1fr)) !important;
            }

            /* ===============================
               2. LIST VIEW (Universal Fix)
            =============================== */
            
            /* A. The Main Grid Container */
            [data-moctale-list-view="true"] {
                display: flex !important;
                flex-direction: column !important;
                gap: 12px !important;
            }

            /* B. The Card Styling & Flex Layout */
            [data-moctale-list-view="true"] .group {
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                justify-content: flex-start !important; /* FORCE LEFT ALIGNMENT */
                gap: 20px !important;
                padding: 12px 16px !important;
                background-color: #171717 !important;
                border: 1px solid rgba(255,255,255,0.08) !important;
                border-radius: 12px !important;
                width: 100% !important;
                max-width: 100% !important;
            }

            /* C. INNER WRAPPER FIX (Crucial for Collections) */
            /* Force the inner div that holds content to take full width and align left */
            [data-moctale-list-view="true"] .group > div:has(div[class*="aspect-"]) {
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                justify-content: flex-start !important; /* FORCE LEFT ALIGNMENT */
                gap: 20px !important;
                width: 100% !important;
                padding: 0 !important;
            }

            /* D. POSTER SIZING & MARGIN RESET */
            [data-moctale-list-view="true"] .group div[class*="aspect-"] {
                width: 100px !important; 
                min-width: 100px !important;
                height: 150px !important;
                position: relative !important;
                overflow: hidden !important;
                flex-shrink: 0 !important; 
                border-radius: 8px !important;
                
                /* CRITICAL FIX: Override 'mx-auto' from original CSS */
                margin: 0 !important; 
                margin-right: 0 !important;
            }

            /* Ensure Image Fills Poster Container */
            [data-moctale-list-view="true"] .group img {
                position: absolute !important;
                inset: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
            }

            /* E. TEXT ALIGNMENT */
            /* Target text containers that are NOT the poster */
            [data-moctale-list-view="true"] .group > div:not([class*="aspect-"]),
            [data-moctale-list-view="true"] .group > div > div:not([class*="aspect-"]) {
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                justify-content: center !important;
                text-align: left !important;
                width: auto !important;
                margin: 0 !important; /* Reset margins */
            }

            [data-moctale-list-view="true"] h3,
            [data-moctale-list-view="true"] p {
                text-align: left !important;
                width: 100% !important;
            }
            
            [data-moctale-list-view="true"] h3 {
                font-size: 18px !important;
                margin-bottom: 6px !important;
            }
        }
    `;
  document.head.appendChild(style);
};
const identifyGrids = (isListView) => {
  const candidates = document.querySelectorAll("div.grid");
  candidates.forEach((grid) => {
    const isProcessed = grid.getAttribute("data-moctale-content-grid") === "true";
    const currentListState = grid.getAttribute("data-moctale-list-view") === "true";
    if (isProcessed && currentListState === isListView) return;
    if (!isPosterContentGrid(grid)) return;
    const cls = grid.className;
    if ((cls.includes("lg:grid-cols-") || cls.includes("xl:grid-cols-") || cls.includes("sm:grid-cols-")) && !cls.includes("grid-cols-[280px")) {
      grid.setAttribute("data-moctale-content-grid", "true");
      if (isListView) {
        grid.setAttribute("data-moctale-list-view", "true");
      } else {
        grid.removeAttribute("data-moctale-list-view");
      }
    }
  });
};
const identifyGridsSchedule = (isListView) => {
  document.querySelectorAll("div.grid").forEach((grid) => {
    const isProcessed = grid.getAttribute("data-moctale-content-grid") === "true";
    const currentListState = grid.getAttribute("data-moctale-list-view") === "true";
    if (isProcessed && currentListState === isListView) return;
    if (!isPosterContentGrid(grid)) return;
    grid.setAttribute("data-moctale-content-grid", "true");
    grid.setAttribute("data-moctale-schedule-grid", "true");
    if (isListView) {
      grid.setAttribute("data-moctale-list-view", "true");
    } else {
      grid.removeAttribute("data-moctale-list-view");
    }
  });
};
let currentColumns = 0;
const updateGridDensity = (columns) => {
  if (!isAllowedGridRoute()) return;
  currentColumns = columns;
  injectGridStyles();
  if (!columns || columns === 0) {
    document.documentElement.style.removeProperty("--moctale-cols");
    document.querySelectorAll("[data-moctale-content-grid]").forEach((el) => {
      el.removeAttribute("data-moctale-content-grid");
      el.removeAttribute("data-moctale-list-view");
      el.removeAttribute("data-moctale-schedule-grid");
    });
    return;
  }
  const isListView = columns === 1;
  if (!isListView) {
    document.documentElement.style.setProperty(
      "--moctale-cols",
      columns.toString()
    );
  } else {
    document.documentElement.style.removeProperty("--moctale-cols");
  }
  if (isSchedulePath()) {
    identifyGridsSchedule(isListView);
  } else {
    identifyGrids(isListView);
  }
};
const initGridDensity = (initialColumns) => {
  if (!isAllowedGridRoute()) return;
  currentColumns = initialColumns;
  updateGridDensity(initialColumns);
  const observer2 = new MutationObserver((mutations) => {
    const shouldUpdate = mutations.some(
      (m) => m.addedNodes.length > 0 || m.type === "attributes" && m.target instanceof Element && m.target.classList.contains("grid")
    );
    if (!shouldUpdate) return;
    const isListView = currentColumns === 1;
    if (isSchedulePath()) {
      identifyGridsSchedule(isListView);
    } else {
      identifyGrids(isListView);
    }
  });
  observer2.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  });
};
const CURRENT_VERSION = "1.9.5";
const REPO_OWNER = "010101-sans";
const REPO_NAME = "moctale-plus";
const DEFAULT_TEMPLATES = [
  {
    id: "t1",
    title: "Short & Punchy",
    content: "One Word: \n\nVerdict: "
  },
  {
    id: "t2",
    title: "Detailed Breakdown",
    content: "Story: \n\nActing: \n\nVisuals: \n\nMusic: \n\nOverall Verdict: "
  },
  {
    id: "t3",
    title: "Pros & Cons",
    content: "Pros:\n- \n- \n\nCons:\n- \n- \n\nFinal Thoughts: "
  },
  {
    id: "t4",
    title: "Comparative Review",
    content: "Quick Summary: \n\nCompared To: (similar titles) \n- Strengths vs peers: \n- Weaknesses vs peers: \n\nWhich to pick: \nVerdict: /10"
  },
  {
    id: "t5",
    title: "Spoiler-Free Summary",
    content: "Logline (no spoilers): \nWho will like it: \nWhat to expect (tone/pace): \nAvoid if: \nFinal Rating: /10"
  },
  {
    id: "t6",
    title: "Spoiler-Filled Deep Dive",
    content: "SPOILERS AHEAD ⚠️\nMajor Plot Points: \nDetailed Analysis: \nCharacter motivations revealed: \nHow it changes the story: \nFinal Verdict: "
  },
  {
    id: "t7",
    title: "Episode-by-Episode (Series)",
    content: "Episode 1: \nEpisode 2: \nEpisode 3: \n... \nSeason Summary & Arc Evaluation: \nSeason Score: /10"
  },
  {
    id: "t8",
    title: "Character Study",
    content: "Character: \nArc & Development: \nPerformance/Voice Work: \nKey Scenes: \nWhy they matter (theme): \nFinal Note: "
  },
  {
    id: "t9",
    title: "Cinematography Focus",
    content: "Framing & Composition: \nColor & Lighting: \nNotable Shots/Sequences: \nHow visuals serve story: \nVerdict (visuals): /10"
  },
  {
    id: "t10",
    title: "Soundtrack & Sound Design",
    content: "Score & Composer: \nSong choices: \nSoundscapes & effects: \nStandout auditory moments: \nImpact on mood: \nVerdict (audio): /10"
  },
  {
    id: "t11",
    title: "Animation / Art Style (Anime-friendly)",
    content: "Studio & Style: \nAnimation Quality (key frames, consistency): \nCharacter designs: \nAction & choreography: \nUse of color & effects: \nVerdict: "
  },
  {
    id: "t12",
    title: "Acting / Voice Acting",
    content: "Lead performances: \nSupporting cast: \nStandout lines/moments: \nChemistry & delivery: \nWeak performances: \nActing Score: /10"
  },
  {
    id: "t13",
    title: "Pacing & Structure",
    content: "Opening Act: \nMiddle (momentum): \nClimax & resolution: \nPacing issues or strengths: \nRecommended cut/trim notes: \nVerdict: "
  },
  {
    id: "t14",
    title: "Themes & Messaging",
    content: "Primary themes: \nHow they are explored: \nSubtext & symbolism: \nWhat it says about culture/society: \nTakeaway: \nVerdict: "
  },
  {
    id: "t15",
    title: "Director’s Analysis",
    content: "Director: \nSignature choices: \nRisky/directorial moves: \nWhat worked/won't work: \nDirector vs material: \nFinal Assessment: "
  },
  {
    id: "t16",
    title: "Adaptation Review (Book/Game → Screen)",
    content: "Source Material: \nFaithful elements: \nChanges and why they matter: \nFans will like/dislike: \nAdaptation Verdict: "
  },
  {
    id: "t17",
    title: "Fan vs Critic Perspective",
    content: "Fan Take: \nCritical Take: \nPoints of agreement: \nPoints of contention: \nWhich view is closer to reality: \nFinal Verdict: "
  },
  {
    id: "t18",
    title: "Numeric Breakdown (Category Scores)",
    content: "Story: /10\nActing: /10\nVisuals: /10\nMusic: /10\nPacing: /10\nRewatchability: /10\nFinal Score (average): /10\nShort Justification: "
  },
  {
    id: "t19",
    title: "One-Paragraph Review",
    content: "One concise paragraph that summarizes plot, strengths, weaknesses, and final rating. \n\nScore: /10"
  },
  {
    id: "t20",
    title: "Tweet-Length (Micro Review)",
    content: '140/280-char punchy summary + hashtag(s) + score. \n\nExample: "_____ — /10 #Review #NowWatching"'
  },
  {
    id: "t21",
    title: "Listicle / Top Moments",
    content: "Top 5 Moments:\n1. \n2. \n3. \n4. \n5. \nWhy they matter: \nOverall Score: /10"
  },
  {
    id: "t22",
    title: "Emotional Impact",
    content: "Emotional highs: \nEmotional lows: \nScenes that hit hardest: \nEmotional honesty/authenticity: \nPersonal resonance: \nVerdict: "
  },
  {
    id: "t23",
    title: "Worldbuilding & Lore",
    content: "World rules & consistency: \nDepth of lore: \nIntegration with plot/characters: \nFavorite world detail: \nPotential for expansion: \nVerdict: "
  },
  {
    id: "t24",
    title: "Rewatchability Guide",
    content: "Why rewatch (what you’ll catch): \nBest rewatch scenes: \nHow often to rewatch: \nWho should rewatch: \nRewatch Score: /10"
  },
  {
    id: "t25",
    title: "Accessibility & Content Warnings",
    content: "Content Warnings (triggers): \nAccessibility features (subs, AD, captions): \nViewer guidance: \nSuitability by age: \nFinal Note: "
  },
  {
    id: "t26",
    title: "Easter Eggs & References",
    content: "Notable references: \nHidden details to look for: \nCall-backs to other works: \nImplication/speculation: \nFun Rating: /10"
  },
  {
    id: "t27",
    title: "Technical / Production Notes",
    content: "Budget signals: \nPractical effects vs CGI: \nEditing & color grade: \nProduction problems (visible/rumored): \nTechnical Score: /10"
  },
  {
    id: "t28",
    title: "Bingeability / Season Flow",
    content: "How it builds across episodes: \nCliffhangers & hooks: \nPacing for binge vs weekly: \nDrop-off risk points: \nBingeability Score: /10"
  },
  {
    id: "t29",
    title: "Recommendation / Who Should Watch",
    content: "Recommended for (audience): \nNot recommended for: \nSimilar titles to try instead: \nFinal Recommendation: (Yes / Maybe / No) + Score"
  },
  {
    id: "t30",
    title: "Retrospective & Legacy",
    content: "Context at release (year, reception): \nHow it aged: \nInfluence on genre/industry: \nShould it be rediscovered? \nLegacy Score: /10"
  }
];
const defaultSettings = {
  activeTheme: "default",
  enableLinkifier: true,
  enableDiscussions: true,
  enablePlatforms: true,
  enableCreative: true,
  enableCollectionExport: true,
  enableBoxOffice: true,
  enableContextMenu: true,
  enableShortcuts: true,
  enableTierList: true,
  enablePickRandom: true,
  enableSpoilerShield: false,
  spoilerKeywords: "",
  enableScrollSaver: false,
  gridColumns: 0,
  enableReviewTemplates: true,
  reviewTemplates: [],
  enableEpisodeTracker: true,
  enableSearchPlus: true,
  enablePrivateNotes: true,
  enableImagePreview: true,
  enableWatchStatus: true,
  enablePerformanceMax: true,
  enableImageDownloader: true
};
const useSettings = () => {
  const [settings, setSettings] = reactExports.useState(defaultSettings);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadData = () => {
      if (typeof chrome !== "undefined" && chrome.storage) {
        chrome.storage.local.get(null, (items) => {
          let rawStored = { ...items };
          if (items.settings) {
            rawStored = { ...items, ...items.settings };
          }
          const stored = rawStored;
          const needsUpdate = !stored.reviewTemplates || stored.reviewTemplates.length === 0 || stored.reviewTemplates.length <= 3 && stored.reviewTemplates[0].id === "t1";
          if (needsUpdate) {
            stored.reviewTemplates = DEFAULT_TEMPLATES;
            stored.enableReviewTemplates = true;
            chrome.storage.local.set({
              reviewTemplates: DEFAULT_TEMPLATES,
              enableReviewTemplates: true
            });
          }
          setSettings((prev) => ({ ...prev, ...stored }));
          setLoading(false);
        });
      } else {
        setSettings({ ...defaultSettings, reviewTemplates: DEFAULT_TEMPLATES });
        setLoading(false);
      }
    };
    loadData();
  }, []);
  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.set({ [key]: value });
    }
  };
  return { settings, updateSetting, loading };
};
const TemplateIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-[#8b5cf6]", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] });
const ChevronDown = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) });
const PlusIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14" })
] });
const EditIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }) });
const TrashIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
] });
const ReviewDropdown = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [templates, setTemplates] = reactExports.useState(DEFAULT_TEMPLATES);
  const [hoveredTemplate, setHoveredTemplate] = reactExports.useState(null);
  const dropdownRef = reactExports.useRef(null);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [draftTitle, setDraftTitle] = reactExports.useState("");
  const [draftContent, setDraftContent] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get(["reviewTemplates"], (result) => {
        const data = result;
        if (data.reviewTemplates && Array.isArray(data.reviewTemplates) && data.reviewTemplates.length > 0) {
          setTemplates(data.reviewTemplates);
        }
      });
    }
  }, []);
  const persistTemplates = (newTemplates) => {
    setTemplates(newTemplates);
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.set({ reviewTemplates: newTemplates });
    }
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setEditingId(null);
        setHoveredTemplate(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const applyTemplate = (content) => {
    if (editingId) return;
    const textareas = document.querySelectorAll('textarea[placeholder*="Write your review"]');
    if (textareas.length === 0) return;
    const ta = textareas[0];
    const prefix = ta.value.length > 0 ? "\n\n" : "";
    const newText = ta.value + prefix + content;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(self.HTMLTextAreaElement.prototype, "value")?.set;
    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(ta, newText);
    } else {
      ta.value = newText;
    }
    ta.dispatchEvent(new Event("input", { bubbles: true }));
    ta.focus();
    setIsOpen(false);
    setHoveredTemplate(null);
  };
  const startCreate = () => {
    setEditingId("new");
    setDraftTitle("");
    setDraftContent("");
    setHoveredTemplate(null);
  };
  const startEdit = (t, e) => {
    e.stopPropagation();
    setEditingId(t.id);
    setDraftTitle(t.title);
    setDraftContent(t.content);
    setHoveredTemplate(null);
  };
  const saveEdit = () => {
    if (!draftTitle.trim() || !draftContent.trim()) return;
    if (editingId === "new") {
      const newT = {
        id: Date.now().toString(),
        title: draftTitle,
        content: draftContent
      };
      persistTemplates([...templates, newT]);
    } else {
      const updated = templates.map(
        (t) => t.id === editingId ? { ...t, title: draftTitle, content: draftContent } : t
      );
      persistTemplates(updated);
    }
    setEditingId(null);
  };
  const cancelEdit = () => {
    setEditingId(null);
  };
  const deleteTemplate = () => {
    if (editingId && editingId !== "new") {
      if (confirm("Delete this template?")) {
        const updated = templates.filter((t) => t.id !== editingId);
        persistTemplates(updated);
        setEditingId(null);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-start gap-1 mb-4 mt-2 font-sans", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: `
                    flex items-center gap-2 px-4 py-2 
                    bg-[#121212]/90 backdrop-blur-xl 
                    border transition-all duration-300 group z-10
                    text-xs font-medium rounded-full 
                    ${isOpen ? "border-[#8b5cf6] shadow-[0_0_16px_rgba(139,92,246,0.32)] bg-[#1a1a1a] text-white" : "border-white/10 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)] text-white/90 hover:bg-[#1a1a1a]"}
                `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateIcon, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:text-[#e9d8fd] transition-colors no-spoiler-shield", children: "Review Templates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-transform duration-300 text-white/50 group-hover:text-[#8b5cf6] ${isOpen ? "rotate-180" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {}) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 pl-3 opacity-60 hover:opacity-100 transition-opacity", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/30 no-spoiler-shield", children: "Powered by" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/010101-sans/moctale-plus",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-[10px] font-medium text-white/50 hover:text-[#8b5cf6] underline decoration-[#8b5cf6]/30 hover:decoration-[#8b5cf6] transition-all flex items-center gap-0.5 no-spoiler-shield",
          children: "Moctale Plus"
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-[calc(100%-18px)] left-0 mt-3 w-[600px] bg-[#0A0A0A] border border-white/10 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl ring-1 ring-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-white/5 bg-gradient-to-r from-[#9f7aea]/10 to-[#6d28d9]/10 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-[#e9d8fd]/70 uppercase tracking-widest flex items-center gap-2 no-spoiler-shield", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_rgba(139,92,246,0.8)]" }),
          editingId ? editingId === "new" ? "New Template" : "Edit Template" : "Select Template"
        ] }),
        !editingId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: startCreate,
            className: "flex items-center gap-1.5 px-2 py-1 bg-[#8b5cf6]/10 hover:bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 rounded text-[10px] text-[#e9d8fd] transition-all hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] no-spoiler-shield",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add New" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `p-3 custom-scrollbar bg-[#0A0A0A] overflow-y-auto transition-opacity duration-200 ${editingId ? "opacity-30 pointer-events-none grayscale" : "opacity-100"}`,
            style: { maxHeight: "350px" },
            onMouseLeave: () => setHoveredTemplate(null),
            children: templates.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "\n                                                group flex flex-col h-full p-3\n                                                bg-white/5 border border-white/5 rounded-lg \n                                                hover:bg-[#161616] hover:border-[#8b5cf6]/40 hover:shadow-[inset_0_0_20px_rgba(139,92,246,0.1)]\n                                                cursor-pointer transition-all duration-200 relative overflow-hidden\n                                            ",
                onClick: () => applyTemplate(t.content),
                onMouseEnter: () => setHoveredTemplate(t),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => startEdit(t, e),
                      className: "absolute top-1.5 right-1.5 p-1.5 text-white/20 hover:text-[#8b5cf6] hover:bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all z-20",
                      title: "Edit",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditIcon, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-white/80 group-hover:text-[#e9d8fd] mb-1.5 line-clamp-1 relative z-10 no-spoiler-shield pr-4", title: t.title, children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/30 group-hover:text-white/50 font-mono line-clamp-3 leading-relaxed break-words relative z-10 no-spoiler-shield", children: t.content.substring(0, 60) })
                ]
              },
              t.id
            )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col items-center justify-center text-center opacity-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs font-medium text-white/60 no-spoiler-shield", children: "No templates found." })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border-t border-white/5 p-4 min-h-[160px] flex flex-col justify-start relative transition-colors duration-300 ${editingId ? "bg-[#151515]" : "bg-[#0f0f0f]"}`, children: editingId ? (
          // --- EDITOR MODE ---
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: draftTitle,
                  onChange: (e) => setDraftTitle(e.target.value),
                  placeholder: "Template Title",
                  className: "flex-1 bg-black/40 border border-white/10 rounded px-2 py-1.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/20 transition-all",
                  autoFocus: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: editingId !== "new" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: deleteTemplate, className: "p-2 text-white/30 hover:text-red-400 bg-white/5 hover:bg-red-500/10 rounded border border-white/5 transition-all", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrashIcon, {}) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: draftContent,
                onChange: (e) => setDraftContent(e.target.value),
                placeholder: "Write your template structure here...",
                className: "flex-1 bg-black/40 border border-white/10 rounded p-2 text-xs text-white/80 resize-none focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/20 font-mono custom-scrollbar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: cancelEdit, className: "px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/40 hover:text-white transition-colors", children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveEdit, className: "flex items-center gap-1.5 px-4 py-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded text-[10px] font-bold uppercase tracking-wide shadow-lg shadow-[#8b5cf6]/20 transition-all active:scale-95", children: "Save" })
            ] })
          ] })
        ) : (
          // --- PREVIEW MODE ---
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#8b5cf6]/90 mb-2 uppercase font-bold tracking-wider flex items-center gap-2 no-spoiler-shield", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ] }),
              "Live Preview",
              hoveredTemplate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/40 ml-auto normal-case font-medium truncate max-w-[300px] flex items-center gap-2 no-spoiler-shield", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-white/20" }),
                hoveredTemplate.title
              ] })
            ] }),
            hoveredTemplate ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/80 whitespace-pre-wrap font-mono leading-relaxed bg-[#050505] p-3 rounded-lg border border-white/5 h-full overflow-y-auto custom-scrollbar animate-in fade-in duration-200 select-none shadow-inner no-spoiler-shield", children: hoveredTemplate.content }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-white/20 italic gap-2 no-spoiler-shield", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "Hover over a card to preview. Click to use." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-50", children: "Click the pencil icon to edit." })
            ] })
          ] })
        ) })
      ] })
    ] })
  ] });
};
const initReviewTemplates = () => {
  const observer2 = new MutationObserver((_mutations) => {
    const textarea = document.querySelector('textarea[placeholder*="Write your review"]');
    if (textarea) {
      const containerDiv = textarea.closest(".border-b");
      if (containerDiv && containerDiv.parentElement) {
        if (containerDiv.parentElement.querySelector(".moctale-review-templates")) return;
        const appContainer = document.createElement("div");
        appContainer.className = "moctale-review-templates w-full px-1";
        containerDiv.parentElement.insertBefore(appContainer, containerDiv);
        clientExports.createRoot(appContainer).render(/* @__PURE__ */ jsxRuntimeExports.jsx(ReviewDropdown, {}));
      }
    }
  });
  observer2.observe(document.body, { childList: true, subtree: true });
};
const SeasonTracker = ({
  showId,
  seasonIndex,
  totalEpisodes
}) => {
  const [watched, setWatched] = reactExports.useState([]);
  const progress = reactExports.useMemo(() => {
    return totalEpisodes > 0 ? Math.round(watched.length / totalEpisodes * 100) : 0;
  }, [watched, totalEpisodes]);
  const storageCacheRef = reactExports.useRef({});
  const isMountedRef = reactExports.useRef(false);
  const longPressTimerRef = reactExports.useRef(null);
  const longPressFiredRef = reactExports.useRef(false);
  const LONG_PRESS_DURATION = 300;
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    chrome.storage.local.get(["episodeTracker"], (result) => {
      const data = result.episodeTracker || {};
      storageCacheRef.current = data;
      if (data[showId] && data[showId][seasonIndex]) {
        setWatched(data[showId][seasonIndex]);
      }
    });
    const onChange = (changes, areaName) => {
      if (areaName === "local" && changes.episodeTracker) {
        const newVal = changes.episodeTracker.newValue || {};
        storageCacheRef.current = newVal;
        if (newVal[showId] && newVal[showId][seasonIndex]) {
          setWatched(newVal[showId][seasonIndex]);
        } else {
          setWatched([]);
        }
      }
    };
    chrome.storage.onChanged?.addListener(onChange);
    return () => {
      isMountedRef.current = false;
      chrome.storage.onChanged?.removeListener(onChange);
      if (longPressTimerRef.current) self.clearTimeout(longPressTimerRef.current);
    };
  }, [showId, seasonIndex]);
  const persist = (newWatched) => {
    const data = storageCacheRef.current || {};
    if (!data[showId]) data[showId] = {};
    data[showId][seasonIndex] = newWatched;
    storageCacheRef.current = data;
    chrome.storage.local.set({ episodeTracker: data });
  };
  const toggleEpisode = (epNum) => {
    const isWatched = watched.includes(epNum);
    const newWatched = isWatched ? watched.filter((e) => e !== epNum) : [...watched, epNum];
    setWatched(newWatched);
    persist(newWatched);
  };
  const toggleAll = () => {
    if (watched.length === totalEpisodes) {
      setWatched([]);
      persist([]);
    } else {
      const all = Array.from({ length: totalEpisodes }, (_, i) => i + 1);
      setWatched(all);
      persist(all);
    }
  };
  const handleEpisodeMouseDown = (ep) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    longPressFiredRef.current = false;
    if (longPressTimerRef.current) self.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = self.setTimeout(() => {
      const range = Array.from({ length: ep }, (_, i) => i + 1);
      setWatched(range);
      persist(range);
      longPressFiredRef.current = true;
      longPressTimerRef.current = null;
    }, LONG_PRESS_DURATION);
  };
  const handleEpisodeMouseUp = (ep) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (longPressTimerRef.current) {
      self.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    if (!longPressFiredRef.current) {
      toggleEpisode(ep);
    }
    longPressFiredRef.current = false;
  };
  const handleEpisodeMouseLeave = () => {
    if (longPressTimerRef.current) {
      self.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    longPressFiredRef.current = false;
  };
  const handleEpisodeTouchStart = (ep) => (e) => {
    e.stopPropagation();
    longPressFiredRef.current = false;
    if (longPressTimerRef.current) self.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = self.setTimeout(() => {
      const range = Array.from({ length: ep }, (_, i) => i + 1);
      setWatched(range);
      persist(range);
      longPressFiredRef.current = true;
      longPressTimerRef.current = null;
    }, LONG_PRESS_DURATION);
  };
  const handleEpisodeTouchEnd = (ep) => (e) => {
    e.stopPropagation();
    if (longPressTimerRef.current) {
      self.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    if (!longPressFiredRef.current) toggleEpisode(ep);
    longPressFiredRef.current = false;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-3 mb-2 w-full animate-in fade-in slide-in-from-top-2 duration-300 border-t border-white/5 pt-3 cursor-default",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", style: { paddingInline: "2px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-bold uppercase tracking-wider text-[#E2E2E2]", children: "Tracker" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                toggleAll();
              },
              className: "inline-flex items-center gap-2 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all",
              title: watched.length === totalEpisodes ? "Reset" : "Mark All",
              children: watched.length === totalEpisodes ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshLeftSquare, { size: "16", color: "#ffffff", variant: "Linear" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reset" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TickSquare, { size: "16", color: "#ffffff", variant: "Linear" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mark All" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#121212] border border-white/5 rounded-lg p-2.5 mb-3 flex flex-col gap-2 shadow-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-white/60 uppercase tracking-wide", children: "Season Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-white font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#8b5cf6]", children: watched.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: totalEpisodes })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]",
              style: {
                width: `${progress}%`,
                background: "linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%)"
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid gap-1.5 mb-5",
            style: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
            children: Array.from({ length: totalEpisodes }, (_, i) => i + 1).map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onMouseDown: handleEpisodeMouseDown(ep),
                onMouseUp: handleEpisodeMouseUp(ep),
                onMouseLeave: handleEpisodeMouseLeave,
                onTouchStart: handleEpisodeTouchStart(ep),
                onTouchEnd: handleEpisodeTouchEnd(ep),
                className: `
                            h-6 w-full rounded md:rounded-md flex items-center justify-center text-[10px] font-bold font-mono
                            transition-all duration-200 border select-none
                            ${watched.includes(ep) ? "bg-[#1a1a1a] border-green-500 text-green-500 shadow-[0_0_6px_rgba(34,197,94,0.2)]" : "bg-[#0A0A0A] border-white/10 text-white/40 hover:border-white/30 hover:text-white hover:bg-white/5"}
                        `,
                title: `Toggle Episode ${ep}`,
                children: ep
              },
              ep
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
};
const initEpisodeTracker = () => {
  if (!self.location.pathname.startsWith("/content/")) return;
  chrome.storage.local.get(["enableEpisodeTracker"], (result) => {
    if (result.enableEpisodeTracker === false) return;
    let timeoutId;
    const observer2 = new MutationObserver(() => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const seasonCards = document.querySelectorAll(
          'div[role="button"][aria-label^="View details for"]'
        );
        seasonCards.forEach((card) => {
          if (card.querySelector(".moctale-episode-tracker")) return;
          let totalEpisodes = 0;
          const episodeTextNode = Array.from(card.querySelectorAll("span")).find(
            (span) => span.textContent?.includes("Episodes")
          );
          if (episodeTextNode) {
            const epMatch = episodeTextNode.textContent?.match(/(\d+)\s*Episodes/);
            if (epMatch) totalEpisodes = parseInt(epMatch[1]);
          }
          if (totalEpisodes === 0) return;
          const cardEl = card;
          cardEl.style.alignSelf = "flex-start";
          cardEl.style.height = "auto";
          cardEl.style.minHeight = "auto";
          cardEl.classList.remove("h-[156px]", "min-w-[300px]", "max-w-[300px]");
          cardEl.style.maxWidth = "100%";
          cardEl.style.minWidth = "300px";
          cardEl.style.maxWidth = "300px";
          const pathParts = self.location.pathname.split("/");
          const showId = pathParts[pathParts.length - 1];
          const ariaLabel = card.getAttribute("aria-label") || "";
          let seasonIndex = "";
          const actionBtn = card.querySelector('button[aria-label*="season"]');
          if (actionBtn) {
            const btnLabel = actionBtn.getAttribute("aria-label") || "";
            const btnMatch = btnLabel.match(/season (\d+)/i);
            if (btnMatch) seasonIndex = btnMatch[1];
          }
          if (!seasonIndex) {
            const mainMatch = ariaLabel.match(/Season (\d+)/i);
            if (mainMatch) seasonIndex = mainMatch[1];
          }
          if (!seasonIndex) {
            const titleEl = card.querySelector(".text-lg.font-semibold");
            if (titleEl && titleEl.textContent) {
              const text = titleEl.textContent.trim();
              const titleMatch = text.match(/Season (\d+)/i);
              if (titleMatch) {
                seasonIndex = titleMatch[1];
              } else {
                seasonIndex = text;
              }
            }
          }
          if (!seasonIndex) seasonIndex = `unknown_${Math.random().toString(36).substr(2, 5)}`;
          const container = document.createElement("div");
          container.className = "moctale-episode-tracker w-full px-1 pb-1";
          card.appendChild(container);
          const root = clientExports.createRoot(container);
          root.render(
            /* @__PURE__ */ jsxRuntimeExports.jsx(SeasonTracker, { showId, seasonIndex, totalEpisodes })
          );
        });
      }, 500);
    });
    observer2.observe(document.body, { childList: true, subtree: true });
  });
};
class StickerOverlay {
  container;
  stickers = [];
  isDragging = false;
  isResizing = false;
  currentElement = null;
  offset = { x: 0, y: 0 };
  startResize = { x: 0, y: 0, width: 0, height: 0 };
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "moctale-plus-sticker-layer";
    Object.assign(this.container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "10000",
      pointerEvents: "none",
      overflow: "hidden"
    });
    document.body.appendChild(this.container);
    this.loadStickers();
    this.initGlobalListeners();
    this.initDropZone();
  }
  addSticker(src) {
    const sticker = {
      id: `sticker_${Date.now()}`,
      src,
      x: 100,
      y: 100,
      width: 150,
      height: 150
      // Initial aspect ratio might adjust
    };
    this.stickers.push(sticker);
    this.renderSticker(sticker);
    this.save();
  }
  clearAll() {
    this.stickers = [];
    this.container.innerHTML = "";
    this.save();
  }
  renderSticker(data) {
    const wrapper = document.createElement("div");
    wrapper.id = data.id;
    wrapper.className = "sticker-wrapper";
    Object.assign(wrapper.style, {
      position: "absolute",
      left: `${data.x}px`,
      top: `${data.y}px`,
      width: `${data.width}px`,
      height: "auto",
      // Auto height preserves aspect ratio initially
      cursor: "grab",
      pointerEvents: "auto",
      userSelect: "none",
      display: "inline-block"
    });
    const img = document.createElement("img");
    img.src = data.src;
    img.draggable = false;
    Object.assign(img.style, {
      width: "100%",
      height: "100%",
      display: "block",
      pointerEvents: "none",
      // Pass clicks to wrapper
      filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
    });
    const handle = document.createElement("div");
    Object.assign(handle.style, {
      position: "absolute",
      bottom: "0",
      right: "0",
      width: "15px",
      height: "15px",
      cursor: "nwse-resize",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "50% 0 0 0",
      opacity: "0",
      // Hidden until hover
      transition: "opacity 0.2s"
    });
    wrapper.addEventListener("mouseenter", () => handle.style.opacity = "1");
    wrapper.addEventListener("mouseleave", () => handle.style.opacity = "0");
    wrapper.addEventListener("mousedown", (e) => {
      if (e.target === handle) return;
      if (e.button !== 0) return;
      this.isDragging = true;
      this.currentElement = wrapper;
      const rect = wrapper.getBoundingClientRect();
      this.offset.x = e.clientX - rect.left;
      this.offset.y = e.clientY - rect.top;
      wrapper.style.cursor = "grabbing";
      wrapper.style.zIndex = "10001";
    });
    handle.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      this.isResizing = true;
      this.currentElement = wrapper;
      this.startResize = {
        x: e.clientX,
        y: e.clientY,
        width: wrapper.offsetWidth,
        height: wrapper.offsetHeight
      };
    });
    wrapper.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (confirm("Remove sticker?")) {
        wrapper.remove();
        this.stickers = this.stickers.filter((s) => s.id !== data.id);
        this.save();
      }
    });
    wrapper.appendChild(img);
    wrapper.appendChild(handle);
    this.container.appendChild(wrapper);
  }
  initGlobalListeners() {
    self.addEventListener("mousemove", (e) => {
      if (!this.currentElement) return;
      if (this.isDragging) {
        e.preventDefault();
        const x = e.clientX - this.offset.x;
        const y = e.clientY - this.offset.y;
        this.currentElement.style.left = `${x}px`;
        this.currentElement.style.top = `${y}px`;
      }
      if (this.isResizing) {
        e.preventDefault();
        const dx = e.clientX - this.startResize.x;
        const newWidth = Math.max(50, this.startResize.width + dx);
        this.currentElement.style.width = `${newWidth}px`;
      }
    });
    self.addEventListener("mouseup", () => {
      if ((this.isDragging || this.isResizing) && this.currentElement) {
        this.saveState(this.currentElement);
      }
      this.isDragging = false;
      this.isResizing = false;
      if (this.currentElement) {
        this.currentElement.style.cursor = "grab";
        this.currentElement.style.zIndex = "";
        this.currentElement = null;
      }
    });
  }
  // --- DRAG & DROP FROM DESKTOP ---
  initDropZone() {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.body.addEventListener(eventName, (e) => e.preventDefault(), false);
    });
    document.body.addEventListener("drop", (e) => {
      e.preventDefault();
      const dt = e.dataTransfer;
      if (!dt) return;
      if (dt.files && dt.files.length > 0) {
        Array.from(dt.files).forEach((file) => {
          if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => this.addSticker(reader.result);
            reader.readAsDataURL(file);
          }
        });
      } else {
        const html = dt.getData("text/html");
        if (html) {
          const match = html.match(/src="?([^"\s]+)"?\s*/);
          if (match && match[1]) {
            this.addSticker(match[1]);
          }
        } else {
          const url = dt.getData("text/uri-list");
          if (url) this.addSticker(url);
        }
      }
    });
  }
  saveState(el) {
    const sticker = this.stickers.find((s) => s.id === el.id);
    if (sticker) {
      sticker.x = parseInt(el.style.left || "0");
      sticker.y = parseInt(el.style.top || "0");
      sticker.width = parseInt(el.style.width || "150");
      this.save();
    }
  }
  save() {
    localStorage.setItem("moctale_plus_stickers", JSON.stringify(this.stickers));
  }
  loadStickers() {
    const data = localStorage.getItem("moctale_plus_stickers");
    if (data) {
      try {
        this.stickers = JSON.parse(data);
        this.stickers.forEach((s) => this.renderSticker(s));
      } catch (e) {
        console.error("Sticker load error", e);
      }
    }
  }
}
const SEARCH_PLATFORMS = [
  { label: "Google", id: "google", url: "https://www.google.com/search?q=" },
  { label: "IMDb", id: "imdb", url: "https://www.imdb.com/find/?q=" },
  { label: "TMDB", id: "themoviedatabase", url: "https://www.themoviedb.org/search?query=" },
  { label: "Letterboxd", id: "letterboxd", url: "https://letterboxd.com/search/" },
  { label: "Rotten Tomatoes", id: "rottentomatoes", url: "https://www.rottentomatoes.com/search?search=" },
  { label: "Metacritic", id: "metacritic", url: "https://www.metacritic.com/search/" },
  { label: "MyAnimeList", id: "myanimelist", url: "https://myanimelist.net/search/all?q=" },
  { label: "AniList", id: "anilist", url: "https://anilist.co/search/anime?search=" },
  { label: "Kitsu", id: "kitsu", url: "https://kitsu.io/anime?text=" },
  { label: "Wikipedia", id: "wikipedia", url: "https://en.wikipedia.org/w/index.php?search=" },
  { label: "Fandom", id: "fandom", url: "https://community.fandom.com/wiki/Special:Search?query=" },
  { label: "TV Tropes", id: "tvtropes", url: "https://tvtropes.org/pmwiki/search_result.php?q=" }
];
let observer$3 = null;
const initSearchPlus = () => {
  if (observer$3) return;
  console.log("[SearchPlus] Initializing...");
  observer$3 = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.addedNodes.length) {
        const overlay = document.querySelector('div[data-search-overlay="true"]');
        if (overlay && !overlay.getAttribute("data-moctale-plus-init")) {
          overlay.setAttribute("data-moctale-plus-init", "true");
          setTimeout(() => safeInject(overlay), 50);
        }
      }
    }
  });
  observer$3.observe(document.body, { childList: true });
  const existing = document.querySelector('div[data-search-overlay="true"]');
  if (existing && !existing.getAttribute("data-moctale-plus-init")) {
    existing.setAttribute("data-moctale-plus-init", "true");
    safeInject(existing);
  }
};
const stopSearchPlus = () => {
  if (observer$3) {
    observer$3.disconnect();
    observer$3 = null;
  }
  document.querySelectorAll(".moctale-plus-search-element").forEach((el) => el.remove());
  const overlay = document.querySelector('div[data-search-overlay="true"]');
  if (overlay) {
    overlay.removeAttribute("data-moctale-plus-init");
  }
};
const safeInject = (overlay) => {
  try {
    const input = overlay.querySelector('input[type="text"]');
    if (!input) return;
    injectPlatformBar(input);
  } catch (err) {
    console.error("[SearchPlus] Injection failed:", err);
  }
};
const injectPlatformBar = (input) => {
  const headerContainer = input.parentElement?.parentElement;
  if (!headerContainer) return;
  const bar = document.createElement("div");
  bar.className = "moctale-plus-search-element grid grid-cols-6 gap-2 mt-3 animate-fade-in px-0 w-full";
  bar.style.animation = "fadeIn 0.3s ease-out";
  SEARCH_PLATFORMS.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "flex items-center gap-2 px-2 py-2 bg-[#171717] hover:bg-[#252833] border border-[#353945] hover:border-[#E2E2E2] rounded-lg transition-all group w-full overflow-hidden";
    btn.title = `Search on ${p.label}`;
    const iconSpan = document.createElement("span");
    iconSpan.className = "flex-shrink-0 flex items-center justify-center text-[#A0A0A0] group-hover:text-white transition-colors";
    const root = clientExports.createRoot(iconSpan);
    root.render(getIcon(p.id));
    const labelSpan = document.createElement("span");
    labelSpan.className = "text-[12px] font-medium text-[#A0A0A0] group-hover:text-white truncate";
    labelSpan.innerText = p.label;
    btn.appendChild(iconSpan);
    btn.appendChild(labelSpan);
    btn.onclick = () => {
      const query = input.value.trim();
      if (!query) {
        input.focus();
        return;
      }
      self.open(`${p.url}${encodeURIComponent(query)}`, "_blank");
    };
    bar.appendChild(btn);
  });
  const footer = document.createElement("div");
  footer.className = "moctale-plus-search-element w-full pt-3 mt-1 text-right";
  footer.innerHTML = `
    <p class="text-[11px] text-[#555]">
      Powered by 
      <a href="https://github.com/010101-sans/moctale-plus" target="_blank" rel="noreferrer" class="hover:text-[#888] underline decoration-dotted transition-colors">Moctale Plus</a>
      by 
      <a href="https://github.com/010101-sans" target="_blank" rel="noreferrer" class="hover:text-[#888] underline decoration-dotted transition-colors">010101-sans</a>
    </p>
  `;
  headerContainer.appendChild(bar);
  headerContainer.appendChild(footer);
};
const INJECTED_STYLES = `
  .mn-container {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
    animation: mn-fade-in 0.3s ease-out;
    font-family: 'Inter', sans-serif;
  }
  .mn-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0 4px;
  }
  .mn-title-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .mn-icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(199, 118, 255, 0.1);
    border: 1px solid rgba(199, 118, 255, 0.2);
    box-shadow: 0 0 10px rgba(199, 118, 255, 0.1);
  }
  .mn-title {
    font-size: 18px;
    font-weight: 600;
    color: #E2E2E2;
    margin: 0;
    line-height: 1;
  }
  .mn-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .mn-badge-text {
    font-size: 9px;
    color: #71717a;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .mn-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 99px;
    background: #121212;
    border: 1px solid #252833;
    transition: all 0.3s ease;
  }
  .mn-status-text {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .mn-editor-wrapper {
    position: relative;
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  .mn-textarea {
    width: 100%;
    min-height: 140px;
    background-color: #171717;
    color: #E2E2E2;
    font-size: 14px;
    line-height: 1.6;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #252833;
    outline: none;
    resize: vertical;
    transition: all 0.3s ease;
    box-sizing: border-box;
    display: block;
  }
  .mn-textarea:hover {
    background-color: #1a1a1a;
    border-color: #353945;
  }
  .mn-textarea:focus {
    background-color: #121212;
    border-color: #C776FF;
    box-shadow: 0 0 0 1px rgba(199, 118, 255, 0.2);
  }
  .mn-textarea::placeholder {
    color: #555;
  }
  .mn-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    padding-right: 4px;
  }
  .mn-footer-text {
    font-size: 10px;
    color: #444;
    font-weight: 500;
  }
  .mn-link {
    color: #666;
    text-decoration: none;
    border-bottom: 1px dotted #666;
    transition: color 0.2s;
  }
  .mn-link:hover {
    color: #C776FF;
    border-bottom-style: solid;
  }
  @keyframes mn-fade-in {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes mn-spin {
    to { transform: rotate(360deg); }
  }
  .mn-spinner {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(234, 179, 8, 0.3);
    border-top-color: #eab308;
    border-radius: 50%;
    animation: mn-spin 1s linear infinite;
  }
`;
const PrivateNotesEditor = ({ contentId }) => {
  const [note, setNote] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!document.getElementById("moctale-notes-css")) {
      const style = document.createElement("style");
      style.id = "moctale-notes-css";
      style.textContent = INJECTED_STYLES;
      document.head.appendChild(style);
    }
    const storageKey = `note_${contentId}`;
    chrome.storage.local.get([storageKey], (result) => {
      if (result[storageKey]) {
        setNote(result[storageKey]);
      }
    });
  }, [contentId]);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setNote(newValue);
    setStatus("saving");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const storageKey = `note_${contentId}`;
      chrome.storage.local.set({ [storageKey]: newValue }, () => {
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 2e3);
      });
    }, 1e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mn-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mn-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mn-title-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mn-icon-box", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit2, { size: "18", color: "#C776FF", variant: "Bold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mn-title", children: "Private Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mn-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: "10", color: "#71717a", variant: "Bold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mn-badge-text", children: "Encrypted Local Storage" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mn-status", style: { opacity: status === "idle" ? 0 : 1 }, children: [
        status === "saved" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TickCircle, { size: "14", color: "#4ade80", variant: "Bold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mn-spinner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mn-status-text", style: { color: status === "saving" ? "#eab308" : "#4ade80" }, children: status === "saving" ? "SAVING..." : "SAVED" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mn-editor-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        value: note,
        onChange: handleChange,
        placeholder: "Write your thoughts, reviews, or track specific details here...",
        className: "mn-textarea",
        spellCheck: false
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mn-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mn-footer-text", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "mn-link", children: "Moctale Plus" }),
      " ",
      "by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noreferrer", className: "mn-link", children: "010101-sans" })
    ] }) })
  ] });
};
let observer$2 = null;
let pollInterval = null;
const initPrivateNotes = () => {
  if (observer$2) return;
  if (!location.pathname.startsWith("/content/")) return;
  const contentId = location.pathname.split("/").pop() || "unknown";
  console.log(`[PrivateNotes] Initializing for: ${contentId}`);
  const scanAndInject = () => {
    if (document.querySelector(".mn-container")) return;
    const headings = document.querySelectorAll("h2");
    for (const h2 of headings) {
      if (h2.textContent?.trim() === "Overview") {
        const overviewContainer = h2.parentElement;
        if (overviewContainer && overviewContainer.tagName === "DIV") {
          if (!overviewContainer.getAttribute("data-moctale-notes-processed")) {
            console.log("[PrivateNotes] Target found. Injecting...");
            overviewContainer.setAttribute("data-moctale-notes-processed", "true");
            injectNotesAfter(overviewContainer, contentId);
          }
          return;
        }
      }
    }
  };
  observer$2 = new MutationObserver(() => scanAndInject());
  observer$2.observe(document.body, { childList: true, subtree: true });
  if (pollInterval) clearInterval(pollInterval);
  pollInterval = setInterval(() => {
    if (document.querySelector(".mn-container")) {
      if (pollInterval) clearInterval(pollInterval);
    } else {
      scanAndInject();
    }
  }, 1e3);
  scanAndInject();
};
const stopPrivateNotes = () => {
  if (observer$2) {
    observer$2.disconnect();
    observer$2 = null;
  }
  if (pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
  const notesUI = document.querySelector(".mn-container");
  if (notesUI && notesUI.parentElement) {
    notesUI.parentElement.remove();
  }
  const headings = document.querySelectorAll("h2");
  for (const h2 of headings) {
    if (h2.textContent?.trim() === "Overview") {
      const overviewContainer = h2.parentElement;
      if (overviewContainer) {
        overviewContainer.removeAttribute("data-moctale-notes-processed");
      }
    }
  }
};
const injectNotesAfter = (overviewElement, contentId) => {
  const wrapper = document.createElement("div");
  wrapper.className = "w-full border-b border-[#252833] pb-6 mb-6 moctale-notes-wrapper";
  overviewElement.insertAdjacentElement("afterend", wrapper);
  const root = clientExports.createRoot(wrapper);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PrivateNotesEditor, { contentId }));
};
const PREVIEW_STYLES = `
  body.moctale-hide-cursor, 
  body.moctale-hide-cursor * {
    cursor: none !important;
  }
  
  .moctale-preview-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
    padding: 0 4px;
    box-sizing: border-box;
  }
`;
const PreviewOverlay = () => {
  const [src, setSrc] = reactExports.useState(null);
  const [visible, setVisible] = reactExports.useState(false);
  const [naturalSize, setNaturalSize] = reactExports.useState({ width: 0, height: 0 });
  reactExports.useEffect(() => {
    if (!document.getElementById("moctale-preview-css")) {
      const style = document.createElement("style");
      style.id = "moctale-preview-css";
      style.textContent = PREVIEW_STYLES;
      document.head.appendChild(style);
    }
    const findImageUnderCursor2 = (x, y) => {
      const elements = document.elementsFromPoint(x, y);
      let img = elements.find((el) => el.tagName === "IMG");
      if (!img) {
        for (const el of elements) {
          if (el instanceof HTMLElement) {
            const innerImg = el.querySelector("img");
            if (innerImg) {
              const rect = innerImg.getBoundingClientRect();
              if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                img = innerImg;
                break;
              }
            }
          }
        }
      }
      if (!img) return null;
      const width = img.width || img.naturalWidth;
      const height = img.height || img.naturalHeight;
      if (width < 50 || height < 50) return null;
      if (img.src.includes("data:image/svg")) return null;
      return img;
    };
    const updatePreviewState = (x, y, isCombo) => {
      if (!isCombo) {
        setVisible(false);
        setSrc(null);
        return;
      }
      const img = findImageUnderCursor2(x, y);
      if (img) {
        if (img.src !== src) {
          setSrc(img.src);
          setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    let lastMouseX = 0;
    let lastMouseY = 0;
    const globalMouseMove = (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      const isCombo = e.ctrlKey && e.shiftKey;
      updatePreviewState(lastMouseX, lastMouseY, isCombo);
    };
    const globalKeyChange = (e) => {
      const isCombo = e.ctrlKey && e.shiftKey;
      updatePreviewState(lastMouseX, lastMouseY, isCombo);
    };
    document.addEventListener("mousemove", globalMouseMove);
    document.addEventListener("keydown", globalKeyChange);
    document.addEventListener("keyup", globalKeyChange);
    document.addEventListener("scroll", () => setVisible(false), { capture: true });
    return () => {
      document.removeEventListener("mousemove", globalMouseMove);
      document.removeEventListener("keydown", globalKeyChange);
      document.removeEventListener("keyup", globalKeyChange);
      document.removeEventListener("scroll", () => setVisible(false));
      document.body.classList.remove("moctale-hide-cursor");
    };
  }, [src]);
  reactExports.useEffect(() => {
    if (visible) {
      document.body.classList.add("moctale-hide-cursor");
    } else {
      document.body.classList.remove("moctale-hide-cursor");
    }
  }, [visible]);
  if (!visible || !src) return null;
  return (
    // Portal Root (z-index boosted and transform-free)
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed z-[100000] pointer-events-none flex items-center justify-center animate-in fade-in duration-150 fix-stacking-context",
        style: {
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex flex-col items-center bg-[#121212] p-2 rounded-2xl border border-[#353945] shadow-2xl",
            style: {
              maxWidth: "90vw",
              maxHeight: "95vh"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt: "Preview",
                  className: "rounded-lg object-contain bg-black/20",
                  style: {
                    maxHeight: "85vh",
                    maxWidth: "85vw",
                    minWidth: "200px",
                    display: "block"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "moctale-preview-footer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-[#555] font-medium tracking-wide", children: [
                  "Powered by ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C776FF]", children: "Moctale Plus" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-[#555] font-mono tracking-wide", children: [
                  naturalSize.width,
                  " x ",
                  naturalSize.height
                ] })
              ] })
            ]
          }
        )
      }
    )
  );
};
let rootDiv$1 = null;
const initImagePreview = () => {
  if (document.getElementById("moctale-img-preview-root")) return;
  rootDiv$1 = document.createElement("div");
  rootDiv$1.id = "moctale-img-preview-root";
  document.body.appendChild(rootDiv$1);
  const root = clientExports.createRoot(rootDiv$1);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(PreviewOverlay, {}));
};
const stopImagePreview = () => {
  if (rootDiv$1) {
    rootDiv$1.remove();
    rootDiv$1 = null;
  }
  document.body.classList.remove("moctale-hide-cursor");
};
const WATCH_STYLES = `
  /* --- TOGGLE BUTTON --- */
  .mp-watch-btn {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 70;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
    /* Sleek Dark Glass */
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }

  /* Show on Hover */
  .group:hover .mp-watch-btn {
    opacity: 1;
    transform: scale(1);
  }

  .mp-watch-btn:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }

  /* --- STATUS ICONS (SVG Strings injected via JS) --- */
  .mp-icon-partial {
    color: #facc15;
    filter: drop-shadow(0 0 5px rgba(250, 204, 21, 0.6));
  }

  .mp-icon-watched {
    color: #4ade80;
    filter: drop-shadow(0 0 5px rgba(74, 222, 128, 0.6));
  }

  /* --- STATUS BAR --- */
  .mp-status-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: 20;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-bottom-left-radius: 6px; 
    border-bottom-right-radius: 6px;
  }

  .mp-status-bar.is-partial {
    opacity: 1;
    background: #facc15;
    box-shadow: 0 -2px 10px rgba(250, 204, 21, 0.5);
  }

  .mp-status-bar.is-watched {
    opacity: 1;
    background: #4ade80;
    box-shadow: 0 -2px 10px rgba(74, 222, 128, 0.5);
  }
`;
const ICONS$1 = {
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mp-icon-partial"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  tick: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mp-icon-watched"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
};
let GLOBAL_WATCH_CACHE = {};
const updateUI = (container, contentId, status) => {
  const btn = container.querySelector(".mp-watch-btn");
  const bar = container.querySelector(".mp-status-bar");
  if (!btn || !bar) return;
  bar.className = "mp-status-bar";
  if (status === 1) {
    btn.innerHTML = ICONS$1.clock;
    btn.title = "Mark as Watched";
    bar.classList.add("is-partial");
  } else if (status === 2) {
    btn.innerHTML = ICONS$1.tick;
    btn.title = "Mark as Unwatched";
    bar.classList.add("is-watched");
  } else {
    btn.innerHTML = ICONS$1.eye;
    btn.title = "Mark as In Progress";
  }
};
const handleToggle = (e, contentId) => {
  e.preventDefault();
  e.stopPropagation();
  const currentStatus = (GLOBAL_WATCH_CACHE[contentId] === true ? 2 : GLOBAL_WATCH_CACHE[contentId]) || 0;
  const nextStatus = currentStatus + 1 > 2 ? 0 : currentStatus + 1;
  if (nextStatus === 0) delete GLOBAL_WATCH_CACHE[contentId];
  else GLOBAL_WATCH_CACHE[contentId] = nextStatus;
  document.querySelectorAll(`[data-mp-content-id="${contentId}"]`).forEach((el) => {
    updateUI(el, contentId, nextStatus);
  });
  chrome.storage.local.get(["watchedItems"], (result) => {
    const data = result.watchedItems || {};
    if (nextStatus === 0) delete data[contentId];
    else data[contentId] = nextStatus;
    chrome.storage.local.set({ watchedItems: data });
  });
};
const injectWidget = (container, contentId) => {
  const bar = document.createElement("div");
  bar.className = "mp-status-bar";
  const btn = document.createElement("button");
  btn.className = "mp-watch-btn";
  btn.onclick = (e) => handleToggle(e, contentId);
  container.setAttribute("data-mp-content-id", contentId);
  container.setAttribute("data-moctale-watch-init", "true");
  container.appendChild(bar);
  container.appendChild(btn);
  const val = GLOBAL_WATCH_CACHE[contentId];
  const status = (val === true ? 2 : val) || 0;
  updateUI(container, contentId, status);
};
let observer$1 = null;
let isInitialized = false;
const loadCache = (callback) => {
  chrome.storage.local.get(["watchedItems"], (result) => {
    GLOBAL_WATCH_CACHE = result.watchedItems || {};
    callback();
  });
};
const initWatchStatus = () => {
  if (isInitialized) return;
  isInitialized = true;
  if (!document.getElementById("moctale-watch-css")) {
    const style = document.createElement("style");
    style.id = "moctale-watch-css";
    style.textContent = WATCH_STYLES;
    document.head.appendChild(style);
  }
  loadCache(() => {
    runProcessor();
    startObserver();
  });
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.watchedItems) {
      GLOBAL_WATCH_CACHE = changes.watchedItems.newValue || {};
      document.querySelectorAll('[data-moctale-watch-init="true"]').forEach((container) => {
        const id = container.getAttribute("data-mp-content-id");
        if (id) {
          const val = GLOBAL_WATCH_CACHE[id];
          const status = (val === true ? 2 : val) || 0;
          updateUI(container, id, status);
        }
      });
    }
  });
};
const runProcessor = () => {
  const containers = document.querySelectorAll("div.relative.aspect-\\[2\\/3\\]:not([data-moctale-watch-init])");
  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    const img = container.querySelector("img");
    if (!img) continue;
    const match = img.src.match(/\/images\/([a-f0-9-]+)\./);
    if (match) {
      injectWidget(container, match[1]);
    }
  }
};
const startObserver = () => {
  let pending = false;
  observer$1 = new MutationObserver(() => {
    if (pending) return;
    pending = true;
    queueMicrotask(() => {
      runProcessor();
      pending = false;
    });
  });
  observer$1.observe(document.body, { childList: true, subtree: true });
};
const stopWatchStatus = () => {
  if (observer$1) {
    observer$1.disconnect();
    observer$1 = null;
  }
  isInitialized = false;
  const style = document.getElementById("moctale-watch-css");
  if (style) style.remove();
  document.querySelectorAll("[data-moctale-watch-init]").forEach((el) => {
    el.removeAttribute("data-moctale-watch-init");
    el.removeAttribute("data-mp-content-id");
    const bar = el.querySelector(".mp-status-bar");
    const btn = el.querySelector(".mp-watch-btn");
    if (bar) bar.remove();
    if (btn) btn.remove();
  });
};
const PREFETCH_DELAY = 150;
const CACHE_TTL = 5 * 60 * 1e3;
const SCROLL_LOCK_DELAY = 150;
const prefetchedUrls = /* @__PURE__ */ new Set();
let hoverTimer = null;
let scrollTimer = null;
let imageLoopId = null;
let cacheInterval = null;
const PERF_STYLES = `
    /* NOTE: Virtualization and GPU transforms removed to prevent 
       Z-Index clipping and Stacking Context traps.
    */

    /* SCROLL PHYSICS - Makes scroll feel native and heavy */
    html, body {
        scroll-behavior: smooth !important;
        overscroll-behavior-y: none;
    }

    /* IMAGE RENDERING - Sharper scaling */
    img {
        image-rendering: -webkit-optimize-contrast; 
    }

    /* INPUT LATENCY - Removes 300ms tap delay on touch devices */
    a, button, [role="button"] {
        touch-action: manipulation; 
    }

    /* POINTER LOCK - Disables heavy hover effects while scrolling */
    /* This provides 90% of the scroll smoothness without breaking layout */
    body.mp-scroll-lock {
        pointer-events: none !important; 
    }
    body.mp-scroll-lock .group {
        pointer-events: none !important;
    }
`;
const injectPreconnect = () => {
  if (document.getElementById("moctale-preconnect")) return;
  const link1 = document.createElement("link");
  link1.id = "moctale-preconnect";
  link1.rel = "preconnect";
  link1.href = "https://media.moctale.in";
  link1.crossOrigin = "anonymous";
  document.head.appendChild(link1);
  const link2 = document.createElement("link");
  link2.rel = "dns-prefetch";
  link2.href = "https://media.moctale.in";
  document.head.appendChild(link2);
};
const injectSpeculationRules = () => {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
    const existing = document.getElementById("moctale-speculation");
    if (existing) return;
    const specScript = document.createElement("script");
    specScript.id = "moctale-speculation";
    specScript.type = "speculationrules";
    specScript.textContent = JSON.stringify({
      prefetch: [{
        source: "document",
        where: {
          and: [
            { href_matches: "*/content/*" },
            { href_matches: "*/explore/*" },
            { href_matches: "*/person/*" }
          ]
        },
        eagerness: "moderate"
      }]
    });
    document.head.appendChild(specScript);
  }
};
const triggerPrefetch = (url) => {
  if (prefetchedUrls.has(url)) return;
  try {
    const targetUrl = new URL(url, self.location.href).href;
    if (!targetUrl.includes("/content/") && !targetUrl.includes("/explore")) return;
    prefetchedUrls.add(targetUrl);
    if (!HTMLScriptElement.supports || !HTMLScriptElement.supports("speculationrules")) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = targetUrl;
      link.as = "document";
      document.head.appendChild(link);
    }
  } catch (e) {
  }
};
const handleHoverStart = (e) => {
  const target2 = e.target.closest("a");
  if (!target2 || !target2.href) return;
  hoverTimer = self.setTimeout(() => {
    triggerPrefetch(target2.href);
  }, PREFETCH_DELAY);
};
const handleHoverEnd = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
};
const handleMouseDown = (e) => {
  const target2 = e.target.closest("a");
  if (target2 && target2.href) {
    triggerPrefetch(target2.href);
  }
};
const handleScroll = () => {
  if (!document.body.classList.contains("mp-scroll-lock")) {
    document.body.classList.add("mp-scroll-lock");
  }
  if (scrollTimer) clearTimeout(scrollTimer);
  scrollTimer = self.setTimeout(() => {
    document.body.classList.remove("mp-scroll-lock");
  }, SCROLL_LOCK_DELAY);
};
const optimizeImages = () => {
  const images = document.querySelectorAll("img:not([data-moctale-opt])");
  if (images.length === 0) return;
  const runner = self.requestIdleCallback || ((cb) => cb({ didTimeout: false, timeRemaining: () => 1 }));
  runner(() => {
    images.forEach((img) => {
      const el = img;
      el.decoding = "async";
      el.loading = "lazy";
      el.setAttribute("data-moctale-opt", "true");
    });
  }, { timeout: 1e3 });
};
const startImageLoop = () => {
  optimizeImages();
  imageLoopId = self.setInterval(() => {
    const runner = self.requestIdleCallback || ((cb) => cb({ didTimeout: false, timeRemaining: () => 1 }));
    runner(optimizeImages);
  }, 2e3);
};
const initPerformanceMax = () => {
  console.log("[PerformanceMax] 🏎️ Engine Started (Safe Mode)");
  if (!document.getElementById("moctale-perf-css")) {
    const style = document.createElement("style");
    style.id = "moctale-perf-css";
    style.textContent = PERF_STYLES;
    document.head.appendChild(style);
  }
  injectPreconnect();
  injectSpeculationRules();
  document.addEventListener("mouseover", handleHoverStart, { passive: true });
  document.addEventListener("mouseout", handleHoverEnd, { passive: true });
  document.addEventListener("mousedown", handleMouseDown, { passive: true });
  self.addEventListener("scroll", handleScroll, { passive: true });
  startImageLoop();
  cacheInterval = self.setInterval(() => {
    prefetchedUrls.clear();
  }, CACHE_TTL);
};
const stopPerformanceMax = () => {
  document.removeEventListener("mouseover", handleHoverStart);
  document.removeEventListener("mouseout", handleHoverEnd);
  document.removeEventListener("mousedown", handleMouseDown);
  self.removeEventListener("scroll", handleScroll);
  const style = document.getElementById("moctale-perf-css");
  if (style) style.remove();
  const spec = document.getElementById("moctale-speculation");
  if (spec) spec.remove();
  const pre = document.getElementById("moctale-preconnect");
  if (pre) pre.remove();
  if (imageLoopId) clearInterval(imageLoopId);
  if (cacheInterval) clearInterval(cacheInterval);
  document.body.classList.remove("mp-scroll-lock");
  console.log("[PerformanceMax] 🛑 Engine Stopped");
};
const DOWNLOADER_STYLES = `
  .mp-download-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%; /* Circle like WatchStatus */
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* Sleek Dark Glass - Matching WatchStatus */
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    z-index: 1000;
  }

  .mp-download-btn:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
  
  .mp-download-btn:active {
    transform: scale(0.95);
  }
  
  /* Icon styling */
  .mp-dl-icon {
    width: 18px;
    height: 18px;
    stroke-width: 2;
  }

  /* Entrance Animation */
  @keyframes mp-fade-in {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .mp-dl-animate {
    animation: mp-fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;
const DOWNLOAD_ICON = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="mp-dl-icon">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" y1="15" x2="12" y2="3"></line>
</svg>`;
const LOADING_ICON = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mp-dl-icon animate-spin">
  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
</svg>`;
const getFileName = (img) => {
  let name = "";
  const parentLink = img.closest('a, button, div[role="link"]');
  if (parentLink) {
    const aria = parentLink.getAttribute("aria-label");
    if (aria && !aria.startsWith("View details")) name = aria;
  }
  if (!name && img.alt && img.alt.length > 2 && !img.alt.includes("image")) {
    name = img.alt;
  }
  if (!name) {
    const card = img.closest(".group, .relative");
    if (card) {
      const header = card.querySelector("h3, h2, .text-lg");
      if (header && header.textContent) name = header.textContent.trim();
    }
  }
  if (!name) {
    try {
      const urlObj = new URL(img.src);
      const path = urlObj.pathname.split("/").pop();
      if (path && path.includes(".")) return path;
    } catch (e) {
    }
    return "moctale-image.jpg";
  }
  name = name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  return `moctale-${name}.jpg`;
};
const findImageUnderCursor = (x, y) => {
  const elements = document.elementsFromPoint(x, y);
  if (elements.some((el) => el.classList.contains("mp-download-btn"))) return "BUTTON";
  let img = elements.find((el) => el.tagName === "IMG");
  if (!img) {
    for (const el of elements) {
      if (el instanceof HTMLElement) {
        const innerImg = el.querySelector("img");
        if (innerImg) {
          const rect = innerImg.getBoundingClientRect();
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            img = innerImg;
            break;
          }
        }
      }
    }
  }
  if (!img) return null;
  const width = img.width || img.naturalWidth;
  const height = img.height || img.naturalHeight;
  if (width < 150 || height < 150) return null;
  if (img.src.includes("data:image/svg")) return null;
  return img;
};
const DownloadOverlay = () => {
  const [target2, setTarget] = reactExports.useState(null);
  const [isDownloading, setIsDownloading] = reactExports.useState(false);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!document.getElementById("moctale-downloader-css")) {
      const style = document.createElement("style");
      style.id = "moctale-downloader-css";
      style.textContent = DOWNLOADER_STYLES;
      document.head.appendChild(style);
    }
    const handleMouseMove = (e) => {
      const result = findImageUnderCursor(e.clientX, e.clientY);
      if (result === "BUTTON") {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        return;
      }
      if (result instanceof HTMLImageElement) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        const newSrc = result.src;
        const newRect = result.getBoundingClientRect();
        setTarget((prev) => {
          if (prev && prev.src === newSrc && Math.abs(prev.rect.top - newRect.top) < 5) return prev;
          return { src: newSrc, rect: newRect, el: result };
        });
      } else {
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            setTarget(null);
            timeoutRef.current = null;
          }, 100);
        }
      }
    };
    const handleScroll2 = () => setTarget(null);
    self.addEventListener("mousemove", handleMouseMove, { passive: true });
    self.addEventListener("scroll", handleScroll2, { passive: true, capture: true });
    return () => {
      self.removeEventListener("mousemove", handleMouseMove);
      self.removeEventListener("scroll", handleScroll2);
    };
  }, []);
  const downloadImage = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!target2 || isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(target2.src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const filename = getFileName(target2.el);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
      self.open(target2.src, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };
  if (!target2) return null;
  const top = target2.rect.bottom + self.scrollY - 48;
  const left = target2.rect.right + self.scrollX - 48;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute fix-stacking-context mp-dl-animate",
      style: { top, left, pointerEvents: "auto", zIndex: 99999 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "mp-download-btn",
          onClick: downloadImage,
          title: "Download Image",
          dangerouslySetInnerHTML: { __html: isDownloading ? LOADING_ICON : DOWNLOAD_ICON }
        }
      )
    }
  );
};
let rootDiv = null;
const initImageDownloader = () => {
  if (document.getElementById("moctale-img-downloader-root")) return;
  rootDiv = document.createElement("div");
  rootDiv.id = "moctale-img-downloader-root";
  document.body.appendChild(rootDiv);
  const root = clientExports.createRoot(rootDiv);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(DownloadOverlay, {}));
};
const stopImageDownloader = () => {
  if (rootDiv) {
    rootDiv.remove();
    rootDiv = null;
  }
};
const ICONS = {
  MagicStar: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }) }),
  Close: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 6 12 12" })
  ] }),
  Chart: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3v18h18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 9-5 5-4-4-3 3" })
  ] })
};
const extractPageData = () => {
  const clean = (s) => s?.trim().replace(/\s+/g, " ") || "";
  const allH1 = Array.from(document.querySelectorAll("h1"));
  const titleNode = allH1.find((h) => {
    const t = clean(h.textContent);
    return t.length > 2 && t !== "Menu" && t !== "Moctale";
  }) || allH1[0];
  const title = clean(titleNode?.textContent);
  let poster = "";
  const mainPosterDiv = document.querySelector("div[data-mp-content-id] img");
  if (mainPosterDiv) poster = mainPosterDiv.src;
  if (!poster && title) {
    const altImg = document.querySelector(`img[alt="${title}"]`);
    if (altImg) poster = altImg.src;
  }
  let backdrop = "";
  const bannerImg = document.querySelector(".animate-banner-fadeIn img");
  if (bannerImg) backdrop = bannerImg.src;
  if (!backdrop) backdrop = poster;
  let meta = "";
  if (titleNode) {
    const sibling = titleNode.previousElementSibling || titleNode.nextElementSibling;
    if (sibling) meta = clean(sibling.textContent);
  }
  const year = meta.match(/\d{4}/)?.[0] || "";
  let plot = "";
  const allH2 = Array.from(document.querySelectorAll("h2"));
  const overviewH2 = allH2.find((h) => h.textContent?.includes("Overview"));
  if (overviewH2) {
    const sectionContainer = overviewH2.parentElement;
    if (sectionContainer) {
      const nextDiv = sectionContainer.querySelector("div.relative");
      const pMobile = nextDiv?.querySelector("p");
      const pDesktop = sectionContainer.querySelector("div.hidden.lg\\:block p");
      if (pDesktop) plot = clean(pDesktop.textContent);
      else if (pMobile) plot = clean(pMobile.textContent);
      if (!plot) {
        const anyP = sectionContainer.querySelectorAll("p")[0];
        if (anyP) plot = clean(anyP.textContent);
      }
    }
  }
  let director = "";
  const spans = Array.from(document.querySelectorAll("span"));
  const dirLabel = spans.find((s) => s.textContent?.includes("Directed By") || s.textContent?.includes("Showrunner"));
  if (dirLabel) {
    const parent = dirLabel.parentElement;
    const link = parent?.querySelector("a");
    if (link) {
      const fullSpan = link.querySelector("span.min-\\[376px\\]\\:inline");
      director = fullSpan ? clean(fullSpan.textContent) : clean(link.textContent);
    }
  }
  const genres = [];
  if (overviewH2) {
    const container = overviewH2.parentElement?.parentElement;
    if (container) {
      const btns = container.querySelectorAll("button span");
      btns.forEach((b) => {
        const t = clean(b.textContent);
        if (t && t.length > 2 && isNaN(Number(t)) && !t.includes("Review") && !t.includes("Template")) {
          genres.push(t);
        }
      });
    }
  }
  const cast = [];
  const castH2 = allH2.find((h) => h.textContent?.includes("Cast"));
  if (castH2) {
    const headerContainer = castH2.parentElement;
    const scrollContainer = headerContainer?.nextElementSibling;
    if (scrollContainer) {
      const cards = scrollContainer.querySelectorAll("a");
      cards.forEach((card) => {
        if (cast.length >= 8) return;
        const img = card.querySelector("img")?.src || "";
        const nameSpan = card.querySelector("span.text-white") || card.querySelector("span.text-\\[\\#E2E2E2\\]");
        const roleSpan = card.querySelector("span.text-\\[\\#ABABAB\\]");
        if (img && nameSpan) {
          cast.push({
            name: clean(nameSpan.textContent),
            role: clean(roleSpan?.textContent),
            img
          });
        }
      });
    }
  }
  const watchOptions = [];
  const watchH2 = allH2.find((h) => h.textContent?.includes("Watch Online") || h.textContent?.includes("Tickets On"));
  if (watchH2) {
    const container = watchH2.parentElement?.nextElementSibling;
    const links = container?.querySelectorAll("a");
    links?.forEach((link) => {
      const img = link.querySelector("img")?.src || "";
      const nameSpan = link.querySelector("span.font-medium") || link.querySelector("span.text-sm");
      const name = clean(nameSpan?.textContent);
      if (name && img) {
        watchOptions.push({ name, icon: img, url: link.href });
      }
    });
  }
  const vibes = [];
  const legendItems = document.querySelectorAll('a[aria-label*="genre"]');
  legendItems.forEach((item) => {
    const aria = item.getAttribute("aria-label") || "";
    const parts = aria.split(":");
    if (parts.length === 2) {
      const label = parts[0].replace("genre", "").trim();
      const percent = parseInt(parts[1].replace("%", ""));
      const dot = item.querySelector("div.rounded-full");
      const color = dot?.style.backgroundColor || "#555";
      if (!vibes.some((v) => v.label === label)) vibes.push({ label, percent, color });
    }
  });
  let rating = "";
  let voteCount = "";
  const ratingNode = document.querySelector(".text-\\[42px\\]");
  if (ratingNode) rating = clean(ratingNode.textContent);
  const votesNode = document.querySelector(".text-\\[20px\\]");
  if (votesNode && votesNode.textContent?.includes("Votes")) voteCount = clean(votesNode.textContent);
  const meterBreakdown = [];
  const breakdownItems = document.querySelectorAll('div[aria-label*="%"]');
  breakdownItems.forEach((item) => {
    const aria = item.getAttribute("aria-label") || "";
    if (["Perfection", "Go for it", "Timepass", "Skip"].some((k) => aria.includes(k))) {
      const parts = aria.split(":");
      if (parts.length === 2) {
        const label = parts[0].trim();
        const percent = parseInt(parts[1].replace("%", ""));
        let color = "#555";
        if (label === "Perfection") color = "#B048FF";
        if (label.includes("Go")) color = "#00D391";
        if (label === "Timepass") color = "#FCB700";
        if (label === "Skip") color = "#FE647E";
        if (!meterBreakdown.some((m) => m.label === label)) {
          meterBreakdown.push({ label, percent, color });
        }
      }
    }
  });
  meterBreakdown.reverse();
  return { title, poster, backdrop, year, meta, plot, rating, voteCount, genres, cast, director, vibes, meterBreakdown, watchOptions };
};
const SummaryModal = ({ onClose }) => {
  const [data, setData] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const extracted = extractPageData();
    setData(extracted);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  if (!data) return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100000] flex items-center justify-center p-4 animate-in fade-in duration-300 font-sans", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/90 backdrop-blur-xl", onClick: onClose }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
          style: { boxShadow: "0 0 120px rgba(0,0,0,0.9)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-64 overflow-hidden z-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.backdrop, className: "w-full h-full object-cover opacity-30 blur-sm scale-105", alt: "Backdrop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 overflow-y-auto custom-scrollbar flex-1 p-6 md:p-8 space-y-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-40 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.poster, className: "w-full h-full object-cover", alt: "Poster" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-2 leading-tight text-shadow-sm", children: data.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.meta.split("•").pop()?.trim() }),
                    data.director && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#8b5cf6] font-semibold", children: data.director })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-gray-300 leading-relaxed font-light max-w-2xl mb-5", children: data.plot.replaceAll("Reveal Spoiler Powered by Moctale Plus", "") || "No synopsis available." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: data.genres.slice(0, 4).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 rounded border border-white/5", children: g }, g)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                data.vibes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.03] p-5 rounded-2xl border border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: ICONS.Chart }),
                    " Vibe Check"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: data.vibes.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-gray-400 w-20 truncate", children: v.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${v.percent}%`, backgroundColor: v.color } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono text-gray-500 w-8 text-right", children: [
                      v.percent,
                      "%"
                    ] })
                  ] }, i)) })
                ] }),
                data.meterBreakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.03] p-5 rounded-2xl border border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-500", children: ICONS.MagicStar }),
                    " Moctale Meter"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: data.meterBreakdown.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-gray-400 w-20 truncate", children: stat.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${stat.percent}%`, backgroundColor: stat.color } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono text-gray-500 w-8 text-right", children: [
                      stat.percent,
                      "%"
                    ] })
                  ] }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-white-500 flex items-center gap-1", children: [
                "Powered by",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "text-white-500 font-medium underline hover:text-purple-400 transition-colors", children: "Moctale Plus" }),
                "by",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noreferrer", className: "text-white-500 font-medium underline hover:text-purple-400 transition-colors", children: "010101-sans" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all z-50 backdrop-blur-md",
                children: ICONS.Close
              }
            )
          ]
        }
      )
    ] }),
    document.body
  );
};
const SummaryButton = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full mt-2 animate-in fade-in slide-in-from-top-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "\n                      group relative w-full max-w-md h-11 rounded-full\n                      flex items-center justify-center gap-2\n                      text-white border border-2 border-[#B048FF] \n                      bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]\n                      shadow-md shadow-purple-900/20\n                      transition-all duration-300 ease-out\n                      hover:shadow-lg hover:shadow-purple-500/30\n                      hover:brightness-110\n                      active:scale-[0.98]\n                  ",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-lg text-[#B048FF]", children: ICONS.MagicStar }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-sm font-semibold tracking-wide", children: "Page Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "\n                    pointer-events-none absolute inset-0\n                    -translate-x-full\n                    bg-gradient-to-r from-transparent via-white/10 to-transparent\n                    group-hover:animate-[shimmer_1.6s_ease-in-out_infinite]\n                  "
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-[11px] font-medium tracking-wider text-white/40", children: "Powered by Moctale Plus by 010101-sans" }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryModal, { onClose: () => setIsOpen(false) })
  ] });
};
const initPageSummary = () => {
  const observer2 = new MutationObserver(() => {
    const collectionBtns = Array.from(document.querySelectorAll("button")).filter(
      (btn) => btn.textContent?.includes("Collection")
    );
    if (collectionBtns.length > 0) {
      const targetBtn = collectionBtns.find((btn) => btn.closest(".xl\\:flex-col"));
      if (targetBtn) {
        const buttonWrapper = targetBtn.closest(".relative.flex");
        const sidebarCol = buttonWrapper?.parentElement;
        if (sidebarCol && !sidebarCol.querySelector(".moctale-summary-btn")) {
          const wrapper = document.createElement("div");
          wrapper.className = "moctale-summary-btn w-full";
          sidebarCol.appendChild(wrapper);
          clientExports.createRoot(wrapper).render(/* @__PURE__ */ jsxRuntimeExports.jsx(SummaryButton, {}));
        }
      }
    }
  });
  observer2.observe(document.body, { childList: true, subtree: true });
};
if (self.self !== self.top) {
  throw new Error("[Moctale+] Blocked execution in iframe");
}
console.log("%c[Moctale+] Loaded", "color: #bada55");
let sidebarRoot = null;
const getSettings = async () => {
  return new Promise((resolve) => {
    const defaults = {
      activeTheme: "default",
      enableLinkifier: true,
      enableDiscussions: true,
      enablePlatforms: true,
      enableCreative: true,
      enableCollectionExport: true,
      enableBoxOffice: true,
      enableShortcuts: true,
      enableTierList: true,
      enablePickRandom: true,
      enableSpoilerShield: false,
      spoilerKeywords: DEFAULT_RISK_KEYWORDS.join(", "),
      enableScrollSaver: false,
      gridColumns: 0,
      enableSearchPlus: true,
      enablePrivateNotes: true,
      enableImagePreview: true,
      enableWatchStatus: true,
      enablePerformanceMax: true
    };
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get(null, (items) => {
        let finalSettings = { ...defaults, ...items };
        if (items.settings && typeof items.settings === "object") {
          finalSettings = { ...finalSettings, ...items.settings };
        }
        resolve(finalSettings);
      });
    } else {
      resolve(defaults);
    }
  });
};
const stickerSystem = new StickerOverlay();
self.MoctaleStickerSystem = stickerSystem;
if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    if (request.type === "ADD_STICKER" && request.payload) {
      stickerSystem.addSticker(request.payload);
      sendResponse({ success: true });
    }
    return true;
  });
}
const injectSidebarFeatures = (settings) => {
  const mediaInfo = getPageMediaInfo();
  if (!mediaInfo) return;
  let sidebarContainer = null;
  const mainLayout = document.querySelector(".flex.flex-col.lg\\:flex-row.lg\\:justify-between");
  if (mainLayout) {
    sidebarContainer = mainLayout.querySelector('[class*="xl:w-[306px]"]');
  } else {
    const potentialSidebars = document.querySelectorAll('[class*="xl:w-[306px]"]');
    if (potentialSidebars.length > 0) sidebarContainer = potentialSidebars[0];
  }
  if (!sidebarContainer) return;
  let appHost = document.getElementById("moctale-plus-root");
  if (!appHost) {
    appHost = document.createElement("div");
    appHost.id = "moctale-plus-root";
    appHost.className = "w-full moctale-plus-injected";
    sidebarContainer.appendChild(appHost);
    sidebarRoot = clientExports.createRoot(appHost);
  }
  if (sidebarRoot) {
    sidebarRoot.render(/* @__PURE__ */ jsxRuntimeExports.jsx(SidebarApp, { mediaInfo, settings }));
  }
};
const runGlobalFeatures = async () => {
  const settings = await getSettings();
  console.log("[Moctale+] Applying Configuration");
  document.body.classList.remove("theme-oled", "theme-coffee", "theme-midnight", "theme-light");
  if (settings.activeTheme && settings.activeTheme !== "default") {
    document.body.classList.add(`theme-${settings.activeTheme}`);
  }
  if (settings.enableLinkifier) runLinkifier();
  else removeLinkifier();
  if (self.location.pathname.includes("/content/") || self.location.pathname.includes("/title/")) {
    injectSidebarFeatures(settings);
  }
  if (settings.enableCollectionExport) {
    if (self.location.pathname.includes("/explore/collection/")) {
      setTimeout(injectCollectionExporter, 1e3);
    }
    if (self.location.pathname.includes("/my-collections")) {
      setTimeout(injectMyCollectionExporter, 1e3);
    }
  } else {
    document.querySelectorAll(".moctale-plus-export-wrapper").forEach((el) => el.remove());
    document.getElementById("moctale-plus-export-btn")?.remove();
    document.getElementById("moctale-plus-my-export-btn")?.remove();
  }
  if (settings.enablePickRandom) {
    setTimeout(injectPickRandom, 1e3);
  } else {
    document.querySelectorAll(".moctale-plus-random-wrapper").forEach((el) => el.remove());
  }
  checkAndPerformSearch();
  initKeyboardShortcuts(settings.enableShortcuts);
  if (settings.enableSpoilerShield) {
    const keywords = settings.spoilerKeywords ? settings.spoilerKeywords.split(",") : DEFAULT_RISK_KEYWORDS;
    initSpoilerShield(keywords);
  } else {
    stopSpoilerShield();
  }
  updateGridDensity(settings.gridColumns);
  if (!self["moctaleGridInitialized"]) {
    initGridDensity(settings.gridColumns);
    self["moctaleGridInitialized"] = true;
  }
  if (settings.enableReviewTemplates) {
    initReviewTemplates();
  }
  initEpisodeTracker();
  initSearchPlus();
  if (settings.enableSearchPlus) {
    initSearchPlus();
  } else {
    stopSearchPlus();
  }
  if (settings.enablePrivateNotes) {
    initPrivateNotes();
  } else {
    stopPrivateNotes();
  }
  if (settings.enableImagePreview) {
    initImagePreview();
  } else {
    stopImagePreview();
  }
  if (settings.enableWatchStatus) {
    initWatchStatus();
  } else {
    stopWatchStatus();
  }
  if (settings.enablePerformanceMax) {
    initPerformanceMax();
  } else {
    stopPerformanceMax();
  }
  if (settings.enableImageDownloader) {
    initImageDownloader();
  } else {
    stopImageDownloader();
  }
  initPageSummary();
};
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local") {
    if (changes.gridColumns) {
      updateGridDensity(changes.gridColumns.newValue);
    }
    if (changes.enablePreview) {
      changes.enablePreview.newValue ? initImagePreview() : stopImagePreview();
    }
    if (changes.enableWatchStatus) {
      changes.enableWatchStatus.newValue ? initWatchStatus() : stopWatchStatus();
    }
    if (changes.enableEpisodeTracker) {
      if (changes.enableEpisodeTracker.newValue) initEpisodeTracker();
    }
    if (changes.enablePerformanceMax) {
      changes.enablePerformanceMax.newValue ? initPerformanceMax() : stopPerformanceMax();
    }
    if (changes.enableImageDownloader) {
      changes.enableImageDownloader.newValue ? initImageDownloader() : stopImageDownloader();
    }
  }
});
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
const onDomChange = debounce(() => runGlobalFeatures(), 750);
if (typeof chrome !== "undefined" && chrome.storage) {
  chrome.storage.onChanged.addListener((changes) => {
    const changedKeys = Object.keys(changes);
    const ignoredKeys = ["episodeTracker", "lastSyncedAt", "backupData"];
    const isDataOnlyUpdate = changedKeys.every((key) => ignoredKeys.includes(key));
    if (isDataOnlyUpdate) return;
    onDomChange();
  });
}
let lastUrl = location.href;
const observer = new MutationObserver((mutations) => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    console.log("[Moctale+] URL Changed");
    setTimeout(runGlobalFeatures, 500);
    return;
  }
  const isRelevantMutation = mutations.some((mutation) => {
    const target2 = mutation.target;
    if (target2.id === "moctale-plus-root" || target2.closest("#moctale-plus-root")) {
      return false;
    }
    return Array.from(mutation.addedNodes).some((node) => {
      const el = node;
      if (el.id === "moctale-plus-root") return false;
      if (el.classList && el.classList.contains("moctale-plus-injected")) return false;
      if (el.classList && el.classList.contains("moctale-plus-export-wrapper")) return false;
      return true;
    });
  });
  if (isRelevantMutation) {
    onDomChange();
  }
});
const target = document.getElementById("root") || document.body;
if (target) observer.observe(target, { subtree: true, childList: true });
setTimeout(runGlobalFeatures, 500);
const exportBackup = () => {
  if (typeof chrome === "undefined" || !chrome.storage) {
    console.error("Storage API not available");
    return;
  }
  chrome.storage.local.get(null, (items) => {
    const date = /* @__PURE__ */ new Date();
    const timestamp = date.toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const filename = `Moctale_Plus_Backup_${timestamp}.json`;
    let { episodeTracker, ...otherItems } = items;
    let formattedTracker = {};
    if (episodeTracker) {
      const tracker = episodeTracker;
      Object.keys(tracker).forEach((key) => {
        let val = tracker[key];
        if (typeof val === "string") {
          val = val.replace(/\n/g, ", ").trim();
        }
        formattedTracker[key] = val;
      });
    }
    const orderedData = {
      ...otherItems,
      // Only add if it exists, and force it to be the last key
      ...episodeTracker ? { episodeTracker: formattedTracker } : {}
    };
    const backupData = {
      meta: {
        version: "1.9.5",
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        author: "010101-sans",
        type: "MoctalePlus_Backup"
      },
      data: orderedData
      // Use the ordered object
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
};
const importBackup = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result;
        const parsed = JSON.parse(content);
        if (!parsed.data || !parsed.meta || parsed.meta.type !== "MoctalePlus_Backup") {
          throw new Error("Invalid Moctale Plus backup file");
        }
        if (chrome && chrome.storage) {
          chrome.storage.local.clear(() => {
            chrome.storage.local.set(parsed.data, () => {
              chrome.storage.local.set({ hasCompletedOnboarding: true });
              resolve(true);
            });
          });
        } else {
          reject(new Error("Storage API unavailable"));
        }
      } catch (err) {
        console.error("Import failed:", err);
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
};
const AutoBackupSettings = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [frequency, setFrequency] = reactExports.useState("none");
  const menuRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    chrome.storage.local.get(["backupFrequency"], (result) => {
      if (result.backupFrequency) {
        setFrequency(result.backupFrequency);
      }
    });
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSelect = (freq) => {
    setFrequency(freq);
    setIsOpen(false);
    chrome.storage.local.set({ backupFrequency: freq });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full", ref: menuRef, style: { height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "footer-btn auto-backup-btn",
        style: {
          width: "48px",
          height: "100%",
          padding: 0,
          // Remove inline background to let CSS handle hover states properly
          borderColor: isOpen ? "#22d3ee" : void 0,
          color: isOpen ? "#22d3ee" : void 0
        },
        title: `Auto Backup: ${frequency === "none" ? "Off" : frequency}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Timer1,
            {
              size: "20",
              variant: frequency !== "none" ? "Bold" : "Linear",
              color: frequency !== "none" || isOpen ? "#22d3ee" : "currentColor"
            }
          ),
          frequency !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            position: "absolute",
            top: "8px",
            right: "10px",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#22d3ee",
            boxShadow: "0 0 6px #22d3ee"
          } })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      bottom: "130%",
      // Push it up slightly more
      left: 0,
      width: "140px",
      background: "#18181b",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "8px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.6)",
      zIndex: 9999,
      // Max z-index
      overflow: "hidden",
      animation: "fadeIn 0.2s ease",
      display: "flex",
      flexDirection: "column"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "10px", color: "#71717a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", background: "#202023" }, children: "Backup Frequency" }),
      ["none", "daily", "weekly"].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleSelect(opt),
          type: "button",
          style: {
            width: "100%",
            textAlign: "left",
            padding: "10px 12px",
            fontSize: "12px",
            color: frequency === opt ? "#fff" : "#a1a1aa",
            background: frequency === opt ? "rgba(34, 211, 238, 0.1)" : "transparent",
            // Cyan tint for active
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.2s",
            outline: "none"
          },
          onMouseEnter: (e) => e.currentTarget.style.background = frequency === opt ? "rgba(34, 211, 238, 0.15)" : "rgba(255,255,255,0.05)",
          onMouseLeave: (e) => e.currentTarget.style.background = frequency === opt ? "rgba(34, 211, 238, 0.1)" : "transparent",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textTransform: "capitalize" }, children: opt }),
            frequency === opt && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee" } })
          ]
        },
        opt
      ))
    ] })
  ] });
};
export {
  AutoBackupSettings as A,
  CURRENT_VERSION as C,
  REPO_OWNER as R,
  REPO_NAME as a,
  exportBackup as e,
  importBackup as i,
  useSettings as u
};
