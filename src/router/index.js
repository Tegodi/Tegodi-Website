import { createRouter, createWebHashHistory } from 'vue-router';

import Landingpage from '../components/urls/landing/Landingpage.vue';
import Projektaufbau from '../components/urls/projektaufbau/Projektaufbau.vue';
import Helpdesk from '../components/urls/helpdesk/Helpdesk.vue';
import Datenschutz from '../components/urls/datenschutz/Datenschutz.vue';

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
  {
    path: '/helpdesk',
    name: 'Helpdesk',
    component: Helpdesk,
    meta: { title: 'Helpdesk' },
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz,
    meta: { title: 'Datenschutz' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
