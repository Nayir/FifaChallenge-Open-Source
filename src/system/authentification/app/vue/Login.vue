<template>
  <div>
    <header-front></header-front>
    <div class="uk-container uk-text-center uk-margin-xlarge-top">
      <div class="uk-card">
        <sign-in-with-popup :provider="googleProvider" name="Google"></sign-in-with-popup>
        <p class="uk-margin-large-top uk-text-center">Pas encore de compte ? <a class="uk-link" href="/user/registration">Inscription ici</a></p>
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
  components: {
    signInWithPopup: require('src/system/authentification/app/components/signInWithPopup.vue'),
    headerFront: require('src/system/headerFront.vue')
  }
}
</script>

<style scoped>
</style>
