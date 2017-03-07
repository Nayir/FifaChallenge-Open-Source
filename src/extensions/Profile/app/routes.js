export const profileRoutes = [
  {
    path: 'profile',
    component: require('./vue/profile.vue'),
    name: 'user.profile'
  },
  {
    path: 'matchs',
    component: require('./vue/matchs.vue'),
    name: 'user.matchs'
  },
  {
    path: 'tournaments',
    component: require('./vue/tournaments.vue'),
    name: 'user.tournaments'
  },
  {
    path: 'settings',
    component: require('./vue/settings.vue'),
    name: 'user.settings'
  }
]
