const toggle = document.querySelector('#motion-toggle');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
function setPaused(paused) {
  document.body.classList.toggle('motion-paused', paused);
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
}
function syncPreference() {
  setPaused(reduced.matches);
  toggle.disabled = reduced.matches;
  if (reduced.matches) toggle.textContent = 'Reduced motion';
}
toggle.addEventListener('click', () => setPaused(!document.body.classList.contains('motion-paused')));
reduced.addEventListener('change', syncPreference);
syncPreference();
