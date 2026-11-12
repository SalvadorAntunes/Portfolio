// Light / dark switch. Follows the system setting until the visitor picks one.
const root = document.documentElement;
const button = document.getElementById('theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
const updateLabel = () => { button.textContent = currentTheme() === 'dark' ? 'Light mode' : 'Dark mode'; };

button.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* private mode: just don't remember it */ }
  updateLabel();
});

systemDark.addEventListener('change', updateLabel);
updateLabel();
