<template>
    <a class="uk-button uk-button-default uk-button-large" v-on:click="signInWithPopup()">
      Se connecter avec {{ name }}
    </a>
</template>


<script>
  import firebase from 'firebase'
  export default {
    props: ['provider', 'name'],
    data () {
      return {
        uid: '',
        providerData: []
      }
    },
    methods: {
      createUser () {
        var self = this
        var creationDate = Date.now()
        firebase.database().ref('users/' + this.uid).set({
          uid: self.uid,
          created: creationDate,
          last_login: creationDate,
          providerData: self.providerData[0],
          profile: {
            username: ''
            // TODO Import from external mixin
          }
        }).then(function () {
          // TODO Find another way to solve the asynchronous problem of onAuthStateChanged run before data updated
          window.location.reload()
        })
      },
      updateUser () {
        var lastLoginDate = Date.now()
        firebase.database().ref('users/' + this.uid).update({
          last_login: lastLoginDate
        }).then(function () {
          // TODO Find another way to solve the asynchronous problem of onAuthStateChanged run before data updated
          window.location.reload()
        })
      },
      userFirstTimeCallback (userId, exists) {
        var self = this
        if (exists) {
          self.updateUser()
        } else {
          self.createUser()
        }
      },
      checkForFirstTime (userId) {
        var self = this
        firebase.database().ref('/users/' + userId).once('value', function (snapshot) {
          var exists = (snapshot.val() !== null)
          self.userFirstTimeCallback(userId, exists)
        })
      },
      signInWithPopup () {
        var self = this
        var provider = this.provider
        provider.addScope('https://www.googleapis.com/auth/plus.login')
        firebase.auth().signInWithPopup(provider).then(function (result) {
          self.uid = result.user.uid
          self.providerData = result.user.providerData
        }).then(function () {
          self.checkForFirstTime(self.uid)
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
        })
      }
    }

  }
</script>

<style>

</style>
