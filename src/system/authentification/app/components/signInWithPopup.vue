<template>
    <a class="uk-button uk-button-default uk-button-large" v-on:click="signInWithPopup()">
      <i uk-icon="icon: google; ratio: 2" class="uk-margin-small-right"></i>Se connecter avec {{ name }}
    </a>
</template>


<script>
  import firebase from 'firebase'
  export default {
    props: ['provider', 'name'],
    methods: {
      signInWithPopup () {
        // var self = this
        var provider = this.provider
        console.log(provider)
        provider.addScope('https://www.googleapis.com/auth/plus.login')
        firebase.auth().signInWithPopup(provider).then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          console.log(token)
          // The signed-in user info.
          var user = result.user
          console.log(user)
          // Create User
          firebase.database().ref('users/' + user.uid).set({
            uid: user.uid,
            providerData: user.providerData
          })
        }).then(function () {
          console.log('works')
          // self.$router.push({name: 'user.profile'})
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

<style>

</style>
