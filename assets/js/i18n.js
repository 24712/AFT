(() => {
  const root = document.documentElement;
  const button = document.getElementById("languageToggle");
  const fallbackLanguage = "ar";
  const dictionaries = {};
  async function loadLanguage(language) {
    try {
      if (!dictionaries[language]) {
        const response = await fetch("assets/i18n/" + language + ".json");
        if (!response.ok) throw new Error("Language file unavailable");
        dictionaries[language] = await response.json();
      }
      const dictionary = dictionaries[language];
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (typeof value === "string") element.textContent = value;
      });
      root.lang = language;
      root.dir = language === "ar" ? "rtl" : "ltr";
      if (button) {
        button.textContent = language === "ar" ? "EN" : "ع";
        button.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");
      }
      localStorage.setItem("aft-language", language);
    } catch (error) {
      console.error("AFT language loading error:", error);
      if (language !== fallbackLanguage) loadLanguage(fallbackLanguage);
    }
  }
  const preferred = localStorage.getItem("aft-language") || (navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en");
  loadLanguage(preferred);
  button?.addEventListener("click", () => loadLanguage(root.lang === "ar" ? "en" : "ar"));
})();