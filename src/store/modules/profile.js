import _ from 'lodash'

// initial state
const state = {
  firebaseprofile: {
    displayName: '',
    photoURL: '',
    email: '',
    uid: ''
  },
  fifachallengeprofile: {
    gameConsoles: [],
    consoleIds: {
      playstationNetwork: '',
      gamerTag: ''
    },
    username: ''
  }
}

// mutations
const mutations = {
  updateFirebase (state, n) {
    state.firebaseprofile.displayName = n.displayName
    state.firebaseprofile.photoURL = n.photoURL
    state.firebaseprofile.email = n.email
    state.firebaseprofile.uid = n.uid
  },
  updateFifachallenge (state, n) {
    state.fifachallengeprofile = _.assign(state.fifachallengeprofile, n)
  },
  clearAll (state) {
    state.firebaseprofile = []
    state.fifachallengeprofile = []
  }
}

export default {
  state,
  mutations
}
