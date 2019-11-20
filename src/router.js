import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Search from './views/Search.vue';

import isAuthenticated from '@/utils/is-authenticated';

Vue.use(Router);

const router = new Router({
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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!isAuthenticated() && to.path !== '/login') {
    return next('/login');
  } if (isAuthenticated() && to.name === 'Login') {
    return next('/');
  }
  return next();
});

export default router;
