import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'nav__link--active'
});

export default router;
