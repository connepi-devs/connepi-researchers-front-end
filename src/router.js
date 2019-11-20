import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: 'Dashboard' },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
