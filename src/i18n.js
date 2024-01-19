import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from 'translations/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: "en",
    debug: true,
  });

export default i18n;
