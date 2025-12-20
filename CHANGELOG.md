# Changelog

All notable changes to the **Moctale Plus** extension will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).





## v1.5.0 - 20/12/2025
*Changes currently in the main branch, pending the next tag.*

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