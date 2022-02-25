import { createRouter, createWebHashHistory } from 'vue-router';

import About from '../components/about/About.vue';
import Jobs from '../components/job/Jobs.vue';
import Contact from '../components/contact/Contact.vue';
import Publikationen from '../components/publications/Publikationen.vue';
import ProdukteServices from '../components/about/subpages/ProdukteServices.vue';
import ProjektaufbauTeilprojekte from '../components/about/subpages/ProjektaufbauTeilprojekte.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
    meta: { title: 'About us' },
  },
  {
    path: '/about/produkteservices',
    name: 'Produkte und Services',
    component: ProdukteServices,
    meta: { title: 'Produkte und Services' },
  },
  {
    path: '/about/projektaufbau',
    name: 'Projektaufbau und Teilprojekte',
    component: ProjektaufbauTeilprojekte,
    meta: { title: 'Projektaufbau und Teilprojekte' },
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
