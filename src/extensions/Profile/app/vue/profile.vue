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
          <div class="uk-grid-collapse" uk-grid>
              <div class="uk-width-1-3@m uk-card uk-card-hover uk-card-body">
                <div uk-grid>
                  <div class="uk-width-1-2@m">
                    <img class="uk-border-circle" width="100" height="100" :src="user.photoURL">
                  </div>
                  <div class="uk-width-1-2@m league uk-text-left">
                    <h4>FifaChallenge League</h4>
                    <p>DIVISION 3 </p>
                  </div>
                </div>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerFcl" count="0" legend="Point de League"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerFoot" count="0" legend="Matchs joués"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerScored" count="0" legend="Buts marqués"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerConceded" count="0" legend="Buts Encaissés"></card-stat>
              </div>
          </div>
          <div class="uk-grid-collapse uk-flex-center" uk-grid>
            <div class="uk-width-1-5@m">
              <card-stat :icon="mediationIcon" count="0" legend="Médiation"></card-stat>
            </div>
            <div class="uk-width-1-5@m">
              <card-stat :icon="mediationYellowCard" count="0" legend="Cartons Jaunes"></card-stat>
            </div>
            <div class="uk-width-1-5@m">
              <card-stat :icon="mediationRedCard" count="0" legend="Cartons Rouges"></card-stat>
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
import alertSettingsMissing from 'extensions/Profile/app/components/alertSettingsMissing.vue'
import routerTab from 'components/routerTab.vue'
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
      profile: [],
      soccerFoot,
      soccerFcl,
      soccerScored,
      soccerConceded,
      mediationIcon,
      mediationYellowCard,
      mediationRedCard
    }
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
    cardStat,
    routerTab,
    alertSettingsMissing
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
