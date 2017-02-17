<template>
  <div>
    <div class="uk-notification uk-notification-bottom-right">
      <div class="uk-notification-message uk-button-danger" style="opacity: 1; margin-top: 0px; margin-bottom: 10px;">
        <div class="uk-text-center">
          <div>Challenge en cours</div>
        </div>
      </div>
    </div>
    <nav class="uk-navbar-container background-home uk-light" uk-navbar>
        <div class="uk-navbar-left">
            <a href="#offcanvas-slide" class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle></a>
            <div id="offcanvas-slide" uk-offcanvas>
                <div class="uk-offcanvas-bar">
                    <ul v-if="isauth" class="uk-nav uk-nav-default">
                      <router-link  :to="{ name: 'user.profile' }">Mon profil</router-link>
                      <li class="uk-position-bottom-center uk-margin-bottom"><a title="Se Déconnecter" v-on:click="signOut()"><span uk-icon="icon: sign-out"></span> Se déconnecter</a></li>
                    </ul>
                    <ul v-else class="uk-nav uk-nav-default">
                      <li>
                        <li class="uk-nav-header">Guide</li>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-navbar-subtitle">Esport</li>
                              <li><a href="#">Créer son compte</a></li>
                              <li><a href="#">Les tournois</a></li>
                              <li><a href="#">Guide de démarrage</a></li>
                              <li class="uk-navbar-subtitle">Club</li>
                              <li><a href="#">Créer son Club</a></li>
                              <li><a href="#">Documentation</a></li>
                          </ul>
                      </li>
                      <li>
                        <li class="uk-nav-header">Rejoindre le projet</li>
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-navbar-subtitle">Développeurs</li>
                            <li><a href="https://github.com/Nayir/FifaChallenge-Open-Source">Github</a></li>
                            <li><a href="https://gitter.im/fifachallenge/">Chat</a></li>
                            <li class="uk-navbar-subtitle">Gameurs passionés</li>
                            <li><a href="#">Groupe Facebook</a></li>
                            <li><a href="https://discord.gg/4RM32Nr">Chat</a></li>
                        </ul>
                      </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="isauth" class="uk-navbar-left">
          <router-link class="uk-link-reset" :to="{ name: 'user.profile' }">
            <div class="uk-float-left">
              <img class="uk-border-circle" width="50" height="50" :src="userphoto">
            </div>
            <div class="uk-float-right profile-info">
              <span>{{ username }}</span><br />
              <span>0 FCP</span>
            </div>
          </router-link>
        </div>

        <div class="uk-navbar-center">

            <ul v-if="isauth" class="uk-navbar-nav play">
              <li class="uk-active">
                <router-link class="uk-button uk-button-danger" :to="{ name: 'play' }">
                  JOUER
                </router-link>
              </li>
            </ul>

            <ul v-else class="uk-navbar-nav">
              <li class="uk-active">
                <a href="/">
                  <img id="logo" src="~assets/images/fifachallenge_logo.svg"/>
                </a>
              </li>
            </ul>

        </div>

        <div class="uk-navbar-right">
          <ul v-if="isauth" class="uk-navbar-nav">
            <li>
              <router-link title="Accueil" :to="{ name: 'root' }"><span uk-icon="icon: home"></router-link>
            </li>
            <li>
              <router-link title="Profil" :to="{ name: 'user.profile' }"><span uk-icon="icon: user"></router-link>
            </li>
            <li>
              <router-link title="Paramètres" :to="{ name: 'user.settings' }"><span uk-icon="icon: settings"></router-link>
            </li>
            <li><a title="Déconnexion" v-on:click="signOut()"><span uk-icon="icon: sign-out"></span></a></li>
          </ul>
          <ul v-else class="uk-navbar-nav">
              <li>
                  <a href="#">Guide</a>
                  <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li class="uk-nav-header">Esport</li>
                          <li><a href="#">Créer son compte</a></li>
                          <li><a href="#">Les tournois</a></li>
                          <li><a href="#">Guide de démarrage</a></li>
                          <li class="uk-nav-header">Club</li>
                          <li><a href="#">Créer son Club</a></li>
                          <li><a href="#">Documentation</a></li>
                      </ul>
                  </div>
              </li>
              <li>
                  <a href="#">Rejoindre le projet</a>
                  <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li class="uk-nav-header">Développeurs</li>
                          <li><a href="https://github.com/Nayir/FifaChallenge-Open-Source">Github</a></li>
                          <li><a href="https://gitter.im/fifachallenge/">Chat</a></li>
                          <li class="uk-nav-header">Gameurs</li>
                          <li><a href="#">Groupe Facebook</a></li>
                          <li><a href="https://discord.gg/4RM32Nr">Chat</a></li>
                      </ul>
                  </div>
              </li>
          </ul>
        </div>

    </nav>
  </div>
</template>

<script>
import authentificationMixins from 'system/authentification/app/mixins.js'

export default {
  name: 'header',
  mixins: [authentificationMixins],
  data () {
    return {
      user: [],
      profile: []
    }
  },
  computed: {
    isauth () {
      return this.$store.state.authentification.isauth
    },
    username () {
      if (this.$store.state.profile.fifachallengeprofile.username) {
        return this.$store.state.profile.fifachallengeprofile.username
      } else {
        return this.$store.state.profile.firebaseprofile.displayName
      }
    },
    userphoto () {
      return this.$store.state.profile.firebaseprofile.photoURL
    }
  }
}
</script>

<style scoped>
  .uk-icon > svg {
    margin-left: 20px;
  }

  #logo {
    height: 50px;
  }

  .background-home {
    background-color: #2980B9;
  }

  .play li {
    width: 150px;
  }
  .play li a {
    font-size: 20px;
  }
</style>
