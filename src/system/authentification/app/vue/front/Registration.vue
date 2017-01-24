<template>
  <div>
    <div id="tm-hero" class="tm-hero uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle tm-height-viewport">

    <div class="uk-container">


<div id="user-registration" class="tm-panel-small uk-form uk-form-stacked">

    <h1 class="uk-h2 uk-text-center">You are one step away from taking Pagekit for a test drive.</h1>

    <div class="uk-alert uk-alert-danger" style="display: none;"></div>

    <div class="uk-form-row">
        <input class="uk-width-1-1" type="text" v-model="user.username" placeholder="Username">
        <p class="uk-form-help-block uk-text-danger" style="display: none;">Username is invalid.</p>
    </div>

    <div class="uk-form-row">
        <input class="uk-width-1-1" type="text" v-model="user.name" placeholder="Name">
        <p class="uk-form-help-block uk-text-danger" style="display: none;">Name cannot be blank.</p>
    </div>

    <div class="uk-form-row">
        <input class="uk-width-1-1" type="email" v-model="user.email" placeholder="Email">
        <p class="uk-form-help-block uk-text-danger" style="display: none;">Email address is invalid.</p>
    </div>

    <div class="uk-form-row">
        <div class="uk-form-password uk-width-1-1">
            <input class="uk-width-1-1" type="password" v-model="user.password" placeholder="Password">
            <a href="" class="uk-form-password-toggle" tabindex="-1" data-uk-form-password="{ lblShow: 'Show', lblHide: 'Hide' }">Show</a>
        </div>
        <p class="uk-form-help-block uk-text-danger" style="display: none;">Password must be 6 characters or longer.</p>
    </div>

    <p class="uk-form-row">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1" v-on:click="createUserWithEmailAndPassword()">Get it now</button>
    </p>

    <p class="uk-text-center">Already have an account? <a class="uk-link" href="/user/login">Login!</a></p>

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
      user: {
        username: '',
        name: '',
        email: '',
        password: ''
      }

    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter registration')
    next(true)
  },
  methods: {
    createUserWithEmailAndPassword () {
      var self = this
      var user = this.user
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
        var userId = firebase.database().ref('users/' + userId).push().key
        firebase.database().ref('users/' + userId).set({
          username: user.username,
          email: user.email,
          name: user.name
        }).then(function () {
          self.$router.push('root')
        })
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        // ...
      })
    }
  }
}
</script>

<style scoped>
</style>
