import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";
import it from "./it.json";
import fr from "./fr.json";
import de from "./de.json";
import jp from "./jp.json";
import ch from "./ch.json";

const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
  it: { translation: it },
  fr: { translation: fr },
  de: { translation: de },
  jp: { translation: jp },
  ch: { translation: ch },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
