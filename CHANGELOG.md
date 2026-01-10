# Changelog

All notable changes to the **Moctale Plus** extension will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


<!-- 
## Unreleased - xx/xx/2026

### Added

### Improved

### Fixed

-->

## v2.5.0 - 08/01/2026

### Added
- **Command Palette:**
    - A keyboard-centric and blazingly-fast power tool for fast navigation, quick actions & toggling extension features.
    - Press `Alt + Shift + K` to open the Command Palette.
    - **Omni-Search:** Instantly search your entire local history (movies, genres, people), site navigation, and extension commands in one unified list.
    - **Power Actions:** Run commands directly like "Open Graph View", or "Export Backup" without digging through menus.
    - **Smart Navigation:** Jump to any page on Moctale, even ones you haven't visited yet, using the built-in site map registry and Local Tracker.

- **Graph View:**
    - Visualizes user's unique viewing journey as an interactive & animated, Obsidian-inspired galaxy of inter-connected nodes.
    - Users can discover hidden patterns in their taste by exploring relationships between movies, genres, categories, cast, and more in a beautiful, physics-based interface.
    - Control panel on bottom left corner provides Physics & Display settings with toolbar buttons and a search bar.
    - Interactions:
        - Press `Alt + Shift + G` to open the graph view.
        - Hover a node to highlight it's immediate neighbour nodes.
        - Drag a node within the canvas.
        - Double-click a node to navigate to its associated page.
        - Right-click on a node to delete it (not implemented yet)
    - This feature uses user's data stored with "Local Tracker" feature. The Graph View will keep self-expanding as the Local Tracker gathers more user data.

- **Local Tracker:**
    - Silently builds a private, local and comprehensive database of user's browsing history (movies, series, people, genres, categories, languages, countries, clubs, and collections) by analyzing page visits.
    - This rich, self-expanding knowledge database serves as the foundation for many upcoming powerful features.

