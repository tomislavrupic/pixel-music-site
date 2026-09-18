# Pixel Music 0.3.3 (build 15)

Train a reusable local style from your own recordings, compare it with the baseline,
and keep the version you prefer. This release fixes the experimental Train workflow
so it trains both the music planner and audio decoder instead of silently falling
back to planner-only training.

- Corrected audio encoder and explicit v9 dataset preparation.
- Separate planner, decoder and projection updates; held-out checkpoint selection.
- Checkpoint resume includes optimizer state and the averaged adapter.
- Joint styles work in comparison previews and, after approval, in Create.
- Clearer dataset readiness and progress for both training components.
- Prevent Python caches from modifying the signed application bundle.

Existing training datasets must be prepared again before joint training. Previous
songs, runs and generated masters are preserved. Training is experimental and needs
the separate local runtime, v9 tokenizer/decoder, full YuE2 VAE, MERT2 and regularizer
assets; this release does not automatically install those assets. Models and personal
recordings are not included in the download. Training quality depends on your dataset.

The music app also includes local Qwen voice tools introduced after public 0.2.9.
The source repository remains private. The public website provides the notarized app
and its version feed; the in-app update button opens the download page for manual installation.
