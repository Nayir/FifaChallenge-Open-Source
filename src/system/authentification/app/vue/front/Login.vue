<template>
  <div>
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
  beforeRouteEnter (to, from, next) {
    console.log('enter login')
    next(true)
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave login')
    next(true)
  },
  components: {
    // signInWithEmailAndPassword: require('./../../components/signInWithEmailAndPassword.vue'),
    signInWithPopup: require('./../../components/signInWithPopup.vue')
  }
}
</script>

<style scoped>
</style>
