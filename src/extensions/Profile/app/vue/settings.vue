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
      <button v-on:click="UpdateData" v-bind:class="[saveClass]" class="uk-button uk-float-right" type="button">
        <span v-if="showSaveButton"> {{ saveState }} </span>
        <spinner v-else></spinner>
       </button>
      <h1 id="idplayer" class="uk-heading-divider">Informations Générales</h1>
      <alert-default-username></alert-default-username>
      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin" :class="{ 'control': true }">
          <label class="uk-form-label" for="username">Nom Public</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="username" type="text" placeholder="Votre nom public" name="username" v-model="profile.username">
              <!-- <span class="uk-text-danger" v-if="usernameValidation">{{ usernameValidation }}</span> -->
            </div>
        </div>
      </form>
      <h1 id="idchallengers" class="uk-heading-divider">Informations de challengers</h1>
      <form class="uk-form-horizontal uk-margin-large">
        <div class="uk-margin">
            <div class="uk-form-label">Consoles Possédés</div>
            <div class="uk-form-controls uk-form-controls-text">
              <label><input class="uk-checkbox" type="checkbox" value="psfour" v-model="profile.gameConsoles"> Playstation 4</label> <br />
              <label><input class="uk-checkbox" type="checkbox" value="xboxone" v-model="profile.gameConsoles"> Xbox One</label>
            </div>
        </div>
        <div class="uk-margin">
            <h2 class="uk-heading-bullet">Playstation Network</h2>
            <label class="uk-form-label" for="form-horizontal-text">ID en ligne</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre ID en ligne Playstation Network" v-model="profile.consoleIds.playstationNetwork">
                <!-- <span class="uk-text-danger" v-if="playstationIdValidation">{{ playstationIdValidation }}</span> -->
            </div>
        </div>
        <div class="uk-margin">
            <h2 class="uk-heading-bullet">Xbox Live</h2>
            <label class="uk-form-label" for="form-horizontal-text">Gamertag</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Votre Gamertag Xbox Live" v-model="profile.consoleIds.gamerTag">
                <!-- <span class="uk-text-danger" v-if="xboxIdValidation">{{ xboxIdValidation }}</span> -->
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import _ from 'lodash'
import dataFifachallenge from 'system/data'
import validations from 'extensions/Profile/app/validations.js'
import alertDefaultUsername from 'extensions/Profile/app/components/alertDefaultUsername.vue'
import notification from 'assets/js/iziToast/index'
import spinner from 'components/spinner.vue'

export default {
  data () {
    return {
      saveState: 'Sauvegarder',
      saveClass: 'uk-button-primary',
      showSaveButton: true,
      profile: dataFifachallenge.profile
    }
  },
  computed: {
    useruid () {
      return this.$store.state.profile.firebaseprofile.uid
    }
  },
  mounted () {
    this.getProfileData()
  },
  methods: {
    getProfileData () {
      var self = this
      firebase.database().ref('/users/' + this.useruid).once('value').then(function (snapshot) {
        self.profile = _.merge(dataFifachallenge.profile, snapshot.val().profile)
      })
    },
    UpdateData () {
      this.showSaveButton = false
      var self = this
      // Get data from vue
      var postData = this.profile
      // Clean data before firebase update
      // TODO Clean child properties too
      var result = _.omitBy(postData, _.isNil)
      // Updates
      var updates = {}
      updates['/users/' + this.useruid + '/profile/'] = result
      // TODO Make it callback
      // https://github.com/uikit/uikit/issues/2345 BUG UIkit.notification('Sauvegardé')
      // Saving to firebase
      firebase.database().ref().update(updates).then(function () {
        // Commit Updates
        self.$store.commit('updateFifachallenge', result)
      }).then(function () {
        // Success IziToast
        setTimeout(function () {
          self.showSaveButton = true
        }, 3000)
        notification.success()
      }).catch(function () {
        // Error IziToast
        notification.error()
      })
    }
  },
  mixins: [validations],
  components: {
    alertDefaultUsername,
    spinner
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

.fc-spinner > * {
    -webkit-animation: uk-spinner-rotate 1.4s linear infinite;
    animation: uk-spinner-rotate 1.4s linear infinite;
}
</style>
