<template>
<div>
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
    <div v-if="availableGameConsole.length > 0" class="uk-grid">
      <form class="uk-form-stacked uk-width-1-1@m">
        <div class="uk-margin">
            <div class="uk-form-controls">
              <label v-for="(value, key) in availableGameConsole">
                <input class="uk-radio" type="radio" v-model="newChallengeGameConsole" v-bind:value="value">
                {{ value | gameconsole }}
              </label>
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
    <div v-else>
      <div class="uk-card uk-card-default uk-card-body uk-alert-warning uk-text-center">
        <p>Aucune console</p>
      </div>
      <p class="uk-text-center uk-text-primary">
        Pour jouer, <br /> <strong><router-link  :to="{ name: 'user.settings' }">ajoutez une console</router-link></strong>.
      </p>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      newChallengeGameConsole: 'psfour',
      newChallengeFcp: '10',
      fcpValue: 2
    }
  },
  computed: {
    useruid () {
      return this.$store.state.profile.firebaseprofile.uid
    },
    availableGameConsole () {
      return this.$store.state.profile.fifachallengeprofile.gameConsoles
    },
    currentChallenge () {
      return this.$store.state.challenge.challenge
    }
  },
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
