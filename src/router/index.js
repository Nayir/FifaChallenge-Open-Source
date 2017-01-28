import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {authentificationRoutes} from '../system/authentification/app/routes.js'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: require('../system/pages/Home.vue'),
      name: 'root'
    },
    {
      path: '/play',
      component: require('../system/pages/Play.vue'),
      name: 'play'
    },
    {
      path: '/user',
      component: require('../system/authentification/app/index.vue'),
      name: 'user',
      children: authentificationRoutes
    },
    {
      path: '*',
      component: require('../system/pages/Home.vue')
    }
  ]
})
