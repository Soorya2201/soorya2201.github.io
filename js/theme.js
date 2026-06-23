(function () {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (toggle) toggle.textContent = '☀︎';
    } else {
      root.removeAttribute('data-theme');
      if (toggle) toggle.textContent = '☾';
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }
})();
