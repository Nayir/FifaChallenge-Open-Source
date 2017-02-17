// initial state
const state = {
  currentChallenge: {
    challenger: {
      photoURL: '',
      uid: '',
      username: ''
    },
    description: '',
    fcp: '',
    gameConsole: '',
    id: '',
    statu: '',
    type: ''
  }
}

// mutations
const mutations = {
  updateChallenge (state, n) {
    state.currentChallenge = n
  },
  clearChallenge (state) {
    state.currentChallenge = []
  }
}

export default {
  state,
  mutations
}
