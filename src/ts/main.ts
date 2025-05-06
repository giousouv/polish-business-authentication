// src/main.ts
import "./i18n"; // Import i18n configuration
import i18n from "i18next";

document.addEventListener("DOMContentLoaded", () => {
  // Translate text content based on data-i18n attribute
  const translateText = () => {
    const elements = document.querySelectorAll("[data-i18n]");
    console.log(elements);
    elements.forEach((element) => {
      const key = (element as HTMLElement).getAttribute("data-i18n");
      if (key) {
        (element as HTMLElement).textContent = i18n.t(key);
        console.log((element as HTMLElement).textContent);
      }
    });
  };

  // Initial translation on load
  translateText();

  // Set up the language switcher
  const languageSwitcher = document.getElementById("language-select");
  if (!languageSwitcher) {
    console.error("Language switcher element not found");
    return;
  }

  const currentLang = i18n.language;
  if (currentLang === "pl") {
    (languageSwitcher as HTMLSelectElement).value = "Polish (PL)";
  } else if (currentLang === "en") {
    (languageSwitcher as HTMLSelectElement).value = "English (EN)";
  }

  languageSwitcher.addEventListener("change", (e) => {
    const currentLangOption = (e.target as HTMLSelectElement)?.value;
    if (currentLangOption === "Polish (PL)") {
      i18n.changeLanguage("pl").then(() => {
        translateText(); // Re-translate content after language change
      });
      (languageSwitcher as HTMLSelectElement).value = "Polish (PL)";
    } else if (currentLangOption === "English (EN)") {
      i18n.changeLanguage("en").then(() => {
        translateText(); // Re-translate content after language change
      });
      (languageSwitcher as HTMLSelectElement).value = "English (EN)";
    }
  });
});
