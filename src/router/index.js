import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {profileRoutes} from 'src/extensions/Profile/app/routes.js'
import {fifachallengeleagueRoutes} from 'src/extensions/FifaChallengeLeague/app/routes.js'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: require('src/system/pages/Home.vue'),
      name: 'root'
    },
    {
      path: '/login',
      component: require('src/system/authentification/app/vue/Login.vue'),
      name: 'login'
    },
    {
      path: '/registration',
      component: require('src/system/authentification/app/vue/Registration.vue'),
      name: 'registration'
    },
    {
      path: '/requestpassword',
      component: require('src/system/authentification/app/vue/RequestPassword.vue'),
      name: 'requestpassword'
    },
    {
      path: '/play',
      component: require('system/pages/Play.vue'),
      name: 'play'
    },
    {
      path: '/fcl',
      component: require('extensions/FifaChallengeLeague/app/index.vue'),
      name: 'fifachallengeleague',
      children: fifachallengeleagueRoutes
    },
    {
      path: '/user',
      component: require('extensions/FifaChallengeLeague/app/index.vue'),
      name: 'user',
      children: profileRoutes
    },
    {
      path: '*',
      component: require('system/pages/Home.vue')
    }
  ]
})
