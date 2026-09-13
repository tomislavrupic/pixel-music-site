# Pixel Music website

Public product page and signed app downloads. Application source remains in the private `tomislavrupic/pixel_music` repository. GitHub Pages serves the root of `main`.

## Publishing

Copy only this directory into the website checkout. After signing and notarizing a new release, add its DMG to `downloads/`, regenerate SHA256SUMS, and update the download links and `latest.json`. Do not publish app source or credentials.

The 0.2.2 app checks `latest.json` and opens this website's public download section. Installation remains manual. Older 0.2.1 installations still link to private releases and should update using this website.

## Motion provenance

Frequency meters, signal pulses and diagonal scanning are standalone CSS adaptations of Neko City Builder's `src/ui/pixel-universe.css` room-meter/signal-pulse patterns and `src/ui/signal-progress.css` signal-progress-scan pattern, inspected on 2026-09-13. Neko was used read-only. No runtime dependency, characters, archive assets or Neko application code is included. Motion can be paused and follows the system reduced-motion preference.

Typography: Space Grotesk from google/fonts, bundled under the SIL Open Font License in assets/fonts/OFL.txt. The app icon was extracted without alteration from Pixel Music’s packaged ICNS.
