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
      <div>
        <div uk-alert>
          <a class="uk-alert-close" uk-close></a>
          <h3>Renseignements importants</h3>
          <p>Afin de pouvoir commencer à jouer, vous devez indiquer vos <a href="/user/settings#idchallengers">informations de challengers</a> ci dessous</p>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-width-1-3@m">
            <div class="uk-card-badge uk-label uk-label-danger">League</div>
            <div class="uk-card-media-top">
              <img src="http://lorempixel.com/output/abstract-q-c-640-480-2.jpg" alt="">
            </div>
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="40" height="40" :src="soccerFcl">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">FifaChallenge League</h3>
                        <p class="uk-text-meta uk-margin-remove-top">Division 3 - 342 pts</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-footer uk-text-center">
                <a href="#" class="uk-button uk-button-primary uk-width-1-1">Continuer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import cardStat from 'components/cardStat.vue'
import soccerFoot from 'assets/images/soccer-foot.svg'
import soccerFcl from 'assets/images/soccer-fcl.svg'
import soccerScored from 'assets/images/soccer-scored.svg'
import soccerConceded from 'assets/images/soccer-conceded.svg'
import mediationIcon from 'assets/images/mediation-icon.svg'
import mediationYellowCard from 'assets/images/mediation-yellowcard.svg'
import mediationRedCard from 'assets/images/mediation-redcard.svg'

export default {
  data () {
    return {
      user: 'hello',
      log: '',
      soccerFoot,
      soccerFcl,
      soccerScored,
      soccerConceded,
      mediationIcon,
      mediationYellowCard,
      mediationRedCard
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
  beforeCreate () {
    var self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.user = user
        self.log = true
      } else {
        self.$router.push({ name: 'user.login' })
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
    cardStat
  }
}
</script>

<style scoped>

.uk-card-default .uk-card-footer {
  border-top: none;
}
</style>
