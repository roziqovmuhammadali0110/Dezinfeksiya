import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LaungageDetector from "i18next-browser-languagedetector";
import uzTranslate from "../public/locales/uz.json";
import enTranslate from "../public/locales/en.json";
import ruTranslate from "../public/locales/ru.json";

const laungage = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  //Tilni aniqlab berish
  .use(LaungageDetector)
  // Bog'lash
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: laungage,
    debug: true,
    resources: {
      uz: { translation: uzTranslate },
      en: { translation: enTranslate },
      ru: { translation: ruTranslate }
    }
  });

export default i18n;
