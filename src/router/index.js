import { createRouter, createWebHashHistory } from 'vue-router';

import Landingpage from '../components/urls/landing/Landingpage.vue';
import Projektaufbau from '../components/urls/projektaufbau/Projektaufbau.vue';

const routes = [
  {
    path: '/',
    name: 'TEgoDI',
    component: Landingpage,
    meta: { title: 'Tegodi' },
  },
  {
    path: '/projektaufbau',
    name: 'Projektaufbau',
    component: Projektaufbau,
    meta: { title: 'Projektaufbau' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
