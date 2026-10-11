# Pixel Music 0.4.1 (build 23)

Fixes confusing setup for Local Qwen and the Laya ranker.

- Separate installers for the music engine, Local Qwen and Laya.
- Qwen downloads its own checksum-verified mlx-serve runtime; ALi Imagine and Sirius are optional.
- Reuse selected Qwen weights, or explicitly install pinned Qwen3 4B 4-bit into Pixel Music's own folder.
- Visible activity bars, installation stages, persistent errors and expandable Qwen logs.
- Fix installer resource lookup and keep Laya cancellation active until the installation actually stops.

Install the YuE2 music runtime first, then Local Qwen and Laya as needed. Opening setup does not download components.

Verification: Swift tests, six local-Qwen Python tests, and a standalone runtime download/install with existing Qwen weights. The default Qwen weight download and a fresh Laya download have not been exercised. No live-generation or listening-quality claim.
