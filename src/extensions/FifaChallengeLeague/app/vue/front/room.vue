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
            <div class="uk-width-3-4@m uk-card uk-card-default uk-card-grey uk-card-body" style="min-height: 250px;">
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
                  <tbody v-if="challenges">
                    <tr v-for="challenge in challenges">
                      <td class="uk-text-truncate">
                        <a class="uk-link-reset" href="#">
                          <img class="uk-preserve-width uk-border-circle" :alt="challenge.challenger.username">
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
                  <tbody v-else>
                    <tr id="noChallenge">
                      Aucun Challenge
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="uk-width-1-4@m uk-card uk-card-default uk-card-body">
                <challenge-card></challenge-card>
            </div>
            <div>
              {{ challenges }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import _ from 'lodash'
import challengeCard from 'components/challengeCard.vue'

export default {
  data () {
    return {
      challenges: [],
      newChallengeGameConsole: 'psfour',
      newChallengeFcp: '10',
      fcpValue: 2
    }
  },
  mounted () {
    var self = this
    firebase.database().ref('tournaments/fcul/matchs/active_challenges/challenges').on('value', function (snapshot) {
      // Omit Self-User Challenge
      self.challenges = self.$store.state.challenge.challenge ? _.omit(snapshot.val(), self.$store.state.challenge.challenge.id) : snapshot.val()
      console.log(self.challenges)
      // console.log(_.omitBy(self.challenges, {freeze: true}))
    })
    firebase.database().ref('users/' + this.$store.state.profile.firebaseprofile.uid + '/challenge').on('value', function (snapshot) {
      self.currentChallenge = snapshot.val()
    })
  },
  components: {
    challengeCard
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

#noChallenge {
  text-align: center;
  width: 100%;
  position: absolute;
  margin-top: 80px;
  color: #a4a4a4;
}

</style>
