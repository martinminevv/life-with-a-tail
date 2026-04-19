// Apply saved theme instantly (before paint) to avoid flash
(function () {
    const t = localStorage.getItem('preferredTheme') || 'light';
    document.documentElement.setAttribute('data-theme', t);
})();

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('preferredTheme', next);
    _updateIcon();
}

function _updateIcon() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
    btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
}

document.addEventListener('DOMContentLoaded', _updateIcon);