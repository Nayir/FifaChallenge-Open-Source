<template>
  <div>
    <div>
      <div class="uk-container">
        <ul class="uk-flex-center uk-margin-large-top router-tab">
            <router-link tag="li" :to="{ name: 'user.profile' }">
              <a> Profile </a>
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
