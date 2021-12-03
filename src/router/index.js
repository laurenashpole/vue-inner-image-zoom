import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demos',
    name: 'Demos',
    component: () => import(/* webpackChunkName: "demos" */ '../views/Demos.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import(/* webpackChunkName: "docs" */ '../views/Docs.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "support" */ '../views/Support.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkExactActiveClass: 'nav__link--active'
});

export default router;
