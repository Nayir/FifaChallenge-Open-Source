// initial state
const state = {
  isLoaded: false
}

// mutations
const mutations = {
  Loaded (state) {
    state.isLoaded = true
  },
  onLoad (state) {
    state.isLoaded = false
  }
}

export default {
  state,
  mutations
}
