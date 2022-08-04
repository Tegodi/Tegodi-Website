import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import router from './router';

const createVue = async () => {
  const def = await fetch('/data/lang/de.json', {
    cache: 'no-cache',
  });
  const enf = await fetch('/data/lang/en.json', {
    cache: 'no-cache',
  });

  const de = await def.json();
  const en = await enf.json();

  const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
      de,
      en,
    },
  });
  const app = createApp(App)
    .use(router)
    .use(i18n);

  app.mount('#app');
};

createVue();
