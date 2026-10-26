# Pixel Music 0.4.5

Adds optional ChatGPT writing assistance with browser sign-in and an account-specific
model selector. Local Qwen remains available. Refine, Surprise, lyrics, selected-image
inspiration and Emotional Composer use the existing writing guidance and validators.
Music generation remains local YuE2 BF16.

Settings explains which text and selected images are sent to OpenAI. Credentials
stay in native protected storage; cloud replies require completion before review.
The existing MCP image operation stays local Qwen regardless of interactive provider.

Includes the local 0.4.4 improvements: unified Taste controls and LoRA Use workflow,
writing modes, clearer failures and progress, and corrected score planning/retries.
Recurring notation no longer triggers a false stuck-score failure; token budgets
and ending checks remain. Documentation now matches six-minute training ranges
and playback directly within track rows.

Verification: complete native and Python fixture suites, native app packaging,
plus independent source review. Browser sign-in and model selection were confirmed by the user. Real cloud
writing inference is not yet verified; fixture inference passes. Existing model/listening acceptance is separate from safe tests.
