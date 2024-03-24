import translations from "./i18n.json";

export const DEFAULT_LANGUAGE = "en";

export const getTranslations = (language) => {
  return translations[language] || translations[DEFAULT_LANGUAGE];
};
