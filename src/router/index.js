import { createRouter, createWebHashHistory } from 'vue-router';

import StellenDetails from '../components/urls/stellen/StellenDetails.vue';
import Stellen from '../components/urls/stellen/Stellen.vue';
import Publikationen from '../components/urls/publications/Publikationen.vue';
import Landingpage from '../components/urls/landing/Landingpage.vue';
import Projektaufbau from '../components/urls/projektaufbau/Projektaufbau.vue';
import Helpdesk from '../components/urls/helpdesk/Helpdesk.vue';
import Datenschutz from '../components/urls/datenschutz/Datenschutz.vue';
import Impressum from '../components/urls/impressum/Impressum.vue';

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
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
    meta: { title: 'Impressum' },
  },
  {
    path: '/publikationen',
    name: 'Publikationen',
    component: Publikationen,
    meta: { title: 'Publikationen' },
  },
  {
    path: '/stellen',
    name: 'Stellen',
    component: Stellen,
    meta: { title: 'Stellen' },
  },
  {
    path: '/stellen/:imageName',
    name: 'Details',
    component: StellenDetails,
    meta: { title: 'Stellen Details' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
