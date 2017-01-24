<template>
  <div>
    <div class="uk-container">
      <ul class="uk-flex-center uk-margin-large-top" uk-tab>
          <router-link tag="li" :to="{ name: 'user.profile' }">
            <a> Profile </a>
          </router-link>
          <router-link tag="li" :to="{ name: user.profile }">
            <a> Profile </a>
          </router-link>
          <router-link tag="li" :to="{ name: user.profile }">
            <a> Profile </a>
          </router-link>
          <router-link tag="li" :to="{ name: 'user.settings' }">
            <a> Paramètres </a>
          </router-link>
      </ul>
      <h1 id="idchallengers" class="uk-heading-divider">Informations de challengers</h1>

      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin">
            <div class="uk-form-label">Consoles Possédés</div>
            <div class="uk-form-controls uk-form-controls-text">
              <label><input class="uk-checkbox" type="checkbox"> Playstation 4</label> <br />
              <label><input class="uk-checkbox" type="checkbox"> Xbox One</label>
            </div>
        </div>
        <div class="uk-margin">
            <h2 class="uk-heading-bullet">Playstation Network</h2>
            <label class="uk-form-label" for="form-horizontal-text">ID en ligne</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre ID en ligne Playstation Network">
            </div>
        </div>
        <div class="uk-margin">
            <h2 class="uk-heading-bullet">Xbox Live</h2>
            <label class="uk-form-label" for="form-horizontal-text">Gamertag</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre Gamertag Xbox Live">
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: '',
      log: ''
    }
  },
  mounted () {
    var self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.user = user
        self.log = true
      } else {
        self.user = []
        self.log = false
      }
    })
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter settings')
    next(true)
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave settings')
    next(true)
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
.uk-tab > .uk-active > a {
  color: #3498DB;
}

.uk-tab > .uk-active > a {
  border-bottom: 5px solid #3498DB;
}

.uk-tab::before {
  border-bottom: none;
}
</style>
