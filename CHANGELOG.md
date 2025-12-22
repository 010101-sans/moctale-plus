# Changelog

All notable changes to the **Moctale Plus** extension will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).






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