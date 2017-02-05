import headeruser from 'src/system/HeaderUser.vue'

export const profileRoutes = [
  {
    path: 'profile',
    components: {
      header: headeruser,
      content: require('./vue/Profile.vue')
    },
    name: 'user.profile'
  },
  {
    path: 'matchs',
    components: {
      header: headeruser,
      content: require('./vue/Matchs.vue')
    },
    name: 'user.matchs'
  },
  {
    path: 'tournaments',
    components: {
      header: headeruser,
      content: require('./vue/Tournaments.vue')
    },
    name: 'user.tournaments'
  },
  {
    path: 'settings',
    components: {
      header: headeruser,
      content: require('./vue/Settings.vue')
    },
    name: 'user.settings'
  }
]
