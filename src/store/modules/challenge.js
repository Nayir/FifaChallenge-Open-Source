// initial state
const state = {
  challenge: {
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
    state.challenge = n
  },
  clearChallenge (state) {
    state.challenge = false
  }
}

export default {
  state,
  mutations
}
