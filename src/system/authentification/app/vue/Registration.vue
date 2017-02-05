<template>
  <div>
    <header-front></header-front>
    <div class="container">
      <h3 class="uk-text-center uk-margin-large-top">Inscription en un clic</h1>
      <div class="uk-container uk-text-center uk-margin-xlarge-top">
        <div class="uk-card">
          <sign-in-with-popup :provider="googleProvider" name="Google"></sign-in-with-popup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      msg: 'Login',
      googleProvider: '',
      user: ''
    }
  },
  mounted () {
    this.googleProvider = new firebase.auth.GoogleAuthProvider()
  },
  beforeRouteEnter (to, from, next) {
    next(true)
  },
  beforeRouteLeave (to, from, next) {
    next(true)
  },
  components: {
    signInWithPopup: require('src/system/authentification/app/components/signInWithPopup.vue'),
    headerFront: require('src/system/headerFront.vue')
  }
}
</script>

<style scoped>
</style>
