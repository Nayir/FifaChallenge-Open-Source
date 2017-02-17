// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'
import firebase from 'firebase'

Vue.use(Vuex)

Vue.filter('gameconsole', function (value) {
  if (value === 'psfour') {
    value = 'Playstation 4'
    return value
  } else if (value === 'xboxone') {
    value = 'Xbox One'
    return value
  }
})

var config = {
  apiKey: 'AIzaSyDPA8SuipWjuhz1iZ0NfzfNtRPNuk9FH28',
  authDomain: 'fifachallenge-dev.firebaseapp.com',
  databaseURL: 'https://fifachallenge-dev.firebaseio.com',
  storageBucket: 'fifachallenge-dev.appspot.com',
  messagingSenderId: '51908146791'
}

firebase.initializeApp(config)

// state.authentification.isauth initialisation
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // State Login Provider
    store.commit('logged')
    store.commit('updateFirebase', user)
    // State Login FifaChallenge
    firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
      var profileFifachallengedata = []
      profileFifachallengedata['gamerinfo'] = snapshot.val().profile.gamerinfo
      profileFifachallengedata['username'] = snapshot.val().profile.username
      profileFifachallengedata['challenge'] = snapshot.val().challenge
      return profileFifachallengedata
    }).then(function (data) {
      store.commit('updateFifachallenge', data)
      store.commit('updateChallenge', data.challenge)
    })
  } else {
    store.commit('disconnected')
    store.commit('clearAll')
  }

  // Global Navigation Guard for Authentification
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.state.authentification.isauth) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
