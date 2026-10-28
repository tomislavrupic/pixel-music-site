# Pixel Music 0.4.7

This maintenance release improves diagnostics for YuE2 score planning and includes the current web demo collection.

- Failed score attempts record generated token counts and the notation token budget beside their exact score and seed.
- When an Auto-duration score exhausts its budget, its single recovery attempt requests a compact arrangement and clear ending. First-pass Auto behavior, selected model, sampling settings and genuine completion checks are preserved. Partial scores are never accepted as completed work.
- Recovery instructions work with both Full and Melody planning without adding an extra voice.
- The website includes the full Disco render and its original prompt, with the existing featured song retained and Stone Circuit removed from the demo collection.

## Known limitation

Full score planning can still repeat until it exhausts the notation budget. The revised recovery prompt did not resolve the observed disco case. A separately approved test using the same Ruach First Wave BF16 model with planning off produced a complete 139.72second stereo 48kHz track without generation warnings. This verifies that audio path, not Full planning or general musical adherence. No model defaults were changed and no new model downloads are required by this update.

Existing projects, model choices, runtime paths, master recordings and exact recipe provenance remain intact. Weights are downloaded separately under their existing licenses. Sirius/PXL preview delivery and human listening acceptance are separate checks.

## Release verification

Safe Swift and Python suites passed with environment-gated tests skipped. The app and DMG were accepted by Apple notarization, stapled and validated; Gatekeeper accepted both. The mounted DMG contains version 0.4.7/build31 with verified nested signatures. Source commit: `e2826c1`. No new live generation, model downloads or installed-app replacement was performed for this release. The integration archive exports the signed helper’s current eleven-tool catalog; its older bundled nine-tool catalog remains a compatible subset.
