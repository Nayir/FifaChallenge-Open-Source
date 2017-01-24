<template>
  <div>
    <div id="tm-hero" class="tm-hero uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle tm-height-viewport">
        <div class="pk-user pk-user-reset uk-form uk-form-stacked uk-width-medium-1-2 uk-width-large-1-3 uk-container" action="/user/resetpassword/request" method="post">
          <h1 class="uk-h2 uk-text-center">Forgot Password</h1>
          <p>Please enter your email address. You will receive a link to create a new password via email.</p>
          <div class="uk-form-row">
            <input class="uk-width-1-1" type="text" name="email" value="" placeholder="Email" required="" autofocus="">
          </div>
          <p class="uk-form-row">
            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1" type="submit">Request password</button>
          </p>
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
      email: '',
      password: ''
    }
  },
  methods: {
    signInWithEmailAndPassword () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (result) {
        console.log(result)
      }).catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        // ...
      })
    },
    signInWithPopup () {
      var self = this
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/plus.login')
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        console.log(token)
        // The signed-in user info.
        var user = result.user
        console.log(user)
        // ...
      }).then(function () {
        self.$router.push({name: 'user.profile'})
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        // The email of the user's account used.
        var email = error.email
        console.log(email)
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(credential)
        // ...
      })
    }
  }
}
</script>

<style scoped>
</style>
