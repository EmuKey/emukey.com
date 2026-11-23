(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function label() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    var text = 'Switch to ' + next + ' mode';
    btn.setAttribute('aria-label', text);
    btn.setAttribute('title', text);
  }

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  // Follow the OS setting until the visitor picks one
  media.addEventListener('change', function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (saved) return;
    root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    label();
  });

  label();
})();
