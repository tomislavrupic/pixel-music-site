# Pixel Music website

Static public product page for Pixel Music. This repository contains only the website and screenshots. Application source and preview releases remain in the private `tomislavrupic/pixel_music` repository.

GitHub Pages serves the root of `main`.

After uploading a signed release to the private app repository, update `latest.json` to its version and publish this site. The app checks this public version file only when the footer button is clicked, then opens the matching private GitHub release. Installation is manual; no GitHub token is embedded in the app.
