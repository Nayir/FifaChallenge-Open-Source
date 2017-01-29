import headerfront from 'src/system/HeaderFront.vue'
import headeruser from 'src/system/HeaderUser.vue'

export const authentificationRoutes = [
  {
    path: 'login',
    components: {
      header: headerfront,
      content: require('./vue/front/Login.vue')
    },
    name: 'user.login'
  },
  {
    path: 'registration',
    components: {
      header: headeruser,
      content: require('./vue/front/Registration.vue')
    },
    name: 'user.registration'
  },
  {
    path: 'requestpassword',
    component: require('./vue/front/RequestPassword.vue'),
    name: 'user.requestpassword'
  },
  {
    path: 'profile',
    components: {
      header: headeruser,
      content: require('./vue/admin/Profile.vue')
    },
    name: 'user.profile'
  },
  {
    path: 'matchs',
    components: {
      header: headeruser,
      content: require('./vue/admin/Matchs.vue')
    },
    name: 'user.matchs'
  },
  {
    path: 'tournaments',
    components: {
      header: headeruser,
      content: require('./vue/admin/Tournaments.vue')
    },
    name: 'user.tournaments'
  },
  {
    path: 'settings',
    components: {
      header: headeruser,
      content: require('./vue/admin/Settings.vue')
    },
    name: 'user.settings'
  }
]
