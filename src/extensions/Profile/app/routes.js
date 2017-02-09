export const profileRoutes = [
  {
    path: 'profile',
    component: require('./vue/Profile.vue'),
    name: 'user.profile'
  },
  {
    path: 'matchs',
    component: require('./vue/Matchs.vue'),
    name: 'user.matchs'
  },
  {
    path: 'tournaments',
    component: require('./vue/Tournaments.vue'),
    name: 'user.tournaments'
  },
  {
    path: 'settings',
    component: require('./vue/Settings.vue'),
    name: 'user.settings'
  }
]
