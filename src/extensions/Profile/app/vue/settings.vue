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
      <button v-on:click="UpdateData" v-bind:class="[saveClass]" class="uk-button uk-float-right" type="button" v-show="showSaveButton"> {{ saveState }} </button>
      <h1 id="idplayer" class="uk-heading-divider">Informations Générales</h1>
      <div class="uk-alert-danger" uk-alert v-if="!profile.username">
        <a class="uk-alert-close" uk-close></a>
        <p>Si vide, votre nom public sera votre nom de compte Google.</p>
      </div>
      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Nom Public</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="" v-model="profile.username">
            </div>
        </div>
      </form>

      <h1 id="idchallengers" class="uk-heading-divider">Informations de challengers</h1>

      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin">
            <div class="uk-form-label">Consoles Possédés</div>
            <div class="uk-form-controls uk-form-controls-text">
              <label><input class="uk-checkbox" type="checkbox" v-model="profile.gamerinfo.playstationfour.owned" v-bind:true-value="true" v-bind:false-value="false"> Playstation 4</label> <br />
              <label><input class="uk-checkbox" type="checkbox" v-model="profile.gamerinfo.xboxone.owned" v-bind:true-value="true" v-bind:false-value="false"> Xbox One</label>
            </div>
        </div>
        <div class="uk-margin" v-show="profile.gamerinfo.playstationfour.owned">
            <h2 class="uk-heading-bullet">Playstation Network</h2>
            <label class="uk-form-label" for="form-horizontal-text">ID en ligne</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre ID en ligne Playstation Network" v-model="profile.gamerinfo.playstationfour.id">
            </div>
        </div>
        <div class="uk-margin" v-show="profile.gamerinfo.xboxone.owned">
            <h2 class="uk-heading-bullet">Xbox Live</h2>
            <label class="uk-form-label" for="form-horizontal-text">Gamertag</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre Gamertag Xbox Live" v-model="profile.gamerinfo.xboxone.id">
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import profileMixins from 'extensions/Profile/app/mixins.js'
// import UIkit from 'uikit'

export default {
  data () {
    return {
      user: '',
      log: '',
      saveState: 'Sauvegarder',
      saveClass: 'uk-button-primary',
      showSaveButton: false,
      profile: {
        username: '',
        gamerinfo: {
          playstationfour: {
            owned: false,
            id: ''
          },
          xboxone: {
            owned: false,
            id: ''
          }
        }
      }
    }
  },
  beforeMount () {
    this.firebaseCheckLogged(true, this.firebaseDatabaseGetProfile)
  },
  watch: {
    // TODO Change this code for matching with firebase > Safer and better
    // Whenever profile changes, this function will run
    'profile.username': function () {
      this.ResetSaveButton()
    },
    'profile.gamerinfo.playstationfour.owned': function () {
      this.ResetSaveButton()
    },
    'profile.gamerinfo.playstationfour.id': function () {
      this.ResetSaveButton()
    },
    'profile.gamerinfo.xbox.owned': function () {
      this.ResetSaveButton()
    },
    'profile.gamerinfo.xbox.id': function () {
      this.ResetSaveButton()
    }
  },
  mixins: [profileMixins],
  methods: {
    UpdateData () {
      // Get data from vue
      var postData = this.profile
      var uid = this.user.uid
      // Updates
      var updates = {}
      updates['/users/' + uid + '/profile/'] = postData
      // TODO Make it callback
      // https://github.com/uikit/uikit/issues/2345 BUG UIkit.notification('Sauvegardé')
      // Saving to firebase
      firebase.database().ref().update(updates)
      this.saveState = 'Sauvegardé'
      this.saveClass = 'uk-button-secondary'
      console.log('sauvegardé')
    },
    ResetSaveButton () {
      this.saveState = 'Sauvegarder'
      this.saveClass = 'uk-button-primary'
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
