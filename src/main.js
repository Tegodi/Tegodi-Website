import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import router from './router';

const createVue = async () => {
  const def = await fetch('/data/lang/de.json');
  const de = await def.json();

  const enf = await fetch('/data/lang/en.json');
  const en = await enf.json();

  console.log(de, en);

  const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
      de,
      en,
    },
  });

  createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
};

createVue();
