// initial state
const state = {
  firebaseprofile: {
    displayName: '',
    photoURL: '',
    email: '',
    uid: ''
  },
  fifachallengeprofile: {
    username: '',
    gamerinfo: {
      playstationfour: {
        id: '',
        owned: false
      },
      xboxone: {
        id: '',
        owned: false
      }
    }
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
    state.fifachallengeprofile.username = n.username
    state.fifachallengeprofile.gamerinfo.playstationfour.id = n.gamerinfo.playstationfour.id
    state.fifachallengeprofile.gamerinfo.playstationfour.owned = n.gamerinfo.playstationfour.owned
    state.fifachallengeprofile.gamerinfo.xboxone.id = n.gamerinfo.xboxone.id
    state.fifachallengeprofile.gamerinfo.xboxone.owned = n.gamerinfo.xboxone.owned
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
