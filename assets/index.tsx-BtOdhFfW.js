import { j as jsxRuntimeExports, r as reactExports, R as React, a as clientExports, J as JSZip, E as ExcelJS, S as Shuffle, b as RefreshCircle, d as RefreshLeftSquare, T as TickSquare, e as Edit2, L as Lock, f as TickCircle, w, g as reactDomExports, t as toPng, k, u, h as a11yPlugin, m as mixPlugin, D as DataSet, N as Network, F as Fuse, _ as _e, i as Search, P as PaintBucket, C as CircleArrowDown, l as CircleArrowUp, n as ChartNoAxesColumnIncreasing, H as History, o as FileOutput, p as ExternalLink, M as MousePointer2, q as FileText, s as ListVideo, Z as Zap, v as CircleCheckBig, x as Palette, y as PanelRight, z as Download, A as Maximize, B as Dices, G as Link, I as EyeOff, U as User, K as Tv, O as Film, Q as UserCog, V as PenTool, W as Bookmark, X as Library, Y as Telescope, $ as Users, a0 as Megaphone, a1 as CalendarDays, a2 as Clock, a3 as Calendar, a4 as Star, a5 as Trophy, a6 as Smile, a7 as Layers, a8 as Ghost, a9 as Languages, aa as Globe, ab as Hash, ac as LayoutGrid, ad as Compass, ae as Settings, af as Network$1, ag as Command, ah as CornerDownLeft, ai as ArrowDown, aj as ArrowUp, ak as Timer1, al as MeshPhysicalMaterial, am as DoubleSide, an as Globe$1 } from "./vendor-C8JjCdYh.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    self.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
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
const LinkButton = ({ label, icon, url, links, variant = "default" }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  const isCompact = variant === "compact";
  const validLinks = links && links.length > 0 ? links : url ? [{ label, url }] : [];
  const isDropdownMode = validLinks.length > 1;
  const primaryUrl = validLinks[0]?.url || "#";
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const renderInnerContent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `
        flex-shrink-0 flex items-center justify-center text-white/80 
        ${isCompact ? "w-5 h-5" : "w-6 h-6 -mr-2"}
      `, children: React.isValidElement(icon) ? React.cloneElement(icon, {
      width: isCompact ? 18 : 20,
      height: isCompact ? 18 : 20
    }) : icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `
        flex-1 text-left font-medium text-[var(--mp-text-main)] group-hover:text-white transition-colors
        ${isCompact ? "text-xs leading-tight" : "text-sm leading-none mt-0.5"}
      `, children: label })
  ] });
  const baseClasses = `
    group flex items-center rounded-xl 
    bg-[#252833]/40 border border-transparent 
    hover:bg-white/10 hover:border-white/30
    transition-all duration-200 h-full w-full
    p-3 gap-2 relative cursor-pointer
  `;
  if (!isDropdownMode) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: primaryUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: baseClasses,
        children: renderInnerContent()
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: `${baseClasses} ${isOpen ? "bg-white/10 border-white/30" : ""}`,
        children: [
          renderInnerContent(),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              className: `text-white/50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" })
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "\n            absolute left-0 right-0 top-[calc(100%+8px)] z-50\n            flex flex-col overflow-hidden rounded-xl\n            border border-[var(--mp-border)]\n            bg-[var(--mp-bg-surface)]\n            shadow-xl backdrop-blur-md\n          ",
        children: validLinks.map((link, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: () => setIsOpen(false),
            className: "\n                flex items-center gap-3 px-4 py-3 text-sm\n                text-[var(--mp-text-main)]\n                hover:bg-[var(--mp-bg-layer)]\n                transition-colors\n                border-b border-[var(--mp-border)]\n                last:border-0\n              ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 flex items-center justify-center opacity-70", children: typeof link.icon === "string" ? getIcon(link.icon) : link.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1", children: link.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "w-3 h-3 opacity-40",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "15 3 21 3 21 9" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
                  ]
                }
              )
            ]
          },
          `${link.url}-${index}`
        ))
      }
    )
  ] });
};
const Footer = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full pt-3 mt-1 text-center border-t border-[var(--mp-border)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-[#555]", children: [
  "Powered by",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "hover:text-[#888] underline decoration-dotted", children: "Moctale Plus" }),
  " ",
  "by",
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noreferrer", className: "hover:text-[#888] underline decoration-dotted", children: "010101-sans" })
] }) });
const Icons$3 = {
  // Generic Beautiful Icons (Lucide Style)
  Database: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }),
  Anime: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }) }),
  Shield: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  Star: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) })
};
const PlatformSection = ({ title, type }) => {
  const queryTitleOnly = encodeURIComponent(title);
  const isSeries = type === "Series" || type === "Show";
  const makeLink = (label, iconSource, url) => ({
    label,
    icon: typeof iconSource === "string" ? getIcon(iconSource) : iconSource,
    url
  });
  const links = [
    // --- DATABASES ---
    {
      // Databases
      ...makeLink(
        "More Platforms",
        Icons$3.Database,
        `empty-link`
      ),
      links: [
        makeLink(
          `Google ${isSeries ? "Series" : "Movies"}`,
          "google",
          `https://www.google.com/search?q=${queryTitleOnly}+${isSeries ? "series" : "movie"}`
        ),
        makeLink(
          "IMDb",
          "imdb",
          `https://www.imdb.com/find/?s=tt&q=${queryTitleOnly}`
        ),
        makeLink(
          "themoviedatabase",
          "themoviedatabase",
          `https://www.themoviedb.org/search?query=${queryTitleOnly}`
        ),
        makeLink(
          "Letterboxd",
          "letterboxd",
          `https://letterboxd.com/search/${encodeURIComponent(queryTitleOnly)}/`
        ),
        makeLink(
          "Trakt",
          "trakt",
          `https://trakt.tv/search?query=${queryTitleOnly}`
        ),
        makeLink(
          "Simkl",
          "simkl",
          isSeries ? `https://simkl.com/search/?type=tv&q=${queryTitleOnly}` : `https://simkl.com/search/?type=movies&q=${queryTitleOnly}`
        ),
        ...isSeries ? [
          makeLink(
            "Serializd",
            "outline",
            `https://www.serializd.com/search?searchQuery=${queryTitleOnly}`
          )
        ] : []
      ]
    },
    // --- ANIME ---
    {
      // Primary: AniList
      ...makeLink(
        "Anime Platforms",
        Icons$3.Anime,
        `https://anilist.co/search/anime?search=${queryTitleOnly}`
      ),
      links: [
        makeLink(
          "Google Anime",
          "google",
          `https://www.google.com/search?q=${queryTitleOnly}+anime+${isSeries ? "series" : "anime"}`
        ),
        makeLink(
          "MyAnimeList",
          "myanimelist",
          `https://myanimelist.net/anime.php?q=${queryTitleOnly}&cat=anime`
        ),
        makeLink(
          "AniList",
          "anilist",
          `https://anilist.co/search/anime?search=${queryTitleOnly}`
        ),
        makeLink(
          "Kitsu",
          "kitsu",
          `https://kitsu.app/anime?text=${queryTitleOnly}`
        ),
        makeLink(
          "Simkl",
          "simkl",
          `https://simkl.com/search/?type=anime&q=${queryTitleOnly}`
        ),
        makeLink(
          "Anime Planet",
          "googleearth",
          `https://www.anime-planet.com/anime/all?name=${queryTitleOnly}`
        ),
        makeLink(
          "aniDB",
          Icons$3.Database,
          `https://anidb.net/anime/?adb.search=${queryTitleOnly}&do.update=Search&noalias=1`
        )
      ]
    },
    // --- Asian ---
    // {
    //   // Primary: AniList
    //   ...makeLink(
    //     'Asia',
    //     Icons.Play,
    //     `https://anilist.co/search/anime?search=${queryTitleOnly}`
    //   ),
    //   links: [
    //     makeLink(
    //       'Google Asian',
    //       'google',
    //       `https://www.google.com/search?q=${queryTitleOnly}+anime+${isSeries ? 'series' : 'anime'}`
    //     ),
    //     makeLink(
    //       'Viki (KDrama)',
    //       Icons.Play,
    //       `https://www.viki.com/search?q=${queryTitleOnly}`
    //     ),
    //     makeLink(
    //       'MyDramaList',
    //       Icons.Database,
    //       `https://mydramalist.com/search?q=${queryTitleOnly}`
    //     ),
    //   ]
    // },
    // --- STREAMING ---
    {
      // Primary: JustWatch
      ...makeLink(
        "OTT Platforms",
        "googletv",
        `https://www.justwatch.com/in/search?q=${queryTitleOnly}`
      ),
      links: [
        makeLink(
          "Google Where To Watch",
          "google",
          `https://www.google.com/search?q=${queryTitleOnly}+where+to+watch`
        ),
        makeLink(
          "JustWatch Where To Watch",
          "googlecolab",
          `https://www.justwatch.com/in/search?q=${queryTitleOnly}`
        ),
        makeLink(
          "Netflix",
          "netflix",
          `https://www.netflix.com/`
          // `https://www.netflix.com/search?q=${queryTitleOnly}`
        ),
        makeLink(
          "Amazon Prime",
          "prisma",
          `https://www.primevideo.com/search/ref=atv_nb_sug?ie=UTF8&phrase=${queryTitleOnly}`
        ),
        makeLink(
          "JioHotstar",
          Icons$3.Star,
          `https://www.hotstar.com/in/explore?search_query=${queryTitleOnly}`
        ),
        makeLink(
          "Apple TV+",
          "appletv",
          `https://tv.apple.com/us/search?term=${queryTitleOnly}`
        ),
        makeLink(
          "Crunchyroll",
          "crunchyroll",
          `https://www.crunchyroll.com/search?q=${queryTitleOnly}`
        ),
        makeLink(
          "YouTube",
          "youtube",
          `https://www.youtube.com/results?search_query=${queryTitleOnly}`
        )
      ]
    },
    // --- UTILITY ---
    {
      // Primary: DoesTheDogDie
      ...makeLink(
        "Safety & Utility",
        Icons$3.Shield,
        `https://www.doesthedogdie.com/search?q=${queryTitleOnly}`
      ),
      links: [
        makeLink(
          "Google Parents Guide",
          "google",
          `https://www.google.com/search?q=${queryTitleOnly}+parents+guide`
        ),
        makeLink(
          "DoesTheDogDie",
          "datadog",
          `https://www.google.com/search?q=${queryTitleOnly}+site%3Adoesthedogdie.com`
        ),
        makeLink(
          "Common Sense",
          "comicfury",
          `https://www.commonsensemedia.org/search/${encodeURIComponent(queryTitleOnly)}`
        ),
        makeLink(
          "Open Subtitles",
          "subtitleedit",
          `https://www.opensubtitles.org/en/search2/moviename-${queryTitleOnly}/sublanguageid-all`
        ),
        makeLink(
          "Blu-Ray (4K)",
          "discogs",
          `https://www.blu-ray.com/search/?quicksearch=1&quicksearch_keyword=${queryTitleOnly}`
        ),
        ...isSeries ? [
          makeLink(
            "Is It Cancelled?",
            "stopstalk",
            `https://www.ismyshowcancelled.com/search?q=${queryTitleOnly}`
          )
        ] : []
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-3 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[var(--mp-border)] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[var(--mp-text-main)] w-full border-b border-[var(--mp-border)] pl-2 pb-3 tracking-[0.1px]", children: "Platforms & Databases" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full gap-3", children: links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { ...link, variant: "compact" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Icons$2 = {
  Message: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) }),
  Image: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "21 15 16 10 5 21" })
  ] }),
  Book: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
  ] }),
  Pen: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2l7.5 8.6L12 19l-3 3-3-3 3.5-9.6L2 2z" })
  ] }),
  Bag: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] }),
  Star: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) })
};
const CommunitySection = ({ title, isAnime }) => {
  const queryTitle = encodeURIComponent(title);
  const context = isAnime ? "+anime" : "";
  const makeLink = (label, iconSource, url) => ({
    label,
    icon: typeof iconSource === "string" ? getIcon(iconSource) : iconSource,
    url
  });
  const links = [
    // --- FORUMS ---
    {
      // Primary: Reddit
      ...makeLink("Discussions & Forums", Icons$2.Message, ``),
      links: [
        makeLink("Reviews", "youtube", `https://www.youtube.com/results?search_query=${queryTitle}${context}+reviews+and+discussion`),
        makeLink("Reactions", "youtube", `https://www.youtube.com/results?search_query=${queryTitle}${context}+live reactions`),
        makeLink("Podcasts", "youtube", `https://www.youtube.com/results?search_query=${queryTitle}+discussion+podcast`),
        makeLink("Hidden Details", "youtube", `https://www.youtube.com/results?search_query=${queryTitle}+detailed+analysis+ending+explained+and+breakdown`),
        makeLink("Video Essay", "youtube", `https://www.youtube.com/results?search_query=${queryTitle}${context}+analysis+essay`),
        makeLink("Reddit", "reddit", `https://www.reddit.com/search/?q=${queryTitle}+reviews+and+discussion`),
        makeLink("Twitter / X", "x", `https://twitter.com/search?q=${queryTitle}+reviews+and+discussion&f=top`)
      ]
    },
    // --- Written REVIEWS ---
    {
      ...makeLink("Written Reviews", Icons$2.Star, ``),
      links: [
        makeLink("Google Reviews", "google", `https://www.google.com/search?q=${queryTitle}+reviews`),
        makeLink("Rotten Tomatoes", "rottentomatoes", `https://www.rottentomatoes.com/search?search=${queryTitle}`),
        makeLink("Metacritic", "metacritic", `https://www.metacritic.com/search/${queryTitle}`),
        makeLink("Review Monk", "rottentomatoes", `https://thereviewmonk.com/?s=${queryTitle}`)
      ]
    },
    // --- VISUALS ---
    {
      ...makeLink("Visuals & Trends", Icons$2.Image, ``),
      links: [
        makeLink("Google Images", "google", `https://www.google.com/search?q=${queryTitle}+offical+and+fan+artwork+and+posters&tbm=isch`),
        makeLink("Pinterest", "pinterest", `https://www.pinterest.com/search/pins/?q=${queryTitle}`),
        makeLink("ArtStation", Icons$2.Image, `https://www.artstation.com/search?sort_by=relevance&query=${queryTitle}`),
        makeLink("DeviantArt", Icons$2.Image, `https://www.deviantart.com/search?q=${queryTitle}`)
      ]
    },
    // --- LORE ---
    {
      // Primary: Not In The Book
      ...makeLink("Wikis, Trivia & Lore", Icons$2.Book, ``),
      links: [
        makeLink("Google Trivia", "google", `https://www.google.com/search?q=${queryTitle}+trivia+facts`),
        // Backup
        makeLink("IMCDb (Cars)", "circle", `https://www.imcdb.org/search.php?resultsStyle=asImages&sortBy=0&make=&model=&movie=${queryTitle}`),
        makeLink("IMFDb (Guns)", "unity", `https://www.imfdb.org/index.php?search=${queryTitle}&title=Special%3ASearch&fulltext=Search`),
        makeLink("NotInTheBook", "wikibooks", `https://thatwasnotinthebook.com/search?q=${queryTitle}`),
        makeLink("Wikipedia", "wikipedia", `https://en.wikipedia.org/wiki/Special:Search?go=Go&search=${queryTitle}&ns0=1`),
        makeLink("Wiki Data", "alwaysdata", `https://www.wikidata.org/w/index.php?search=${queryTitle}&language=en&title=Special%3ASearch&ns0=1`),
        makeLink("TV Tropes", Icons$2.Book, `https://tvtropes.org/pmwiki/search_result.php#gsc.tab=0&gsc.q=${queryTitle}&gsc.sort=`),
        makeLink("Fandom Wiki", "fandom", `https://community.fandom.com/wiki/Special:Search?query=${queryTitle}`)
      ]
    },
    // --- FICTION ---
    {
      // Primary: AO3
      ...makeLink("Fan Fiction", Icons$2.Pen, ``),
      links: [
        makeLink("Google FanFic", "google", `https://www.google.com/search?q=${queryTitle}+fanfiction`),
        // Backup
        makeLink("Wattpad", Icons$2.Pen, `https://www.wattpad.com/search/${queryTitle}`),
        makeLink("FanFiction", Icons$2.Pen, `https://www.fanfiction.net/search/?keywords=${queryTitle}&ready=1&type=story`),
        makeLink("AO3", Icons$2.Pen, `https://archiveofourown.org/works/search?work_search[query]=${queryTitle}`)
      ]
    },
    // --- MERCH ---
    {
      // Primary: Redbubble
      ...makeLink("Merch (Global)", Icons$2.Bag, `https://www.redbubble.com/search?q=${queryTitle}`),
      links: [
        makeLink("Google Shopping", "google", `https://www.google.com/search?q=${queryTitle}+merch+t-shirt&tbm=shop`),
        // Backup
        makeLink("Souled Store (In)", Icons$2.Bag, `https://www.thesouledstore.com/search?q=${queryTitle}`)
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-3 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[var(--mp-border)] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[var(--mp-text-main)] w-full border-b border-[var(--mp-border)] pl-2 pb-3 tracking-[0.1px]", children: "Community & Fandom" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full gap-3", children: links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { ...link, variant: "compact" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Icons$1 = {
  // Beautiful Outline Icons
  Chart: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "20", x2: "6", y2: "14" })
  ] }),
  Note: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18V5l12-2v13" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "16", r: "3" })
  ] }),
  File: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "10 9 9 9 8 9" })
  ] }),
  Camera: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "13", r: "4" })
  ] }),
  Map: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("map", { name: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "6", x2: "16", y2: "22" })
  ] }),
  Video: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "23 7 16 12 23 17 23 7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" })
  ] }),
  Mojo: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2v20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
  ] }),
  Sacnilk: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3v18h18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 9-5 5-4-4-3 3" })
  ] }),
  Hungama: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "10 8 16 12 10 16 10 8" })
  ] }),
  Numbers: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "3", x2: "14", y2: "21" })
  ] })
};
const ProductionSection = ({ title, type }) => {
  const query = encodeURIComponent(title);
  const isMovie = type === "Movie";
  const makeLink = (label, icon, url) => ({
    label,
    icon,
    url
  });
  const links = [
    // --- FINANCIALS ---
    ...isMovie ? [{
      // Primary: Sacnilk
      ...makeLink("Box Office", Icons$1.Chart, `https://www.sacnilk.com/Search.aspx?search_txt=${query}`),
      links: [
        makeLink("Google Boxoffice", "google", `https://www.google.com/search?q=${query}+box+office+collection+report`),
        makeLink("Box Office India", Icons$1.Chart, `https://www.boxofficeindia.com/search.php?search=${query}`),
        makeLink("Box Office Mojo", Icons$1.Mojo, `https://www.boxofficemojo.com/search/?q=${query}`),
        makeLink("Sacnilk Verdict", Icons$1.Sacnilk, `https://www.google.com/search?q=${query}+box+office+collection+site:sacnilk.com`),
        makeLink("Bollywood Hungama", Icons$1.Hungama, `https://www.google.com/search?q=${query}+box+office+site:bollywoodhungama.com`),
        makeLink("The Numbers", Icons$1.Numbers, `https://www.the-numbers.com/search?search_term=${query}`),
        makeLink("Wiki Budget", "wikipedia", `https://en.wikipedia.org/wiki/Special:Search?search=${query}+film+box+office`)
      ]
    }] : [],
    // --- MUSIC ---
    {
      // Primary: Tunefind
      ...makeLink("Songs & OSTs", Icons$1.Note, `https://www.tunefind.com/search/site?q=${query}`),
      links: [
        makeLink("Google Songs", "google", `https://www.google.com/search?q=${query}+soundtrack+list`),
        makeLink("Spotify", "spotify", `https://open.spotify.com/search/${query}`),
        makeLink("YouTube Music", "youtubemusic", `https://music.youtube.com/search?q=${query}`),
        makeLink("Apple Music", "applemusic", `https://music.apple.com/us/search?term=${query}`)
      ]
    },
    // --- SCRIPTS ---
    {
      // Primary: Script Slug
      ...makeLink("Screenplay", Icons$1.File, ``),
      links: [
        makeLink("Google PDF", "google", `https://www.google.com/search?q=${query}+screenplay+script+filetype:pdf`),
        // Backup
        makeLink("Scrite", Icons$1.File, `https://www.google.com/search?q=site:scrite.io+${query}`),
        makeLink("Script Slug", Icons$1.File, `https://www.scriptslug.com/search?q=${query}`)
      ]
    },
    // --- VISUALS ---
    {
      // Primary: Film-Grab
      ...makeLink("Cinematography", Icons$1.Camera, ``),
      links: [
        makeLink("Google Shots", "google", `https://www.google.com/search?q=${query}+cinematography+stills&tbm=isch`),
        makeLink("Film Grab", "google", `https://film-grab.com/?s=${title}`),
        makeLink("Shot.Cafe", Icons$1.Camera, `https://shot.cafe/search/movie/${query}`),
        makeLink("ShotDeck", Icons$1.Camera, `https://shotdeck.com/search?q=${query}`),
        makeLink("MovieBarcode", Icons$1.Camera, `https://moviebarcode.tumblr.com/search/${query}`),
        makeLink("Color Palette", Icons$1.Camera, `http://colormind.io/search?q=${query}`)
      ]
    },
    // --- TECH & LOCATIONS ---
    {
      // Primary: Movie-Locations
      ...makeLink("Locations & Tech", Icons$1.Map, `https://www.google.com/search?q=site:movie-locations.com+${query}`),
      links: [
        makeLink("Google Locations", "google", `https://www.google.com/search?q=${query}+filming+locations`),
        // Backup
        makeLink("Behind The Scenes", Icons$1.Video, `https://www.youtube.com/results?search_query=${query}+making+and+behind+the+scenes`),
        makeLink("Editing Analysis", Icons$1.Video, `https://www.youtube.com/results?search_query=${query}+editing+analysis`),
        makeLink("Wiki Data", "alwaysdata", `https://www.wikidata.org/w/index.php?search=${query}&language=en&title=Special%3ASearch&ns0=1`),
        makeLink("ShotOnWhat", Icons$1.Camera, `https://shotonwhat.com/?s=${query}`),
        makeLink("IMDb Tech Specs", "imdb", `https://www.imdb.com/find/?s=tt&q=${query}`)
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start px-3 py-5 gap-4 w-full md:bg-[#1B1B1B] md:border md:border-[var(--mp-border)] rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-medium text-[var(--mp-text-main)] w-full border-b border-[var(--mp-border)] pl-2 pb-3 tracking-[0.1px]", children: "Production & Analysis" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full gap-3", children: links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { ...link, variant: "compact" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const getPageMediaInfo = () => {
  try {
    let titleEl = document.querySelector("h1.text-4xl, h1.text-5xl, h1.lg\\:text-6xl");
    if (!titleEl) {
      titleEl = document.querySelector("h1.text-\\[20px\\], h1.lg\\:text-\\[28px\\]");
    }
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
    const metaEl = document.querySelector("div.text-\\[14px\\].text-\\[\\#ABABAB\\], p.text-\\[\\#C6C6C6\\]");
    const metaText = metaEl?.textContent?.trim() || "";
    let year = "";
    let type = "unknown";
    if (metaText) {
      const yearMatch = metaText.match(/\b(19|20)\d{2}\b/);
      if (yearMatch) year = yearMatch[0];
      const lowerMeta = metaText.toLowerCase();
      if (lowerMeta.includes("movie")) type = "movie";
      else if (lowerMeta.includes("show") || lowerMeta.includes("series") || lowerMeta.includes("season")) type = "tv";
    }
    let poster = "";
    const imgCandidates = Array.from(document.querySelectorAll('img[src*="/images/"]'));
    const posterImg = imgCandidates.find((img) => {
      const rect = img.getBoundingClientRect();
      return rect.width > 50 && rect.height > rect.width && rect.top < 600;
    });
    if (posterImg) poster = posterImg.src;
    const genres = [];
    document.querySelectorAll('a[href^="/genre/"]').forEach((el) => {
      const g = el.textContent?.trim();
      if (g && g.length > 2) genres.push(g);
    });
    let isAnime = false;
    const animeKeywords = ["anime", "donghua", "seinen", "shonen", "shojo", "josei", "isekai", "mecha", "animation"];
    if (genres.some((g) => animeKeywords.some((k2) => g.toLowerCase().includes(k2)))) isAnime = true;
    const countryNode = document.querySelector('a[href^="/country/"]');
    if (countryNode?.textContent?.trim().toLowerCase() === "japan") {
      if (genres.some((g) => g.toLowerCase().includes("animation"))) isAnime = true;
    }
    if (isAnime) type = "anime";
    if (self.location.href.includes("/person/")) type = "person";
    return { title, year, isAnime, type, poster, genres };
  } catch (e) {
    console.error("[Moctale+] Error scraping page info:", e);
    return null;
  }
};
const SidebarApp = ({ mediaInfo, settings }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  if (!settings.enableSideBar) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full mt-6 animate-in fade-in slide-in-from-top-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-15deg); } 100% { transform: translateX(200%) skewX(-15deg); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 10px -2px var(--mp-accent), inset 0 1px 1px rgba(255,255,255,0.4); } 50% { box-shadow: 0 0 20px 0px var(--mp-accent), inset 0 1px 1px rgba(255,255,255,0.4); } }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        style: {
          backgroundColor: "var(--mp-accent)",
          color: "var(--mp-dynamic-accent-text, #fff)"
        },
        className: "group relative w-full max-w-sm h-12 rounded-full overflow-hidden flex items-center justify-center gap-2.5 font-bold tracking-wide border border-white/20 transition-all duration-300 animate-[pulse-glow_3s_ease-in-out_infinite] hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none",
              style: { transform: "translateX(-100%)", animation: "shimmer 3s infinite linear" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative z-20 transition-transform duration-500 drop-shadow-sm ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-20 text-sm font-bold shadow-black drop-shadow-sm", children: isOpen ? "Close Sidebar Plus" : "Open Sidebar Plus" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 mb-2 text-[10px] tracking-[0.2em] font-bold opacity-50", style: { color: "var(--mp-text-muted)" }, children: [
      "Powered by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "hover:underline", children: "Moctale Plus" }),
      " by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "hover:underline", children: "010101-sans" })
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col gap-6 mt-2 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformSection, { ...mediaInfo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommunitySection, { ...mediaInfo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductionSection, { ...mediaInfo })
    ] })
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
const SpinnerIcon$1 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
] });
const getTimestamp$1 = () => {
  const now = /* @__PURE__ */ new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const HH = String(now.getHours()).padStart(2, "0");
  const MM = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${dd}_${mm}_${yyyy}_${HH}_${MM}_${ss}`;
};
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
const generateCSV$1 = (data, collectionName) => {
  return [
    `# Collection: ${collectionName}`,
    `# Powered by Moctale Plus by 010101-sans`,
    ["Title", "Year", "Type"].join(","),
    ...data.map((item) => `"${item.title.replace(/"/g, '""')}",${item.year},${item.type}`)
  ].join("\n");
};
const generateMarkdown$1 = (data, collectionName) => {
  let md = `# ${collectionName}

`;
  md += `> Powered by [Moctale Plus](https://github.com/010101-sans/moctale-plus) by 010101-sans

`;
  md += `| Title | Year | Type |
|---|---|---|
`;
  data.forEach((item) => {
    md += `| ${item.title} | ${item.year} | ${item.type} |
`;
  });
  return md;
};
const generateTXT$1 = (data, collectionName) => {
  let txt = `Collection: ${collectionName}
`;
  txt += `Powered by Moctale Plus by 010101-sans
`;
  txt += `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
  txt += `---------------------------

`;
  data.forEach((item) => {
    txt += `[${item.year}] ${item.title} (${item.type})
`;
  });
  return txt;
};
const generateHTML$1 = (data, collectionName) => {
  const rows = data.map(
    (item) => `    <tr>
      <td>${item.title}</td>
      <td>${item.year}</td>
      <td>${item.type}</td>
    </tr>`
  ).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${collectionName}</title>
<style>
  body { font-family: system-ui, sans-serif; padding: 20px; background: #111; color: #eee; }
  table { border-collapse: collapse; width: 100%; max-width: 800px; margin: auto; }
  th, td { border: 1px solid #333; padding: 8px; text-align: left; }
  th { background: #222; }
  .footer { text-align: center; margin-top: 20px; font-size: 0.8rem; color: #888; }
  a { color: #aaa; text-decoration: none; border-bottom: 1px dotted #aaa; }
</style>
</head>
<body>
  <h1 style="text-align:center">${collectionName}</h1>
  <table>
    <thead>
      <tr><th>Title</th><th>Year</th><th>Type</th></tr>
    </thead>
    <tbody>
${rows}
    </tbody>
  </table>
  <div class="footer">
    Powered by <a href="https://github.com/010101-sans/moctale-plus" target="_blank">Moctale Plus by 010101-sans</a>
  </div>
</body>
</html>`;
};
const generateJSON$1 = (data, collectionName) => {
  const output = {
    meta: {
      collection: collectionName,
      generatedBy: "Moctale Plus by 010101-sans",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    },
    items: data
  };
  return JSON.stringify(output, null, 2);
};
const downloadBundle$1 = async (data, rawName) => {
  const timestamp = getTimestamp$1();
  const safeBaseName = rawName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").trim().replace(/\s+/g, "_");
  const finalName = `${safeBaseName}_Collection_${timestamp}`;
  const zip = new JSZip();
  const folder = zip.folder(finalName) || zip;
  folder.file(`${finalName}.csv`, generateCSV$1(data, rawName));
  folder.file(`${finalName}.json`, generateJSON$1(data, rawName));
  folder.file(`${finalName}.md`, generateMarkdown$1(data, rawName));
  folder.file(`${finalName}.txt`, generateTXT$1(data, rawName));
  folder.file(`${finalName}.html`, generateHTML$1(data, rawName));
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Moctale Plus by 010101-sans";
  workbook.lastModifiedBy = "Moctale Plus";
  const sheet = workbook.addWorksheet("Collection");
  sheet.mergeCells("A1:C1");
  sheet.getCell("A1").value = `Collection: ${rawName}`;
  sheet.getCell("A1").font = { size: 14, bold: true };
  sheet.mergeCells("A2:C2");
  sheet.getCell("A2").value = "Powered by Moctale Plus by 010101-sans";
  sheet.getCell("A2").font = { italic: true, color: { argb: "FF888888" } };
  sheet.getRow(4).values = ["Title", "Year", "Type"];
  sheet.getRow(4).font = { bold: true };
  sheet.columns = [
    { key: "title", width: 40 },
    { key: "year", width: 10 },
    { key: "type", width: 15 }
  ];
  data.forEach((item) => {
    sheet.addRow([item.title, item.year, item.type]);
  });
  const excelBuffer = await workbook.xlsx.writeBuffer();
  folder.file(`${finalName}.xlsx`, excelBuffer);
  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${finalName}.zip`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
};
const ExportButton = () => {
  const [loading, setLoading] = reactExports.useState(false);
  const handleExport = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const data = scrapeCollectionData();
      if (data && data.length > 0) {
        const titleEl = document.querySelector("h1.text-lg.lg\\:text-2xl");
        const rawName = titleEl?.textContent?.trim() || "Moctale_Collection";
        await downloadBundle$1(data, rawName);
      }
    } catch (error) {
      console.error("[Moctale+] Export Failed", error);
      alert("Failed to generate export bundle. See console.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleExport,
      disabled: loading,
      className: "\n        h-10 px-3 ml-2 rounded-md\n        inline-flex items-center justify-center gap-2\n        transition-colors duration-200\n        focus:outline-none focus:ring-1\n        bg-[var(--mp-bg-layer)] hover:bg-[#252525] focus:ring-[#404040]\n        cursor-pointer\n        disabled:opacity-70 disabled:cursor-wait\n      ",
      title: "Export this Collection as a ZIP bundle",
      children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerIcon$1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: loading ? "Bundling..." : "Export Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-[var(--mp-text-muted)] leading-none whitespace-nowrap", children: [
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
const SpinnerIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
] });
const getTimestamp = () => {
  const now = /* @__PURE__ */ new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const HH = String(now.getHours()).padStart(2, "0");
  const MM = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${dd}_${mm}_${yyyy}_${HH}_${MM}_${ss}`;
};
const scrapeMyCollectionData = () => {
  let candidates = Array.from(document.querySelectorAll('a[href^="/content/"]'));
  if (candidates.length === 0) {
    candidates = Array.from(document.querySelectorAll('div[role="link"]'));
  }
  if (candidates.length === 0) {
    alert("[Moctale+] No items found. Please wait for the collection to load or scroll down.");
    return [];
  }
  const items = [];
  candidates.forEach((card) => {
    const titleNode = card.querySelector("h3");
    const rawTitle = titleNode?.textContent?.trim() || card.getAttribute("aria-label") || "Unknown Title";
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
const generateCSV = (data, collectionName) => {
  return [
    `# Collection: ${collectionName}`,
    `# Powered by Moctale Plus by 010101-sans`,
    ["Title", "Year", "Type"].join(","),
    ...data.map((item) => `"${item.title.replace(/"/g, '""')}",${item.year},${item.type}`)
  ].join("\n");
};
const generateMarkdown = (data, collectionName) => {
  let md = `# ${collectionName}

`;
  md += `> Powered by [Moctale Plus](https://github.com/010101-sans/moctale-plus) by 010101-sans

`;
  md += `| Title | Year | Type |
|---|---|---|
`;
  data.forEach((item) => {
    md += `| ${item.title} | ${item.year} | ${item.type} |
`;
  });
  return md;
};
const generateTXT = (data, collectionName) => {
  let txt = `Collection: ${collectionName}
`;
  txt += `Powered by Moctale Plus by 010101-sans
`;
  txt += `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
  txt += `---------------------------

`;
  data.forEach((item) => {
    txt += `[${item.year}] ${item.title} (${item.type})
`;
  });
  return txt;
};
const generateHTML = (data, collectionName) => {
  const rows = data.map(
    (item) => `    <tr>
      <td>${item.title}</td>
      <td>${item.year}</td>
      <td>${item.type}</td>
    </tr>`
  ).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${collectionName}</title>
<style>
  body { font-family: system-ui, sans-serif; padding: 20px; background: #111; color: #eee; }
  table { border-collapse: collapse; width: 100%; max-width: 800px; margin: auto; }
  th, td { border: 1px solid #333; padding: 8px; text-align: left; }
  th { background: #222; }
  .footer { text-align: center; margin-top: 20px; font-size: 0.8rem; color: #888; }
  a { color: #aaa; text-decoration: none; border-bottom: 1px dotted #aaa; }
</style>
</head>
<body>
  <h1 style="text-align:center">${collectionName}</h1>
  <table>
    <thead>
      <tr><th>Title</th><th>Year</th><th>Type</th></tr>
    </thead>
    <tbody>
${rows}
    </tbody>
  </table>
  <div class="footer">
    Powered by <a href="https://github.com/010101-sans/moctale-plus" target="_blank">Moctale Plus by 010101-sans</a>
  </div>
</body>
</html>`;
};
const generateJSON = (data, collectionName) => {
  const output = {
    meta: {
      collection: collectionName,
      generatedBy: "Moctale Plus by 010101-sans",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    },
    items: data
  };
  return JSON.stringify(output, null, 2);
};
const downloadBundle = async (data, rawName) => {
  const timestamp = getTimestamp();
  const safeBaseName = rawName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").trim().replace(/\s+/g, "_");
  const finalName = `${safeBaseName}_${timestamp}`;
  const zip = new JSZip();
  const folder = zip.folder(finalName) || zip;
  folder.file(`${finalName}.csv`, generateCSV(data, rawName));
  folder.file(`${finalName}.json`, generateJSON(data, rawName));
  folder.file(`${finalName}.md`, generateMarkdown(data, rawName));
  folder.file(`${finalName}.txt`, generateTXT(data, rawName));
  folder.file(`${finalName}.html`, generateHTML(data, rawName));
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Moctale Plus by 010101-sans";
  workbook.lastModifiedBy = "Moctale Plus";
  const sheet = workbook.addWorksheet("Collection");
  sheet.mergeCells("A1:C1");
  sheet.getCell("A1").value = `Collection: ${rawName}`;
  sheet.getCell("A1").font = { size: 14, bold: true };
  sheet.mergeCells("A2:C2");
  sheet.getCell("A2").value = "Powered by Moctale Plus by 010101-sans";
  sheet.getCell("A2").font = { italic: true, color: { argb: "FF888888" } };
  sheet.getRow(4).values = ["Title", "Year", "Type"];
  sheet.getRow(4).font = { bold: true };
  sheet.columns = [
    { key: "title", width: 40 },
    { key: "year", width: 10 },
    { key: "type", width: 15 }
  ];
  data.forEach((item) => {
    sheet.addRow([item.title, item.year, item.type]);
  });
  const excelBuffer = await workbook.xlsx.writeBuffer();
  folder.file(`${finalName}.xlsx`, excelBuffer);
  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${finalName}.zip`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
};
const MyCollectionExportButton = () => {
  const [loading, setLoading] = reactExports.useState(false);
  const handleExport = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const data = scrapeMyCollectionData();
      if (data && data.length > 0) {
        const titleEl = document.querySelector("h1.text-xl.lg\\:text-2xl.font-bold");
        const rawName = titleEl?.textContent?.trim() || "My_Moctale_Collection";
        await downloadBundle(data, rawName);
      }
    } catch (error) {
      console.error("[Moctale+] Export Failed", error);
      alert("Failed to generate export bundle. See console.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleExport,
      disabled: loading,
      className: "\n        h-10 px-3 ml-2 rounded-md\n        inline-flex items-center justify-center gap-2\n        transition-colors duration-200\n        focus:outline-none focus:ring-1\n        bg-[var(--mp-bg-layer)] hover:bg-[#252525] focus:ring-[#404040]\n        cursor-pointer\n        disabled:opacity-70 disabled:cursor-wait\n      ",
      title: "Export this Collection as a ZIP bundle",
      children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white leading-none", children: loading ? "Bundling..." : "Export Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-[var(--mp-text-muted)] leading-none whitespace-nowrap", children: [
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
const LoaderIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "none", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
] });
const PoweredBySubtext = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-[var(--mp-text-muted)] leading-none whitespace-nowrap", children: [
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
                bg-[var(--mp-bg-layer)] hover:bg-[#252525] focus:ring-[#404040]
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
      className: "\n                h-10 px-3 ml-4 rounded-md\n                inline-flex items-center justify-center gap-2\n                transition-colors duration-200\n                focus:outline-none focus:ring-1\n                bg-[var(--mp-bg-layer)] hover:bg-[#252525] focus:ring-[#404040]\n                cursor-pointer shadow-sm group\n            ",
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
  '[class*="text-[var(--mp-text-muted)]"][class*="text-sm"]',
  '.relative [class*="text-[var(--mp-text-muted)]"]'
];
let activeKeywords = [];
let observer$7 = null;
let scanTimeout = null;
const getRiskPattern = () => {
  const safeKeywords = activeKeywords.map((k2) => k2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
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
  activeKeywords = customKeywords.map((k2) => k2.trim()).filter((k2) => k2.length > 0);
  if (activeKeywords.length === 0) activeKeywords = DEFAULT_RISK_KEYWORDS;
  console.log(`[Moctale+] Spoiler Shield: ACTIVE (${activeKeywords.length} keywords) 🛡️`);
  scanTargetZones();
  if (observer$7) observer$7.disconnect();
  observer$7 = new MutationObserver((mutations) => {
    if (!mutations.some((m) => m.addedNodes.length > 0)) return;
    if (scanTimeout) clearTimeout(scanTimeout);
    scanTimeout = setTimeout(scanTargetZones, 800);
  });
  observer$7.observe(document.body, { childList: true, subtree: true });
};
const stopSpoilerShield = () => {
  if (observer$7) observer$7.disconnect();
  observer$7 = null;
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
const CURRENT_VERSION = "2.8.0";
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
  enableSideBar: true,
  enableCollectionExport: true,
  enableContextMenu: true,
  enableShortcuts: false,
  // feature disabled
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
  enableImageDownloader: true,
  enableDynamicTheme: true,
  enableLocalTracker: true,
  // Graph View
  enableGraphView: true,
  graph_gravity: -80,
  graph_springLength: 80,
  graph_springConstant: 0.08,
  graph_damping: 0.9,
  graph_nodeScale: 1,
  graph_fontSize: 10,
  graph_edgeOpacity: 0.3,
  // End of Graph View
  enableFamiliarFaces: true,
  enableThemePainter: false
};
const useSettings = () => {
  const [settings, setSettings] = reactExports.useState(defaultSettings);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof chrome === "undefined" || !chrome.storage || !chrome.runtime?.id) {
      setSettings({ ...defaultSettings, reviewTemplates: DEFAULT_TEMPLATES });
      setLoading(false);
      return;
    }
    const fetchSettings = () => {
      try {
        chrome.storage.local.get(null, (items) => {
          if (chrome.runtime.lastError) {
            setLoading(false);
            return;
          }
          let rawStored = { ...items };
          if (items.settings) {
            rawStored = { ...items, ...items.settings };
          }
          const stored = rawStored;
          const needsUpdate = !stored.reviewTemplates || stored.reviewTemplates.length === 0 || stored.reviewTemplates.length <= 3 && stored.reviewTemplates[0].id === "t1";
          if (needsUpdate) {
            stored.reviewTemplates = DEFAULT_TEMPLATES;
            stored.enableReviewTemplates = true;
            try {
              chrome.storage.local.set({
                reviewTemplates: DEFAULT_TEMPLATES,
                enableReviewTemplates: true
              });
            } catch (e) {
            }
          }
          setSettings((prev) => ({ ...prev, ...stored }));
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
      }
    };
    fetchSettings();
    const listener = (changes, area) => {
      if (area === "local") {
        setSettings((prev) => {
          const next = { ...prev };
          for (const key in changes) {
            if (key in next) {
              next[key] = changes[key].newValue;
            }
          }
          return next;
        });
      }
    };
    try {
      chrome.storage.onChanged.addListener(listener);
    } catch (e) {
    }
    return () => {
      try {
        if (chrome.runtime?.id) {
          chrome.storage.onChanged.removeListener(listener);
        }
      } catch (e) {
      }
    };
  }, []);
  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    if (typeof chrome !== "undefined" && chrome.storage && chrome.runtime?.id) {
      try {
        chrome.storage.local.set({ [key]: value });
      } catch (e) {
      }
    }
  };
  return { settings, updateSetting, loading };
};
const TemplateIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-[var(--mp-accent)]", children: [
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
                    bg-[var(--mp-bg-surface)]/90 backdrop-blur-xl 
                    border transition-all duration-300 group z-10
                    text-xs font-medium rounded-full 
                    ${isOpen ? "border-[#8b5cf6] shadow-[0_0_16px_rgba(139,92,246,0.32)] bg-[var(--mp-bg-layer)] text-white" : "border-[var(--mp-border)] hover:border-[#8b5cf6]/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)] text-white/90 hover:bg-[var(--mp-bg-layer)]"}
                `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateIcon, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:text-[#e9d8fd] transition-colors no-spoiler-shield", children: "Review Templates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-transform duration-300 text-white/50 group-hover:text-[var(--mp-accent)] ${isOpen ? "rotate-180" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {}) })
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
          className: "text-[10px] font-medium text-white/50 hover:text-[var(--mp-accent)] underline decoration-[#8b5cf6]/30 hover:decoration-[#8b5cf6] transition-all flex items-center gap-0.5 no-spoiler-shield",
          children: "Moctale Plus"
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-[calc(100%-18px)] left-0 mt-3 w-[600px] bg-[var(--mp-bg-surface)] border border-[var(--mp-border)] rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-2xl ring-1 ring-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-white/5 bg-gradient-to-r from-[#9f7aea]/10 to-[#6d28d9]/10 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-[#e9d8fd]/70 uppercase tracking-widest flex items-center gap-2 no-spoiler-shield", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--mp-accent)] shadow-[0_0_8px_rgba(139,92,246,0.8)]" }),
          editingId ? editingId === "new" ? "New Template" : "Edit Template" : "Select Template"
        ] }),
        !editingId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: startCreate,
            className: "flex items-center gap-1.5 px-2 py-1 bg-[var(--mp-accent)]/10 hover:bg-[var(--mp-accent)]/20 border border-[#8b5cf6]/30 rounded text-[10px] text-[#e9d8fd] transition-all hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] no-spoiler-shield",
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
            className: `p-3 custom-scrollbar bg-[var(--mp-bg-surface)] overflow-y-auto transition-opacity duration-200 ${editingId ? "opacity-30 pointer-events-none grayscale" : "opacity-100"}`,
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
                      className: "absolute top-1.5 right-1.5 p-1.5 text-white/20 hover:text-[var(--mp-accent)] hover:bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all z-20",
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs font-medium text-[var(--mp-text-muted)] no-spoiler-shield", children: "No templates found." })
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
                  className: "flex-1 bg-black/40 border border-[var(--mp-border)] rounded px-2 py-1.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/20 transition-all",
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
                className: "flex-1 bg-black/40 border border-[var(--mp-border)] rounded p-2 text-xs text-white/80 resize-none focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/20 font-mono custom-scrollbar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: cancelEdit, className: "px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/40 hover:text-white transition-colors", children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveEdit, className: "flex items-center gap-1.5 px-4 py-1.5 bg-[var(--mp-accent)] hover:bg-[#7c3aed] text-white rounded text-[10px] font-bold uppercase tracking-wide shadow-lg shadow-[#8b5cf6]/20 transition-all active:scale-95", children: "Save" })
            ] })
          ] })
        ) : (
          // --- PREVIEW MODE ---
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[var(--mp-accent)]/90 mb-2 uppercase font-bold tracking-wider flex items-center gap-2 no-spoiler-shield", children: [
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
const SEL = {
  // Main Content Buttons
  BTN_WATCHED: 'button[aria-label="Watched"]',
  BTN_UNWATCHED: 'button[aria-label="Mark as Watched"], button[aria-label="Mark all Seasons Watched"]',
  // Season Card Buttons
  SEASON_EYE_BTN: 'button[aria-label*="season"]',
  SEASON_CARD: 'div[role="button"][aria-label^="View details for"]',
  // Fallback if aria-label is missing on card (common on some layouts)
  SEASON_CARD_FALLBACK: "div.flex.flex-col.p-3.gap-3.border",
  // Dialog Components
  DIALOG_TITLE: "h3#dialog-title",
  DIALOG_CONFIRM_BTN: "button.text-red-500"
};
let isInternalChange = false;
let currentSeasonContext = null;
const clickButton = (btn) => {
  isInternalChange = true;
  btn.click();
  setTimeout(() => {
    isInternalChange = false;
  }, 800);
};
const handleDialog = (expectedTitleKeyword) => {
  let attempts = 0;
  const checkInterval = setInterval(() => {
    attempts++;
    if (attempts > 30) {
      clearInterval(checkInterval);
      return;
    }
    const titles = Array.from(document.querySelectorAll(SEL.DIALOG_TITLE));
    const targetTitle = titles.find((t) => t.textContent?.includes(expectedTitleKeyword));
    if (targetTitle) {
      const container = targetTitle.closest("div.relative.w-\\[90\\%\\]");
      if (container) {
        const confirmBtn = container.querySelector(SEL.DIALOG_CONFIRM_BTN);
        if (confirmBtn) {
          clearInterval(checkInterval);
          clickButton(confirmBtn);
        }
      }
    }
  }, 50);
};
const getCleanContentId = () => {
  return self.location.pathname.split("/").filter(Boolean).pop() || "";
};
const WatchSync = {
  // 1. SYNC: MAIN CONTENT
  setNativeStatus: (shouldBeWatched) => {
    const watchedBtn = document.querySelector(SEL.BTN_WATCHED);
    const unwatchedBtn = document.querySelector(SEL.BTN_UNWATCHED);
    if (shouldBeWatched) {
      if (unwatchedBtn) clickButton(unwatchedBtn);
    } else {
      if (watchedBtn) {
        clickButton(watchedBtn);
        handleDialog("Unwatch");
      }
    }
  },
  // 2. SYNC: SPECIFIC SEASON CARD
  setSeasonNativeStatus: (seasonContainer, shouldBeWatched) => {
    const btn = seasonContainer.querySelector(SEL.SEASON_EYE_BTN);
    if (!btn) return;
    const label = (btn.getAttribute("aria-label") || "").toLowerCase();
    const isCurrentlyWatched = label.includes("remove");
    if (shouldBeWatched && !isCurrentlyWatched) {
      clickButton(btn);
    } else if (!shouldBeWatched && isCurrentlyWatched) {
      const match = label.match(/season\s+(\d+)/);
      if (match) currentSeasonContext = match[1];
      clickButton(btn);
      handleDialog("Remove Season");
    }
  },
  // 3. LOGIC: MARK ALL SEASONS LOCAL (With DOM Retry)
  markAllSeasonsLocal: () => {
    let attempts = 0;
    const maxAttempts = 8;
    const runMarking = () => {
      attempts++;
      let seasonCards = document.querySelectorAll(SEL.SEASON_CARD);
      if (seasonCards.length === 0) {
        seasonCards = document.querySelectorAll(SEL.SEASON_CARD_FALLBACK);
      }
      if (seasonCards.length > 0 || attempts >= maxAttempts) {
        if (seasonCards.length === 0) return;
        const showId = getCleanContentId();
        if (!showId) return;
        chrome.storage.local.get(["episodeTracker"], (res) => {
          const data = res.episodeTracker || {};
          if (!data[showId]) data[showId] = {};
          let updatesMade = false;
          seasonCards.forEach((card) => {
            let totalEpisodes = 0;
            const episodeTextNode = Array.from(card.querySelectorAll("span")).find(
              (span) => span.textContent?.includes("Episodes")
            );
            if (episodeTextNode) {
              const epMatch = episodeTextNode.textContent?.match(/(\d+)\s*Episodes/);
              if (epMatch) totalEpisodes = parseInt(epMatch[1]);
            }
            let seasonIndex = "";
            const actionBtn = card.querySelector(SEL.SEASON_EYE_BTN);
            if (actionBtn) {
              const btnLabel = actionBtn.getAttribute("aria-label") || "";
              const btnMatch = btnLabel.match(/season (\d+)/i);
              if (btnMatch) seasonIndex = btnMatch[1];
            }
            if (!seasonIndex) {
              const mainMatch = card.getAttribute("aria-label")?.match(/Season (\d+)/i);
              if (mainMatch) seasonIndex = mainMatch[1];
            }
            if (!seasonIndex) {
              const titleEl = card.querySelector(".text-lg.font-semibold");
              if (titleEl && titleEl.textContent) {
                const text = titleEl.textContent.trim();
                const titleMatch = text.match(/Season (\d+)/i);
                seasonIndex = titleMatch ? titleMatch[1] : text;
              }
            }
            if (seasonIndex && totalEpisodes > 0) {
              const current = data[showId][seasonIndex];
              if (!current || current.length !== totalEpisodes) {
                data[showId][seasonIndex] = Array.from({ length: totalEpisodes }, (_, i) => i + 1);
                updatesMade = true;
              }
            }
          });
          if (updatesMade) {
            chrome.storage.local.set({ episodeTracker: data });
          }
        });
      } else {
        setTimeout(runMarking, 500);
      }
    };
    runMarking();
  },
  // 4. LOGIC: CHECK GLOBAL COMPLETION
  checkGlobalCompletion: (showId) => {
    chrome.storage.local.get(["episodeTracker"], (res) => {
      const data = res.episodeTracker || {};
      const showData = data[showId];
      if (!showData) return;
      const seasonCards = document.querySelectorAll(SEL.SEASON_CARD);
      let allComplete = true;
      let hasCards = false;
      seasonCards.forEach((card) => {
        hasCards = true;
        let totalEpisodes = 0;
        const episodeTextNode = Array.from(card.querySelectorAll("span")).find((span) => span.textContent?.includes("Episodes"));
        if (episodeTextNode) {
          const match2 = episodeTextNode.textContent?.match(/(\d+)\s*Episodes/);
          if (match2) totalEpisodes = parseInt(match2[1]);
        }
        let seasonIndex = "";
        const btn = card.querySelector(SEL.SEASON_EYE_BTN);
        const btnLabel = btn?.getAttribute("aria-label") || "";
        const match = btnLabel.match(/season (\d+)/i);
        if (match) seasonIndex = match[1];
        if (seasonIndex && totalEpisodes > 0) {
          const watched = showData[seasonIndex] || [];
          if (watched.length < totalEpisodes) allComplete = false;
        }
      });
      if (hasCards && allComplete) {
        chrome.storage.local.get(["watchedItems"], (wRes) => {
          const wData = wRes.watchedItems || {};
          if (wData[showId] !== 2) {
            wData[showId] = 2;
            chrome.storage.local.set({ watchedItems: wData });
            WatchSync.setNativeStatus(true);
          }
        });
      } else if (hasCards && !allComplete) {
        chrome.storage.local.get(["watchedItems"], (wRes) => {
          const wData = wRes.watchedItems || {};
          if (wData[showId] === 2) {
            delete wData[showId];
            chrome.storage.local.set({ watchedItems: wData });
            WatchSync.setNativeStatus(false);
          }
        });
      }
    });
  },
  // 5. AUTO-SYNC ON LOAD (Polled Retry + Explicit Trigger)
  syncOnLoad: () => {
    const pathParts = self.location.pathname.split("/");
    if (!pathParts.includes("movie") && !pathParts.includes("tv") && !pathParts.includes("content")) return;
    const contentId = getCleanContentId();
    if (!contentId) return;
    let attempts = 0;
    const initCheck = setInterval(() => {
      attempts++;
      if (attempts > 10) clearInterval(initCheck);
      const watchedBtn = document.querySelector(SEL.BTN_WATCHED);
      const unwatchedBtn = document.querySelector(SEL.BTN_UNWATCHED);
      if (watchedBtn || unwatchedBtn) {
        clearInterval(initCheck);
        const isNativeWatched = !!watchedBtn;
        chrome.storage.local.get(["watchedItems"], (res) => {
          const data = res.watchedItems || {};
          const localStatus = data[contentId];
          const isLocalWatched = localStatus === 2;
          if (isNativeWatched && !isLocalWatched) {
            console.log("[Moctale+] Auto-Sync: Native Watched -> Syncing Local");
            data[contentId] = 2;
            chrome.storage.local.set({ watchedItems: data });
            if (pathParts.includes("tv") || pathParts.includes("content")) {
              WatchSync.markAllSeasonsLocal();
            }
          } else if (!isNativeWatched && isLocalWatched) {
            console.log("[Moctale+] Auto-Sync: Local Watched -> Syncing Native");
            if (unwatchedBtn) {
              clickButton(unwatchedBtn);
              if (pathParts.includes("tv") || pathParts.includes("content")) {
                WatchSync.markAllSeasonsLocal();
                let checks = 0;
                const waitForCommit = setInterval(() => {
                  checks++;
                  if (document.querySelector(SEL.BTN_WATCHED)) {
                    clearInterval(waitForCommit);
                    self.location.reload();
                  }
                  if (checks > 10) clearInterval(waitForCommit);
                }, 200);
              }
            }
          }
        });
      }
    }, 500);
  },
  // 6. LISTENERS (User clicks Native Buttons)
  initNativeListeners: () => {
    self.addEventListener("click", (e) => {
      if (isInternalChange) return;
      const target2 = e.target;
      const btn = target2.closest("button");
      if (!btn) return;
      const label = (btn.getAttribute("aria-label") || "").toLowerCase();
      const text = (btn.textContent || "").toLowerCase();
      if (label === "mark as watched" || label === "mark all seasons watched" || text.includes("mark as watched")) {
        const contentId = getCleanContentId();
        chrome.storage.local.get(["watchedItems"], (res) => {
          const data = res.watchedItems || {};
          data[contentId] = 2;
          chrome.storage.local.set({ watchedItems: data });
          if (self.location.pathname.includes("/tv/") || self.location.pathname.includes("/content/")) {
            WatchSync.markAllSeasonsLocal();
          }
        });
      }
      if (label.includes("season")) {
        const showId = getCleanContentId();
        const match = label.match(/season\s+(\d+)/);
        if (match) {
          const seasonIndex = match[1];
          if (label.includes("remove")) {
            currentSeasonContext = seasonIndex;
          } else if (label.includes("mark")) {
            const card = btn.closest('div[role="button"]') || btn.closest(".relative.w-full");
            let totalEpisodes = 0;
            if (card) {
              const epText = card.textContent || "";
              const epMatch = epText.match(/(\d+)\s*Episodes/);
              if (epMatch) totalEpisodes = parseInt(epMatch[1]);
            }
            if (totalEpisodes > 0) {
              chrome.storage.local.get(["episodeTracker"], (res) => {
                const data = res.episodeTracker || {};
                if (!data[showId]) data[showId] = {};
                data[showId][seasonIndex] = Array.from({ length: totalEpisodes }, (_, i) => i + 1);
                chrome.storage.local.set({ episodeTracker: data });
                WatchSync.checkGlobalCompletion(showId);
              });
            }
          }
        }
      }
      if (target2.matches(SEL.DIALOG_CONFIRM_BTN) || target2.closest(SEL.DIALOG_CONFIRM_BTN)) {
        const container = target2.closest("div.relative.w-\\[90\\%\\]");
        const titleEl = container?.querySelector(SEL.DIALOG_TITLE);
        const titleText = titleEl ? titleEl.textContent || "" : "";
        const contentId = getCleanContentId();
        chrome.storage.local.get(["watchedItems", "episodeTracker"], (res) => {
          const wData = res.watchedItems || {};
          const eData = res.episodeTracker || {};
          if (titleText.includes("Unwatch")) {
            delete wData[contentId];
            delete eData[contentId];
            chrome.storage.local.set({ watchedItems: wData, episodeTracker: eData });
          } else if (titleText.includes("Remove Season") && currentSeasonContext) {
            if (eData[contentId] && eData[contentId][currentSeasonContext]) {
              delete eData[contentId][currentSeasonContext];
              const hasSeasons = Object.keys(eData[contentId]).length > 0;
              if (!hasSeasons || wData[contentId] === 2) {
                delete wData[contentId];
              }
              chrome.storage.local.set({ watchedItems: wData, episodeTracker: eData });
            }
            currentSeasonContext = null;
          }
        });
      }
    }, true);
  }
};
const SeasonTracker = ({
  showId,
  seasonIndex,
  totalEpisodes,
  containerDom
}) => {
  const [watched, setWatched] = reactExports.useState([]);
  const progress = reactExports.useMemo(() => {
    return totalEpisodes > 0 ? Math.round(watched.length / totalEpisodes * 100) : 0;
  }, [watched, totalEpisodes]);
  const storageCacheRef = reactExports.useRef({});
  const isMountedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!isMountedRef.current) return;
    if (watched.length === totalEpisodes) {
      WatchSync.setSeasonNativeStatus(containerDom, true);
    } else {
      WatchSync.setSeasonNativeStatus(containerDom, false);
    }
    setTimeout(() => WatchSync.checkGlobalCompletion(showId), 200);
  }, [watched.length, totalEpisodes, containerDom, showId]);
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-bold uppercase tracking-wider text-[var(--mp-text-main)]", children: "Tracker" }) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--mp-bg-surface)] border border-white/5 rounded-lg p-2.5 mb-3 flex flex-col gap-2 shadow-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-[var(--mp-text-muted)] uppercase tracking-wide", children: "Season Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-white font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--mp-accent)]", children: watched.length }),
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
                            ${watched.includes(ep) ? "bg-[var(--mp-bg-layer)] border-green-500 text-green-500 shadow-[0_0_6px_rgba(34,197,94,0.2)]" : "bg-[var(--mp-bg-surface)] border-[var(--mp-border)] text-white/40 hover:border-white/30 hover:text-white hover:bg-white/5"}
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
              if (titleMatch) seasonIndex = titleMatch[1];
              else seasonIndex = text;
            }
          }
          if (!seasonIndex) seasonIndex = `unknown_${Math.random().toString(36).substr(2, 5)}`;
          const container = document.createElement("div");
          container.className = "moctale-episode-tracker w-full px-1 pb-1";
          card.appendChild(container);
          const root = clientExports.createRoot(container);
          root.render(
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SeasonTracker,
              {
                showId,
                seasonIndex,
                totalEpisodes,
                containerDom: cardEl
              }
            )
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
let observer$6 = null;
const initSearchPlus = () => {
  if (observer$6) return;
  console.log("[SearchPlus] Initializing...");
  observer$6 = new MutationObserver((mutations) => {
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
  observer$6.observe(document.body, { childList: true });
  const existing = document.querySelector('div[data-search-overlay="true"]');
  if (existing && !existing.getAttribute("data-moctale-plus-init")) {
    existing.setAttribute("data-moctale-plus-init", "true");
    safeInject(existing);
  }
};
const stopSearchPlus = () => {
  if (observer$6) {
    observer$6.disconnect();
    observer$6 = null;
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
    background-color: var(--mp-bg-layer);
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
let observer$5 = null;
let pollInterval = null;
const initPrivateNotes = () => {
  if (observer$5) return;
  if (!location.pathname.startsWith("/content/")) return;
  const contentId = location.pathname.split("/").pop() || "unknown";
  console.log(`[PrivateNotes] Initializing for: ${contentId}`);
  const scanAndInject2 = () => {
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
  observer$5 = new MutationObserver(() => scanAndInject2());
  observer$5.observe(document.body, { childList: true, subtree: true });
  if (pollInterval) clearInterval(pollInterval);
  pollInterval = setInterval(() => {
    if (document.querySelector(".mn-container")) {
      if (pollInterval) clearInterval(pollInterval);
    } else {
      scanAndInject2();
    }
  }, 1e3);
  scanAndInject2();
};
const stopPrivateNotes = () => {
  if (observer$5) {
    observer$5.disconnect();
    observer$5 = null;
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
  wrapper.className = "w-full border-b border-[var(--mp-border)] pb-6 mb-6 moctale-notes-wrapper";
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
            className: "relative flex flex-col items-center p-2 rounded-2xl border shadow-2xl",
            style: {
              maxWidth: "90vw",
              maxHeight: "95vh",
              backgroundColor: "var(--mp-bg-surface)",
              // Applies the theme background
              borderColor: "var(--mp-border)"
              // Applies the theme border
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
  .mp-watch-btn { position: absolute; top: 8px; left: 8px; z-index: 70; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border: 1px solid rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.6); opacity: 0; transform: scale(0.9); transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
  .group:hover .mp-watch-btn { opacity: 1; transform: scale(1); }
  .mp-watch-btn:hover { background: rgba(0, 0, 0, 0.8); color: #fff; border-color: rgba(255, 255, 255, 0.4); transform: scale(1.1); }
  .mp-icon-partial { color: #facc15; filter: drop-shadow(0 0 5px rgba(250, 204, 21, 0.6)); }
  .mp-icon-watched { color: #4ade80; filter: drop-shadow(0 0 5px rgba(74, 222, 128, 0.6)); }
  .mp-status-bar { position: absolute; bottom: 0; left: 0; width: 100%; height: 4px; z-index: 20; pointer-events: none; opacity: 0; transition: opacity 0.3s ease; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; }
  .mp-status-bar.is-partial { opacity: 1; background: #facc15; box-shadow: 0 -2px 10px rgba(250, 204, 21, 0.5); }
  .mp-status-bar.is-watched { opacity: 1; background: #4ade80; box-shadow: 0 -2px 10px rgba(74, 222, 128, 0.5); }
`;
const ICONS$2 = {
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mp-icon-partial"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  tick: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mp-icon-watched"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
};
let GLOBAL_WATCH_CACHE = {};
let GLOBAL_EPISODE_CACHE = {};
const updateUI = (container, contentId) => {
  const btn = container.querySelector(".mp-watch-btn");
  const bar = container.querySelector(".mp-status-bar");
  if (!btn || !bar) return;
  bar.className = "mp-status-bar";
  let status = (GLOBAL_WATCH_CACHE[contentId] === true ? 2 : GLOBAL_WATCH_CACHE[contentId]) || 0;
  if (status !== 2 && GLOBAL_EPISODE_CACHE[contentId]) {
    const seasons = GLOBAL_EPISODE_CACHE[contentId];
    const hasEpisodes = Object.values(seasons).some((eps) => Array.isArray(eps) && eps.length > 0);
    if (hasEpisodes) status = 1;
  }
  if (status === 1) {
    btn.innerHTML = ICONS$2.clock;
    btn.title = "In Progress";
    bar.classList.add("is-partial");
  } else if (status === 2) {
    btn.innerHTML = ICONS$2.tick;
    btn.title = "Mark as Unwatched";
    bar.classList.add("is-watched");
  } else {
    btn.innerHTML = ICONS$2.eye;
    btn.title = "Mark as Watched";
  }
};
const handleToggle = (e, contentId) => {
  e.preventDefault();
  e.stopPropagation();
  const currentVal = GLOBAL_WATCH_CACHE[contentId];
  const isWatched = currentVal === 2 || currentVal === true;
  const nextStatus = isWatched ? 0 : 2;
  if (nextStatus === 0) delete GLOBAL_WATCH_CACHE[contentId];
  else GLOBAL_WATCH_CACHE[contentId] = nextStatus;
  document.querySelectorAll(`[data-mp-content-id="${contentId}"]`).forEach((el) => {
    updateUI(el, contentId);
  });
  chrome.storage.local.get(["watchedItems", "episodeTracker"], (result) => {
    const wData = result.watchedItems || {};
    const eData = result.episodeTracker || {};
    if (nextStatus === 0) {
      delete wData[contentId];
      delete eData[contentId];
    } else {
      wData[contentId] = nextStatus;
    }
    chrome.storage.local.set({ watchedItems: wData, episodeTracker: eData });
  });
  if (self.location.pathname.includes(contentId)) {
    WatchSync.setNativeStatus(nextStatus === 2);
    if (nextStatus === 2 && (self.location.pathname.includes("/tv/") || self.location.pathname.includes("/content/"))) {
      WatchSync.markAllSeasonsLocal();
    }
  }
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
  updateUI(container, contentId);
};
let observer$4 = null;
let isInitialized = false;
const loadCaches = (callback) => {
  chrome.storage.local.get(["watchedItems", "episodeTracker"], (result) => {
    GLOBAL_WATCH_CACHE = result.watchedItems || {};
    GLOBAL_EPISODE_CACHE = result.episodeTracker || {};
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
  WatchSync.initNativeListeners();
  loadCaches(() => {
    runProcessor();
    startObserver();
    setTimeout(() => WatchSync.syncOnLoad(), 1200);
  });
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local") {
      if (changes.watchedItems) GLOBAL_WATCH_CACHE = changes.watchedItems.newValue || {};
      if (changes.episodeTracker) GLOBAL_EPISODE_CACHE = changes.episodeTracker.newValue || {};
      document.querySelectorAll('[data-moctale-watch-init="true"]').forEach((container) => {
        const id = container.getAttribute("data-mp-content-id");
        if (id) updateUI(container, id);
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
    let contentId = "";
    const parentAnchor = container.closest("a");
    if (parentAnchor) {
      const href = parentAnchor.getAttribute("href");
      if (href && (href.startsWith("/movie/") || href.startsWith("/tv/") || href.startsWith("/content/"))) {
        const parts = href.split("/");
        contentId = parts[parts.length - 1];
      }
    }
    if (!contentId) {
      const pathParts = self.location.pathname.split("/");
      if (pathParts.includes("movie") || pathParts.includes("tv") || pathParts.includes("content")) {
        if (container.className.includes("w-[110px]") || container.parentElement?.className.includes("items-end")) {
          contentId = pathParts[pathParts.length - 1];
        }
      }
    }
    if (!contentId) {
      const match = img.src.match(/\/images\/([a-f0-9-]+)\./);
      if (match) contentId = match[1];
    }
    if (contentId) injectWidget(container, contentId);
  }
};
const startObserver = () => {
  let pending = false;
  let lastUrl2 = location.href;
  observer$4 = new MutationObserver(() => {
    if (location.href !== lastUrl2) {
      lastUrl2 = location.href;
      setTimeout(() => WatchSync.syncOnLoad(), 1500);
    }
    if (pending) return;
    pending = true;
    queueMicrotask(() => {
      runProcessor();
      pending = false;
    });
  });
  observer$4.observe(document.body, { childList: true, subtree: true });
};
const stopWatchStatus = () => {
  if (observer$4) {
    observer$4.disconnect();
    observer$4 = null;
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
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .mp-dl-icon {
    width: 18px;
    height: 18px;
    stroke-width: 2;
  }

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
  if (elements.some((el) => el.classList && el.classList.contains("mp-download-btn"))) return "BUTTON";
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
  if (img.src.includes("data:image/svg")) return null;
  return img;
};
const DownloadOverlay = () => {
  const [target2, setTarget] = reactExports.useState(null);
  const [isDownloading, setIsDownloading] = reactExports.useState(false);
  const timeoutRef = reactExports.useRef(null);
  const ctrlRef = reactExports.useRef(false);
  const mousePosRef = reactExports.useRef({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    if (!document.getElementById("moctale-downloader-css")) {
      const style = document.createElement("style");
      style.id = "moctale-downloader-css";
      style.textContent = DOWNLOADER_STYLES;
      document.head.appendChild(style);
    }
    const handleKeyDown = (e) => {
      const isCtrl = e.key === "Control" || e.ctrlKey;
      if (!isCtrl) return;
      if (ctrlRef.current) return;
      ctrlRef.current = true;
      const { x, y } = mousePosRef.current;
      const result = findImageUnderCursor(x, y);
      if (result instanceof HTMLImageElement) {
        const newRect = result.getBoundingClientRect();
        setTarget({ src: result.src, rect: newRect, el: result });
      } else {
        setTarget(null);
      }
    };
    const handleKeyUp = (e) => {
      e.key === "Control" || !e.ctrlKey;
      if (!ctrlRef.current) return;
      ctrlRef.current = false;
      setTarget(null);
    };
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      if (elements.some((el) => el.classList && el.classList.contains("mp-download-btn"))) {
        if (!ctrlRef.current) setTarget(null);
        return;
      }
      if (!ctrlRef.current) {
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            setTarget(null);
            timeoutRef.current = null;
          }, 50);
        }
        return;
      }
      const result = findImageUnderCursor(e.clientX, e.clientY);
      if (result instanceof HTMLImageElement) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
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
    const handleScroll2 = () => {
      setTarget(null);
    };
    self.addEventListener("keydown", handleKeyDown);
    self.addEventListener("keyup", handleKeyUp);
    self.addEventListener("mousemove", handleMouseMove, { passive: true });
    self.addEventListener("scroll", handleScroll2, { passive: true, capture: true });
    return () => {
      self.removeEventListener("keydown", handleKeyDown);
      self.removeEventListener("keyup", handleKeyUp);
      self.removeEventListener("mousemove", handleMouseMove);
      self.removeEventListener("scroll", handleScroll2, true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
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
          title: "Download Image (hold Ctrl + hover)",
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
const ensureVisibleOnDark = (colorInput) => {
  const c = w(colorInput);
  if (!c.isValid()) return colorInput;
  if (c.brightness() < 0.6) {
    const hsl = c.toHsl();
    const newSaturation = Math.max(hsl.s, 95);
    const newLightness = Math.max(hsl.l, 60);
    return w({ h: hsl.h, s: newSaturation, l: newLightness }).toHslString();
  }
  return colorInput;
};
const getThemeColor = (variable, fallback = "#58a6ff") => {
  try {
    const styles = getComputedStyle(document.body);
    const val = styles.getPropertyValue(variable).trim();
    if (val && (val.startsWith("#") || val.startsWith("rgb"))) {
      return val;
    }
    return fallback;
  } catch (e) {
    return fallback;
  }
};
const ICONS$1 = {
  MagicStar: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }) }),
  Close: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 6 12 12" })
  ] }),
  Share: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
    " "
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
      const rawColor = dot?.style.backgroundColor || "#555";
      const color = ensureVisibleOnDark(rawColor);
      if (!vibes.some((v) => v.label === label)) vibes.push({ label, percent, color });
    }
  });
  let rating = "";
  let voteCount = "";
  let totalVotes = 0;
  const ratingNode = document.querySelector(".text-\\[42px\\]");
  if (ratingNode) rating = clean(ratingNode.textContent);
  const votesNode = document.querySelector(".text-\\[20px\\].text-\\[\\#E2E2E2\\].mt-2");
  if (votesNode) {
    const rawText = clean(votesNode.textContent);
    voteCount = rawText.toLowerCase().includes("votes") ? rawText : `${rawText} Votes`;
    const parts = rawText.split("/");
    if (parts.length === 2) {
      totalVotes = parseInt(parts[1].replace(/[^0-9]/g, "")) || 0;
    }
  }
  const meterBreakdown = [];
  const breakdownItems = document.querySelectorAll('div[aria-label*="%"]');
  breakdownItems.forEach((item) => {
    const aria = item.getAttribute("aria-label") || "";
    if (["Perfection", "Go for it", "Timepass", "Skip"].some((k2) => aria.includes(k2))) {
      const parts = aria.split(":");
      if (parts.length === 2) {
        const label = parts[0].trim();
        const percent = parseInt(parts[1].replace("%", ""));
        let color = "#555";
        if (label === "Perfection") color = "#B048FF";
        if (label.includes("Go")) color = "#00D391";
        if (label === "Timepass") color = "#FCB700";
        if (label === "Skip") color = "#FE647E";
        const count = totalVotes > 0 ? Math.round(percent / 100 * totalVotes) : 0;
        if (!meterBreakdown.some((m) => m.label === label)) {
          meterBreakdown.push({ label, percent, color, count });
        }
      }
    }
  });
  meterBreakdown.reverse();
  return { title, poster, backdrop, year, meta, plot, rating, voteCount, genres, cast, director, vibes, meterBreakdown, watchOptions };
};
const VibeChart = ({ vibes, onComplete }) => {
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const [displayVibes, setDisplayVibes] = reactExports.useState(vibes.map((v) => ({ ...v, percent: 0 })));
  const [visibleCount, setVisibleCount] = reactExports.useState(0);
  const [isFinished, setIsFinished] = reactExports.useState(false);
  const [animatingIndex, setAnimatingIndex] = reactExports.useState(null);
  const sortedOriginalVibes = reactExports.useMemo(() => {
    return [...vibes].sort((a, b) => b.percent - a.percent);
  }, [vibes]);
  const topVibeIndex = 0;
  reactExports.useEffect(() => {
    let currentStep = 1;
    const totalSteps = sortedOriginalVibes.length;
    const startDelay = setTimeout(() => {
      const runStep = () => {
        if (currentStep <= totalSteps) {
          const slice = sortedOriginalVibes.slice(0, currentStep);
          const currentSum = slice.reduce((acc, curr) => acc + curr.percent, 0);
          setAnimatingIndex(currentStep - 1);
          const nextDisplay = sortedOriginalVibes.map((item, index) => {
            if (index < currentStep) {
              return {
                ...item,
                percent: item.percent / currentSum * 100
              };
            } else {
              return { ...item, percent: 0 };
            }
          });
          setDisplayVibes(nextDisplay);
          setVisibleCount(currentStep);
          currentStep++;
          setTimeout(runStep, 800);
        } else {
          setDisplayVibes(sortedOriginalVibes);
          setAnimatingIndex(null);
          setIsFinished(true);
          setTimeout(onComplete, 500);
        }
      };
      runStep();
    }, 150);
    return () => clearTimeout(startDelay);
  }, [sortedOriginalVibes, onComplete]);
  const chartData = reactExports.useMemo(() => {
    let cumulativePercent = 0;
    return displayVibes.map((v) => {
      const start = cumulativePercent;
      cumulativePercent += v.percent;
      return { ...v, start, end: cumulativePercent };
    });
  }, [displayVibes]);
  const GAP_LENGTH = isFinished ? 1 : 0;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const activeVibeIndex = hoveredIndex !== null ? hoveredIndex : animatingIndex !== null ? animatingIndex : topVibeIndex;
  const activeOriginalStat = sortedOriginalVibes[activeVibeIndex];
  if (!vibes.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden w-full h-full min-h-[300px] rounded-2xl bg-black/20 border border-white/5 shadow-2xl p-6 flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-500", children: "Vibe Chart" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center items-center -my-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-64 h-64 transform -rotate-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "50",
            cy: "50",
            r: "20",
            fill: "transparent",
            className: "cursor-pointer",
            onMouseEnter: () => setHoveredIndex(topVibeIndex),
            onMouseLeave: () => setHoveredIndex(null)
          }
        ),
        chartData.map((v, i) => {
          const strokeLength = v.percent / 100 * circumference - GAP_LENGTH;
          const strokeDasharray = `${Math.max(0, strokeLength)} ${circumference}`;
          const strokeDashoffset = -(v.start / 100 * circumference);
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: radius,
              fill: "none",
              stroke: v.color,
              strokeWidth: isHovered ? 16 : 10,
              strokeDasharray,
              strokeDashoffset,
              strokeLinecap: "butt",
              style: {
                transition: "stroke-dasharray 0.7s ease-in-out, stroke-dashoffset 0.7s ease-in-out, stroke-width 0.3s ease-out, filter 0.3s ease-out",
                filter: isHovered ? `drop-shadow(0 0 8px ${v.color})` : `drop-shadow(0 0 0px ${v.color})`
              },
              className: `cursor-pointer ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"}`,
              onMouseEnter: (e) => {
                e.stopPropagation();
                setHoveredIndex(i);
              },
              onMouseLeave: (e) => {
                e.stopPropagation();
                setHoveredIndex(null);
              }
            },
            v.label
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-200 ease-out", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5", children: hoveredIndex !== null ? "Vibe" : isFinished ? "Top Vibe" : "Vibe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-bold transition-colors duration-300", style: { color: activeOriginalStat?.color || "#fff" }, children: activeOriginalStat?.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-mono text-white/50 mt-1", children: [
          activeOriginalStat?.percent,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 relative z-10 min-h-[100px]", children: sortedOriginalVibes.slice(0, visibleCount).map((v, i) => {
      const isHovered = hoveredIndex === i;
      const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `
                                group flex items-center justify-between mb-1 rounded-lg cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-forwards
                                ${isHovered ? "bg-white/[0.08] translate-x-1" : "bg-transparent hover:bg-white/[0.04]"}
                                ${isDimmed ? "opacity-30 grayscale" : "opacity-100"}
                            `,
          onMouseEnter: () => setHoveredIndex(i),
          onMouseLeave: () => setHoveredIndex(null),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-2.5 w-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 duration-1000 ${isHovered ? "block" : "hidden"}`, style: { backgroundColor: v.color } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5", style: { backgroundColor: v.color } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-gray-300 group-hover:text-white transition-colors", children: v.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-white font-mono", children: [
              v.percent,
              "%"
            ] })
          ]
        },
        v.label
      );
    }) })
  ] });
};
const MoctaleMeter = ({ breakdown, voteCount, isVisible }) => {
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const [displayStats, setDisplayStats] = reactExports.useState(breakdown.map((b) => ({ ...b, percent: 0 })));
  const [visibleCount, setVisibleCount] = reactExports.useState(0);
  const [isFinished, setIsFinished] = reactExports.useState(false);
  const [animatingIndex, setAnimatingIndex] = reactExports.useState(null);
  const sortedData = reactExports.useMemo(() => {
    const visualOrder = ["Skip", "Timepass", "Go for it", "Perfection"];
    return [...breakdown].sort((a, b) => {
      const indexA = visualOrder.findIndex((k2) => a.label.includes(k2));
      const indexB = visualOrder.findIndex((k2) => b.label.includes(k2));
      return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });
  }, [breakdown]);
  const priority = reactExports.useMemo(() => {
    const pIdx = sortedData.findIndex((s) => s.label.includes("Perfection"));
    const gIdx = sortedData.findIndex((s) => s.label.includes("Go"));
    const tIdx = sortedData.findIndex((s) => s.label.includes("Timepass"));
    const sIdx = sortedData.findIndex((s) => s.label.includes("Skip"));
    return [pIdx, gIdx, tIdx, sIdx].filter((i) => i !== -1);
  }, [sortedData]);
  const dominantIndex = reactExports.useMemo(() => {
    if (sortedData.length === 0) return -1;
    let maxPercent = -1;
    let maxIdx = 0;
    sortedData.forEach((item, idx) => {
      if (item.percent > maxPercent) {
        maxPercent = item.percent;
        maxIdx = idx;
      }
    });
    return maxIdx;
  }, [sortedData]);
  reactExports.useEffect(() => {
    if (!isVisible) return;
    setDisplayStats(sortedData.map((b) => ({ ...b, percent: 0 })));
    setAnimatingIndex(null);
    setIsFinished(false);
    setVisibleCount(0);
    let step = 1;
    const totalSteps = priority.length;
    let timer;
    const startDelay = setTimeout(() => {
      requestAnimationFrame(() => {
        const runStep = () => {
          if (step <= totalSteps) {
            const activeIndices = priority.slice(0, step);
            const currentAnimatingIdx = priority[step - 1];
            setAnimatingIndex(currentAnimatingIdx);
            const activeItems = activeIndices.map((i) => sortedData[i]);
            const activeSum = activeItems.reduce((sum, item) => sum + item.percent, 0);
            const newDisplay = sortedData.map((item, index) => {
              if (activeIndices.includes(index)) {
                if (activeSum === 0) {
                  if (index === currentAnimatingIdx) {
                    return { ...item, percent: 100 };
                  }
                  return { ...item, percent: 0 };
                }
                return {
                  ...item,
                  percent: item.percent / activeSum * 100
                };
              }
              return { ...item, percent: 0 };
            });
            setDisplayStats(newDisplay);
            setVisibleCount(step);
            step++;
            timer = setTimeout(runStep, 800);
          } else {
            setDisplayStats(sortedData);
            setAnimatingIndex(null);
            setIsFinished(true);
          }
        };
        runStep();
      });
    }, 250);
    return () => {
      clearTimeout(startDelay);
      clearTimeout(timer);
    };
  }, [isVisible, sortedData, priority]);
  if (!isVisible) return null;
  const radius = 35;
  const gaugePathD = "M 15 65 A 35 35 0 0 1 85 65";
  const arcLength = Math.PI * radius;
  const hitZonePathD = "M 30 65 A 20 20 0 0 1 70 65";
  let cumulativePercent = 0;
  const chartLayers = displayStats.map((stat) => {
    const start = cumulativePercent;
    cumulativePercent += stat.percent;
    return { ...stat, start, end: cumulativePercent };
  });
  const GAP_LENGTH = isFinished ? 1 : 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : animatingIndex !== null ? animatingIndex : dominantIndex;
  const activeStat = activeIndex !== -1 ? sortedData[activeIndex] : null;
  const getVisibleLegendItems = () => {
    const visibleIndices = priority.slice(0, visibleCount);
    const visibleItems = sortedData.filter((_, idx) => visibleIndices.includes(idx));
    return visibleItems.reverse();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden w-full h-full min-h-[300px] rounded-2xl bg-black/20 border border-white/5 shadow-2xl p-6 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-500", children: "Moctale Meter" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center items-center -mt-12 -mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-72 h-72 transform overflow-visible", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: hitZonePathD,
            fill: "none",
            stroke: "transparent",
            strokeWidth: "25",
            strokeLinecap: "butt",
            className: "cursor-pointer",
            onMouseEnter: () => setHoveredIndex(dominantIndex),
            onMouseLeave: () => setHoveredIndex(null)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: gaugePathD,
            fill: "none",
            stroke: "#ffffff",
            strokeOpacity: "0.05",
            strokeWidth: "8",
            strokeLinecap: "butt",
            className: "animate-in fade-in duration-1000 pointer-events-none"
          }
        ),
        chartLayers.map((stat, i) => {
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
          const segmentLength = Math.max(0, stat.percent / 100 * arcLength - GAP_LENGTH);
          const strokeDasharray = `${segmentLength} ${arcLength * 2}`;
          const strokeDashoffset = -(stat.start / 100 * arcLength);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: gaugePathD,
              fill: "none",
              stroke: stat.color,
              strokeWidth: isHovered ? 16 : 10,
              strokeLinecap: "butt",
              strokeDasharray,
              strokeDashoffset,
              style: {
                transition: "stroke-dasharray 0.7s ease-in-out, stroke-dashoffset 0.7s ease-in-out, stroke-width 0.3s ease-out, filter 0.3s ease-out",
                filter: isHovered ? `drop-shadow(0 0 8px ${stat.color})` : `drop-shadow(0 0 0px ${stat.color})`
              },
              className: `cursor-pointer ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"}`,
              onMouseEnter: (e) => {
                e.stopPropagation();
                setHoveredIndex(i);
              },
              onMouseLeave: (e) => {
                e.stopPropagation();
                setHoveredIndex(null);
              }
            },
            stat.label
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5", children: hoveredIndex !== null && hoveredIndex !== dominantIndex ? "Verdict" : isFinished ? "Score" : "Verdict" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[20px] font-bold transition-colors duration-200", style: { color: activeStat?.color || "#fff" }, children: [
          animatingIndex !== null && activeStat?.percent === 0 ? 0 : Math.round(activeStat?.percent || 0),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-mono text-white/50 mt-1 uppercase", children: activeStat?.count !== void 0 && voteCount.includes("/") ? `${activeStat.count} / ${voteCount.split("/")[1].replace("Votes", "").trim()}` : voteCount.replace("Votes", "").trim() })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 relative z-10 min-h-[100px]", children: getVisibleLegendItems().map((stat) => {
      const originalIndex = sortedData.findIndex((s) => s.label === stat.label);
      const isHovered = hoveredIndex === originalIndex;
      const isDimmed = hoveredIndex !== null && hoveredIndex !== originalIndex;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group flex items-center justify-between mb-1 rounded-lg cursor-pointer animate-in fade-in slide-in-from-right-4 duration-500
                                ${isHovered ? "bg-white/[0.08] translate-x-1" : "bg-transparent hover:bg-white/[0.04]"}
                                ${isDimmed ? "opacity-30 grayscale" : "opacity-100"}
                            `,
          onMouseEnter: () => setHoveredIndex(originalIndex),
          onMouseLeave: () => setHoveredIndex(null),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-2.5 w-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 duration-1000 ${isHovered ? "block" : "hidden"}`, style: { backgroundColor: stat.color } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5", style: { backgroundColor: stat.color } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-gray-300 group-hover:text-white transition-colors", children: stat.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-white font-mono", children: [
              stat.percent,
              "%"
            ] })
          ]
        },
        stat.label
      );
    }) })
  ] });
};
const SummaryModal = ({ onClose }) => {
  const [data, setData] = reactExports.useState(null);
  const [isSharing, setIsSharing] = reactExports.useState(false);
  const [animationStage, setAnimationStage] = reactExports.useState("vibe");
  const modalRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const extracted = extractPageData();
    setData(extracted);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleVibeComplete = reactExports.useCallback(() => {
    setAnimationStage("meter");
  }, []);
  const captureScreenshot = async () => {
    if (!modalRef.current || isSharing) return;
    setIsSharing(true);
    const element = modalRef.current;
    const images = Array.from(element.querySelectorAll("img"));
    const originalSrcs = /* @__PURE__ */ new Map();
    const filter = (node) => !["no-screenshot", "close-btn"].some((c) => node.classList?.contains(c));
    try {
      await Promise.all(images.map(async (img) => {
        try {
          originalSrcs.set(img, img.src);
          const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(img.src)}`;
          const response = await fetch(proxyUrl);
          if (!response.ok) throw new Error("Proxy blocked");
          const blob = await response.blob();
          const localUrl = URL.createObjectURL(blob);
          img.src = localUrl;
          img.crossOrigin = "anonymous";
        } catch (e) {
        }
      }));
      const dataUrl = await toPng(element, { quality: 0.95, cacheBust: true, filter, backgroundColor: "var(--mp-bg-surface)" });
      const link = document.createElement("a");
      link.download = `${data?.title.replace(/[^a-z0-9]/gi, "_") || "moctale"}_summary.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Screenshot failed:", error);
      alert("Failed to generate screenshot.");
    } finally {
      images.forEach((img) => {
        if (originalSrcs.has(img)) {
          const localUrl = img.src;
          img.src = originalSrcs.get(img);
          URL.revokeObjectURL(localUrl);
          img.removeAttribute("crossOrigin");
        }
      });
      setIsSharing(false);
    }
  };
  if (!data) return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100000] flex items-center justify-center p-4 animate-in fade-in duration-300 font-sans", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: onClose, style: { backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: modalRef,
          className: "relative w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col max-h-[90vh]",
          style: { background: "color-mix(in srgb, var(--mp-bg-surface), transparent 10%)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid var(--mp-border)", boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.7)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-64 overflow-hidden z-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.backdrop, className: "w-full h-full object-cover opacity-30 blur-sm scale-105", alt: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: `linear-gradient(to top, var(--mp-bg-surface) 10%, var(--mp-bg-surface) 40%, transparent 100%)` } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 overflow-y-auto custom-scrollbar flex-1 p-6 md:p-8 space-y-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-40 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-[var(--mp-border)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.poster, className: "w-full h-full object-cover", alt: "" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-2 leading-tight text-shadow-sm", children: data.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.meta.split("•").pop()?.trim() }),
                    data.director && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--mp-accent)] font-semibold", children: data.director })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-gray-300 leading-relaxed font-light max-w-2xl mb-5", children: data.plot.replaceAll("Reveal Spoiler Powered by Moctale Plus", "") || "No synopsis available." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: data.genres.slice(0, 4).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 rounded border border-white/5", children: g }, g)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                data.vibes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(VibeChart, { vibes: data.vibes, onComplete: handleVibeComplete }),
                data.meterBreakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MoctaleMeter,
                  {
                    breakdown: data.meterBreakdown,
                    voteCount: data.voteCount || "0 Votes",
                    isVisible: animationStage === "meter" || data.vibes.length === 0
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-white-500 flex items-center gap-1", children: [
                "Powered by ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", target: "_blank", rel: "noreferrer", className: "text-white-500 font-medium underline hover:text-purple-400 transition-colors", children: "Moctale Plus" }),
                " by ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans", target: "_blank", rel: "noreferrer", className: "text-white-500 font-medium underline hover:text-purple-400 transition-colors", children: "010101-sans" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex items-center gap-2 z-50 no-screenshot", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: captureScreenshot, disabled: isSharing, title: "Save as Image", className: "p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all backdrop-blur-md disabled:opacity-50", children: isSharing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : ICONS$1.Share }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all backdrop-blur-md", children: ICONS$1.Close })
            ] })
          ]
        }
      )
    ] }),
    document.body
  );
};
const SummaryButton = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full mt-4 animate-in fade-in slide-in-from-top-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-15deg); } 100% { transform: translateX(200%) skewX(-15deg); } }
                @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 10px -2px var(--mp-accent), inset 0 1px 1px rgba(255,255,255,0.4); } 50% { box-shadow: 0 0 20px 0px var(--mp-accent), inset 0 1px 1px rgba(255,255,255,0.4); } }
            ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        style: {
          backgroundColor: "var(--mp-accent)",
          color: "var(--mp-dynamic-accent-text, #fff)"
        },
        className: "group relative w-full max-w-sm h-12 rounded-full overflow-hidden flex items-center justify-center gap-2.5 font-bold tracking-wide border border-white/20 transition-all duration-300 animate-[pulse-glow_3s_ease-in-out_infinite] hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none", style: { transform: "translateX(-100%)", animation: "shimmer 3s infinite linear" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-20 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 drop-shadow-sm", children: ICONS$1.MagicStar }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-20 text-sm font-bold shadow-black drop-shadow-sm", children: "Page Summary" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 text-[10px] tracking-[0.2em] font-bold opacity-50", style: { color: "var(--mp-text-muted)" }, children: [
      "Powered by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/moctale-plus", children: "Moctale Plus" }),
      " by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/010101-sans/", children: "010101-sans" })
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryModal, { onClose: () => setIsOpen(false) })
  ] });
};
const initPageSummary = () => {
  const observer2 = new MutationObserver(() => {
    const collectionBtns = Array.from(document.querySelectorAll("button")).filter((btn) => btn.textContent?.includes("Collection"));
    if (collectionBtns.length > 0) {
      const targetBtn = collectionBtns.find((btn) => btn.closest(".xl\\:flex-col"));
      if (targetBtn) {
        const sidebarCol = targetBtn.closest(".relative.flex")?.parentElement;
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
k([a11yPlugin, mixPlugin]);
const colorThief = new u();
let observer$3 = null;
let savedUserTheme = null;
let isDynamicActive = false;
let retryCount = 0;
const initDynamicTheme = () => {
  handleNavigation();
  if (!observer$3) {
    observer$3 = new MutationObserver(() => {
      handleNavigation();
    });
    observer$3.observe(document.body, { childList: true, subtree: true });
  }
};
const stopDynamicTheme = () => {
  if (observer$3) {
    observer$3.disconnect();
    observer$3 = null;
  }
  restoreUserTheme();
};
const handleNavigation = () => {
  const isContentPage = self.location.href.includes("/content/") || self.location.href.includes("/title/");
  if (isContentPage) {
    attemptToApplyDynamicTheme();
  } else {
    if (isDynamicActive) {
      restoreUserTheme();
    }
  }
};
const attemptToApplyDynamicTheme = () => {
  const allImages = Array.from(document.querySelectorAll("img"));
  const mainPoster = allImages.find((img) => {
    if (img.parentElement?.className.includes("aspect-[2/3]") && img.parentElement?.className.includes("shadow-2xl")) return true;
    const rect = img.getBoundingClientRect();
    return rect.width > 100 && rect.height > 150 && rect.height > rect.width && rect.top < 600;
  });
  if (mainPoster) {
    if (mainPoster.dataset.mpDynamicProcessed === mainPoster.src) return;
    console.log("[Moctale Dynamic] Poster Found:", mainPoster.src);
    processImageColor(mainPoster.src);
    mainPoster.dataset.mpDynamicProcessed = mainPoster.src;
    retryCount = 0;
  } else {
    if (retryCount < 5) {
      retryCount++;
      setTimeout(attemptToApplyDynamicTheme, 500);
    }
  }
};
const processImageColor = (imageUrl) => {
  chrome.runtime.sendMessage({ type: "FETCH_IMAGE_BLOB", url: imageUrl }, (response) => {
    if (chrome.runtime.lastError) {
      console.warn("[Moctale Dynamic] Messaging Error:", chrome.runtime.lastError);
      return;
    }
    if (response && response.success && response.dataUrl) {
      const tempImg = new Image();
      tempImg.onload = () => {
        try {
          const palette = colorThief.getPalette(tempImg, 5);
          if (palette && palette.length > 0) {
            applyDynamicStyles(palette);
          }
        } catch (e) {
          console.warn("[Moctale Dynamic] Extraction failed", e);
        }
      };
      tempImg.src = response.dataUrl;
    } else {
      console.warn("[Moctale Dynamic] Background fetch failed:", response?.error);
    }
  });
};
const applyDynamicStyles = (palette) => {
  const dominantRgb = palette[0];
  const dominantColor = w({ r: dominantRgb[0], g: dominantRgb[1], b: dominantRgb[2] });
  const contrastWithWhite = dominantColor.contrast("#ffffff");
  const isBright = contrastWithWhite < 3;
  const accentText = isBright ? "#0f172a" : "#ffffff";
  const accentBg = dominantColor.toHsl().s < 20 ? dominantColor.saturate(0.2) : dominantColor;
  document.body.classList.forEach((cls) => {
    if (cls.startsWith("theme-") && cls !== "theme-dynamic-theme") {
      savedUserTheme = cls;
      document.body.classList.remove(cls);
    }
  });
  const bgBase = dominantColor.mix("#000000", 0.92).toHex();
  const bgSurface = dominantColor.mix("#000000", 0.82).toHex();
  const bgLayer = dominantColor.mix("#000000", 0.72).toHex();
  const border = dominantColor.mix("#000000", 0.6).toHex();
  const s = document.body.style;
  s.setProperty("--mp-dynamic-bg-base", bgBase);
  s.setProperty("--mp-dynamic-bg-surface", bgSurface);
  s.setProperty("--mp-dynamic-bg-layer", bgLayer);
  s.setProperty("--mp-dynamic-border", border);
  s.setProperty("--mp-dynamic-text-main", "#f1f5f9");
  s.setProperty("--mp-dynamic-text-muted", "#94a3b8");
  s.setProperty("--mp-dynamic-accent", accentBg.toHex());
  s.setProperty("--mp-dynamic-accent-text", accentText);
  document.body.classList.add("theme-dynamic-theme");
  isDynamicActive = true;
};
const restoreUserTheme = () => {
  if (!isDynamicActive) return;
  document.body.classList.remove("theme-dynamic-theme");
  if (savedUserTheme) {
    document.body.classList.add(savedUserTheme);
  }
  const s = document.body.style;
  s.removeProperty("--mp-dynamic-bg-base");
  s.removeProperty("--mp-dynamic-bg-surface");
  s.removeProperty("--mp-dynamic-bg-layer");
  s.removeProperty("--mp-dynamic-border");
  s.removeProperty("--mp-dynamic-text-main");
  s.removeProperty("--mp-dynamic-text-muted");
  s.removeProperty("--mp-dynamic-accent");
  s.removeProperty("--mp-dynamic-accent-text");
  isDynamicActive = false;
  console.log("[Moctale Dynamic] Restored:", savedUserTheme);
};
const SearchIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] });
const CastCrewButton = ({ type, title, year }) => {
  const [isWrapperHovered, setIsWrapperHovered] = reactExports.useState(false);
  const [hoveredBtn, setHoveredBtn] = reactExports.useState(null);
  const handleSearch = (e, platform) => {
    e.preventDefault();
    e.stopPropagation();
    let query = "";
    const suffix = `full ${type.toLowerCase()}`;
    if (platform === "google") {
      query = `${title} ${year} ${suffix}`;
    } else if (platform === "imdb") {
      query = `${title} ${year} ${suffix} site:imdb.com`;
    } else if (platform === "imdbpro") {
      query = `${title} ${year} ${suffix} site:pro.imdb.com`;
    } else if (platform === "wikipedia") {
      query = `${title} ${year} ${suffix} site:en.wikipedia.org`;
    }
    self.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&clie=1`, "_blank");
  };
  const mainContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft: "6px"
  };
  const pillStyle = {
    display: "flex",
    alignItems: "center",
    background: isWrapperHovered ? "var(--mp-bg-layer)" : "var(--mp-bg-surface)",
    border: "1px solid var(--mp-border)",
    borderRadius: "6px",
    padding: "0 4px 0 10px",
    cursor: "default",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    height: "28px",
    overflow: "hidden",
    boxShadow: isWrapperHovered ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
    borderColor: isWrapperHovered ? "var(--mp-text-muted)" : "var(--mp-border)"
  };
  const labelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: '"Inter", sans-serif',
    fontSize: "11px",
    fontWeight: 600,
    color: isWrapperHovered ? "var(--mp-text-main)" : "var(--mp-text-muted)",
    whiteSpace: "nowrap",
    transition: "color 0.2s ease",
    marginRight: "2px"
  };
  const actionsContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    // Increased max-width to accomodate 4th button (approx 60-70px more)
    maxWidth: isWrapperHovered ? "300px" : "0px",
    opacity: isWrapperHovered ? 1 : 0,
    transform: isWrapperHovered ? "translateX(0)" : "translateX(-10px)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  };
  const dividerStyle = {
    width: "1px",
    height: "12px",
    background: "var(--mp-border)",
    margin: "0 8px"
  };
  const getBtnStyle = (btnType) => {
    const isThisHovered = hoveredBtn === btnType;
    let hoverColor = "var(--mp-text-main)";
    if (btnType === "google") hoverColor = "#60a5fa";
    if (btnType === "imdb") hoverColor = "#facc15";
    if (btnType === "imdbpro") hoverColor = "#22d3ee";
    if (btnType === "wikipedia") hoverColor = "#ffffff";
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px 8px",
      borderRadius: "4px",
      border: "none",
      background: isThisHovered ? "rgba(255,255,255,0.08)" : "transparent",
      color: isThisHovered ? hoverColor : "var(--mp-text-muted)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      fontSize: "10px",
      fontWeight: isThisHovered ? 700 : 500,
      fontFamily: '"Inter", sans-serif',
      letterSpacing: "0.01em"
    };
  };
  const poweredByStyle = {
    fontSize: "10px",
    fontWeight: 500,
    color: "var(--mp-text-muted)",
    opacity: 0.5,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    whiteSpace: "nowrap",
    letterSpacing: "0.02em",
    fontFamily: '"Inter", sans-serif'
  };
  const dotStyle = {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "var(--mp-text-muted)",
    opacity: 0.4
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: mainContainerStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: pillStyle,
        onMouseEnter: () => setIsWrapperHovered(true),
        onMouseLeave: () => setIsWrapperHovered(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: labelStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Full ",
              type
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: actionsContainerStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: dividerStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => handleSearch(e, "google"),
                style: getBtnStyle("google"),
                onMouseEnter: () => setHoveredBtn("google"),
                onMouseLeave: () => setHoveredBtn(null),
                children: "Google"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => handleSearch(e, "imdb"),
                style: getBtnStyle("imdb"),
                onMouseEnter: () => setHoveredBtn("imdb"),
                onMouseLeave: () => setHoveredBtn(null),
                children: "IMDb"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => handleSearch(e, "imdbpro"),
                style: getBtnStyle("imdbpro"),
                onMouseEnter: () => setHoveredBtn("imdbpro"),
                onMouseLeave: () => setHoveredBtn(null),
                children: "IMDbPro"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => handleSearch(e, "wikipedia"),
                style: getBtnStyle("wikipedia"),
                onMouseEnter: () => setHoveredBtn("wikipedia"),
                onMouseLeave: () => setHoveredBtn(null),
                children: "Wiki"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: poweredByStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: dotStyle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Powered by Moctale Plus" })
    ] })
  ] });
};
const initFullCastCrew = () => {
  const info = getPageMediaInfo();
  if (!info) return;
  const headers = Array.from(document.querySelectorAll("h2"));
  headers.forEach((h2) => {
    const text = h2.textContent?.trim();
    if (text !== "Cast" && text !== "Crew") return;
    if (h2.getAttribute("data-mp-cast-injected")) return;
    h2.setAttribute("data-mp-cast-injected", "true");
    const parent = h2.parentElement;
    if (!parent) return;
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-2";
    parent.insertBefore(wrapper, h2);
    wrapper.appendChild(h2);
    const btnContainer = document.createElement("div");
    wrapper.appendChild(btnContainer);
    const root = clientExports.createRoot(btnContainer);
    root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(CastCrewButton, { type: text, title: info.title, year: info.year }));
  });
};
const VIRTUAL_IDS = {
  CONTENT: "/virtual/content",
  MOVIES: "/virtual/movies",
  SERIES: "/virtual/series",
  COLLECTIONS: "/virtual/collections",
  MY_COLLECTIONS: "/virtual/my-collections",
  MEMBERS: "/virtual/community/members"
};
const cleanSlug = (text) => {
  if (!text) return "";
  const decoded = decodeURIComponent(text);
  return decoded.split(/[-_]/).map((w2) => w2.charAt(0).toUpperCase() + w2.slice(1)).join(" ");
};
const normalizeId = (path, search) => {
  const params = new URLSearchParams(search);
  const BLOCKLIST = ["source", "ref", "utm_source", "utm_medium", "utm_campaign", "tab"];
  BLOCKLIST.forEach((p) => params.delete(p));
  params.sort();
  const safePath = path.replace("https://www.moctale.in", "");
  return params.toString() ? `${safePath}?${params.toString()}` : safePath;
};
const resolveHierarchy = (path, search) => {
  const params = new URLSearchParams(search);
  if (path === "/" || path === "/explore") return { parentId: "", type: "root", title: "Home" };
  if (path === "/explore/categories") return { parentId: "/explore", type: "hub", title: "Categories" };
  if (path === "/explore/genres") return { parentId: "/explore", type: "hub", title: "Genres" };
  if (path === "/explore/countries") return { parentId: "/explore", type: "hub", title: "Countries" };
  if (path === "/explore/languages") return { parentId: "/explore", type: "hub", title: "Languages" };
  if (path === "/schedule") {
    const time = params.get("timeFilter");
    const content = params.get("contentFilter");
    if (!time) return { parentId: "/explore", type: "hub", title: "Schedule" };
    if (time && !content) return { parentId: "/schedule", type: "hub", title: cleanSlug(time) };
    if (time && content) {
      let title = cleanSlug(content);
      if (content.includes("MOVIE")) title = content.includes("THEATRE") ? "In Theatres" : "On OTT";
      if (content === "NEW_SHOW") title = "New Shows";
      if (content === "NEW_SEASON") title = "New Seasons";
      return { parentId: `/schedule?timeFilter=${time}`, type: "filter", title };
    }
  }
  if (path === "/clubs") {
    const group = params.get("group");
    if (group) return { parentId: "/clubs", type: "club", title: cleanSlug(group) };
    return { parentId: "/explore", type: "hub", title: "Clubs" };
  }
  if (path.startsWith("/u/")) {
    const username = path.split("/")[2];
    return { parentId: VIRTUAL_IDS.MEMBERS, type: "user", title: username };
  }
  if (path.startsWith("/my-collections")) {
    const watchlist = params.get("watchlist");
    if (watchlist) return { parentId: VIRTUAL_IDS.MY_COLLECTIONS, type: "collection", title: "Loading..." };
    return { parentId: VIRTUAL_IDS.COLLECTIONS, type: "hub", title: "My Collections" };
  }
  if (path.startsWith("/explore/collection/")) {
    return { parentId: VIRTUAL_IDS.COLLECTIONS, type: "collection", title: "Collection" };
  }
  if (["/explore/family-friendly", "/explore/award-winners", "/explore/moctale-select", "/explore/franchise", "/explore/anime"].includes(path)) {
    return { parentId: VIRTUAL_IDS.COLLECTIONS, type: "collection", title: cleanSlug(path.split("/").pop() || "") };
  }
  if (path.startsWith("/category/")) return { parentId: "/explore/categories", type: "category", title: cleanSlug(path.split("/")[2]) };
  if (path.startsWith("/genre/")) return { parentId: "/explore/genres", type: "genre", title: cleanSlug(path.split("/")[2]) };
  if (path.startsWith("/country/")) return { parentId: "/explore/countries", type: "country", title: cleanSlug(path.split("/")[2]) };
  if (path.startsWith("/language/")) return { parentId: "/explore/languages", type: "language", title: cleanSlug(path.split("/")[2]) };
  if (path.startsWith("/content/")) return { parentId: VIRTUAL_IDS.CONTENT, type: "movie", title: "Loading..." };
  if (path.startsWith("/person/")) return { parentId: "/explore", type: "person", title: cleanSlug(path.split("/")[2]) };
  return { parentId: "/explore", type: "unknown", title: "Unknown Page" };
};
const waitForTitle = async (type, currentTitle) => {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = 12;
    const check = () => {
      let title = "";
      let poster = "";
      if (self.location.pathname.startsWith("/my-collections")) {
        const h1 = document.querySelector("h1.font-bold.text-white");
        if (h1) title = h1.textContent?.trim() || "";
      } else if (self.location.pathname.startsWith("/explore/collection/")) {
        const h1 = document.querySelector("div.flex-1 h1, h1.text-\\[\\#E2E2E2\\]");
        if (h1 && h1.textContent !== "Menu") title = h1.textContent?.trim() || "";
      } else if (type === "movie" || type === "tv" || type === "anime" || type === "person") {
        const info = getPageMediaInfo();
        if (info && info.title) {
          title = info.title;
          poster = info.poster || "";
        }
      }
      if (!title) {
        const h1s = Array.from(document.querySelectorAll("h1"));
        const goodH1 = h1s.find((el) => {
          const t = el.textContent?.trim();
          return t && t !== "Menu" && t !== "Moctale" && t !== "Home";
        });
        if (goodH1) title = goodH1.textContent?.trim() || "";
      }
      if (title && title !== "Loading..." && title !== "Unknown") {
        resolve({ title, poster });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(check, 250);
      } else {
        resolve({ title: currentTitle, poster });
      }
    };
    check();
  });
};
const getScrapedLinks = (currentType) => {
  const links = /* @__PURE__ */ new Set();
  const add = (sel) => document.querySelectorAll(sel).forEach((e) => {
    const h = e.getAttribute("href");
    if (h) links.add(h);
  });
  const isHub = ["root", "hub", "filter", "category", "genre", "club"].includes(currentType);
  if (!isHub) add('a[href^="/content/"]');
  if (currentType === "hub" || currentType === "user") {
    const isClubHub = self.location.pathname === "/clubs" && !self.location.search.includes("group=");
    if (isClubHub) {
      const potentialClubs = document.querySelectorAll("div.flex.items-center.gap-3 > span.truncate");
      potentialClubs.forEach((span) => {
        const text = span.textContent?.trim();
        if (text && text !== "Feed" && text !== "Discover") {
          const slug = text.toLowerCase().replace(/\s+/g, "-");
          links.add(`/clubs?group=${slug}`);
        }
      });
    }
    add('a[href*="group="]');
  }
  add('a[href^="/explore/collection/"]');
  add('a[href^="/category/"]');
  add('a[href^="/genre/"]');
  add('a[href^="/country/"]');
  add('a[href^="/language/"]');
  add('a[href^="/u/"]');
  add('a[href^="/person/"]');
  add('a[href*="watchlist="]');
  const finalLinks = Array.from(links).filter((l) => l.length > 1);
  if (["genre", "country", "language", "category"].includes(currentType)) {
    return finalLinks.filter((l) => l !== "/explore");
  }
  return finalLinks;
};
const MetadataExtractor = {
  async run() {
    const path = self.location.pathname;
    const search = self.location.search;
    let fullId = normalizeId(path, search);
    if (path === "/my-collections" && !search) fullId = VIRTUAL_IDS.MY_COLLECTIONS;
    const hierarchy = resolveHierarchy(path, search);
    let { title, type, parentId } = hierarchy;
    const enriched = await waitForTitle(type, title);
    title = enriched.title;
    const poster = enriched.poster;
    let genres = [];
    let year = "";
    let rating = "";
    let description = "";
    if (path.startsWith("/content/")) {
      const info = getPageMediaInfo();
      if (info) {
        type = info.type;
        year = info.year;
        genres = info.genres || [];
        rating = info.rating || "";
        description = info.description || "";
        if (type === "movie") parentId = VIRTUAL_IDS.MOVIES;
        else if (type === "tv" || type === "anime") parentId = VIRTUAL_IDS.SERIES;
        else parentId = VIRTUAL_IDS.CONTENT;
      }
    }
    const scrapedLinks = getScrapedLinks(type);
    const attributeLinks = [];
    genres.forEach((g) => attributeLinks.push(`/genre/${g.toLowerCase().replace(/\s+/g, "-")}`));
    const safeLinks = scrapedLinks.filter((l) => {
      const link = l.toLowerCase();
      if (link === "/" || link === "/explore") return false;
      if (link.includes("moctale.in") && !link.includes("moctale.in/")) return false;
      if (link.includes("/schedule")) return false;
      if (type === "club" && link.includes("group=")) return false;
      return true;
    });
    const normalizedLinks = safeLinks.map((l) => {
      const [p, s] = l.split("?");
      return normalizeId(p, s || "");
    });
    const connectionSet = /* @__PURE__ */ new Set([parentId, ...attributeLinks, ...normalizedLinks]);
    connectionSet.delete("");
    connectionSet.delete(fullId);
    if (["movie", "tv", "anime", "person"].includes(type)) {
      connectionSet.delete("/");
      connectionSet.delete("/explore");
    }
    return {
      id: fullId,
      title,
      type,
      year,
      poster,
      genres,
      rating,
      description,
      parentId,
      relatedLinks: Array.from(connectionSet),
      visitCount: 1,
      firstVisitedAt: Date.now(),
      lastVisitedAt: Date.now()
    };
  },
  getVirtualGraphNodes: () => {
    const ts = Date.now();
    const createNode = (id, title, parent, links = []) => ({
      id,
      title,
      parentId: parent,
      type: "hub",
      relatedLinks: links,
      visitCount: 1,
      firstVisitedAt: ts,
      lastVisitedAt: ts,
      poster: "",
      genres: []
    });
    const nodes = [
      { ...createNode(VIRTUAL_IDS.CONTENT, "Content Library", "/explore"), relatedLinks: ["/explore", VIRTUAL_IDS.MOVIES, VIRTUAL_IDS.SERIES] },
      createNode(VIRTUAL_IDS.MOVIES, "Movies", VIRTUAL_IDS.CONTENT),
      createNode(VIRTUAL_IDS.SERIES, "Series", VIRTUAL_IDS.CONTENT),
      { ...createNode(VIRTUAL_IDS.COLLECTIONS, "Collections", "/explore"), relatedLinks: ["/explore", VIRTUAL_IDS.MY_COLLECTIONS] },
      createNode(VIRTUAL_IDS.MY_COLLECTIONS, "My Collections", VIRTUAL_IDS.COLLECTIONS),
      { ...createNode("/clubs", "Clubs", "/explore"), relatedLinks: ["/explore", VIRTUAL_IDS.MEMBERS] },
      createNode(VIRTUAL_IDS.MEMBERS, "Community Members", "/clubs"),
      createNode("/schedule", "Schedule", "/explore", ["/explore", "/schedule?timeFilter=today", "/schedule?timeFilter=upcoming", "/schedule?timeFilter=announced"])
    ];
    const times = [{ id: "today", t: "Today" }, { id: "upcoming", t: "Upcoming" }, { id: "announced", t: "Announced" }];
    const cats = [{ id: "NEW_MOVIE_THEATRE", t: "In Theatres" }, { id: "NEW_MOVIE_OTT", t: "On OTT" }, { id: "NEW_SHOW", t: "New Shows" }, { id: "NEW_SEASON", t: "New Seasons" }];
    times.forEach((tm) => {
      const tmId = `/schedule?timeFilter=${tm.id}`;
      const kids = cats.map((c) => `/schedule?timeFilter=${tm.id}&contentFilter=${c.id}`);
      nodes.push(createNode(tmId, tm.t, "/schedule", kids));
      cats.forEach((c) => nodes.push({ ...createNode(`${tmId}&contentFilter=${c.id}`, c.t, tmId), type: "filter" }));
    });
    return nodes;
  }
};
const DB_KEY = "moctale_knowledge_graph";
const sanitizeNode = (node) => {
  let parent = node.parentId;
  if (node.type === "movie") parent = VIRTUAL_IDS.MOVIES;
  else if (node.type === "tv" || node.type === "anime") parent = VIRTUAL_IDS.SERIES;
  else if (node.type === "user") parent = VIRTUAL_IDS.MEMBERS;
  else if (node.type === "club") parent = "/clubs";
  else if (node.type === "collection") {
    if (node.id.includes("watchlist=")) parent = VIRTUAL_IDS.MY_COLLECTIONS;
    else if (node.id === VIRTUAL_IDS.MY_COLLECTIONS) parent = VIRTUAL_IDS.COLLECTIONS;
    else if (!parent || parent === "/explore") parent = VIRTUAL_IDS.COLLECTIONS;
  }
  if (!parent && node.type !== "root") parent = "/explore";
  let links = node.relatedLinks || [];
  if (parent && !links.includes(parent)) {
    links = [...links, parent];
  }
  links = links.filter(
    (l) => l !== node.id && l !== "/" && !(l === "/explore" && ["movie", "tv", "person"].includes(node.type))
  );
  return { ...node, parentId: parent, relatedLinks: links };
};
const LocalDbService = {
  async getDB() {
    return new Promise((resolve) => {
      chrome.storage.local.get([DB_KEY], (result) => {
        const db = result[DB_KEY];
        if (!db || !db.entities) {
          resolve({ entities: {}, lastUpdated: Date.now() });
        } else {
          resolve(db);
        }
      });
    });
  },
  // 2. Track Visit (Now accepts data directly or fetches it)
  async trackVisit(extractedData) {
    const data = extractedData || await MetadataExtractor.run();
    if (!data || !data.id) return;
    if (!data.title || data.title === "Loading..." || data.title === "Unknown") return;
    if (data.type === "unknown" || data.title === "Unknown Page") return;
    const db = await this.getDB();
    const now = Date.now();
    const existing = db.entities[data.id];
    let finalNode;
    if (existing) {
      finalNode = {
        ...existing,
        ...data,
        // Persist parent if existing is better, unless new data is specific (like watchlist)
        parentId: data.parentId && data.parentId !== "/explore" ? data.parentId : existing.parentId,
        relatedLinks: data.relatedLinks || existing.relatedLinks,
        visitCount: (existing.visitCount || 0) + 1,
        lastVisitedAt: now,
        firstVisitedAt: existing.firstVisitedAt || now
      };
    } else {
      finalNode = {
        id: data.id,
        title: data.title || "Unknown",
        poster: data.poster || "",
        type: data.type || "unknown",
        year: data.year,
        genres: data.genres || [],
        rating: data.rating,
        parentId: data.parentId,
        relatedLinks: data.relatedLinks || [],
        visitCount: 1,
        firstVisitedAt: now,
        lastVisitedAt: now,
        description: data.description
      };
    }
    finalNode = sanitizeNode(finalNode);
    db.entities[finalNode.id] = finalNode;
    const virtualNodes = MetadataExtractor.getVirtualGraphNodes();
    virtualNodes.forEach((node) => {
      if (node.id) {
        const ex = db.entities[node.id];
        db.entities[node.id] = {
          ...node,
          visitCount: ex ? ex.visitCount : node.visitCount,
          firstVisitedAt: ex ? ex.firstVisitedAt : node.firstVisitedAt,
          lastVisitedAt: now
        };
      }
    });
    ["/explore/anime", "/explore/franchise", "/saved-collections", "/virtual/collections"].forEach((badId) => {
      if (badId === "/virtual/collections" && db.entities[badId]?.type === "collection") {
        delete db.entities[badId];
      } else if (badId !== "/virtual/collections") {
        if (db.entities[badId]) delete db.entities[badId];
      }
    });
    db.lastUpdated = now;
    await chrome.storage.local.set({ [DB_KEY]: db });
    console.log(`[Moctale DB] Tracked: ${finalNode.title} -> Parent: ${finalNode.parentId}`);
  },
  async search(query) {
    const db = await this.getDB();
    const lowerQ = query.toLowerCase();
    return Object.values(db.entities).filter((item) => item.title.toLowerCase().includes(lowerQ)).sort((a, b) => b.lastVisitedAt - a.lastVisitedAt).slice(0, 10);
  },
  async getHistory(limit = 20) {
    const db = await this.getDB();
    return Object.values(db.entities).sort((a, b) => b.lastVisitedAt - a.lastVisitedAt).slice(0, limit);
  }
};
let lastTrackedPath = "";
let observer$2 = null;
const attemptTrack = async () => {
  const path = self.location.pathname;
  const search = self.location.search;
  const fullKey = path + search;
  if (fullKey === lastTrackedPath) return;
  try {
    const data = await MetadataExtractor.run();
    if (data && data.title && data.title !== "Loading..." && data.title !== "Unknown") {
      await LocalDbService.trackVisit({
        id: data.id || path,
        title: data.title,
        type: data.type,
        year: data.year,
        poster: data.poster,
        genres: data.genres,
        relatedLinks: data.relatedLinks
      });
      lastTrackedPath = fullKey;
      console.log(`[LocalTracker] Captured: [${data.type}] ${data.title}`);
    }
  } catch (error) {
    console.error("[LocalTracker] Tracking failed:", error);
  }
};
const initLocalTracker = () => {
  if (observer$2) return;
  attemptTrack();
  let currentUrl = location.href;
  observer$2 = new MutationObserver(() => {
    if (currentUrl !== location.href) {
      currentUrl = location.href;
      setTimeout(attemptTrack, 500);
    }
  });
  observer$2.observe(document, { subtree: true, childList: true });
  console.log("[LocalTracker] Started");
};
const stopLocalTracker = () => {
  if (observer$2) {
    observer$2.disconnect();
    observer$2 = null;
    console.log("[LocalTracker] Stopped");
  }
};
const NODE_COLORS = {
  hub: "#ffffff",
  category: "#a78bfa",
  genre: "#c084fc",
  movie: "#38bdf8",
  tv: "#22d3ee",
  anime: "#f472b6",
  person: "#fbbf24",
  user: "#34d399",
  collection: "#f87171",
  franchise: "#f472b6",
  club: "#fb923c",
  language: "#94a3b8",
  country: "#94a3b8"
};
const VIRTUAL_LINK_MAP = {
  "/virtual/content": "/explore",
  "/virtual/movies": "/explore/categories",
  "/virtual/series": "/explore/categories",
  "/virtual/people": "/explore",
  "/virtual/collections": "/explore",
  "/virtual/my-collections": "/my-collections",
  "/virtual/community/members": "/clubs"
};
const DEFAULT_CONFIG = {
  physics: {
    gravitationalConstant: -80,
    springLength: 80,
    springConstant: 0.08,
    damping: 0.9
  },
  display: {
    nodeScale: 1,
    fontSize: 10,
    edgeOpacity: 0.3
  },
  filters: {
    showMovies: true,
    showSeries: true,
    showPeople: true,
    showCollections: true,
    showTaxonomy: true,
    showCommunity: true,
    showHubs: true,
    showHierarchy: true,
    showRelations: true
  }
};
let currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
let network = null;
let nodesDataSet = null;
let edgesDataSet = null;
let masterNodes = [];
let masterEdges = [];
let keyHandler = null;
let searchTimeout = null;
const getNodeSize = (type, visitCount, scale) => {
  let base = 5;
  if (type === "hub") base = 15;
  else if (type === "category" || type === "genre") base = 8;
  else if (visitCount > 5) base = 8;
  return base * scale;
};
const loadSettings = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get([
      "graph_gravity",
      "graph_springLength",
      "graph_damping",
      "graph_nodeScale",
      "graph_fontSize",
      "graph_edgeOpacity"
    ], (result) => {
      if (result.graph_gravity !== void 0) currentConfig.physics.gravitationalConstant = result.graph_gravity;
      if (result.graph_springLength !== void 0) currentConfig.physics.springLength = result.graph_springLength;
      if (result.graph_damping !== void 0) currentConfig.physics.damping = result.graph_damping;
      if (result.graph_nodeScale !== void 0) currentConfig.display.nodeScale = result.graph_nodeScale;
      if (result.graph_fontSize !== void 0) currentConfig.display.fontSize = result.graph_fontSize;
      if (result.graph_edgeOpacity !== void 0) currentConfig.display.edgeOpacity = result.graph_edgeOpacity;
      resolve();
    });
  });
};
const saveSetting = (key, value) => {
  chrome.storage.local.set({ [key]: value });
};
const prepareGraphData = (nodes) => {
  const GENRE_HUB = "/explore/genres";
  const COUNTRY_HUB = "/explore/countries";
  const LANG_HUB = "/explore/languages";
  const CAT_HUB = "/explore/categories";
  const PEOPLE_HUB = "/virtual/people";
  const HOME = "/explore";
  Object.values(nodes).forEach((node) => {
    if (!node.relatedLinks) return;
    if (node.type === "genre") {
      node.relatedLinks = node.relatedLinks.filter((l) => l !== HOME);
      if (!node.relatedLinks.includes(GENRE_HUB)) node.relatedLinks.push(GENRE_HUB);
    }
    if (node.type === "country") {
      node.relatedLinks = node.relatedLinks.filter((l) => l !== HOME);
      if (!node.relatedLinks.includes(COUNTRY_HUB)) node.relatedLinks.push(COUNTRY_HUB);
    }
    if (node.type === "language") {
      node.relatedLinks = node.relatedLinks.filter((l) => l !== HOME);
      if (!node.relatedLinks.includes(LANG_HUB)) node.relatedLinks.push(LANG_HUB);
    }
    if (node.type === "category") {
      node.relatedLinks = node.relatedLinks.filter((l) => l !== HOME);
      if (!node.relatedLinks.includes(CAT_HUB)) node.relatedLinks.push(CAT_HUB);
    }
    if (node.type === "person") {
      node.relatedLinks = node.relatedLinks.filter((l) => l !== HOME);
      if (!node.relatedLinks.includes(PEOPLE_HUB)) node.relatedLinks.push(PEOPLE_HUB);
    }
    node.relatedLinks = node.relatedLinks.filter((l) => l !== node.id);
  });
  const SKELETON = {
    "/explore": { title: "Home", type: "hub" },
    "/virtual/content": { title: "Content Library", type: "hub", parent: "/explore" },
    "/virtual/movies": { title: "Movies", type: "hub", parent: "/virtual/content" },
    "/virtual/series": { title: "Series", type: "hub", parent: "/virtual/content" },
    "/virtual/people": { title: "People", type: "hub", parent: "/explore" },
    "/virtual/collections": { title: "Collections", type: "hub", parent: "/explore" },
    "/virtual/my-collections": { title: "My Collections", type: "hub", parent: "/virtual/collections" },
    "/clubs": { title: "Clubs", type: "hub", parent: "/explore" },
    "/virtual/community/members": { title: "Community", type: "hub", parent: "/clubs" },
    "/explore/categories": { title: "Categories", type: "hub", parent: "/explore" },
    "/explore/genres": { title: "Genres", type: "hub", parent: "/explore" },
    "/explore/countries": { title: "Countries", type: "hub", parent: "/explore" },
    "/explore/languages": { title: "Languages", type: "hub", parent: "/explore" },
    "/schedule": { title: "Schedule", type: "hub", parent: "/explore" }
  };
  Object.keys(SKELETON).forEach((id) => {
    if (!nodes[id]) {
      nodes[id] = {
        id,
        title: SKELETON[id].title,
        type: SKELETON[id].type,
        poster: "",
        visitCount: 1,
        firstVisitedAt: Date.now(),
        lastVisitedAt: Date.now(),
        relatedLinks: SKELETON[id].parent ? [SKELETON[id].parent] : []
      };
    }
  });
  const entities = Object.values(nodes);
  const nodeSet = new Set(entities.map((e) => e.id));
  masterNodes = entities.map((e) => {
    const color = NODE_COLORS[e.type] || "#666";
    return {
      id: e.id,
      label: e.title,
      originalSize: getNodeSize(e.type, e.visitCount, 1),
      shape: "dot",
      type: e.type,
      visitCount: e.visitCount,
      color: { background: color, border: color, highlight: { background: "#fff", border: "#fff" } },
      font: { color: "#888", face: "Inter", strokeWidth: 3, strokeColor: "#000" }
    };
  });
  masterEdges = [];
  entities.forEach((e) => {
    if (e.relatedLinks) {
      e.relatedLinks.forEach((targetId) => {
        if (nodeSet.has(targetId)) {
          const targetEntity = nodes[targetId];
          const isHubLink = e.type === "hub" || targetEntity?.type === "hub" || targetId.startsWith("/virtual");
          masterEdges.push({
            id: `${e.id}-${targetId}`,
            from: e.id,
            to: targetId,
            color: { color: "#333" },
            width: 1,
            smooth: { enabled: false },
            type: isHubLink ? "hierarchy" : "relation"
          });
        }
      });
    }
  });
};
const toggleHandler = async (e) => {
  if (e.altKey && e.shiftKey && e.code === "KeyG") {
    e.preventDefault();
    await loadSettings();
    const db = await LocalDbService.getDB();
    prepareGraphData({ ...db.entities });
    showGraphModal();
  }
};
const initGraphVisualizer = () => {
  if (keyHandler) return;
  keyHandler = toggleHandler;
  document.addEventListener("keydown", keyHandler, true);
};
const stopGraphVisualizer = () => {
  if (keyHandler) {
    document.removeEventListener("keydown", keyHandler, true);
    keyHandler = null;
  }
  const modal = document.getElementById("moctale-graph-view");
  if (modal) {
    modal.remove();
    network = null;
    nodesDataSet = null;
    edgesDataSet = null;
    masterNodes = [];
    masterEdges = [];
  }
};
const reconcileGraph = () => {
  if (!nodesDataSet || !edgesDataSet) return;
  const allowedTypes = /* @__PURE__ */ new Set();
  if (currentConfig.filters.showMovies) allowedTypes.add("movie");
  if (currentConfig.filters.showSeries) {
    allowedTypes.add("tv");
    allowedTypes.add("anime");
  }
  if (currentConfig.filters.showPeople) allowedTypes.add("person");
  if (currentConfig.filters.showCollections) {
    allowedTypes.add("collection");
    allowedTypes.add("franchise");
  }
  if (currentConfig.filters.showTaxonomy) {
    allowedTypes.add("genre");
    allowedTypes.add("category");
    allowedTypes.add("language");
    allowedTypes.add("country");
  }
  if (currentConfig.filters.showCommunity) {
    allowedTypes.add("user");
    allowedTypes.add("club");
  }
  if (currentConfig.filters.showHubs) allowedTypes.add("hub");
  const targetNodes = masterNodes.filter((n) => {
    if (n.id === "/explore") return true;
    return allowedTypes.has(n.type);
  });
  const targetNodeIds = new Set(targetNodes.map((n) => n.id));
  const targetEdges = masterEdges.filter((e) => {
    const sourceExists = targetNodeIds.has(e.from);
    const targetExists = targetNodeIds.has(e.to);
    if (!sourceExists || !targetExists) return false;
    if (e.from === "/explore" || e.to === "/explore") return true;
    if (e.type === "hierarchy" && !currentConfig.filters.showHierarchy) return false;
    if (e.type === "relation" && !currentConfig.filters.showRelations) return false;
    return true;
  });
  const scale = currentConfig.display.nodeScale;
  const fontSize = currentConfig.display.fontSize;
  const opacity = currentConfig.display.edgeOpacity;
  const formattedNodes = targetNodes.map((n) => ({
    ...n,
    size: n.originalSize * scale,
    font: { ...n.font, size: fontSize }
  }));
  const formattedEdges = targetEdges.map((e) => ({
    ...e,
    color: { ...e.color, opacity }
  }));
  const currentNodeIds = new Set(nodesDataSet.getIds());
  const currentNodeList = nodesDataSet.get();
  const nodesToAdd = formattedNodes.filter((n) => !currentNodeIds.has(n.id));
  const nodesToRemove = currentNodeList.filter((n) => !targetNodeIds.has(n.id)).map((n) => n.id);
  const nodesToUpdate = formattedNodes.filter((n) => currentNodeIds.has(n.id));
  const currentEdgeIds = new Set(edgesDataSet.getIds());
  const edgesToAdd = formattedEdges.filter((e) => !currentEdgeIds.has(e.id));
  const edgesToRemove = edgesDataSet.get().filter((e) => !formattedEdges.find((fe) => fe.id === e.id)).map((e) => e.id);
  const edgesToUpdate = formattedEdges.filter((e) => currentEdgeIds.has(e.id));
  nodesDataSet.remove(nodesToRemove);
  nodesDataSet.add(nodesToAdd);
  nodesDataSet.update(nodesToUpdate);
  edgesDataSet.remove(edgesToRemove);
  edgesDataSet.add(edgesToAdd);
  edgesDataSet.update(edgesToUpdate);
  const countDisplay = document.getElementById("mp-node-count");
  if (countDisplay) countDisplay.innerText = formattedNodes.length.toString();
};
const showGraphModal = () => {
  if (document.getElementById("moctale-graph-view")) return;
  const modal = document.createElement("div");
  modal.id = "moctale-graph-view";
  modal.className = "fixed inset-0 z-[9999] flex items-center justify-center animate-in fade-in duration-300 font-sans";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  modal.style.backdropFilter = "blur(4px)";
  modal.innerHTML = `
    <div class="relative rounded-xl border border-[#333] shadow-2xl overflow-hidden flex flex-col p-[1px]"
         style="width: 80vw; height: 90vh; background-color: rgba(0, 0, 0, 0.9);">
         
      <div class="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
        <h3 class="text-white font-bold text-xl tracking-tight opacity-80">Graph View</h3>
        <p class="text-[#666] text-xs uppercase tracking-widest">
            <span id="mp-node-count" class="text-white font-mono transition-all duration-300">0</span> Nodes
        </p>
      </div>

      <button id="mp-graph-close" class="absolute top-4 right-4 z-10 p-2 text-[#666] hover:text-white transition-colors bg-black/50 rounded-full border border-white/10 hover:border-white/40 cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <div id="mp-network-container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>

      <div class="absolute bottom-4 left-4 z-20 flex flex-col gap-2 w-56">

        <div id="mp-control-panel" class="hidden flex-col gap-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4 mb-2 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-200 overflow-y-auto max-h-[60vh]">
            <div class="flex flex-col gap-2">
                 <div class="flex items-center justify-between">
                    <h4 class="text-[10px] uppercase tracking-widest text-[#888] font-bold">Physics Engine</h4>
                    <button id="mp-reset-defaults" title="Reset All Settings" class="text-[#666] hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-white/10">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                    </button>
                </div>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Gravity <span id="val-gravity">${currentConfig.physics.gravitationalConstant}</span></span><input type="range" id="inp-gravity" min="-200" max="0" step="5" value="${currentConfig.physics.gravitationalConstant}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Spring Length <span id="val-springL">${currentConfig.physics.springLength}</span></span><input type="range" id="inp-springL" min="20" max="300" step="10" value="${currentConfig.physics.springLength}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Damping <span id="val-damping">${currentConfig.physics.damping}</span></span><input type="range" id="inp-damping" min="0.1" max="1" step="0.05" value="${currentConfig.physics.damping}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
            </div>
            
            <div class="h-[1px] bg-white/10 w-full"></div>
            
            <div class="flex flex-col gap-2">
                <h4 class="text-[10px] uppercase tracking-widest text-[#888] font-bold">Display</h4>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Node Size <span id="val-scale">${currentConfig.display.nodeScale}x</span></span><input type="range" id="inp-scale" min="0.5" max="3" step="0.1" value="${currentConfig.display.nodeScale}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Font Size <span id="val-font">${currentConfig.display.fontSize}px</span></span><input type="range" id="inp-font" min="8" max="24" step="1" value="${currentConfig.display.fontSize}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
                <label class="flex flex-col gap-1"><span class="text-[10px] text-[#ccc] flex justify-between">Edge Opacity <span id="val-opacity">${currentConfig.display.edgeOpacity}</span></span><input type="range" id="inp-opacity" min="0.1" max="1" step="0.1" value="${currentConfig.display.edgeOpacity}" class="accent-white h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"></label>
            </div>

            <div class="h-[1px] bg-white/10 w-full"></div>

            <div class="flex flex-col gap-3">
                <h4 class="text-[10px] uppercase tracking-widest text-[#888] font-bold">Smart Filters</h4>
                <div class="grid grid-cols-2 gap-2">
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-movies" checked class="accent-[#38bdf8] rounded cursor-pointer"> Movies</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-series" checked class="accent-[#22d3ee] rounded cursor-pointer"> Series</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-people" checked class="accent-[#fbbf24] rounded cursor-pointer"> People</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-collections" checked class="accent-[#f87171] rounded cursor-pointer"> Collections</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-taxonomy" checked class="accent-[#c084fc] rounded cursor-pointer"> Taxonomy</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-community" checked class="accent-[#34d399] rounded cursor-pointer"> Community</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white"><input type="checkbox" id="chk-hubs" checked class="accent-white rounded cursor-pointer"> Hubs</label>
                </div>
                <div class="h-[1px] bg-white/5 w-full"></div>
                <div class="flex flex-col gap-1">
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white" title="Links connecting Hubs to content"><input type="checkbox" id="chk-hierarchy" checked class="accent-gray-500 rounded cursor-pointer"> Hierarchy Links</label>
                    <label class="flex items-center gap-2 text-[11px] text-[#ccc] cursor-pointer hover:text-white" title="Direct relations between content"><input type="checkbox" id="chk-relations" checked class="accent-gray-500 rounded cursor-pointer"> Relation Links</label>
                </div>
            </div>
        </div>

        <div class="flex items-center gap-1 w-full">
            <button id="mp-toggle-controls" title="Toggle Controls" class="flex-1 h-9 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all shadow-lg cursor-pointer flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></button>
            <button id="mp-graph-replay" title="Replay Animation" class="flex-1 h-9 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all shadow-lg cursor-pointer flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
            <button id="mp-graph-reset" title="Reset Camera" class="flex-1 h-9 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all shadow-lg cursor-pointer flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h6v2H5v4H3V3zm18 0h-6v2h4v4h2V3zM3 21h6v-2H5v-4H3v6zm18 0h-6v-2h4v-4h2v6z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg></button>
            <button id="mp-graph-clear" title="Clear All Graph Data" class="flex-1 h-9 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all shadow-lg cursor-pointer flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
        </div>

        <div class="relative group w-full">
           <input type="text" id="mp-graph-search" placeholder="Search node..." 
               class="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all placeholder-white/30 shadow-lg font-mono"
           />
           <div id="mp-search-count" class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 hidden"></div>
        </div>

        <div class="text-[10px] text-[#555] font-medium pl-1">
          Powered by <a href="https://github.com/010101-sans/moctale-plus" target="_blank" class="text-[#777] hover:text-white hover:underline transition-colors">Moctale Plus</a> 
          by <a href="https://github.com/010101-sans/" target="_blank" class="text-[#777] hover:text-white hover:underline transition-colors">010101-sans</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const container = document.getElementById("mp-network-container");
  if (container) renderGraph(container);
  const close = () => stopGraphVisualizer();
  document.getElementById("mp-graph-close")?.addEventListener("click", close);
  const panel = document.getElementById("mp-control-panel");
  const toggleBtn = document.getElementById("mp-toggle-controls");
  toggleBtn?.addEventListener("click", () => {
    panel?.classList.toggle("hidden");
    panel?.classList.toggle("flex");
    if (panel?.classList.contains("flex")) toggleBtn.classList.add("bg-white/10", "text-white");
    else toggleBtn.classList.remove("bg-white/10", "text-white");
  });
  document.getElementById("mp-graph-reset")?.addEventListener("click", () => {
    if (network) network.fit({ animation: { duration: 1e3, easingFunction: "easeInOutQuad" } });
  });
  document.getElementById("mp-graph-clear")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the entire Knowledge Graph? This cannot be undone.")) {
      chrome.storage.local.remove("moctale_knowledge_graph", () => {
        masterNodes = [];
        masterEdges = [];
        reconcileGraph();
      });
    }
  });
  document.getElementById("mp-graph-replay")?.addEventListener("click", () => {
    nodesDataSet?.clear();
    edgesDataSet?.clear();
    reconcileGraph();
  });
  document.getElementById("mp-reset-defaults")?.addEventListener("click", () => {
    document.getElementById("inp-gravity").value = DEFAULT_CONFIG.physics.gravitationalConstant.toString();
    document.getElementById("inp-springL").value = DEFAULT_CONFIG.physics.springLength.toString();
    document.getElementById("inp-damping").value = DEFAULT_CONFIG.physics.damping.toString();
    document.getElementById("inp-scale").value = DEFAULT_CONFIG.display.nodeScale.toString();
    document.getElementById("inp-font").value = DEFAULT_CONFIG.display.fontSize.toString();
    document.getElementById("inp-opacity").value = DEFAULT_CONFIG.display.edgeOpacity.toString();
    ["chk-movies", "chk-series", "chk-people", "chk-collections", "chk-taxonomy", "chk-community", "chk-hubs", "chk-hierarchy", "chk-relations"].forEach((id) => document.getElementById(id).checked = true);
    updatePhysics();
    updateFilters();
  });
  const updatePhysics = () => {
    if (!network) return;
    const gravity = parseFloat(document.getElementById("inp-gravity").value);
    const springL = parseFloat(document.getElementById("inp-springL").value);
    const damping = parseFloat(document.getElementById("inp-damping").value);
    document.getElementById("val-gravity").innerText = gravity.toString();
    document.getElementById("val-springL").innerText = springL.toString();
    document.getElementById("val-damping").innerText = damping.toString();
    saveSetting("graph_gravity", gravity);
    saveSetting("graph_springLength", springL);
    saveSetting("graph_damping", damping);
    network.setOptions({ physics: { forceAtlas2Based: { gravitationalConstant: gravity, springLength: springL, damping } } });
  };
  const updateFilters = () => {
    currentConfig.filters.showMovies = document.getElementById("chk-movies").checked;
    currentConfig.filters.showSeries = document.getElementById("chk-series").checked;
    currentConfig.filters.showPeople = document.getElementById("chk-people").checked;
    currentConfig.filters.showCollections = document.getElementById("chk-collections").checked;
    currentConfig.filters.showTaxonomy = document.getElementById("chk-taxonomy").checked;
    currentConfig.filters.showCommunity = document.getElementById("chk-community").checked;
    currentConfig.filters.showHubs = document.getElementById("chk-hubs").checked;
    currentConfig.filters.showHierarchy = document.getElementById("chk-hierarchy").checked;
    currentConfig.filters.showRelations = document.getElementById("chk-relations").checked;
    currentConfig.display.nodeScale = parseFloat(document.getElementById("inp-scale").value);
    currentConfig.display.fontSize = parseFloat(document.getElementById("inp-font").value);
    currentConfig.display.edgeOpacity = parseFloat(document.getElementById("inp-opacity").value);
    document.getElementById("val-scale").innerText = `${currentConfig.display.nodeScale}x`;
    document.getElementById("val-font").innerText = `${currentConfig.display.fontSize}px`;
    document.getElementById("val-opacity").innerText = currentConfig.display.edgeOpacity.toString();
    saveSetting("graph_nodeScale", currentConfig.display.nodeScale);
    saveSetting("graph_fontSize", currentConfig.display.fontSize);
    saveSetting("graph_edgeOpacity", currentConfig.display.edgeOpacity);
    reconcileGraph();
  };
  ["inp-gravity", "inp-springL", "inp-damping"].forEach((id) => document.getElementById(id)?.addEventListener("input", updatePhysics));
  ["inp-scale", "inp-font", "inp-opacity"].forEach((id) => document.getElementById(id)?.addEventListener("input", updateFilters));
  ["chk-movies", "chk-series", "chk-people", "chk-collections", "chk-taxonomy", "chk-community", "chk-hubs", "chk-hierarchy", "chk-relations"].forEach((id) => document.getElementById(id)?.addEventListener("change", updateFilters));
  const escListener = (e) => {
    if (e.key === "Escape") {
      close();
      self.removeEventListener("keydown", escListener);
    }
  };
  self.addEventListener("keydown", escListener);
};
const renderGraph = (container) => {
  nodesDataSet = new DataSet();
  edgesDataSet = new DataSet();
  const options = {
    nodes: { borderWidth: 0, shadow: false },
    interaction: { hover: true, tooltipDelay: 100, hideEdgesOnDrag: false, dragNodes: true },
    edges: { arrows: { to: { enabled: false } }, color: { inherit: false } },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: currentConfig.physics.gravitationalConstant,
        centralGravity: 3e-3,
        springLength: currentConfig.physics.springLength,
        springConstant: 0.08,
        damping: currentConfig.physics.damping
      },
      maxVelocity: 50,
      solver: "forceAtlas2Based",
      timestep: 0.5,
      stabilization: { enabled: true, iterations: 200 }
    }
  };
  network = new Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);
  reconcileGraph();
  let isDragging = false;
  network.on("dragStart", () => {
    isDragging = true;
  });
  network.on("dragEnd", () => {
    isDragging = false;
    network?.unselectAll();
  });
  network.on("doubleClick", (params) => {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const url = nodeId.startsWith("http") ? nodeId : `https://www.moctale.in${nodeId}`;
      if (nodeId.startsWith("/virtual")) {
        const mapped = VIRTUAL_LINK_MAP[nodeId];
        if (mapped) self.open(`https://www.moctale.in${mapped}`, "_blank");
      } else {
        self.open(url, "_blank");
      }
    }
  });
  network.on("hoverNode", (params) => {
    if (isDragging) return;
    const nodeId = params.node;
    const connectedNodes = network?.getConnectedNodes(nodeId);
    const allIds = nodesDataSet?.getIds();
    const updates = [];
    allIds?.forEach((id) => {
      if (id !== nodeId && !connectedNodes.includes(id)) {
        updates.push({ id, color: { background: "#222", border: "#333" }, font: { color: "#333" } });
      }
    });
    nodesDataSet?.update(updates);
  });
  network.on("blurNode", (_params) => {
    const updates = [];
    nodesDataSet?.forEach((node) => {
      const master = masterNodes.find((n) => n.id === node.id);
      if (master) {
        updates.push({ id: node.id, color: master.color, font: master.font });
      }
    });
    nodesDataSet?.update(updates);
  });
  const searchInput = document.getElementById("mp-graph-search");
  const countDisplay = document.getElementById("mp-search-count");
  let currentMatches = [];
  let currentMatchIndex = 0;
  let lastHighlightedId = null;
  const resetHighlight = () => {
    if (lastHighlightedId && nodesDataSet) {
      const master = masterNodes.find((n) => n.id === lastHighlightedId);
      if (master) {
        nodesDataSet.update({ id: lastHighlightedId, borderWidth: 0, color: master.color, shadow: { enabled: false } });
      }
    }
    lastHighlightedId = null;
  };
  const highlightNode = (id) => {
    resetHighlight();
    if (nodesDataSet) {
      nodesDataSet.update({ id, borderWidth: 2, color: { border: "#4ade80" }, shadow: { enabled: true, color: "#4ade80", size: 15, x: 0, y: 0 } });
    }
    lastHighlightedId = id;
    network?.selectNodes([id]);
    network?.focus(id, { scale: 1.2, animation: { duration: 1e3, easingFunction: "easeInOutQuad" } });
  };
  const performSearch = (val) => {
    if (!val) {
      resetHighlight();
      currentMatches = [];
      if (countDisplay) countDisplay.classList.add("hidden");
      return;
    }
    const visibleIds = new Set(nodesDataSet?.getIds());
    currentMatches = masterNodes.filter((e) => visibleIds.has(e.id) && e.label.toLowerCase().includes(val)).map((e) => e.id);
    if (currentMatches.length > 0) {
      currentMatchIndex = 0;
      highlightNode(currentMatches[0]);
      if (countDisplay) {
        countDisplay.innerText = `${currentMatchIndex + 1}/${currentMatches.length}`;
        countDisplay.classList.remove("hidden");
      }
    } else {
      resetHighlight();
      if (countDisplay) {
        countDisplay.innerText = "0/0";
        countDisplay.classList.remove("hidden");
      }
    }
  };
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase();
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => performSearch(val), 300);
    });
    searchInput.addEventListener("blur", () => resetHighlight());
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") e.stopPropagation();
      if (e.key === "Enter" && currentMatches.length > 1) {
        e.preventDefault();
        currentMatchIndex = (currentMatchIndex + 1) % currentMatches.length;
        highlightNode(currentMatches[currentMatchIndex]);
        if (countDisplay) countDisplay.innerText = `${currentMatchIndex + 1}/${currentMatches.length}`;
      }
    });
  }
};
const TOAST_STYLES = `
  #mp-toast-stack {
    position: fixed;
    right: 24px;
    bottom: 32px;
    z-index: 2147483647;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    pointer-events: none;
  }

  .mp-toast-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    
    /* THEME INTEGRATION */
    background: var(--mp-bg-surface, rgba(11, 7, 22, 0.95));
    border: 1px solid var(--mp-border, rgba(255, 255, 255, 0.1));
    color: var(--mp-text-main, #ffffff);
    
    /* Fallback Backdrop Blur (If theme bg is transparent) */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.8);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    cursor: pointer;
    user-select: none;
    pointer-events: auto;
    
    /* Animation Props */
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    
    /* Smooth Layout Transitions */
    max-height: 100px;
    margin-bottom: 0;
  }

  .mp-toast-item.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .mp-toast-item.removing {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
    max-height: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    overflow: hidden;
  }

  .mp-toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    flex-shrink: 0;
  }

  /* Variants */
  .mp-toast-success .mp-toast-icon { 
    background: rgba(74, 222, 128, 0.15); 
    border: 1px solid rgba(74, 222, 128, 0.2); 
    color: #4ade80; 
  }
  
  .mp-toast-error .mp-toast-icon { 
    background: rgba(239, 68, 68, 0.15); 
    border: 1px solid rgba(239, 68, 68, 0.2); 
    color: #ef4444; 
  }
  
  .mp-toast-info .mp-toast-icon { 
    background: rgba(59, 130, 246, 0.15); 
    border: 1px solid rgba(59, 130, 246, 0.2); 
    color: #3b82f6; 
  }
  
  /* Loading uses the Theme Accent */
  .mp-toast-loading .mp-toast-icon { 
    background: var(--mp-bg-layer, rgba(124, 58, 237, 0.15)); 
    border: 1px solid var(--mp-border, rgba(124, 58, 237, 0.2)); 
    color: var(--mp-accent, #a78bfa); 
  }

  .mp-toast-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mp-toast-title {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--mp-text-main, #f2f2f2);
    letter-spacing: 0.01em;
  }

  .mp-toast-sub {
    font-size: 10px;
    font-weight: 500;
    color: var(--mp-text-muted, #888);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .mp-spin { animation: mp-spin 1s linear infinite; }
  .mp-pulse { animation: mp-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

  @keyframes mp-spin { to { transform: rotate(360deg); } }
  @keyframes mp-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
`;
const ICONS = {
  success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  loading: `<svg class="mp-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`
};
const injectStyles$1 = () => {
  if (!document.getElementById("mp-toast-styles")) {
    const style = document.createElement("style");
    style.id = "mp-toast-styles";
    style.textContent = TOAST_STYLES;
    document.head.appendChild(style);
  }
};
const getStackContainer = () => {
  let stack = document.getElementById("mp-toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "mp-toast-stack";
    document.body.appendChild(stack);
  }
  return stack;
};
const showToast = (message, type = "success") => {
  injectStyles$1();
  const stack = getStackContainer();
  const toast = document.createElement("div");
  toast.className = `mp-toast-item mp-toast-${type}`;
  const subText = type === "loading" ? `<span style="width: 6px; height: 6px; background: var(--mp-accent, #a78bfa); border-radius: 50%;" class="mp-pulse"></span> Processing...` : `Moctale Plus`;
  toast.innerHTML = `
    <div class="mp-toast-icon">${ICONS[type]}</div>
    <div class="mp-toast-content">
      <span class="mp-toast-title">${message}</span>
      <span class="mp-toast-sub">${subText}</span>
    </div>
  `;
  const removeToast = () => {
    toast.classList.add("removing");
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 450);
  };
  toast.onclick = removeToast;
  stack.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("visible");
    });
  });
  if (stack.children.length > 5) {
    const oldest = stack.firstElementChild;
    if (oldest) {
      oldest.classList.add("removing");
      setTimeout(() => oldest.remove(), 450);
    }
  }
  if (type !== "loading") {
    setTimeout(() => {
      if (document.body.contains(toast)) {
        removeToast();
      }
    }, 4e3);
  }
};
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
        version: "2.8.0",
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
const navigate = (path) => {
  self.location.href = path;
};
const toggleExtensionSetting = (key, name) => {
  if (typeof chrome === "undefined" || !chrome.runtime?.id) {
    console.warn("[Moctale+] Context Invalidated. Refreshing...");
    self.location.reload();
    return;
  }
  chrome.storage.local.get([key], (result) => {
    const current = result[key] === true;
    const newValue = !current;
    chrome.storage.local.set({ [key]: newValue }, () => {
      const needsReload = key === "enableSpoilerShield";
      const toastType = needsReload ? "info" : newValue ? "success" : "info";
      showToast(`${name}: ${newValue ? "ON" : "OFF"}`, toastType);
      if (needsReload) setTimeout(() => self.location.reload(), 800);
    });
  });
};
const setExtensionValue = (key, value, message) => {
  chrome.storage.local.set({ [key]: value }, () => {
    showToast(message, "success");
  });
};
const triggerRandomPick = () => {
  const randomBtn = document.querySelector(".moctale-pick-random button");
  if (randomBtn) randomBtn.click();
  else showToast("Pick Random not available here", "error");
};
const clickSearch = () => {
  const searchBtn = document.querySelector('button[aria-label="Search"]');
  if (searchBtn) searchBtn.click();
  else self.location.hash = "#auto_search=";
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
        if (myProfileLink) myProfileLink.click();
        else dialog.querySelector("a")?.click();
      }
    }, 50);
  } else {
    const avatar = document.querySelector('img[alt="Profile"]');
    if (avatar) {
      const btn = avatar.closest("button");
      if (btn) btn.click();
    } else {
      navigate("/accounts/edit?section=settings");
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
    const opts = { view: self, bubbles: true, cancelable: true, buttons: 1 };
    notifBtn.dispatchEvent(new PointerEvent("pointerdown", opts));
    notifBtn.dispatchEvent(new MouseEvent("mousedown", opts));
    notifBtn.dispatchEvent(new PointerEvent("pointerup", opts));
    notifBtn.dispatchEvent(new MouseEvent("mouseup", opts));
    notifBtn.click();
  } else {
    showToast("Notification button not found", "error");
  }
};
const triggerImport = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await importBackup(file);
        showToast("Backup imported successfully", "success");
        setTimeout(() => self.location.reload(), 1e3);
      } catch (err) {
        showToast("Import failed", "error");
      }
    }
  };
  input.click();
};
const scrollToTop = () => self.scrollTo({ top: 0, behavior: "smooth" });
const scrollToBottom = () => self.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
const THEMES = [
  { id: "default", label: "Default (Dark)" },
  { id: "oled", label: "OLED Black" },
  { id: "midnight", label: "Midnight Blue" },
  { id: "dracula", label: "Dracula" },
  { id: "nord", label: "Nord" },
  { id: "github-dark", label: "GitHub Dark" },
  { id: "synthwave", label: "Synthwave" },
  { id: "onedark", label: "One Dark" },
  { id: "nightowl", label: "Night Owl" },
  { id: "palenight", label: "Palenight" },
  { id: "twitter-dim", label: "Twitter Dim" },
  { id: "discord", label: "Discord" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "eva", label: "Eva" },
  { id: "goku", label: "Goku" },
  { id: "horror", label: "Horror" },
  { id: "forest", label: "Forest" },
  { id: "matrix", label: "Matrix" },
  { id: "coffee", label: "Coffee" },
  { id: "ocean", label: "Ocean" },
  { id: "catppuccin", label: "Catppuccin" },
  { id: "tokyonight", label: "Tokyo Night" },
  { id: "rosepine", label: "Rosé Pine" },
  { id: "kanagawa", label: "Kanagawa" },
  { id: "cobalt2", label: "Cobalt2" },
  { id: "shades-purple", label: "Shades of Purple" },
  { id: "andromeda", label: "Andromeda" },
  { id: "linear", label: "Linear" },
  { id: "vercel", label: "Vercel" },
  { id: "supabase", label: "Supabase" },
  { id: "raycast", label: "Raycast" },
  { id: "spotify", label: "Spotify" },
  { id: "netflix", label: "Netflix" },
  { id: "disney", label: "Disney+" },
  { id: "hbo", label: "HBO" },
  { id: "macos", label: "macOS" },
  { id: "ubuntu", label: "Ubuntu" }
];
const STATIC_COMMANDS = [
  // ============================
  // 1. CORE ACTIONS & UI
  // ============================
  {
    id: "act-graph",
    title: "Open Graph View",
    subtitle: "Visualize your history in a 3D node graph",
    type: "action",
    icon: "Network",
    keywords: ["graph", "nodes", "view", "map", "visualize"],
    action: () => {
      document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "g",
        code: "KeyG",
        altKey: true,
        shiftKey: true,
        bubbles: true
      }));
    }
  },
  {
    id: "act-settings",
    title: "Account Settings",
    subtitle: "Configure layout, backup, and preferences",
    type: "action",
    icon: "Settings",
    keywords: ["config", "options", "preferences"],
    url: "https://www.moctale.in/accounts/edit?section=settings"
  },
  {
    id: "act-profile",
    title: "My Profile",
    subtitle: "Open profile menu",
    type: "action",
    icon: "UserCog",
    keywords: ["account", "user", "login", "me"],
    action: openProfile
  },
  {
    id: "act-search-ui",
    title: "Moctale Search",
    subtitle: "Open the native search bar",
    type: "action",
    icon: "Search",
    keywords: ["find", "query", "native"],
    action: clickSearch
  },
  {
    id: "act-notifications",
    title: "Show Notifications",
    subtitle: "Open notification dropdown",
    type: "action",
    icon: "Bell",
    keywords: ["alerts", "notifs", "bell"],
    action: toggleNotifications
  },
  {
    id: "act-top",
    title: "Scroll to Top",
    type: "action",
    icon: "ArrowUpCircle",
    keywords: ["up", "start", "scroll"],
    action: scrollToTop
  },
  {
    id: "act-bottom",
    title: "Scroll to Bottom",
    type: "action",
    icon: "ArrowDownCircle",
    keywords: ["down", "end", "scroll", "footer"],
    action: scrollToBottom
  },
  {
    id: "act-random-trigger",
    title: "Pick Random Content (In Collections)",
    subtitle: "Shuffle current collection (if available)",
    type: "action",
    icon: "Dices",
    keywords: ["dice", "randomizer", "shuffle"],
    action: triggerRandomPick
  },
  // ============================
  // 2. DATA & EXTERNAL (NEW)
  // ============================
  {
    id: "data-export",
    title: "Export Backup",
    subtitle: "Download settings & history as JSON",
    type: "action",
    icon: "FileOutput",
    keywords: ["save", "data", "json", "backup", "export"],
    action: () => {
      try {
        exportBackup();
        showToast("Backup download started", "success");
      } catch (e) {
        showToast("Export failed", "error");
      }
    }
  },
  {
    id: "data-import",
    title: "Import Backup",
    subtitle: "Restore settings from JSON file",
    type: "action",
    icon: "Download",
    keywords: ["restore", "load", "json", "import"],
    action: triggerImport
  },
  {
    id: "ext-website",
    title: "Visit Official Website",
    subtitle: "Documentation & Features",
    type: "navigation",
    icon: "Globe",
    url: "https://010101-sans.is-a.dev/moctale-plus/",
    keywords: ["docs", "help", "web", "site"]
  },
  {
    id: "ext-dev",
    title: "Meet the Developer",
    subtitle: "010101-sans Portfolio",
    type: "navigation",
    icon: "Code",
    url: "https://010101-sans.is-a.dev",
    keywords: ["author", "creator", "dev", "contact"]
  },
  {
    id: "ext-github",
    title: "GitHub Repository",
    subtitle: "View Source Code",
    type: "navigation",
    icon: "Github",
    url: "https://github.com/010101-sans/moctale-plus",
    keywords: ["code", "repo", "project", "moctale", "plus", "source", "git"]
  },
  {
    id: "ext-support",
    title: "Support Moctale Plus",
    subtitle: "Buy 010101-sans a coffee ☕",
    type: "navigation",
    icon: "Heart",
    url: "https://github.com/sponsors/010101-sans",
    keywords: ["donate", "coffee", "money", "help", "support"]
  },
  // ============================
  // 3. LAYOUT & GRID DENSITY
  // ============================
  {
    id: "layout-default",
    title: "Layout: Default Grid",
    subtitle: "Reset poster density",
    type: "action",
    icon: "LayoutGrid",
    keywords: ["reset", "grid", "columns", "normal"],
    action: () => setExtensionValue("gridColumns", 0, "Layout: Default")
  },
  {
    id: "layout-list",
    title: "Layout: List View",
    subtitle: "Vertical list with details",
    type: "action",
    icon: "List",
    keywords: ["rows", "lines", "detailed", "list"],
    action: () => setExtensionValue("gridColumns", 1, "Layout: List View")
  },
  {
    id: "layout-2col",
    title: "Layout: 2 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "big", "posters"],
    action: () => setExtensionValue("gridColumns", 2, "Layout: 2 Columns")
  },
  {
    id: "layout-3col",
    title: "Layout: 3 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "big", "posters"],
    action: () => setExtensionValue("gridColumns", 3, "Layout: 3 Columns")
  },
  {
    id: "layout-4col",
    title: "Layout: 4 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "big", "posters"],
    action: () => setExtensionValue("gridColumns", 4, "Layout: 4 Columns")
  },
  {
    id: "layout-5col",
    title: "Layout: 5 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "medium", "posters"],
    action: () => setExtensionValue("gridColumns", 5, "Layout: 5 Columns")
  },
  {
    id: "layout-6col",
    title: "Layout: 6 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "small", "posters"],
    action: () => setExtensionValue("gridColumns", 6, "Layout: 6 Columns")
  },
  {
    id: "layout-7col",
    title: "Layout: 7 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "tiny", "posters"],
    action: () => setExtensionValue("gridColumns", 7, "Layout: 7 Columns")
  },
  {
    id: "layout-8col",
    title: "Layout: 8 Columns",
    type: "action",
    icon: "Grid",
    keywords: ["grid", "tiny", "posters"],
    action: () => setExtensionValue("gridColumns", 8, "Layout: 8 Columns")
  },
  // ============================
  // 4. FEATURE TOGGLES (ALL)
  // ============================
  {
    id: "tog-spoiler",
    title: "Toggle Spoiler Shield",
    subtitle: "Blur descriptions and plots",
    type: "action",
    icon: "EyeOff",
    keywords: ["blur", "hide", "spoilers", "shield"],
    action: () => toggleExtensionSetting("enableSpoilerShield", "Spoiler Shield")
  },
  {
    id: "tog-linkifier",
    title: "Toggle Linkifier",
    subtitle: "Make text links clickable",
    type: "action",
    icon: "Link",
    keywords: ["urls", "clickable", "links", "text"],
    action: () => toggleExtensionSetting("enableLinkifier", "Linkifier")
  },
  {
    id: "tog-random-btn",
    title: "Toggle Pick Random Button",
    subtitle: "Show/Hide the floating dice button",
    type: "action",
    icon: "Dices",
    keywords: ["dice", "randomizer", "shuffle", "ui"],
    action: () => toggleExtensionSetting("enablePickRandom", "Pick Random Button")
  },
  {
    id: "tog-sidebar",
    title: "Toggle Sidebar Plus",
    subtitle: "Show/Hide extra sidebar widgets",
    type: "action",
    icon: "PanelRight",
    keywords: ["widgets", "sidebar", "extras", "platform"],
    action: () => toggleExtensionSetting("enableSideBar", "Sidebar Plus")
  },
  {
    id: "tog-image-preview",
    title: "Toggle Image Preview",
    subtitle: "Hover posters to zoom",
    type: "action",
    icon: "Maximize",
    keywords: ["hover", "zoom", "preview", "images"],
    action: () => toggleExtensionSetting("enableImagePreview", "Image Preview")
  },
  {
    id: "tog-image-dl",
    title: "Toggle Image Downloader",
    subtitle: "Download button on hover",
    type: "action",
    icon: "Download",
    keywords: ["save", "images", "posters", "download"],
    action: () => toggleExtensionSetting("enableImageDownloader", "Image Downloader")
  },
  {
    id: "tog-private-notes",
    title: "Toggle Private Notes",
    subtitle: "Local notepad on content pages",
    type: "action",
    icon: "PenTool",
    keywords: ["notes", "write", "diary", "text"],
    action: () => toggleExtensionSetting("enablePrivateNotes", "Private Notes")
  },
  {
    id: "tog-dynamic",
    title: "Toggle Dynamic Theme",
    subtitle: "Adapt colors to movie poster",
    type: "action",
    icon: "Palette",
    keywords: ["color", "adaptive", "theme", "dynamic"],
    action: () => toggleExtensionSetting("enableDynamicTheme", "Dynamic Theme")
  },
  {
    id: "tog-watch-status",
    title: "Toggle Watch Status",
    subtitle: "Show watched indicators on posters",
    type: "action",
    icon: "CheckCircle",
    keywords: ["seen", "watched", "tick", "status"],
    action: () => toggleExtensionSetting("enableWatchStatus", "Watch Status")
  },
  {
    id: "tog-perf-max",
    title: "Toggle Performance Max",
    subtitle: "Optimizations for speed",
    type: "action",
    icon: "Zap",
    keywords: ["speed", "fast", "optimize", "performance"],
    action: () => toggleExtensionSetting("enablePerformanceMax", "Performance Max")
  },
  {
    id: "tog-episode",
    title: "Toggle Episode Tracker",
    subtitle: "Track watched episodes per season",
    type: "action",
    icon: "ListVideo",
    keywords: ["episodes", "track", "series", "progress"],
    action: () => toggleExtensionSetting("enableEpisodeTracker", "Episode Tracker")
  },
  {
    id: "tog-review-temp",
    title: "Toggle Review Templates",
    subtitle: "Helper dropdown in review box",
    type: "action",
    icon: "FileText",
    keywords: ["reviews", "templates", "writing"],
    action: () => toggleExtensionSetting("enableReviewTemplates", "Review Templates")
  },
  {
    id: "tog-context",
    title: "Toggle Context Menu",
    subtitle: "Right-click to Search on Moctale",
    type: "action",
    icon: "MousePointer2",
    keywords: ["right click", "menu", "search"],
    action: () => toggleExtensionSetting("enableContextMenu", "Context Menu")
  },
  {
    id: "tog-search-plus",
    title: "Toggle Search Plus",
    subtitle: "External search buttons (IMDb, etc)",
    type: "action",
    icon: "ExternalLink",
    keywords: ["external", "google", "imdb", "mal"],
    action: () => toggleExtensionSetting("enableSearchPlus", "Search Plus")
  },
  {
    id: "tog-export",
    title: "Toggle Collection Export",
    subtitle: "CSV Export buttons on lists",
    type: "action",
    icon: "FileOutput",
    keywords: ["csv", "export", "data", "backup"],
    action: () => toggleExtensionSetting("enableCollectionExport", "Collection Export")
  },
  {
    id: "tog-local-tracker",
    title: "Toggle Local Tracker",
    subtitle: "Background history logging",
    type: "action",
    icon: "History",
    keywords: ["log", "track", "history", "database"],
    action: () => toggleExtensionSetting("enableLocalTracker", "Local Tracker")
  },
  {
    id: "tog-familiar",
    title: "Toggle Familiar Faces",
    subtitle: "Highlight cast from your history",
    type: "action",
    icon: "UserCheck",
    keywords: ["cast", "actors", "history", "crew", "faces"],
    action: () => toggleExtensionSetting("enableFamiliarFaces", "Familiar Faces")
  },
  // ============================
  // 5. THEME SWITCHER
  // ============================
  ...THEMES.map((theme) => ({
    id: `theme-${theme.id}`,
    title: `Theme: ${theme.label}`,
    subtitle: "Apply visual style",
    type: "action",
    icon: "PaintBucket",
    keywords: ["theme", "style", "color", "look", "mode", theme.id, theme.label.toLowerCase()],
    action: () => setExtensionValue("activeTheme", theme.id, theme.label)
  })),
  // ============================
  // 6. NAVIGATION (Site Map)
  // ============================
  // --- Hubs ---
  { id: "nav-home", title: "Home / Explore", type: "navigation", icon: "Compass", url: "/explore", keywords: ["index", "root"] },
  { id: "nav-cats", title: "Categories", type: "navigation", icon: "LayoutGrid", url: "/explore/categories", keywords: ["topics", "types"] },
  { id: "nav-genres", title: "Genres", type: "navigation", icon: "Hash", url: "/explore/genres", keywords: ["tags", "style"] },
  { id: "nav-countries", title: "Countries", type: "navigation", icon: "Globe", url: "/explore/countries", keywords: ["region", "world"] },
  { id: "nav-langs", title: "Languages", type: "navigation", icon: "Languages", url: "/explore/languages", keywords: ["audio", "subtitles"] },
  // --- Lists ---
  { id: "nav-anime", title: "Anime Hub", type: "navigation", icon: "Ghost", url: "/explore/anime", keywords: ["japan", "animation", "manga"] },
  { id: "nav-franchise", title: "Franchises", type: "navigation", icon: "Layers", url: "/explore/franchise", keywords: ["universes", "series", "collections"] },
  { id: "nav-family", title: "Family Friendly", type: "navigation", icon: "Smile", url: "/explore/family-friendly", keywords: ["kids", "children"] },
  { id: "nav-awards", title: "Award Winners", type: "navigation", icon: "Trophy", url: "/explore/award-winners", keywords: ["oscars", "best"] },
  { id: "nav-select", title: "Moctale Select", type: "navigation", icon: "Star", url: "/explore/moctale-select", keywords: ["premium", "curated"] },
  // --- Schedule ---
  { id: "nav-sched", title: "Schedule", type: "navigation", icon: "Calendar", url: "/schedule", keywords: ["release", "dates", "upcoming"] },
  { id: "nav-today", title: "Schedule > Releasing Today", type: "navigation", icon: "Clock", url: "/schedule?timeFilter=today", keywords: ["now", "daily"] },
  { id: "nav-upcoming", title: "Schedule > Upcoming Releases", type: "navigation", icon: "CalendarDays", url: "/schedule?timeFilter=upcoming", keywords: ["future", "soon"] },
  { id: "nav-announced", title: "Schedule > Announced Titles", type: "navigation", icon: "Megaphone", url: "/schedule?timeFilter=announced", keywords: ["news", "tba"] },
  // --- Schedule Sub-Filters (Today) ---
  { id: "nav-today-theatre", title: "Schedule > Today > In Theatres", subtitle: "New movies releasing in cinemas today", type: "navigation", icon: "Film", url: "/schedule?timeFilter=today&contentFilter=NEW_MOVIE_THEATRE", keywords: ["today", "cinema", "release", "movies"] },
  { id: "nav-today-ott", title: "Schedule > Today > On OTT", subtitle: "New movies streaming today", type: "navigation", icon: "Tv", url: "/schedule?timeFilter=today&contentFilter=NEW_MOVIE_OTT", keywords: ["today", "streaming", "netflix", "prime", "digital"] },
  { id: "nav-today-shows", title: "Schedule > New Shows", subtitle: "TV Series premiering today", type: "navigation", icon: "Tv", url: "/schedule?timeFilter=today&contentFilter=NEW_SHOW", keywords: ["today", "tv", "series", "premiere"] },
  { id: "nav-today-seasons", title: "Schedule > New Seasons", subtitle: "Returning TV shows", type: "navigation", icon: "RefreshCw", url: "/schedule?timeFilter=today&contentFilter=NEW_SEASON", keywords: ["today", "return", "season", "episodes"] },
  // --- Schedule Sub-Filters (Upcoming) ---
  { id: "nav-up-theatre", title: "Schedule > Upcoming > In Theatres", subtitle: "Future theatrical releases", type: "navigation", icon: "CalendarDays", url: "/schedule?timeFilter=upcoming&contentFilter=NEW_MOVIE_THEATRE", keywords: ["soon", "cinema", "future", "movies"] },
  { id: "nav-up-ott", title: "Schedule > Upcoming > On OTT", subtitle: "Future digital/streaming releases", type: "navigation", icon: "Tv", url: "/schedule?timeFilter=upcoming&contentFilter=NEW_MOVIE_OTT", keywords: ["soon", "streaming", "digital"] },
  { id: "nav-up-shows", title: "Schedule > Upcoming > New Shows", subtitle: "Future TV Series premieres", type: "navigation", icon: "Tv", url: "/schedule?timeFilter=upcoming&contentFilter=NEW_SHOW", keywords: ["soon", "tv", "series", "pilot"] },
  { id: "nav-up-seasons", title: "Schedule > Upcoming > New Seasons", subtitle: "Future returning seasons", type: "navigation", icon: "Layers", url: "/schedule?timeFilter=upcoming&contentFilter=NEW_SEASON", keywords: ["soon", "return", "season"] },
  // --- Schedule Sub-Filters (Announced) ---
  { id: "nav-ann-theatre", title: "Schedule > Announced > In Theatres", subtitle: "Movies announced for cinemas", type: "navigation", icon: "Megaphone", url: "/schedule?timeFilter=announced&contentFilter=NEW_MOVIE_THEATRE", keywords: ["tba", "announced", "cinema"] },
  { id: "nav-ann-ott", title: "Schedule > Announced > On OTT", subtitle: "Movies announced for streaming", type: "navigation", icon: "Megaphone", url: "/schedule?timeFilter=announced&contentFilter=NEW_MOVIE_OTT", keywords: ["tba", "announced", "streaming"] },
  { id: "nav-ann-shows", title: "Schedule > Announced > New Shows", subtitle: "TV Shows in development", type: "navigation", icon: "Megaphone", url: "/schedule?timeFilter=announced&contentFilter=NEW_SHOW", keywords: ["tba", "announced", "tv", "series"] },
  { id: "nav-ann-seasons", title: "Schedule > Announced > New Seasons", subtitle: "Renewed shows / Future seasons", type: "navigation", icon: "Megaphone", url: "/schedule?timeFilter=announced&contentFilter=NEW_SEASON", keywords: ["tba", "announced", "renewal"] },
  // --- Clubs ---
  { id: "nav-clubs", title: "Clubs Feed", type: "navigation", icon: "Users", url: "/clubs", keywords: ["social", "community", "posts"] },
  { id: "nav-clubs-follow", title: "Clubs: Following", subtitle: "Posts from clubs you follow", type: "navigation", icon: "Users", url: "/clubs?tab=following", keywords: ["feed", "social", "subscribed"] },
  { id: "nav-clubs-disc", title: "Discover Clubs", type: "navigation", icon: "Telescope", url: "/clubs?tab=discover", keywords: ["find", "groups"] },
  // --- Personal ---
  { id: "nav-my-col", title: "My Collections", type: "navigation", icon: "Library", url: "/my-collections", keywords: ["lists", "watchlists"] },
  { id: "nav-saved", title: "Saved Collections", type: "navigation", icon: "Bookmark", url: "/saved-collections", keywords: ["favorites", "later"] },
  { id: "nav-reviews", title: "My Reviews", type: "navigation", icon: "PenTool", url: "/my-reviews", keywords: ["ratings", "opinions"] },
  { id: "nav-settings", title: "Account Settings", type: "navigation", icon: "UserCog", url: "/accounts/edit?section=settings", keywords: ["profile", "config", "password"] }
];
class SearchService {
  commandFuse;
  historyFuse = null;
  lastDbUpdate = 0;
  constructor() {
    this.commandFuse = new Fuse(STATIC_COMMANDS, {
      keys: [
        { name: "title", weight: 0.7 },
        { name: "keywords", weight: 0.3 }
      ],
      threshold: 0.4,
      includeScore: true
    });
  }
  async getHistoryFuse() {
    const db = await LocalDbService.getDB();
    if (!this.historyFuse || db.lastUpdated !== this.lastDbUpdate) {
      const entities = Object.values(db.entities);
      this.historyFuse = new Fuse(entities, {
        keys: [
          { name: "title", weight: 0.6 },
          { name: "type", weight: 0.2 },
          { name: "genres", weight: 0.2 }
        ],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true
      });
      this.lastDbUpdate = db.lastUpdated || Date.now();
    }
    return this.historyFuse;
  }
  // --- MAIN SEARCH ---
  async search(query) {
    if (!query || !query.trim()) {
      return STATIC_COMMANDS.map((cmd) => ({
        id: cmd.id,
        title: cmd.title,
        subtitle: cmd.subtitle || "Command",
        type: cmd.type === "action" ? "action" : "navigation",
        icon: cmd.icon,
        url: cmd.url,
        action: cmd.action,
        score: 1,
        group: cmd.type === "action" ? "Commands" : "Navigation"
      })).sort((a, b) => a.title.localeCompare(b.title));
    }
    const q = query.toLowerCase();
    const cmdResults = this.commandFuse.search(q).map((res) => ({
      item: res.item,
      score: res.score || 1
    }));
    const histFuse = await this.getHistoryFuse();
    const histResults = histFuse.search(q).map((res) => ({
      item: res.item,
      score: res.score || 1
    }));
    const combined = [];
    cmdResults.forEach(({ item, score }) => {
      let rank = (1 - score) * 100;
      if (item.title.toLowerCase() === q) rank += 50;
      combined.push({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle || "Command",
        type: item.type === "action" ? "action" : "navigation",
        icon: item.icon,
        url: item.url,
        action: item.action,
        score: rank + 10,
        group: item.type === "action" ? "Commands" : "Navigation"
      });
    });
    histResults.forEach(({ item, score }) => {
      let rank = (1 - score) * 100;
      const daysSinceVisit = (Date.now() - item.lastVisitedAt) / (1e3 * 60 * 60 * 24);
      if (daysSinceVisit < 1) rank += 20;
      else if (daysSinceVisit < 7) rank += 10;
      rank += Math.min(Math.log(item.visitCount + 1) * 5, 20);
      combined.push({
        id: item.id,
        title: item.title,
        subtitle: item.year ? `${item.type.toUpperCase()} • ${item.year}` : item.type.toUpperCase(),
        type: "history",
        icon: this.getIconForType(item.type),
        url: item.id,
        score: rank,
        group: "History"
      });
    });
    return combined.sort((a, b) => b.score - a.score).slice(0, 100);
  }
  getIconForType(type) {
    switch (type) {
      case "movie":
        return "Film";
      case "tv":
        return "Tv";
      case "anime":
        return "Ghost";
      case "person":
        return "User";
      case "genre":
        return "Hash";
      case "collection":
        return "Library";
      case "club":
        return "Users";
      default:
        return "Link";
    }
  }
}
const searchService = new SearchService();
const Icons = {
  Network: Network$1,
  Settings,
  Compass,
  LayoutGrid,
  Hash,
  Globe,
  Languages,
  Ghost,
  Layers,
  Smile,
  Trophy,
  Star,
  Calendar,
  Clock,
  CalendarDays,
  Megaphone,
  Users,
  Telescope,
  Library,
  Bookmark,
  PenTool,
  UserCog,
  Film,
  Tv,
  User,
  EyeOff,
  Link,
  Dices,
  Maximize,
  Search,
  Download,
  PanelRight,
  Palette,
  CheckCircle: CircleCheckBig,
  Zap,
  ListVideo,
  FileText,
  MousePointer2,
  ExternalLink,
  FileOutput,
  History,
  BarChart: ChartNoAxesColumnIncreasing,
  ArrowUpCircle: CircleArrowUp,
  ArrowDownCircle: CircleArrowDown,
  PaintBucket
};
const CommandPalette = () => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [results, setResults] = reactExports.useState([]);
  const [value, setValue] = reactExports.useState("");
  const listRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const down = (e) => {
      if (e.altKey && e.shiftKey && e.code === "KeyK") {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);
  reactExports.useEffect(() => {
    if (!open) return;
    searchService.search(query).then((data) => {
      setResults(data);
      if (data.length > 0) {
        const firstCommand = data.find((i) => i.group === "Commands");
        const firstNav = data.find((i) => i.group === "Navigation");
        const firstHistory = data.find((i) => i.group === "History");
        const firstVisualItem = firstCommand || firstNav || firstHistory || data[0];
        setValue(firstVisualItem.id);
      }
    });
  }, [query, open]);
  reactExports.useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      const selectedElement = document.querySelector(`[cmdk-item][data-selected="true"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "auto" });
      }
    });
  }, [value, open]);
  const runCommand = (item) => {
    setOpen(false);
    if (item.action) {
      item.action();
    } else if (item.url) {
      const target2 = item.url.startsWith("http") ? item.url : `https://www.moctale.in${item.url}`;
      self.location.href = target2;
    }
  };
  if (!open) return null;
  const groups = {
    Commands: results.filter((r) => r.group === "Commands"),
    Navigation: results.filter((r) => r.group === "Navigation"),
    History: results.filter((r) => r.group === "History")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[99999] p-4 animate-in fade-in duration-200 font-sans",
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)"
      },
      onClick: (e) => {
        if (e.target === e.currentTarget) setOpen(false);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          _e,
          {
            value,
            onValueChange: setValue,
            className: "fixed-command-modal w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col scale-100",
            style: {
              backgroundColor: "var(--mp-bg-base, #0d1117)",
              borderColor: "var(--mp-border, #30363d)",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "var(--mp-text-main, #c9d1d9)"
            },
            shouldFilter: false,
            loop: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center px-4 py-4 border-b shrink-0",
                  style: {
                    borderColor: "var(--mp-border, #30363d)",
                    backgroundColor: "var(--mp-bg-base, #0d1117)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 mr-3 opacity-50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      _e.Input,
                      {
                        autoFocus: true,
                        placeholder: "Type a command or search...",
                        value: query,
                        onValueChange: setQuery,
                        className: "flex-1 bg-transparent text-lg placeholder-opacity-50",
                        style: { color: "var(--mp-text-main, #c9d1d9)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 select-none ml-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "kbd",
                      {
                        className: "text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border",
                        style: {
                          backgroundColor: "var(--mp-bg-surface, #161b22)",
                          borderColor: "var(--mp-border, #30363d)",
                          color: "var(--mp-text-muted, #8b949e)"
                        },
                        children: "Alt + Shift + K"
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 overflow-hidden", style: { backgroundColor: "var(--mp-bg-base, #0d1117)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                _e.List,
                {
                  ref: listRef,
                  className: "overflow-y-auto custom-scrollbar",
                  style: {
                    minHeight: "100px",
                    maxHeight: "400px",
                    scrollPaddingTop: "40px"
                  },
                  children: [
                    results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-12 text-center opacity-50", children: "No results found" }),
                    Object.entries(groups).map(([name, items], _index) => items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(_e.Group, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "px-3 py-2 pb-1 mb-1 text-xs font-semibold uppercase tracking-wider select-none sticky top-0 z-20",
                          style: {
                            color: "var(--mp-text-muted, #8b949e)",
                            backgroundColor: "var(--mp-bg-base, #0d1117)"
                          },
                          children: name
                        }
                      ),
                      items.map((item) => {
                        const Icon = Icons[item.icon] || Command;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          _e.Item,
                          {
                            value: item.id,
                            onSelect: () => runCommand(item),
                            className: "group flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer select-none scroll-mt-[60px] data-[selected=true]:bg-opacity-10",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0",
                                    style: {
                                      backgroundColor: "var(--mp-bg-layer, #21262d)",
                                      color: "var(--mp-text-muted, #8b949e)"
                                    },
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: "text-sm font-medium truncate",
                                      style: { color: "var(--mp-text-main, #c9d1d9)" },
                                      children: item.title
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: "text-xs truncate",
                                      style: { color: "var(--mp-text-muted, #8b949e)" },
                                      children: item.subtitle
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "opacity-0 group-data-[selected=true]:opacity-100 flex items-center gap-2", children: [
                                item.type === "action" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", style: { color: "var(--mp-accent, #58a6ff)" }, children: "Run" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", style: { color: "var(--mp-accent, #58a6ff)" }, children: "Go" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CornerDownLeft, { size: 14, style: { color: "var(--mp-accent, #58a6ff)" } })
                              ] })
                            ]
                          },
                          item.id
                        );
                      })
                    ] }, name))
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-2 border-t flex items-center justify-between text-[10px] select-none shrink-0",
                  style: {
                    backgroundColor: "var(--mp-bg-surface, #161b22)",
                    borderColor: "var(--mp-border, #30363d)",
                    color: "var(--mp-text-muted, #8b949e)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "kbd",
                          {
                            className: "px-1 rounded border flex items-center justify-center h-5 min-w-[20px]",
                            style: { backgroundColor: "var(--mp-bg-layer, #21262d)", borderColor: "var(--mp-border, #30363d)" },
                            children: "ESC"
                          }
                        ),
                        "Close"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "kbd",
                          {
                            className: "px-1 rounded border flex items-center justify-center h-5 min-w-[20px]",
                            style: { backgroundColor: "var(--mp-bg-layer, #21262d)", borderColor: "var(--mp-border, #30363d)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 10 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "kbd",
                          {
                            className: "px-1 rounded border flex items-center justify-center h-5 min-w-[20px]",
                            style: { backgroundColor: "var(--mp-bg-layer, #21262d)", borderColor: "var(--mp-border, #30363d)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 10 })
                          }
                        ),
                        "Navigate"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "kbd",
                          {
                            className: "px-1 rounded border flex items-center justify-center h-5 min-w-[20px]",
                            style: { backgroundColor: "var(--mp-bg-layer, #21262d)", borderColor: "var(--mp-border, #30363d)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerDownLeft, { size: 10 })
                          }
                        ),
                        "Select"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "Powered by Moctale Plus by 010101-sans" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .fixed-command-modal {
            position: fixed;
            top: 20vh;
            left: 50%;
            transform: translateX(-50%);
        }

        [cmdk-input] {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            background: transparent !important;
        }

        [cmdk-item][data-selected="true"] {
            background-color: var(--mp-bg-layer, #21262d);
        }
        [cmdk-item][data-selected="true"] .w-9 {
            background-color: color-mix(in srgb, var(--mp-accent, #58a6ff), transparent 85%) !important;
            color: var(--mp-accent, #58a6ff) !important;
        }
        [cmdk-item][data-selected="true"] span {
            color: var(--mp-text-main, #c9d1d9) !important;
        }
      ` })
      ]
    }
  );
};
let personMap = null;
let observer$1 = null;
let tooltip = null;
const STYLES = `
  /* === SHARED STYLES === */
  
  .mp-familiar-wrapper {
    position: relative;
    display: flex;
    flex-shrink: 0;
    z-index: 0;
    /* Ensure image zoom transition happens smoothly */
    /* We target the IMG specifically later */
  }

  /* Image Zoom Logic: Target the image inside the nested relative/rounded-full div */
  .mp-familiar-wrapper div.rounded-full img {
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: center;
  }

  /* On Hover: Scale the image UP inside the circle */
  .mp-familiar-wrapper:hover div.rounded-full img {
    transform: scale(1.15);
  }

  /* Ring Style */
  .mp-familiar-ring {
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    /* Solid Gradient */
    background: linear-gradient(135deg, #7c3aed 0%, #c084fc 50%, #4c1d95 100%);
    z-index: 1; /* Behind image */
    opacity: 1;
    pointer-events: none;
    transition: transform 0.3s ease-out;
  }

  /* Force native white overlay to be transparent on familiar faces */
  .mp-familiar-wrapper .absolute.inset-0.bg-white/0 {
    background-color: transparent !important;
  }

  /* Badge Style */
  .mp-familiar-badge {
    position: absolute;
    bottom: 2px; 
    right: 2px;
    background: linear-gradient(135deg, #6d28d9, #4c1d95);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 800;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    border: 2px solid #000;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0,0,0,0.6);
    transform: scale(1);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: default;
    pointer-events: auto;
  }

  .mp-familiar-wrapper:hover .mp-familiar-badge {
    transform: scale(1.15);
  }

  /* === CONTEXT 1: CAROUSEL (Cast/Crew) === */
  .mp-familiar-carousel {
    margin: 4px; /* Space for ring */
  }
  .mp-familiar-carousel > .relative.rounded-full {
    z-index: 2;
    background: #121212;
  }

  /* === CONTEXT 2: SEARCH RESULTS === */
  .mp-familiar-search {
    margin: 0; /* No margin needed as no ring */
  }
  .mp-familiar-search > div[class*="rounded-full"] {
    z-index: 2;
    position: relative;
    background: #121212;
  }
  /* Adjust badge for search */
  .mp-familiar-search .mp-familiar-badge {
    bottom: -2px;
    right: -2px;
    min-width: 18px;
    height: 18px;
    font-size: 10px;
    border: 2px solid #171717; /* Match search card bg */
  }

  /* === TOOLTIP === */
  #mp-familiar-tooltip {
    position: fixed;
    z-index: 99999;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.5), 0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(124, 58, 237, 0.15);
    color: #e2e8f0;
    font-family: 'Inter', sans-serif;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.95) translateY(10px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    
    /* Flexible Dimensions */
    width: max-content;
    max-width: 300px; /* Cap width */
    min-width: 200px;
  }

  #mp-familiar-tooltip.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  #mp-familiar-tooltip h4 {
    margin: 0 0 10px 0;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #a78bfa;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
  }

  .mp-tooltip-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 250px;
    overflow-y: auto;
  }
  .mp-tooltip-list::-webkit-scrollbar { width: 4px; }
  .mp-tooltip-list::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  .mp-tooltip-item {
    display: flex;
    align-items: flex-start; /* Align top for wrapped text */
    gap: 10px;
    font-size: 12px;
    color: #f1f5f9;
    line-height: 1.4;
  }

  .mp-tooltip-dot {
    margin-top: 5px; /* Visual alignment with first line of text */
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #58a6ff;
    flex-shrink: 0;
    box-shadow: 0 0 6px rgba(88, 166, 255, 0.5);
  }

  .mp-tooltip-title {
    white-space: normal; /* Allow wrap */
    word-break: break-word;
  }

  .mp-tooltip-year {
    font-size: 10px;
    color: #64748b;
    margin-left: auto;
    padding-left: 8px;
    flex-shrink: 0;
    font-feature-settings: "tnum";
  }

  .mp-tooltip-footer {
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,0.08);
    font-size: 9px;
    color: #555;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  .mp-tooltip-footer span { color: #a78bfa; }

  @keyframes mp-spin-once {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
const buildPersonIndex = async () => {
  const db = await LocalDbService.getDB();
  const index = {};
  Object.values(db.entities).forEach((entity) => {
    if (entity.type !== "movie" && entity.type !== "tv" && entity.type !== "anime") return;
    if (entity.relatedLinks) {
      entity.relatedLinks.forEach((link) => {
        if (link.startsWith("/person/")) {
          if (!index[link]) index[link] = [];
          if (!index[link].find((e) => e.id === entity.id)) index[link].push(entity);
        }
      });
    }
  });
  return index;
};
const injectStyles = () => {
  if (document.getElementById("mp-familiar-styles")) return;
  const style = document.createElement("style");
  style.id = "mp-familiar-styles";
  style.textContent = STYLES;
  document.head.appendChild(style);
};
const createTooltip = () => {
  if (document.getElementById("mp-familiar-tooltip")) return document.getElementById("mp-familiar-tooltip");
  const el = document.createElement("div");
  el.id = "mp-familiar-tooltip";
  document.body.appendChild(el);
  return el;
};
const hideTooltip = () => {
  if (tooltip) tooltip.classList.remove("visible");
  document.querySelectorAll(".mp-familiar-ring").forEach((r) => r.style.animation = "none");
};
const handleMouseEnter = (e, visited) => {
  const target2 = e.currentTarget;
  const ring = target2.querySelector(".mp-familiar-ring");
  if (ring) {
    ring.style.animation = `mp-spin-once 0.6s linear infinite`;
  }
  if (tooltip) {
    const sorted = [...visited].sort((a, b) => b.lastVisitedAt - a.lastVisitedAt);
    const count = visited.length;
    const listHtml = sorted.map((m) => `
            <div class="mp-tooltip-item">
                <div class="mp-tooltip-dot"></div>
                <span class="mp-tooltip-title">${m.title}</span>
                ${m.year ? `<span class="mp-tooltip-year">${m.year}</span>` : ""}
            </div>
        `).join("");
    tooltip.innerHTML = `
            <h4>
                <span>Visited Work</span>
                <span style="color: #fff">${count}</span>
            </h4>
            <div class="mp-tooltip-list">${listHtml}</div>
            <div class="mp-tooltip-footer">Powered by <span>Moctale Plus</span></div>
        `;
    const rect = target2.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    let top = rect.bottom + 38;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    if (left < 10) left = 10;
    if (left + tipRect.width > self.innerWidth) left = self.innerWidth - tipRect.width - 10;
    if (top + tipRect.height > self.innerHeight - 20) {
      top = rect.top - tipRect.height - 12;
    }
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.classList.add("visible");
  }
};
const handleMouseLeave = (e) => {
  const target2 = e.currentTarget;
  const ring = target2.querySelector(".mp-familiar-ring");
  if (ring) ring.style.animation = "none";
  if (tooltip) tooltip.classList.remove("visible");
};
const scanAndInject = () => {
  if (!personMap) return;
  const carouselAnchors = document.querySelectorAll('.overflow-x-auto a[href^="/person/"]');
  carouselAnchors.forEach((anchor) => processAnchor(anchor, "carousel"));
  const searchAnchors = document.querySelectorAll('.grid a[href^="/person/"]');
  searchAnchors.forEach((anchor) => processAnchor(anchor, "search"));
};
const processAnchor = (anchor, context) => {
  if (anchor.getAttribute("data-mp-familiar")) return;
  const href = anchor.getAttribute("href");
  if (!href) return;
  const personId = href.split("?")[0];
  const history2 = personMap[personId];
  if (history2 && history2.length > 0) {
    const avatarContainer = anchor.querySelector('div[class*="rounded-full"]');
    if (avatarContainer) {
      anchor.setAttribute("data-mp-familiar", "true");
      const wrapper = document.createElement("div");
      wrapper.className = `mp-familiar-wrapper mp-familiar-${context}`;
      anchor.insertBefore(wrapper, avatarContainer);
      wrapper.appendChild(avatarContainer);
      if (context === "carousel") {
        const ring = document.createElement("div");
        ring.className = "mp-familiar-ring";
        wrapper.appendChild(ring);
      }
      const badge = document.createElement("div");
      badge.className = "mp-familiar-badge";
      badge.innerText = history2.length > 99 ? "99+" : history2.length.toString();
      wrapper.appendChild(badge);
      wrapper.addEventListener("mouseenter", (e) => handleMouseEnter(e, history2));
      wrapper.addEventListener("mouseleave", (e) => handleMouseLeave(e));
      anchor.addEventListener("click", () => hideTooltip());
    }
  }
};
const initFamiliarFaces = async () => {
  if (observer$1) return;
  injectStyles();
  tooltip = createTooltip();
  try {
    personMap = await buildPersonIndex();
  } catch (e) {
    return;
  }
  scanAndInject();
  observer$1 = new MutationObserver((mutations) => {
    let shouldScan = false;
    for (const m of mutations) {
      if (m.addedNodes.length > 0) {
        shouldScan = true;
        break;
      }
    }
    if (shouldScan) scanAndInject();
  });
  observer$1.observe(document.body, { childList: true, subtree: true });
  console.log("[Moctale+] Familiar Faces active");
};
const stopFamiliarFaces = () => {
  if (observer$1) {
    observer$1.disconnect();
    observer$1 = null;
  }
  document.querySelectorAll(".mp-familiar-wrapper").forEach((wrapper) => {
    const avatar = wrapper.querySelector('div[class*="rounded-full"]');
    if (avatar && wrapper.parentNode) {
      wrapper.parentNode.insertBefore(avatar, wrapper);
    }
    wrapper.remove();
  });
  document.querySelectorAll("[data-mp-familiar]").forEach((el) => el.removeAttribute("data-mp-familiar"));
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
  personMap = null;
};
const DEFAULT_PAINTER_COLORS = {
  bgBase: "#0d1117",
  bgSurface: "#161b22",
  bgLayer: "#21262d",
  border: "#30363d",
  textMain: "#c9d1d9",
  textMuted: "#8b949e",
  accent: "#58a6ff"
};
const STYLE_ID = "moctale-theme-painter-css";
const initThemePainter = (colors) => {
  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = `
        body.theme-user-defined {
            --mp-bg-base: ${colors.bgBase};
            --mp-bg-surface: ${colors.bgSurface};
            --mp-bg-layer: ${colors.bgLayer};
            --mp-border: ${colors.border};
            --mp-text-main: ${colors.textMain};
            --mp-text-muted: ${colors.textMuted};
            --mp-accent: ${colors.accent};
            
            /* Auto-generated Gradients based on Base BG */
            --mp-grad-fade-r: linear-gradient(to right, transparent, ${colors.bgBase});
            --mp-grad-fade-b: linear-gradient(to bottom, transparent, ${colors.bgBase});
            
            --mp-filter-icon: none;
        }
    `;
  document.body.classList.add("theme-user-defined");
};
const stopThemePainter = () => {
  const style = document.getElementById(STYLE_ID);
  if (style) style.remove();
  document.body.classList.remove("theme-user-defined");
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
      enableFilmStudy: true,
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
      enablePerformanceMax: true,
      enableDynamicTheme: true,
      // Graph View
      enableGraphView: true,
      graph_gravity: -80,
      graph_springLength: 80,
      graph_springConstant: 0.08,
      graph_damping: 0.9,
      graph_nodeScale: 1,
      graph_fontSize: 10,
      graph_edgeOpacity: 0.3,
      // End of graph view
      enableFamiliarFaces: true,
      enableThemePainter: false,
      themePainterColors: DEFAULT_PAINTER_COLORS
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
    appHost.className = "w-full moctale-plus-injected mb-6";
    const adContainer = sidebarContainer.querySelector(".max-w-\\[306px\\]") || sidebarContainer.querySelector('[id^="ezoic-pub-ad-placeholder"]');
    if (adContainer && sidebarContainer.contains(adContainer)) {
      sidebarContainer.insertBefore(appHost, adContainer);
    } else {
      sidebarContainer.appendChild(appHost);
    }
    sidebarRoot = clientExports.createRoot(appHost);
  }
  if (sidebarRoot) {
    sidebarRoot.render(/* @__PURE__ */ jsxRuntimeExports.jsx(SidebarApp, { mediaInfo, settings }));
  }
};
const runGlobalFeatures = async () => {
  const settings = await getSettings();
  console.log("[Moctale+] Applying Configuration");
  document.body.classList.remove("theme-oled", "theme-midnight", "theme-dracula", "theme-nord", "theme-github-dark", "theme-synthwave", "theme-onedark", "theme-nightowl", "theme-palenight", "theme-twitter-dim", "theme-discord", "theme-whatsapp", "theme-instagram", "theme-eva", "theme-goku", "theme-horror", "theme-forest", "theme-matrix", "theme-coffee", "theme-ocean", "theme-catppuccin", "theme-tokyonight", "theme-rosepine", "theme-kanagawa", "theme-cobalt2", "theme-shades-purple", "theme-andromeda", "theme-linear", "theme-vercel", "theme-supabase", "theme-raycast", "theme-spotify", "theme-netflix", "theme-disney", "theme-hbo", "theme-macos", "theme-ubuntu");
  document.body.classList.remove("theme-user-defined");
  const isContentPage = self.location.pathname.includes("/content/") || self.location.pathname.includes("/title/");
  const shouldApplyDynamic = settings.enableDynamicTheme && isContentPage;
  if (shouldApplyDynamic) {
    console.log("[Moctale+] Skipping static theme for Dynamic Engine");
  } else if (settings.enableThemePainter) {
    initThemePainter(settings.themePainterColors || DEFAULT_PAINTER_COLORS);
  } else {
    stopThemePainter();
    if (settings.activeTheme && settings.activeTheme !== "default") {
      document.body.classList.add(`theme-${settings.activeTheme}`);
    }
    document.body.classList.remove("theme-dynamic-theme");
  }
  if (!shouldApplyDynamic) {
    document.body.classList.remove("theme-dynamic-theme");
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
  if (settings.enableDynamicTheme) {
    initDynamicTheme();
  } else {
    stopDynamicTheme();
  }
  initFullCastCrew();
  if (settings.enableLocalTracker) {
    initLocalTracker();
  } else {
    stopLocalTracker();
  }
  if (settings.enableGraphView) {
    initGraphVisualizer();
  } else {
    stopGraphVisualizer();
  }
  if (settings.enableFamiliarFaces) {
    initFamiliarFaces();
  } else {
    stopFamiliarFaces();
  }
};
const paletteContainer = document.createElement("div");
paletteContainer.id = "moctale-plus-palette-root";
document.body.appendChild(paletteContainer);
const paletteRoot = clientExports.createRoot(paletteContainer);
paletteRoot.render(/* @__PURE__ */ jsxRuntimeExports.jsx(CommandPalette, {}));
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
    if (changes.enableDynamicTheme) {
      changes.enableDynamicTheme.newValue ? initDynamicTheme() : stopDynamicTheme();
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
self.addEventListener("keydown", async (e) => {
  if (e.altKey && e.shiftKey && (e.key === "W" || e.code === "KeyW")) {
    e.preventDefault();
    e.stopPropagation();
    if (document.getElementById("mp-cinema-world-root")) return;
    const loader = document.createElement("div");
    loader.id = "mp-cw-loader";
    loader.style.cssText = `
        position: fixed; inset: 0; z-index: 2147483647;
        background: black; display: flex; align-items: center; justify-content: center;
        color: white; font-family: sans-serif; font-weight: bold; letter-spacing: 2px;
        opacity: 0.8; backdrop-filter: blur(5px);
    `;
    loader.innerText = "INITIALIZING CINEMA WORLD...";
    document.body.appendChild(loader);
    try {
      const { createRoot: createRoot2 } = await __vitePreload(async () => {
        const { createRoot: createRoot22 } = await import("./vendor-C8JjCdYh.js").then((n) => n.c);
        return { createRoot: createRoot22 };
      }, true ? [] : void 0);
      const { CinemaWorld: CinemaWorld2 } = await __vitePreload(async () => {
        const { CinemaWorld: CinemaWorld3 } = await Promise.resolve().then(() => CinemaWorld$1);
        return { CinemaWorld: CinemaWorld3 };
      }, true ? void 0 : void 0);
      const rootDiv2 = document.createElement("div");
      rootDiv2.id = "mp-cinema-world-root";
      document.body.appendChild(rootDiv2);
      loader.remove();
      const root = createRoot2(rootDiv2);
      const unmount = () => {
        root.unmount();
        rootDiv2.remove();
      };
      root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(CinemaWorld2, { onClose: unmount }));
    } catch (err) {
      console.error("Failed to load Cinema World:", err);
      loader.innerText = "LOAD FAILED. CHECK CONSOLE.";
      setTimeout(() => loader.remove(), 2e3);
    }
  }
});
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
    attemptTrack();
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
setTimeout(() => {
  runGlobalFeatures();
  attemptTrack();
}, 500);
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
const COUNTRY_COORDS = {
  // Asia
  IN: { lat: 20.59, lng: 78.96, label: "India" },
  JP: { lat: 36.2, lng: 138.25, label: "Japan" },
  KR: { lat: 35.9, lng: 127.76, label: "South Korea" },
  CN: { lat: 35.86, lng: 104.19, label: "China" },
  HK: { lat: 22.31, lng: 114.16, label: "Hong Kong" },
  TW: { lat: 23.69, lng: 120.96, label: "Taiwan" },
  TH: { lat: 15.87, lng: 100.99, label: "Thailand" },
  ID: { lat: -0.78, lng: 113.92, label: "Indonesia" },
  PH: { lat: 12.87, lng: 121.77, label: "Philippines" },
  IR: { lat: 32.42, lng: 53.68, label: "Iran" },
  IL: { lat: 31.04, lng: 34.85, label: "Israel" },
  SA: { lat: 23.88, lng: 45.07, label: "Saudi Arabia" },
  TR: { lat: 38.96, lng: 35.24, label: "Turkey" },
  // Europe
  GB: { lat: 55.37, lng: -3.43, label: "United Kingdom" },
  FR: { lat: 46.22, lng: 2.21, label: "France" },
  DE: { lat: 51.16, lng: 10.45, label: "Germany" },
  IT: { lat: 41.87, lng: 12.56, label: "Italy" },
  ES: { lat: 40.46, lng: -3.74, label: "Spain" },
  RU: { lat: 61.52, lng: 105.31, label: "Russia" },
  SE: { lat: 60.12, lng: 18.64, label: "Sweden" },
  NO: { lat: 60.47, lng: 8.46, label: "Norway" },
  DK: { lat: 56.26, lng: 9.5, label: "Denmark" },
  NL: { lat: 52.13, lng: 5.29, label: "Netherlands" },
  BE: { lat: 50.5, lng: 4.46, label: "Belgium" },
  PL: { lat: 51.91, lng: 19.14, label: "Poland" },
  PT: { lat: 39.39, lng: -8.22, label: "Portugal" },
  GR: { lat: 39.07, lng: 21.82, label: "Greece" },
  HU: { lat: 47.16, lng: 19.5, label: "Hungary" },
  FI: { lat: 61.92, lng: 25.74, label: "Finland" },
  IS: { lat: 64.96, lng: -19.02, label: "Iceland" },
  UA: { lat: 48.37, lng: 31.16, label: "Ukraine" },
  // Americas
  US: { lat: 37.09, lng: -95.71, label: "United States" },
  CA: { lat: 56.13, lng: -106.34, label: "Canada" },
  MX: { lat: 23.63, lng: -102.55, label: "Mexico" },
  BR: { lat: -14.23, lng: -51.92, label: "Brazil" },
  AR: { lat: -38.41, lng: -63.61, label: "Argentina" },
  // Other
  AU: { lat: -25.27, lng: 133.77, label: "Australia" },
  NZ: { lat: -40.9, lng: 174.88, label: "New Zealand" }
};
const SLUG_TO_COUNTRY = {
  // Languages
  "hindi": "IN",
  "tamil": "IN",
  "telugu": "IN",
  "malayalam": "IN",
  "kannada": "IN",
  "bengali": "IN",
  "japanese": "JP",
  "korean": "KR",
  "chinese": "CN",
  "mandarin": "CN",
  "cantonese": "HK",
  "english": "US",
  "french": "FR",
  "german": "DE",
  "italian": "IT",
  "spanish": "ES",
  "russian": "RU",
  "thai": "TH",
  "indonesian": "ID",
  "turkish": "TR",
  "arabic": "SA",
  // Country Slugs (from /country/xxx)
  "india": "IN",
  "japan": "JP",
  "south-korea": "KR",
  "china": "CN",
  "hong-kong": "HK",
  "united-states": "US",
  "united-kingdom": "GB",
  "france": "FR",
  "germany": "DE",
  "italy": "IT",
  "spain": "ES",
  "russia": "RU",
  "thailand": "TH",
  "canada": "CA",
  "australia": "AU",
  "mexico": "MX",
  "brazil": "BR",
  "sweden": "SE",
  "norway": "NO"
};
const getCountryCodeFromEntity = (entity) => {
  if (!entity || !entity.relatedLinks) return null;
  for (const link of entity.relatedLinks) {
    if (link.startsWith("/country/")) {
      const slug = link.split("/")[2];
      if (SLUG_TO_COUNTRY[slug]) return SLUG_TO_COUNTRY[slug];
      const direct = slug.toUpperCase();
      if (COUNTRY_COORDS[direct]) return direct;
    }
    if (link.startsWith("/language/")) {
      const slug = link.split("/")[2];
      if (SLUG_TO_COUNTRY[slug]) return SLUG_TO_COUNTRY[slug];
    }
  }
  if (entity.genres) {
    for (const g of entity.genres) {
      const lower = g.toLowerCase();
      if (lower.includes("japanese") || lower.includes("anime")) return "JP";
      if (lower.includes("korean") || lower.includes("k-drama")) return "KR";
      if (lower.includes("chinese")) return "CN";
      if (lower.includes("bollywood") || lower.includes("telugu")) return "IN";
    }
  }
  if (entity.language === "en" || entity.relatedLinks.some((l) => l.includes("/language/english"))) return "US";
  return null;
};
const getMoviePoints = (movies) => {
  const countryCounts = {};
  movies.forEach((m) => {
    if (!["movie", "tv", "anime"].includes(m.type)) return;
    const code = getCountryCodeFromEntity(m);
    if (code && COUNTRY_COORDS[code]) {
      if (!countryCounts[code]) countryCounts[code] = 0;
      countryCounts[code]++;
    }
  });
  const points = [];
  Object.entries(countryCounts).forEach(([code, count]) => {
    const coord = COUNTRY_COORDS[code];
    if (coord) {
      points.push({
        lat: coord.lat,
        lng: coord.lng,
        label: coord.label,
        count,
        code
      });
    }
  });
  return points;
};
const CW_STYLES = `
  .cw-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: #050505; z-index: 2147483647;
    font-family: 'Inter', system-ui, sans-serif;
    color: white; overflow: hidden;
  }

  /* --- LOADER --- */
  .cw-loader {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; background: #000; z-index: 200;
  }
  .cw-countdown { font-size: 120px; font-weight: 800; font-variant-numeric: tabular-nums; color: var(--mp-accent, #58a6ff); letter-spacing: -4px; text-shadow: 0 0 40px rgba(88,166,255,0.4); }
  .cw-status { font-size: 12px; letter-spacing: 0.3em; color: #fff; margin-top: 10px; text-transform: uppercase; opacity: 0.7; }
  
  /* --- HUD (Top Left) --- */
  .cw-hud-panel {
    position: absolute; top: 40px; left: 40px; width: 340px;
    background: rgba(10, 10, 12, 0.95); border: 1px solid rgba(88, 166, 255, 0.3);
    backdrop-filter: blur(20px); border-radius: 12px; padding: 24px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.8); 
    z-index: 1000; 
    display: flex; flex-direction: column;
    animation: cw-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    
    /* MAX HEIGHT FIX */
    max-height: 40vh; 
  }
  
  @keyframes cw-slide-in {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .cw-hud-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; flex-shrink: 0; }
  .cw-hud-title { font-size: 22px; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.1; }
  .cw-hud-subtitle { font-size: 10px; color: var(--mp-accent, #58a6ff); font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 4px; }
  .cw-hud-count { font-size: 28px; font-weight: 300; color: rgba(255,255,255,0.4); font-variant-numeric: tabular-nums; }
  
  .cw-movie-list { display: flex; flex-direction: column; gap: 6px; overflow-y: auto; padding-right: 4px; margin-top: 4px; flex-grow: 1; }
  .cw-movie-list::-webkit-scrollbar { width: 4px; }
  .cw-movie-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
  
  .cw-movie-item { display: flex; gap: 12px; align-items: center; padding: 8px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid transparent; transition: all 0.2s; cursor: pointer; }
  .cw-movie-item:hover { border-color: var(--mp-accent, #58a6ff); background: rgba(88, 166, 255, 0.1); }
  
  /* Familiar Faces Style Dots */
  .cw-item-dot { margin-top: 6px; width: 6px; height: 6px; border-radius: 50%; background: var(--mp-accent, #58a6ff); box-shadow: 0 0 6px var(--mp-accent, #58a6ff); flex-shrink: 0; }
  
  .cw-meta { flex: 1; min-width: 0; display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
  .cw-meta h4 { font-size: 13px; font-weight: 500; color: #4ade80; margin: 0; line-height: 1.4; white-space: normal; word-break: break-word; text-shadow: 0 0 10px rgba(74, 222, 128, 0.15); }
  .cw-meta span { font-size: 11px; color: #888; font-feature-settings: "tnum"; white-space: nowrap; margin-top: 2px; }

  /* --- CONNECTOR SVG --- */
  .cw-connector-svg {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 90;
  }
  .cw-connector-path {
    fill: none; stroke: var(--mp-accent, #58a6ff); stroke-width: 2;
    filter: drop-shadow(0 0 4px var(--mp-accent, #58a6ff));
    stroke-dasharray: 10; animation: dash 1s linear infinite;
  }
  @keyframes dash { to { stroke-dashoffset: -20; } }

  /* --- CONTROLS (Bottom Left) --- */
  .cw-controls {
    position: absolute; bottom: 40px; left: 40px; 
    display: flex; flex-direction: column; gap: 20px;
    background: rgba(10, 10, 12, 0.9); border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px); border-radius: 16px; padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6); width: 240px; z-index: 100;
  }
  .cw-ctrl-header { font-size: 10px; color: #666; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 10px; display: block; }
  .cw-toggle-row { display: flex; gap: 4px; background: rgba(255,255,255,0.05); padding: 3px; border-radius: 8px; margin-bottom: 8px; }
  .cw-btn-toggle { flex: 1; background: transparent; border: none; color: #888; font-size: 11px; font-weight: 600; padding: 8px 10px; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
  .cw-btn-toggle:hover { color: white; }
  .cw-btn-toggle.active { background: var(--mp-accent, #58a6ff); color: #000; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
  
  .cw-slider-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 8px; }
  .cw-slider { flex: 1; accent-color: var(--mp-accent, #58a6ff); cursor: pointer; height: 3px; border-radius: 2px; }
  .cw-slider-label { font-size: 10px; font-weight: 700; color: #888; width: 35px; }

  .cw-select {
    width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    color: #ccc; font-size: 11px; padding: 8px; border-radius: 6px; outline: none;
    font-weight: 600; cursor: pointer; margin-bottom: 10px;
  }
  .cw-select:hover { border-color: rgba(255,255,255,0.3); color: white; }
  .cw-select option { background: #111; color: white; }

  /* --- COLOR PICKER --- */
  .cw-color-row { display: flex; align-items: center; gap: 10px; }
  .cw-color-preview { width: 32px; height: 32px; border-radius: 8px; border: 2px solid rgba(255,255,255,0.2); cursor: pointer; position: relative; overflow: hidden; }
  .cw-color-input { position: absolute; top: -5px; left: -5px; width: 50px; height: 50px; cursor: pointer; opacity: 0; }

  /* --- TOP UI --- */
  .cw-ui-top { position: absolute; top: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 1000; width: 100%; max-width: 500px; }
  .cw-search-wrap { position: relative; flex: 1; }
  .cw-input { width: 100%; background: rgba(10, 10, 12, 0.8); border: 1px solid rgba(255,255,255,0.15); color: white; padding: 14px 20px 14px 44px; border-radius: 12px; backdrop-filter: blur(12px); outline: none; font-size: 14px; font-weight: 500; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .cw-input:focus { border-color: var(--mp-accent, #58a6ff); box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.2); }
  .cw-search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #666; pointer-events: none; }
  .cw-action-btn { background: rgba(10, 10, 12, 0.8); border: 1px solid rgba(255,255,255,0.15); color: white; height: 48px; padding: 0 20px; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 13px; backdrop-filter: blur(12px); transition: all 0.2s; display: flex; align-items: center; gap: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .cw-action-btn:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }
  .cw-close { position: absolute; top: 30px; right: 30px; width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; z-index: 100; font-size: 20px; }
  .cw-close:hover { background: #c53030; border-color: #c53030; transform: rotate(90deg); }

  /* --- SUGGESTIONS DROPDOWN --- */
  .cw-suggestions {
    position: absolute; top: 100%; left: 0; width: 100%;
    background: rgba(10, 10, 12, 0.95); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; margin-top: 8px; max-height: 200px; overflow-y: auto;
    backdrop-filter: blur(20px); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 1001;
  }
  .cw-suggestion-item {
    padding: 10px 16px; font-size: 13px; color: #ccc; cursor: pointer;
    transition: all 0.15s; border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .cw-suggestion-item:last-child { border-bottom: none; }
  .cw-suggestion-item:hover { background: rgba(88, 166, 255, 0.1); color: white; padding-left: 20px; }
  .cw-suggestion-item strong { color: var(--mp-accent, #58a6ff); font-weight: 600; }
`;
const getPolygonCentroid = (coords) => {
  let minX = 180, maxX = -180, minY = 90, maxY = -90;
  coords.forEach((pt) => {
    const [x, y] = pt;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  });
  return { lng: (minX + maxX) / 2, lat: (minY + maxY) / 2 };
};
const CinemaWorld = ({ onClose }) => {
  const globeEl = reactExports.useRef(void 0);
  const spinLock = reactExports.useRef(false);
  const interactionTimeout = reactExports.useRef(null);
  const [points, setPoints] = reactExports.useState([]);
  const [allCountries, setAllCountries] = reactExports.useState([]);
  const [geoJson, setGeoJson] = reactExports.useState(null);
  const [selectedCountry, setSelectedCountry] = reactExports.useState(null);
  const [rawDb, setRawDb] = reactExports.useState([]);
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const [connectorPath, setConnectorPath] = reactExports.useState("");
  const [config, setConfig] = reactExports.useState({
    autoRotate: true,
    dayMode: false,
    atmosphere: true,
    clouds: true,
    stars: true,
    grid: false,
    quality: "low",
    rotationSpeed: 0.5,
    atmosIntensity: 0.15,
    holoColor: "#00ffff"
  });
  const [loadingStep, setLoadingStep] = reactExports.useState(5);
  const [isReady, setIsReady] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [accentColor, setAccentColor] = reactExports.useState("#58a6ff");
  const isHolographic = config.quality === "holographic";
  const getMapUrl = () => {
    if (isHolographic) return null;
    if (config.quality === "high") {
      return config.dayMode ? "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" : "//unpkg.com/three-globe/example/img/earth-night.jpg";
    }
    return config.dayMode ? "//unpkg.com/three-globe/example/img/earth-day.jpg" : "//unpkg.com/three-globe/example/img/earth-night.jpg";
  };
  const glassMaterial = reactExports.useMemo(() => {
    if (!isHolographic) return void 0;
    return new MeshPhysicalMaterial({
      color: config.holoColor,
      roughness: 0.7,
      metalness: 0.1,
      transmission: 0.1,
      opacity: 0.15,
      transparent: true,
      side: DoubleSide
    });
  }, [isHolographic, config.holoColor]);
  const polygonsConfig = reactExports.useMemo(() => {
    if (!geoJson) return [];
    return [...geoJson.features];
  }, [geoJson, selectedCountry, config]);
  const ringsData = reactExports.useMemo(() => {
    if (!selectedCountry) return [];
    return [selectedCountry];
  }, [selectedCountry]);
  const countryMovies = reactExports.useMemo(() => {
    if (!selectedCountry || !rawDb.length) return [];
    return rawDb.filter((m) => {
      const code = getCountryCodeFromEntity(m);
      return code === selectedCountry.code;
    }).sort((a, b) => parseInt(b.year || "0") - parseInt(a.year || "0")).map((m) => ({
      title: m.title || m.name,
      year: m.year || "????",
      poster: m.poster,
      url: m.id
    }));
  }, [selectedCountry, rawDb]);
  reactExports.useEffect(() => {
    try {
      setAccentColor(getThemeColor("--mp-accent"));
    } catch (e) {
    }
    const timer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsReady(true);
          return 0;
        }
        return prev - 1;
      });
    }, 700);
    const init = async () => {
      try {
        let db = { entities: {} };
        if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
          try {
            db = await LocalDbService.getDB();
          } catch (err) {
            console.warn("DB Load Error", err);
          }
        }
        const allItems = Object.values(db.entities || {});
        setRawDb(allItems);
        const visitedPoints = getMoviePoints(allItems);
        setPoints(visitedPoints);
        const res = await fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson");
        const data = await res.json();
        setGeoJson(data);
        const fullIndex = data.features.map((f) => {
          const code = f.properties.ISO_A2 || f.properties.ISO_A3 || "XX";
          const name = f.properties.ADMIN || f.properties.NAME || "Unknown";
          const visited = visitedPoints.find((p) => p.code === code);
          if (visited) return visited;
          const manual = COUNTRY_COORDS[code];
          if (manual) return { ...manual, count: 0, code };
          let center = { lat: 0, lng: 0 };
          if (f.geometry.type === "Polygon") {
            center = getPolygonCentroid(f.geometry.coordinates[0]);
          } else if (f.geometry.type === "MultiPolygon") {
            center = getPolygonCentroid(f.geometry.coordinates[0][0]);
          }
          return { lat: center.lat, lng: center.lng, label: name, count: 0, code };
        });
        setAllCountries(fullIndex);
      } catch (e) {
        console.error("CW Init Error", e);
      }
    };
    init();
    return () => clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    setSelectedCountry(null);
    setSearch("");
    if (globeEl.current && config.autoRotate) {
      globeEl.current.controls().autoRotate = true;
    }
  }, [config.quality]);
  reactExports.useEffect(() => {
    if (isReady && globeEl.current) {
      const controls = globeEl.current.controls();
      if (controls) {
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.rotateSpeed = 0.8;
        controls.zoomSpeed = 1.2;
        controls.enablePan = false;
        controls.autoRotate = config.autoRotate && !selectedCountry;
        controls.autoRotateSpeed = config.rotationSpeed;
      }
      if (globeEl.current.renderer) globeEl.current.renderer().domElement.style.outline = "none";
    }
  }, [isReady, config.autoRotate, config.rotationSpeed, selectedCountry]);
  reactExports.useEffect(() => {
    let animId;
    const updateConnector = () => {
      if (!selectedCountry || !globeEl.current) {
        setConnectorPath("");
        return;
      }
      try {
        if (typeof globeEl.current.getScreenCoords === "function") {
          const coords = globeEl.current.getScreenCoords(selectedCountry.lat, selectedCountry.lng, 0.04);
          if (coords) {
            const { x, y } = coords;
            if (x < 0 || x > self.innerWidth || y < 0 || y > self.innerHeight) {
              setConnectorPath("");
            } else {
              setConnectorPath(`M ${x} ${y} L ${430} ${y} L ${380} ${140}`);
            }
          }
        } else {
          setConnectorPath("");
        }
        animId = requestAnimationFrame(updateConnector);
      } catch (e) {
        setConnectorPath("");
      }
    };
    if (selectedCountry) animId = requestAnimationFrame(updateConnector);
    else setConnectorPath("");
    return () => cancelAnimationFrame(animId);
  }, [selectedCountry]);
  const handleInteraction = () => {
    if (!config.autoRotate || !globeEl.current) return;
    globeEl.current.controls().autoRotate = false;
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      if (globeEl.current && !selectedCountry) {
        globeEl.current.controls().autoRotate = true;
      }
    }, 3e3);
  };
  const handlePolygonClick = (polygon, _event, coords) => {
    const code = polygon.properties.ISO_A2 || polygon.properties.ISO_A3 || "XX";
    const name = polygon.properties.ADMIN || polygon.properties.NAME || "Unknown Territory";
    if (selectedCountry && selectedCountry.code === code) {
      handleGlobeClick();
      return;
    }
    const match = points.find((p) => p.code === code);
    const manualCoord = COUNTRY_COORDS[code];
    const target2 = match || {
      lat: manualCoord ? manualCoord.lat : coords.lat,
      lng: manualCoord ? manualCoord.lng : coords.lng,
      label: manualCoord ? manualCoord.label : name,
      count: 0,
      code
    };
    setSelectedCountry(target2);
    setSearch(target2.label);
    setShowSuggestions(false);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: target2.lat, lng: target2.lng, altitude: 1.5 }, 1e3);
      globeEl.current.controls().autoRotate = false;
    }
  };
  const handleGlobeClick = () => {
    setSelectedCountry(null);
    setSearch("");
    setShowSuggestions(false);
    if (globeEl.current && config.autoRotate) {
      globeEl.current.controls().autoRotate = true;
    }
  };
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (val.length >= 1) {
      const matches = allCountries.filter((p) => p.label.toLowerCase().includes(val.toLowerCase())).slice(0, 8);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (point) => {
    setSelectedCountry(point);
    globeEl.current?.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1e3);
    setSearch(point.label);
    setShowSuggestions(false);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handleSuggestionClick(suggestions[0]);
  };
  const handleSpin = () => {
    if (!globeEl.current || spinLock.current) return;
    const validPoints = points.filter((p) => p.count > 0);
    const pool = validPoints.length > 0 ? validPoints : allCountries.slice(0, 20);
    spinLock.current = true;
    let target2 = pool[Math.floor(Math.random() * pool.length)];
    if (selectedCountry && pool.length > 1) {
      let i = 0;
      while (target2.code === selectedCountry.code && i < 5) {
        target2 = pool[Math.floor(Math.random() * pool.length)];
        i++;
      }
    }
    setSearch(`Travelling to ${target2.label}...`);
    globeEl.current.pointOfView({ lat: target2.lat, lng: target2.lng, altitude: 1.8 }, 1500);
    setTimeout(() => {
      setSelectedCountry(target2);
      setSearch(target2.label);
      spinLock.current = false;
    }, 1500);
  };
  const activeHolo = config.holoColor;
  const atmosColor = isHolographic ? activeHolo : config.dayMode ? "#3a84ff" : accentColor;
  if (!isReady) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-overlay", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: CW_STYLES }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-loader", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-countdown", children: loadingStep }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-status", children: "Initializing Systems..." })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "cw-overlay",
      onMouseDown: handleInteraction,
      onTouchStart: handleInteraction,
      onWheel: handleInteraction,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: CW_STYLES }),
        selectedCountry && /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "cw-connector-svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: connectorPath, className: "cw-connector-path", style: { stroke: isHolographic ? activeHolo : accentColor } }),
          connectorPath && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: connectorPath.split(" ")[1], cy: connectorPath.split(" ")[2], r: "3", fill: isHolographic ? activeHolo : accentColor })
        ] }),
        selectedCountry && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-hud-panel visible", style: { borderColor: isHolographic ? activeHolo : void 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-hud-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-hud-title", children: selectedCountry.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-hud-subtitle", style: { color: isHolographic ? activeHolo : void 0 }, children: "SECURE CONNECTION" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-hud-count", children: selectedCountry.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-movie-list", children: countryMovies.length > 0 ? countryMovies.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-movie-item", onClick: () => self.open(`https://www.moctale.in${m.url}`, "_blank"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-item-dot", style: { backgroundColor: isHolographic ? activeHolo : void 0, boxShadow: isHolographic ? `0 0 6px ${activeHolo}` : void 0 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-meta", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { color: isHolographic ? activeHolo : "#fff" }, children: m.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.year })
            ] })
          ] }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#666", fontSize: "12px", fontStyle: "italic", padding: "10px", textAlign: "center" }, children: selectedCountry.count === 0 ? "No media records discovered yet." : "Scanning archives..." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-ui-top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "cw-search-wrap", onSubmit: handleSearchSubmit, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-search-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "cw-input",
                placeholder: "Search territory...",
                value: search,
                onChange: handleSearchChange,
                onFocus: () => {
                  if (search.length >= 1) setShowSuggestions(true);
                },
                autoFocus: true
              }
            ),
            showSuggestions && suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-suggestions", children: suggestions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-suggestion-item", onClick: () => handleSuggestionClick(s), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: isHolographic ? activeHolo : void 0 }, children: s.label }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.5, fontSize: "11px" }, children: [
                "(",
                s.code,
                ")"
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "cw-action-btn", onClick: handleSpin, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2v4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m16.2 7.8 2.9-2.9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 12h4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m16.2 16.2 2.9 2.9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 18v4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m4.9 19.1 2.9-2.9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12h4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m4.9 4.9 2.9 2.9" })
            ] }),
            "Spin"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "cw-close", onClick: onClose, title: "Close System", children: "✕" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-controls", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-ctrl-header", children: "Map Style" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "cw-select",
                value: config.quality,
                onChange: (e) => setConfig((p) => ({ ...p, quality: e.target.value })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Standard" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "High Res" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "holographic", children: "Holographic" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-ctrl-header", children: "Visual Layers" }),
            isHolographic ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-color-row", style: { marginBottom: "8px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cw-color-preview", style: { backgroundColor: config.holoColor }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "color",
                  className: "cw-color-input",
                  value: config.holoColor,
                  onChange: (e) => setConfig((p) => ({ ...p, holoColor: e.target.value }))
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "11px", color: "#ccc", fontWeight: 600 }, children: "Hologram Theme" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-toggle-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `cw-btn-toggle ${!config.dayMode ? "active" : ""}`, onClick: () => setConfig((p) => ({ ...p, dayMode: false })), children: "Night" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `cw-btn-toggle ${config.dayMode ? "active" : ""}`, onClick: () => setConfig((p) => ({ ...p, dayMode: true })), children: "Day" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-toggle-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `cw-btn-toggle ${config.stars ? "active" : ""}`, onClick: () => setConfig((p) => ({ ...p, stars: !p.stars })), children: "Stars" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `cw-btn-toggle ${config.grid ? "active" : ""}`, onClick: () => setConfig((p) => ({ ...p, grid: !p.grid })), children: "Grid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `cw-btn-toggle ${config.atmosphere ? "active" : ""}`, onClick: () => setConfig((p) => ({ ...p, atmosphere: !p.atmosphere })), children: "Atmos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-ctrl-header", children: "Physics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-slider-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-slider-label", children: "ROT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "5", step: "0.1", value: config.rotationSpeed, className: "cw-slider", onChange: (e) => setConfig((p) => ({ ...p, rotationSpeed: parseFloat(e.target.value) })) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cw-slider-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cw-slider-label", children: "GLOW" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "1", step: "0.05", value: config.atmosIntensity, className: "cw-slider", onChange: (e) => setConfig((p) => ({ ...p, atmosIntensity: parseFloat(e.target.value) })) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Globe$1,
          {
            ref: globeEl,
            backgroundColor: "#050505",
            backgroundImageUrl: config.stars ? "//unpkg.com/three-globe/example/img/night-sky.png" : void 0,
            globeImageUrl: getMapUrl() || void 0,
            bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
            globeMaterial: glassMaterial,
            showAtmosphere: config.atmosphere,
            atmosphereColor: atmosColor,
            atmosphereAltitude: config.atmosIntensity * 0.5,
            showGraticules: config.grid,
            pointsData: [],
            polygonsData: polygonsConfig,
            polygonStrokeColor: (d) => {
              const code = d.properties.ISO_A2 || d.properties.ISO_A3;
              if (selectedCountry && selectedCountry.code === code) return "#ffffff";
              if (isHolographic) return `${config.holoColor}40`;
              return "rgba(0,0,0,0)";
            },
            polygonSideColor: (d) => {
              const code = d.properties.ISO_A2 || d.properties.ISO_A3;
              if (selectedCountry && selectedCountry.code === code) return isHolographic ? activeHolo : accentColor;
              return "rgba(255, 255, 255, 0)";
            },
            polygonCapColor: (d) => {
              const code = d.properties.ISO_A2 || d.properties.ISO_A3;
              if (selectedCountry && selectedCountry.code === code) return isHolographic ? `${config.holoColor}60` : "rgba(88, 166, 255, 0.25)";
              if (isHolographic) return `${config.holoColor}10`;
              return "rgba(0,0,0,0)";
            },
            polygonAltitude: (d) => {
              const code = d.properties.ISO_A2 || d.properties.ISO_A3;
              return selectedCountry && selectedCountry.code === code ? 0.04 : 4e-3;
            },
            ringsData,
            ringColor: () => isHolographic ? activeHolo : accentColor,
            ringMaxRadius: 4,
            ringPropagationSpeed: 2,
            ringRepeatPeriod: 800,
            ringAltitude: 0.045,
            onPolygonHover: (polygon) => {
              document.body.style.cursor = polygon ? "pointer" : "default";
            },
            onPolygonClick: handlePolygonClick,
            onGlobeClick: handleGlobeClick
          },
          config.quality
        )
      ]
    }
  );
};
const CinemaWorld$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CinemaWorld
}, Symbol.toStringTag, { value: "Module" }));
export {
  AutoBackupSettings as A,
  CURRENT_VERSION as C,
  DEFAULT_PAINTER_COLORS as D,
  REPO_OWNER as R,
  REPO_NAME as a,
  exportBackup as e,
  importBackup as i,
  showToast as s,
  useSettings as u
};
