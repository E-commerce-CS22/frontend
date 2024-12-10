import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Arabic from "./Arabic.json";
import English from "./English.json";

const langDetectorOptions = {
  // order and from where user language should be detected
  order: ["cookie", "localStorage", "navigator"],

  // keys or params to lookup language from
  lookupCookie: "locale",
  lookupLocalStorage: "locale",

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        Arabic,
      },
      en: {
        English,
      },
    },
    supportedLngs: ["en", "ar"],
    saveMissing: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    detection: langDetectorOptions,
    load: "languageOnly",
    returnObjects: true,
    keySeparator: false,
    cleanCode: true,
  });

export default i18next;
