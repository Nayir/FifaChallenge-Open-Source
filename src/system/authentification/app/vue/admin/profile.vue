<template>
  <div>
    <div>
      <div class="uk-container">
        <ul class="uk-flex-center uk-margin-large-top" uk-tab>
            <li class="uk-active"><a href="#">Profil</a></li>
            <li><a href="#">Matchs</a></li>
            <li><a href="#">Tournois</a></li>
            <li><a href="#">Paramètres</a></li>
        </ul>
        <div>
          <div uk-alert>
            <a class="uk-alert-close" uk-close></a>
            <h3>Renseignements importants</h3>
            <p>Afin de pouvoir commencer à jouer, vous devez indiquer vos <a href="/user/settings#idchallengers">informations de challengers</a> ci dessous</p>
          </div>
          <div class="uk-grid-collapse" uk-grid>
              <div class="uk-width-1-3@m uk-card uk-card-hover uk-card-body">
                <div uk-grid>
                  <div class="uk-width-1-2@m">
                    <img class="uk-border-circle" width="100" height="100" :src="user.photoURL">
                  </div>
                  <div class="uk-width-1-2@m league uk-text-left uk-margin-top">
                    <h4>FifaChallenge League</h4>
                    <p>DIVISION 3 </p>
                  </div>
                </div>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerFcl" count="342 pt" legend="Point de League"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerFoot" count="27" legend="Matchs joués"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerScored" count="67" legend="Buts marqués"></card-stat>
              </div>
              <div class="uk-width-expand@m">
                <card-stat :icon="soccerConceded" count="41" legend="Buts Encaissés"></card-stat>
              </div>
          </div>
          <div class="uk-grid-collapse uk-flex-center" uk-grid>
            <div class="uk-width-1-5@m">
              <card-stat :icon="mediationIcon" count="2" legend="Médiation"></card-stat>
            </div>
            <div class="uk-width-1-5@m">
              <card-stat :icon="mediationYellowCard" count="1" legend="Cartons Jaunes"></card-stat>
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
