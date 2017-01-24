// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDPA8SuipWjuhz1iZ0NfzfNtRPNuk9FH28',
  authDomain: 'fifachallenge-dev.firebaseapp.com',
  databaseURL: 'https://fifachallenge-dev.firebaseio.com',
  storageBucket: 'fifachallenge-dev.appspot.com',
  messagingSenderId: '51908146791'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
