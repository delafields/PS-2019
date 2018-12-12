import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import ProjectsHome from '@/components/ProjectsHome'
import Project from '@/components/Project'
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
      name: 'projects-home',
      component: ProjectsHome
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: Project
    },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ],
});
