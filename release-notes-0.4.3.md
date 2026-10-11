# Pixel Music 0.4.3

Fixes a misleading positive-prompt limit alert that could prevent generation even when the current prompt was below 1,000 characters. Seed-history lookup now reads historical recipe provenance without applying new-generation prompt limits. Existing songs, recipes and masters remain untouched.

Validation: 106 Core and 226 App Swift tests, zero failures, five App skips. Regression reproduces the old 1,292-character saved prompt blocking a new 600-character prompt; new generation limits and symlink protections remain enforced. No live inference or listening test was performed for this patch.
