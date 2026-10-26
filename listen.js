"use strict";
// Native controls retain keyboard, seeking and volume behavior.
const previews = Array.from(document.querySelectorAll("#listen audio"));
for (const player of previews) {
  const error = player.closest(".listen-card").querySelector(".audio-error");
  player.addEventListener("play", () => {
    for (const other of previews) if (other !== player) other.pause();
    error.hidden = true;
  });
  player.addEventListener("error", () => { error.hidden = false; });
}
