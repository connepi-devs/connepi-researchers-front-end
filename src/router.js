import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Search from './views/Search.vue';
import Publication from './views/Publication.vue';
import About from './views/About.vue';
import Downloads from './views/Downloads.vue';
import CommunitiesAndCollections from './views/CommunitiesAndCollections.vue';

import isAuthenticated from '@/utils/is-authenticated';

Vue.use(Router);

// const authGuard = ((to, from, next) => {
//   if (!isAuthenticated() && to.path !== '/login') {
//     return next('/login');
//   } if (isAuthenticated() && to.name === 'Login') {
//     return next('/');
//   }
//   return next();
// });

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: 'Search' },
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
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/publication/:id',
      props: true,
      name: 'Publication',
      component: Publication,
    },
    {
      path: '/communities-and-collections',
      name: 'CommunitiesAndCollections',
      component: CommunitiesAndCollections,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (isAuthenticated() && to.name === 'Login') {
    return next('/');
  }
  return next();
});

export default router;
