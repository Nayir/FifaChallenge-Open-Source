<template>
  <div>
    <div v-if="currentChallenge" id="challenge-trigger">
      <router-link title="Accueil" :to="{ name: 'fcl.room' }" class="uk-icon-button uk-margin-small-right" uk-icon="icon: play; ratio: 2"></router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'challengeTrigger',
  computed: {
    useruid () {
      return this.$store.state.profile.firebaseprofile.uid
    },
    currentChallenge () {
      return this.$store.state.challenge.challenge
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>

#challenge-trigger {
  z-index: 1000;
  position: fixed;
  bottom: 30px;
  right: 30px;
}

#challenge-trigger > .uk-icon-button {
  width: 75px;
  height: 75px;
}

</style>
