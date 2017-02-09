// initial state
const state = {
  isauth: false
}

// mutations
const mutations = {
  logged (state) {
    state.isauth = true
  },
  disconnected (state) {
    state.isauth = false
  }
}

export default {
  state,
  mutations
}
