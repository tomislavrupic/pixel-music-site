# Pixel Music 0.4.0 (build 22)

Combines the 0.3.9 composition, preset and imported-LoRA workflows with complete-recording training ranges up to six minutes.

- Use complete shorter recordings or explicitly cap every song at the first 360 seconds.
- Review songs in one list with durations, bulk selection, review confirmation and persistent removal.
- Prepare full planner sequences with bounded-memory VAE encoding; fractional recording lengths align semantic features to the acoustic encoder frame grid.
- Compare trained styles using 30-second, 2-, 4- or 6-minute generation caps.

Training remains experimental. The current pilot uses 60 planner and 90 decoder updates. Longer input does not guarantee better arrangements. Four-stem conditioning and seamless extension are not implemented. Originals, historical adapters and generated masters remain preserved.

Verification: Swift tests and debug build; Python training fixtures and real preparation of all 23 selected recordings verified separately. No new musical-quality claim.
