import { createI18n } from 'vue-i18n';
import en from './en';
import de from './de';

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages: {
    de,
    en,
  },
});

export default i18n;
