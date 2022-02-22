import { createRouter, createWebHashHistory } from 'vue-router';

import About from '../components/about/About.vue';
import Jobs from '../components/job/Jobs.vue';
import Contact from '../components/contact/Contact.vue';
import Publikationen from '../components/publications/Publikationen.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
    meta: { title: 'About us' },
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    meta: { title: 'Jobs' },
  },
  {
    path: '/publication',
    name: 'Publikationen',
    component: Publikationen,
    meta: { title: 'Publikationen' },
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: Contact,
    meta: { title: 'Kontakt' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
