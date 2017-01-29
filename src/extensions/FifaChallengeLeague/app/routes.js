import headeruser from 'src/system/HeaderUser.vue'

export const fifachallengeleagueRoutes = [
  {
    path: 'room',
    components: {
      header: headeruser,
      content: require('./vue/front/Room.vue')
    },
    name: 'fcl.room'
  },
  {
    path: 'rank',
    components: {
      header: headeruser,
      content: require('./vue/front/Room.vue')
    },
    name: 'fcl.rank'
  },
  {
    path: 'rules',
    components: {
      header: headeruser,
      content: require('./vue/front/Room.vue')
    },
    name: 'fcl.rules'
  },
  {
    path: 'invite',
    components: {
      header: headeruser,
      content: require('./vue/front/Room.vue')
    },
    name: 'fcl.invite'
  }
]
