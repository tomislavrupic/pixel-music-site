# Pixel Music 0.4.6

Ruach First Wave BF16 is the default music backbone for new settings and upgrades
without an explicit model choice. Original YuE2 remains available; existing model
choices and all historical recipes retain their identities.

- One setup flow prepares the shared YuE2 runtime and Original assets when needed,
  then installs Ruach with continuous progress, cancellation and clear errors.
- Create, score planning, Emotional Composer and MCP use the selected model.
- Existing LoRA sounds and experimental TRAIN continue to use Original. Clearing
  a learned sound returns to Ruach. Switching to Ruach preserves lyrics and accepted
  scores while removing incompatible adapter and latent-decode controls.
- Verified downloads, byte-preserving BF16 conversion and exact model/runtime
  provenance. Separate model folders preserve Original and saved masters.
- Installer path checks reject overlapping folders, symlinks and case aliases.

Fresh setup downloads about 7 GB of Original/shared assets plus the 7.3 GB Ruach
merge; allow about 24 GB free, or about 16 GB with Original already installed.
Existing verified assets are reused. No models download merely by opening Settings.
The installer requires uv. Original models and LoRAs remain available in Taste.

Ruach merged weights are CC BY-NC-SA 4.0; Original YuE2 weights are CC BY-NC 4.0.
Weights download separately and are not included in the app. See the publisher's
[Ruach model card](https://huggingface.co/goldhub/YuE2-RS-Finetunes).

Verification: 401 Swift and 285 Python tests, zero failures, 13 skipped; native UI
capture and independent review. Real Ruach planning and matched-score 30-second
Original/Ruach renders passed. That bounded comparison does not certify full-song
endings, vocal quality, or a general improvement in music quality or speed.
ChatGPT and local Qwen writing assistance remain available as in 0.4.5.
