<template>
  <div class="uk-form uk-form-stacked">
      <h2 class="uk-text-center">Sign in to your account</h2>
      <div class="pk-system-messages"></div>
      <div class="uk-form-row">
          <!-- TODO Required and AutoFocus -->
          <input class="uk-width-1-1" type="text" v-model="email" placeholder="Email" required="" autofocus="">
      </div>
      <div class="uk-form-row">
          <!-- TODO Required -->
          <input class="uk-width-1-1" type="password" v-model="password" placeholder="Password">
      </div>
      <p class="uk-form-row uk-margin-small-bottom">
          <button class="uk-button uk-button-primary uk-button-large uk-width-1-1" v-on:click="signInWithEmailAndPassword()">Sign in</button>
      </p>
      <ul class="uk-list uk-flex uk-flex-between uk-text-small uk-margin-bottom-remove">
        <li>
            <label><input type="checkbox" name="remember_me"> Remember Me</label>
        </li>
        <li class="uk-text-right">
            <a class="uk-link" href="/user/requestpassword">Request Password</a>
        </li>
      </ul>
  </div>
</template>


<script>
  import firebase from 'firebase'
  export default {
    data () {
      return {
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
      }
    }
  }
</script>

<style>

</style>
