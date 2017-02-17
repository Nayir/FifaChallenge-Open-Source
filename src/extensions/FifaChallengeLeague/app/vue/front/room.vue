<template>
  <div>
    <div>
      <div class="uk-container uk-margin-large-bottom">
        <ul class="uk-flex-center uk-margin-large-top router-tab">
            <router-link tag="li" :to="{ name: 'fcl.room' }">
              <a> Salle de match </a>
            </router-link>
            <router-link class="uk-disabled" tag="li" :to="{ name: 'fcl.rank' }">
              <a> Classement </a>
            </router-link>
            <router-link tag="li" :to="{ name: 'fcl.rules' }">
              <a> Règles </a>
            </router-link>
            <router-link class="uk-disabled" tag="li" :to="{ name: 'fcl.invite' }">
              <a> Inviter un ami </a>
            </router-link>
        </ul>
        <div>
          <div class="uk-grid" uk-grid>
            <div class="uk-width-3-4@m uk-card uk-card-default uk-card-grey uk-card-body">
              <div class="uk-overflow-auto">
                <table class="uk-table uk-table-hover uk-table-middle">
                    <thead>
                      <tr class="uk-child-width-expand">
                        <th class="uk-width-1-3">Adversaire</th>
                        <th class="uk-width-1-3">Console</th>
                        <th class="uk-width-1-3">FCP</th>
                        <th class="uk-width-1-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="challenge in challenges">
                          <td class="uk-text-truncate">
                            <a class="uk-link-reset" href="#">
                              <img class="uk-preserve-width uk-border-circle" :src="challenge.challenger.photoURL" width="40" :alt="challenge.challenger.username">
                              {{ challenge.challenger.username }}
                            </a>
                          </td>
                          <td>
                           {{ challenge.gameConsole | gameconsole }}
                          </td>
                          <td>
                            {{challenge.fcp}} FCP
                          </td>
                          <td class="uk-text-center"><button class="uk-button uk-button-primary" type="button">Défier</button></td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <div class="uk-width-1-4@m uk-card uk-card-default uk-card-body">
              <div v-if="currentChallenge" style="z-index: 980;" uk-sticky="offset: 75; bottom: #top">
                <h3 class="uk-text-center">Votre Challenge</h3>
                <div>
                  <p class="uk-text-center">
                    {{ currentChallenge.gameConsole | gameconsole }}
                  </p>
                  <p class="uk-text-center">
                    {{ currentChallenge.fcp }} FCP
                  </p>
                </div>
                <div class="uk-text-center">
                  <button class="uk-button uk-button-secondary" v-on:click.prevent="deleteChallenge">Annuler</button>
                </div>
              </div>
              <div v-else style="z-index: 980;" uk-sticky="offset: 75; bottom: #top">
                <h3>Proposer un défi</h3>
                <div class="uk-grid">
                  <form class="uk-form-stacked uk-width-1-1@m">
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Console de jeu</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select" v-model="newChallengeGameConsole">
                              <option value="psfour">Playstation4</option>
                              <option value="xboxone">Xbox One</option>
                            </select>
                        </div>
                        <label class="uk-form-label" for="form-stacked-select">Mise en jeu</label>
                        <div class="uk-form-controls">
                          <range-slider
                              class="slider"
                              min="1"
                              max="1000"
                              step="1"
                              v-model="newChallengeFcp">
                          </range-slider>
                          <input class="uk-input" type="number" v-model="newChallengeFcp"/>
                        </div>
                    </div>
                    <div class="uk-text-center">
                      <button class="uk-button uk-button-secondary" v-on:click.prevent="createChallenge">Défier pour <span class="uk-text-primary">{{ newChallengeFcp }}</span> FCP</button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import profileMixins from 'extensions/Profile/app/mixins.js'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import _ from 'lodash'

export default {
  data () {
    return {
      challenges: [],
      currentChallenge: [],
      newChallengeGameConsole: 'psfour',
      newChallengeFcp: '10',
      fcpValue: 2
    }
  },
  computed: {
    useruid () {
      return this.$store.state.profile.firebaseprofile.uid
    }
  },
  created () {
    var self = this
    firebase.database().ref('tournaments/fcul/matchs/active_challenges/challenges').on('value', function (snapshot) {
      var allChallenges = snapshot.val()
      console.log('store currentChallenge : ' + self.$store.state.challenge.currentChallenge.id)
      var challenges = _.omit(allChallenges, self.$store.state.challenge.currentChallenge.id)
      self.challenges = challenges
    })
    firebase.database().ref('users/' + this.$store.state.profile.firebaseprofile.uid + '/challenge').on('value', function (snapshot) {
      self.currentChallenge = snapshot.val()
    })
  },
  mixins: [profileMixins],
  methods: {
    createChallenge () {
      var self = this
      // Get a key for a new Post.
      var newChallengeKey = firebase.database().ref('tournaments/fcul/matchs/active_challenges/').child('challenges').push().key
      // A post entry.
      var challengeData = {
        id: newChallengeKey,
        statu: 'pending',
        challenger: {
          uid: self.$store.state.profile.firebaseprofile.uid,
          username: self.$store.state.profile.fifachallengeprofile.username,
          photoURL: self.$store.state.profile.firebaseprofile.photoURL
        },
        gameConsole: this.newChallengeGameConsole,
        fcp: this.newChallengeFcp,
        description: 'description of match',
        type: 'fcul'
      }
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {}
      updates['/tournaments/fcul/matchs/active_challenges/challenges/' + newChallengeKey] = challengeData
      updates['/users/' + this.$store.state.profile.firebaseprofile.uid + '/challenge/'] = challengeData
      this.$store.commit('updateChallenge', challengeData)
      firebase.database().ref().update(updates)
    },
    deleteChallenge () {
      // A post entry.
      var challengeData = {}
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {}
      updates['/tournaments/fcul/matchs/active_challenges/challenges/' + this.currentChallenge.id] = challengeData
      updates['/users/' + this.$store.state.profile.firebaseprofile.uid + '/challenge/'] = challengeData
      this.$store.commit('clearChallenge', challengeData)
      firebase.database().ref().update(updates)
    }
  },
  components: {
    RangeSlider
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

.star {
  width: 20px;
  padding-bottom: 5px;
}

.console {
  width: 15px;
  padding-bottom: 3px;
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

.slider {
  /* overwrite slider styles */
  width: 100%;
}

.range-slider {
  padding: 0;
}

</style>
