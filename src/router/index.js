import { createRouter, createWebHashHistory } from 'vue-router';

import Landingpage from '../components/urls/landing/Landingpage.vue';

const routes = [
  {
    path: '/',
    name: 'TEgoDI',
    component: Landingpage,
    meta: { title: 'Tegodi' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
