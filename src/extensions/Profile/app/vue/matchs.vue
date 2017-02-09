<template>
  <div>
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
        <div>
          <alert-settings-missing></alert-settings-missing>
          <div class="uk-overflow-auto">
            <table class="uk-table uk-table-hover uk-table-middle">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">ID</th>
                        <th class="uk-width-1-4">Adversaire</th>
                        <th class="uk-table-small uk-text-center">Score</th>
                        <th class="uk-table">Tournoi</th>
                        <th class="uk-table-small uk-text-center">Résumé</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>01</td>
                      <td class="uk-text-truncate">
                        <a class="uk-link-reset" href="#">
                          <img class="uk-preserve-width uk-border-circle" src="https://pbs.twimg.com/profile_images/824408352147075072/77M4Sg6n_400x400.jpg" width="40" alt="adversaire 1">
                          Adversaire 1
                        </a>
                      </td>
                      <td class="uk-text-center">
                          3 - 1
                      </td>
                      <td class="uk-text-truncate">FifaChallenge League - Division 3</td>
                      <td><button class="uk-button uk-button-primary" type="button">Détails</button></td>
                  </tr>
                  <tr>
                      <td>02</td>
                      <td class="uk-text-truncate">
                        <a class="uk-link-reset" href="#">
                          <img class="uk-preserve-width uk-border-circle" src="https://pbs.twimg.com/profile_images/824408352147075072/77M4Sg6n_400x400.jpg" width="40" alt="adversaire 1">
                          Adversaire avec un nom trop long
                        </a>
                      </td>
                      <td class="uk-text-center">
                          4 - 1
                      </td>
                      <td class="uk-text-truncate">FifaChallenge League - Division 3</td>
                      <td><button class="uk-button uk-button-primary" type="button">Détails</button></td>
                  </tr>
                  <tr>
                      <td>03</td>
                      <td class="uk-text-truncate">
                        <a class="uk-link-reset" href="#">
                          <img class="uk-preserve-width uk-border-circle" src="https://pbs.twimg.com/profile_images/824408352147075072/77M4Sg6n_400x400.jpg" width="40" alt="adversaire 1">
                          Adversaire 3
                        </a>
                      </td>
                      <td class="uk-text-center">
                          0 - 1
                      </td>
                      <td class="uk-text-truncate">FifaChallenge League - Division 3</td>
                      <td><button class="uk-button uk-button-primary" type="button">Détails</button></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import alertSettingsMissing from 'extensions/Profile/app/components/alertSettingsMissing.vue'
export default {
  data () {
    return {
      user: 'hello',
      log: '',
      profile: []
    }
  },
  mounted () {
    var self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.user = user
        self.log = true
        firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
          self.profile = snapshot.val().profile
        })
      } else {
        self.user = []
        self.log = false
      }
    })
  },
  watch: {
    $route () {
      var self = this
      this.user = null
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
  },
  methods: {
    signInWithPopup () {
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/plus.login')
      firebase.auth().signInWithPopup(provider)
    }
  },
  components: {
    alertSettingsMissing
  }
}
</script>

<style scoped>

.league {
  margin-top: 30px;
}

.league h4 {
  margin-bottom: 0;
  font-size: 10px;
  line-height: 1.4;
  text-transform: uppercase;
  color: #aebcca;
}

.league p {
  margin-top: 0;
  font-size: 24px;
  text-transform: uppercase;
}

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
