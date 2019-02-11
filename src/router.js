import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Projects from '@/components/Projects'
import NotFound from '@/components/supersecret/NotFound'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //},
    {
      path: '/projects/',
      name: 'projects',
      component: Projects
    },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ],
});
