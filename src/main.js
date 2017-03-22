// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'
import firebase from 'firebase'
import dataFifachallenge from 'system/data'

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

// state.authentification.isauth initialisation
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // State Login Provider
    store.commit('logged')
    store.commit('updateFirebase', user)
    // State Login FifaChallenge
    firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
      // Set profileData
      var profileData = []
      profileData['gameConsoles'] = (snapshot.val().profile && snapshot.val().profile.gameConsoles) ? snapshot.val().profile.gameConsoles : dataFifachallenge.profile.gameConsoles
      profileData['consoleIds'] = (snapshot.val().profile && snapshot.val().profile.consoleIds) ? snapshot.val().profile.consoleIds : dataFifachallenge.profile.consoleIds
      profileData['username'] = (snapshot.val().profile && snapshot.val().profile.username) ? snapshot.val().profile.username : dataFifachallenge.profile.username
      // Set challengeData
      var challengeData = snapshot.val().challenge ? snapshot.val().challenge : false
      // Set the Object for promise
      var data = {
        profileData,
        challengeData,
        user
      }
      return data
    }).then(function (data) {
      store.commit('updateFifachallenge', data.profileData)
      store.commit('updateChallenge', data.challengeData)
      store.commit('Loaded')

      // Check User Presence
      var amOnline = firebase.database().ref('.info/connected')
      var userRef = firebase.database().ref('/presence/' + user.uid)

      amOnline.on('value', function (snapshot) {
        if (snapshot.val()) {
          // Check User Online or Offline
          userRef.onDisconnect().set(false)
          userRef.set(true)
          console.log(store.state.challenge.challenge)
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
  } else {
    store.commit('disconnected')
    store.commit('clearAll')
    store.commit('Loaded')

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      render: h => h(App)
    })
  }
})
