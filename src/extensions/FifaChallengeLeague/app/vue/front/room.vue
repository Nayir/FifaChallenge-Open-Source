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
                        <th class="uk-width-1-6">Console</th>
                        <th class="uk-width-1-6">Réputation</th>
                        <th class="uk-width-1-6">FCP</th>
                        <th class="uk-width-1-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td class="uk-text-truncate">
                            <a class="uk-link-reset" href="#">
                              <img class="uk-preserve-width uk-border-circle" src="https://pbs.twimg.com/profile_images/824408352147075072/77M4Sg6n_400x400.jpg" width="40" alt="adversaire 1">
                              Adversaire 1
                            </a>
                          </td>
                          <td>
                            <img class="console" :src="xbox"/> XBOX 360
                          </td>
                          <td>
                            <img class="star" :src="star"/>
                            <img class="star" :src="star"/>
                            <img class="star" :src="star"/>
                          </td>
                          <td>
                            22 FCP
                          </td>
                          <td class="uk-text-center"><button class="uk-button uk-button-primary" type="button">Défier</button></td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <div class="uk-width-1-4@m uk-card uk-card-default uk-card-body">
              <div style="z-index: 980;" uk-sticky="offset: 75; bottom: #top">
                <h3>Proposer un défi</h3>
                <div class="uk-grid">
                  <form class="uk-form-stacked uk-width-1-1@m">

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Console de jeu</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Xbox One</option>
                                <option>PS4</option>
                            </select>
                        </div>
                        <label class="uk-form-label" for="form-stacked-select">Mise en jeu</label>
                        <div class="uk-form-controls">
                          <range-slider
                              class="slider"
                              min="1"
                              max="1000"
                              step="1"
                              v-model="fcpValue">
                          </range-slider>
                          <input class="uk-input" type="number" v-model="fcpValue"/>
                        </div>
                    </div>
                    <div class="uk-text-center">
                      <button class="uk-button uk-button-secondary">Défier pour <span class="uk-text-primary">{{ fcpValue }}</span> FCP</button>
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
import club from 'assets/images/club.svg'
import star from 'assets/images/star.svg'
import xbox from 'assets/images/xbox-logo.svg'
import playstation from 'assets/images/playstation-logo.svg'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      user: 'hello',
      log: '',
      club,
      star,
      xbox,
      playstation,
      fcpValue: 2
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
