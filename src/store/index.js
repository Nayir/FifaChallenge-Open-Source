import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import authentification from './modules/authentification'
import profile from './modules/profile'
import challenge from './modules/challenge'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    authentification,
    profile,
    challenge
  },
  strict: debug
})
