# Pixel Music 0.3.4

More creative direction, with local Refine and real generation controls.

- **Refine** develops musical direction; **Surprise me** explores motif, groove and arrangement changes. **Help with lyrics** works on hooks, imagery and phrasing.
- Review and edit Qwen suggestions before applying them. Original text, guidance provenance and applied suggestions are preserved in the project. Undo protects later edits.
- **Male / Female / Prompted** selects vocal direction and is saved with each take. Instrumental tracks ignore this choice.
- **Prompt Following** controls YuE2's semantic guidance; **Weirdness** controls sampling temperature. Fresh compositions start at 67% Weirdness. These are Pixel Music scales, not equivalents to Suno's percentages.
- **Style** now ranges from 0–100%, with 100% applying the full trained adapter. Exact older recipes remain available for reproduction.

## Local Refine setup

Refine is optional and requires a supported local Qwen text model plus Pixel Music's installed music runtime. Select the model folder with **Qwen model…**. This release can seed its private mlx-serve 26.8.9 runtime from an existing ALi Imagine Prompt Assist or Sirius runtime installation; it does not yet download that runtime on a clean machine. After seeding, neither app needs to be running. No Qwen weights are bundled, and prompts are processed locally.

The bundled craft guidance adapts selected composition and lyric-writing checklists by Terry Jia. Credits and license notices are included. It does not retrain YuE2 or guarantee exact arrangement timing. Vocal choices are model directions, not guarantees. Higher Weirdness can reduce coherence, and stronger guidance can take longer.

## Validation

Swift tests and app builds pass. Local Qwen composition/lyric inference and cancellation were tested. The installed YuE2 sampler was checked with synthetic logits on Metal to confirm that guidance and temperature affect token decisions. No new song-level listening comparison is claimed for this release.
