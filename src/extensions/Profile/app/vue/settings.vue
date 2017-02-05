<template>
  <div>
    <div class="uk-container uk-margin-large-bottom">
      <ul class="uk-flex-center uk-margin-large-top router-tab">
          <router-link tag="li" :to="{ name: 'user.profile' }">
            <a> Profil </a>
          </router-link>
          <router-link tag="li" :to="{ name: 'user.matchs' }">
            <a> Matchs </a>
          </router-link>
          <router-link tag="li" :to="{ name: 'user.tournaments' }">
            <a> Tournois </a>
          </router-link>
          <router-link tag="li" :to="{ name: 'user.settings' }">
            <a> Paramètres </a>
          </router-link>
      </ul>
      <h1 id="idplayer" class="uk-heading-divider">Informations Générales</h1>
      <div class="uk-alert-danger" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Si vide, votre nom public sera votre nom de compte Google.</p>
      </div>
      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Nom Public</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="">
            </div>
        </div>
      </form>

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
