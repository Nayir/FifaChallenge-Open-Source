<template>
  <div>
    <div class="container">
      <h3 class="uk-text-center uk-margin-large-top">Inscription en un clic</h3>
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
  components: {
    signInWithPopup: require('src/system/authentification/app/components/signInWithPopup.vue')
  }
}
</script>

<style scoped>
</style>
