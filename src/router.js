import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Company from './views/Company.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
    },
  ],
});