- **Full Cast & Crew:**
    - Search on Google, IMDb, IMDbPro, Wikipedia. <!-- (I'll probably add wikidata as well) -->

### Improved
- **Keybindings Update:**
    - `ALT + SHIFT + G`: Opens the Graph View.
    - `ALT + SHIFT + K`: Opens the Command Palette.
    - `ALT + SHIFT + M`: Opens the Extension Popup.
- **Page Summary:**
    - Page Summary button smartly switches text color between white and black depending on brightness of background color (works well with **Dynamic Theme** feature) 
    - Now Vibe Chart uses brighter neon colors.

### Fixed
- **Page Summary:**
    - Fixed the snappy appearance of arcs with 0% vote. Now it animates with a fake 100% vote for a smoother animation from 0 degress to 180 degrees (or whatever the automatically calculated value would be).
- **Dynamic Theme:**
    - It used to require toggling it off and on for the first time. Now it is off by default and user can toggle it on with no visual bugs.

### Removed
- **Keyboard Shortcuts:**
    - Because it is getting absorbed into the core platform,
    - Only the above mentioned keybindings will be associated with Moctale Plus, unless changed in the future. 
        <!-- - `ALT + SHIFT + D`: Unreleased Feature. -->









## v2.0.0 - 04/01/2026

### Added
- **Dynamic Theme:** 
    - Extracts color palette from currently opened Title's Poster and generates a new dynamic theme based on Poster Artwork.
    - Every Movie / Series page will have its own unique, personaliz
- **SideBar Plus:** 
    - Replaces the previous sections in SideBar with three section containing well-organized platforms and tools.

### Improved
- **Export Collection:** 
    - Now exports the collection titles as a ZIP bundle containg CSV, JSON, Excel, TXT, Markdown and HTML variations of exported Collections.
- **Page Summary:** Vibe Chart and Moctale Meter appears with a sleek animation.
- **Page Summary Button:** Better UI with background color and text color
- **Keyboard Shortcuts:**
    - Better column layout for Shortcuts Guide
- **Image Downloader:** 
    - Removed the size limit for image download button to appear

    - Download button appears only while pressing `Ctrl` and hovering the target image
    
### Fixed
- **Custom Theme Switching:** New theme is applied immediately on change.
- **Transparent Blurred Background Issue:** In Page Summary and Keyboard Shortcuts Guide
- **Downloaded Page Summary:** Now follows the applied custom theme

    



## v1.9.8 - 03/01/2026

### Added
- **More Themes:** 
    - More themes based on social, ott and other entertainment platforms
    - `Default (Dark)`, `Oled`, `Midnight`, `Dracula`, `Nord`, `Github Dark`, `Synthwave`, `Onedark`, `Nightowl`, `Palenight`, `Twitter Dim`, `Discord`, `Whatsapp`, `Instagram`, `Eva`, `Goku`, `Horror`, `Forest`, `Matrix`, `Coffee`, `Ocean`, `Catppuccin`, `Tokyonight`, `Rosepine`, `Kanagawa`, `Cobalt2`, `Shades Purple`, `Andromeda`, `Linear`, `Vercel`, `Supabase`, `Raycast`, `Spotify`, `Netflix`, `Disney`, `Hbo`, `Macos`, `Ubuntu`

### Improved
- **Injected Element CSS:** 
    - The elements injected by Moctale Plus will now follow the applied custom theme as well.
    - It was done by migrating the hardcoded css values to follow the custom made CSS THEME ENGINE.
- **Page Summary:** 
    - Now shows one-to-one vibe chart and moctale meter with custome interactive implementations
    - Also, users can save and share the page summary by downloading it as an image with the new dedicated button

### Fixed
- **Image Downloader:**
    - Problem: The download button used to appear in places where it was not supposed to appear
    - Solution: Now the download button will appear only when hovering the target image while pressing `Ctrl` button.


## v1.9.5 - 01/01/2026

### Added
- **Custom Themes:** Added 25+ beautiful themes
    - `Default (Dark)`, `OLED (Black)`, `Midnight (Deep Blue)`, `Dracula`, `Nord`, `Monokai`, `Github Dark`, `Synthwave`, `Onedark`, `Gruvbox`, `Ayu`, `Nightowl`, `Palenight`, `Twitter`, `Discord`, `Whatsapp`, `Instagram`, `Eva`, `Goku`, `Akatsuki`, `Horror`, `Mystery`, `Matrix`, `Coffee`, `Ocean`, `Forest`, `Luxury`
    - Some themes requires page refresh to apply. I'll try to fix that later.


## v1.9.0 - 01/01/2026

### Added
- **Annual New Year Celebration:** Adds a Happy New Year Banner with link to visit official newely launched website
- **Page Summary:** Shows a page summary for currently opened title.
- **Image Downloader:** Download any image by clicking the download button appearing on hovering the iamge.
- **Performance Max:** Makes the website faster and smoother to use.
    - Optimization techniques:
        - **NETWORK:** Speculation Rules (Prefetch) & CDN Preconnection.
        - **INTERACTION:** Warm Connections (MouseDown) & Tap Delay Removal.
        - **SCROLL:** Pointer Events Locking (60fps Scroll).
        - **SCHEDULING:** Idle Callbacks for heavy tasks.
    - Possible Addtions (Not Implemented Yet): GPU acceleration (transforms) and Virtualization (content-visibility)

### Fixed
- **Image Preview:** 
    - It used to not work on pictures in posts with multiple images. 
    - It was happening because of `pointer-events: none` used in the carousel images




## v1.8.5 - 27/12/2025

### Improved
- **Watch Status Indicator Extreme Optimization:** 
    - The problem :
        - Layout Thrashing by repeativie call for querySelectorAll.
        - React Overhead by creating individual root for each title in a collection. For example, a collection with 600 Tites would mean "600 roots = 600 separate React Instances" resulting in 15-20 seconds pause before watch status loads and taking a tool on hardware & performance.
    - The solution :
        - Vanilla JS Rendering: Ditched React createRoot for these tiny icons. Now using raw DOM elements (document.createElement) which is 100x faster and uses zero memory overhead per item compared to a React Fiber tree.
        - Intersection Observer: Only process and render icons for posters that are actually visible on screen. Resulting in watch status to load instantly.
        - Batch Processing: Instead of processing the entire DOM on every mutation, now we process only added nodes.






## v1.8.0 - 26/12/2025

### Added
- **Watch Status Indicator:** 
    - Shows a watch status indicator on Posters with a watch status toggle appearing on hovering poster. 
    - Three states shown on Title Posters: Unwatched, In Progress, Watched
- **Image Preview:** Hovering an image while pressing `Ctrl + Shift` opens a high-quality preview.
- **Private Notes:** Write encrypted private notes for every title.

### Improved
- **Episode Tracker:** Small tweaks in Episode Tracker's UI.

### Fixed
- **Poster Layout:** 
    - Small issues for List View in different grids were not affected. 
    - Now Poster Layout is applied universally to all grids containing Movies/Series on page.
- **Episode Tracker:** 
    - Some seasons were not recongnized due to abscense of the word "Season". 
    - Now a unique id for each season is used to maintain episode tracking regardless of Season sort order.



## v1.7.5 - 25/12/2025

### Added

- **Spinning Wheel:** To pick random title from currently opened collection.
- **Search Plus:** Adds buttons under Search Bar to directly search other 12 platforms like Google, IMDB, AniList, etc.
- **Sticker Studio:** Adds Images as resizeable and repositionable stickers anywhere in the website.
- **Backup Frequency:** Automatically triggers cloud sync at user-defined intervals (None, Daily or Weekly).
- **Cloud Sync:** Save user's setting preference and Episode Tracker's data with Google Drive API.

### Improved
- **Poster Layout:** Only changes grid layout for the grids containg Movie/Series and not grids with Collections.
- **Footer Section UI:** To acommodate for the new buttons.

### Fixed

- **More Platform Section:** It used to try squezzing too many elements in a single row, now it strictly uses 2 columns.
- **Re-applying all extension settings:** A critical bug that used to directly harm the performace of the website.





## v1.7.0 - 23/12/2025

### Added
- **Import/Export Backup:** To preserve user's setting preference and Episode Tracker's data via a `Moctale_Plus_Backup_<datetime>.json` file.
- **Episode tracker:** Adds persistant episode progress tracking for individual seasons of TV Shows.
- **Review Templates:** Provides a set of pre-built templates for writing reviews for Movies, Shows and Anime. Users can add your own templates as well.

### Fixed
- **Obfuscation of Service-loader:** Fixed this critical bug for release versions that used to crash the service immediately after loading resulting in service-loader related erros.
- **isAnime Evaluation:** Now checks for Anime related genres on the Genre Section (Still needs better implementation).

### Improved
- **Keyboard Shortcts V2:**
    - Added many more Keyboard Shortcuts
    - A shortcuts guide can be accessed with `Shift + /`
    - Added a new shortcut `Alt + M` to access Moctale Plus.
- **More Platform V2:** 
    - Added many more platforms in the "More Platform" section. 
    - Added Anime Platforms like AniList, MAL, and Kitsu.
- **Pick Random:** Now appears only on one of the two types of collection paths.





## v1.6.5 - 22/12/2025

### Added
- **Added Poster Grid Layout:** Default, List View (1 Column), and 2-8 columns on `explore`, `explore/collection`, `/my-collections`, and `/schedule` pages.

### Improvement
- **Repositioned the Public Collection Titles:** To avoid the title text being aggressively wrapped, I've placed the title on a seperate line below the buttons. 

### Chore
- **Tier List Maker:** Stopptd this service (temporarily) as it was resulting in heavy operation cost.
- **Scroll Saver:** Stopped this service (temporarily) as it was resulting in heavy operation cost.







## v1.6.0 - 21/12/2025

### Added
- **Save Scroll Postion:** On page refresh, scroll to the exact position the a page was refreshed. 
- **Advanced Spoiler Shield:** Blurs out text with potential spoilers. Users can add their own risky words to consider as spoilers.

### Fixed
- **Search on Moctale:** This feature used to stop working at certain times
- **Random Picker opening titles in same tab for My Collections:** 
    - This was happeneing because the "My Collections" page uses JavaScript-driven `<div>` cards (role="link") instead of standard anchor tags `<a href="...">` used in other Collections. 
    - When we simply `.click()` them, the Single Page Application (SPA) router handles it internally, keeping the user in the same tab.
    - To force a New Tab, the solution is to reconstruct the URL manually by scraping the Title and Year from the card, since the href attribute is missing.








## v1.5.0 - 20/12/2025

### Added
- **Custom UPI donation amounts:** Allow users to financially support the development of Moctal Plus by choosing their own donation amount while making UPI contributions.
- **Update Notifier:** The extension popup now automatically checks for new versions on GitHub and displays a glowing "Update Available" badge if the currently installed version is outdated.


### Improved
- **Visual Overhaul:** Complete redesign of the extension popup UI/UX, featuring a new purple glassmorphism theme and smoother animations.





## v1.4.0 - 20/12/2025

### Added
- **Pick Random Content:** Added a "Pick Random" button to collections that randomly selects a movie/show and opens it in a new tab.

### Improved
- **Creative Corner:** Added more options (Spotify, YouTube Music, Fan Edits, Pinterest, ArtStation, Merchandise, Cosplay, Fan Fiction) in the Creative Section.
- **Light Theme:** Finalized the site-wide Light Theme with 100% coverage.






## v1.3.0 - 20/12/2025

### Added
- **Tier List Maker:** Allowing users to download all posters from a collection as a ZIP file, from which the posters can be unzipped and uploaded to TierMaker.com.
- **Code Obfuscation:** Added build steps to obfuscate code for enhanced security.

### Improved
- **Theming Engine:** Introduced the initial implementation of the Light Theme.

### Fixed
- **Runtime Error:** Fixed a `ReferenceError: window is not defined` crash by implementing a shim workaround.






## v1.2.0 - 17/12/2025

### Added
- **Keyboard Shortcuts:** Added cyclical navigation shortcuts (Keys `1` through `6`) for quick access to main sections.
- **Context Menu Search:** Added a "Search on Moctale" option to the browser's right-click context menu when selecting text.
- **Brand Identity:** Introduced the new Moctale Plus logo.

### Improved
- **UI/UX:** Refined the popup user interface for better readability.






## v1.0.0 - 17/12/2025
*First Major Release*

### Added
- **Box Office Tracker:** Added a section displaying box office collection data for movies.
- **Collection Exporter:**
    - Export public Collections to CSV.
    - Export "My Collections" to CSV.
- **Platform Integration:** Added the "More Platforms" section (IMDb, TMDb, Letterboxd).
- **Reviews & Discussions:** Added a dedicated section for YouTube reviews, Reddit threads, and Twitter discussions.
- **Feature Toggles:** Added granular toggles to enable/disable specific features (Export buttons, Sidebars, etc.).

### Changed
- **Release Workflow:** Automated the build and release process via GitHub Actions.






## v0.1.0 - 16/12/2025

*Initial Beta Development*

### Added
- **Linkifier:** Feature to convert plain text URLs into clickable hyperlinks.
- **Theme Engine:** Basic architecture for theme switching and local storage settings.
- **YouTube Reviews & Podcasts Integration:** Initial UI for YouTube reviews and podcasts.
- **Project Foundation:** Initial project setup using React, Vite, and TypeScript.
