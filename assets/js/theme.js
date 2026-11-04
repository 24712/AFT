(() => {
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const stored = localStorage.getItem("aft-theme");
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (icon) icon.textContent = theme === "dark" ? "☼" : "☾";
    if (button) button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  applyTheme(stored || (systemDark ? "dark" : "light"));
  button?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("aft-theme", next);
    applyTheme(next);
  });
})();