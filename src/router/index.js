import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {profileRoutes} from 'src/extensions/Profile/app/routes.js'
import {fifachallengeleagueRoutes} from 'src/extensions/FifaChallengeLeague/app/routes.js'
import headerFifachallenge from 'src/system/headers/app/vue/Header.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      components: {
        header: headerFifachallenge,
        content: require('src/system/pages/Home.vue')
      },
      name: 'root'
    },
    {
      path: '/login',
      components: {
        header: headerFifachallenge,
        content: require('src/system/authentification/app/vue/Login.vue')
      },
      name: 'login'
    },
    {
      path: '/registration',
      components: {
        header: headerFifachallenge,
        content: require('src/system/authentification/app/vue/Registration.vue')
      },
      name: 'registration'
    },
    {
      path: '/requestpassword',
      components: {
        header: headerFifachallenge,
        content: require('src/system/authentification/app/vue/RequestPassword.vue')
      },
      name: 'requestpassword'
    },
    {
      path: '/play',
      components: {
        header: headerFifachallenge,
        content: require('system/pages/Play.vue')
      },
      meta: { requiresAuth: true },
      name: 'play'
    },
    {
      path: '/fcl',
      components: {
        header: headerFifachallenge,
        content: require('extensions/FifaChallengeLeague/app/index.vue')
      },
      meta: {
        requiresAuth: true,
        requiresUsername: true
      },
      name: 'fifachallengeleague',
      children: fifachallengeleagueRoutes
    },
    {
      path: '/user',
      components: {
        header: headerFifachallenge,
        content: require('extensions/FifaChallengeLeague/app/index.vue')
      },
      meta: { requiresAuth: true },
      name: 'user',
      children: profileRoutes
    },
    {
      path: '*',
      components: {
        header: headerFifachallenge,
        content: require('src/system/pages/Home.vue')
      }
    }
  ]
})
