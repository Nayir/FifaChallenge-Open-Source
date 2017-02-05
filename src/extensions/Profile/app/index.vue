<template>
  <div>
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  beforeCreate () {
    var self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.user = user
        self.log = true
      } else {
        self.$router.push({ name: 'user.login' })
      }
    })
  }
}
</script>

<style>
</style>
