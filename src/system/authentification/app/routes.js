import headerfront from '../../HeaderFront.vue'
import headeruser from '../../HeaderUser.vue'

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
    component: require('./vue/front/Registration.vue'),
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
    path: 'settings',
    components: {
      header: headeruser,
      content: require('./vue/admin/Settings.vue')
    },
    name: 'user.settings'
  }
]
