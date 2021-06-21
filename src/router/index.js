import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue'),
  },
  {
    path: '/bikePage/:id',
    name: 'BikePage',
    component: () => import(/* webpackChunkName: "about" */ '../components/BikePage.vue'),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
