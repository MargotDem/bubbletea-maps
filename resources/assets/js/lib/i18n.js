import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(XHR)
  // .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    initImmediate: true,
    load: 'all',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      resGetPath: 'locales/{{lng}}/{{ns}}.json'
    },
    getAsync: false,
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n
