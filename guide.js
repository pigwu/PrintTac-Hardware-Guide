const links = [...document.querySelectorAll('.chapters a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateChapter() {
  const top = window.innerWidth <= 760 ? 150 : 115;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= top) active = section;
  }
  for (const link of links) {
    const selected = link.getAttribute('href') === `#${active.id}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(() => { updateChapter(); scheduled = false; });
  }
}, { passive: true });
window.addEventListener('resize', updateChapter);
updateChapter();
for (const button of document.querySelectorAll('.copy')) {
  button.addEventListener('click', async () => {
    const code = button.closest('.codeblock').querySelector('code');
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = 'Copied';
      document.querySelector('#copy-status').textContent = 'Command copied to clipboard';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Select to copy';
      document.querySelector('#copy-status').textContent = 'Command selected. Copy it manually.';
    }
    setTimeout(() => { button.textContent = 'Copy'; }, 2200);
  });
}
