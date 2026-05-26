(() => {
  let composing = false;

  document.addEventListener('compositionstart', () => {
    composing = true;
  }, true);

  document.addEventListener('compositionend', () => {
    composing = false;
  }, true);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (composing || e.isComposing || e.keyCode === 229) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }, true);
})();
