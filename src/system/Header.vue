<template>
  <div>
    <nav :class="[navbarclass, navbarcontainer, light]" uk-navbar>

        <div class="uk-navbar-left">
            <a href="#offcanvas-slide" class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle></a>
            <div id="offcanvas-slide" uk-offcanvas>
                <div class="uk-offcanvas-bar">

                    <ul class="uk-nav uk-nav-default">
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

        <div class="uk-navbar-center">

            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <a href="/">
                  <img id="logo" src="~assets/images/fifachallenge_logo.svg"/>
                </a>
              </li>
            </ul>

        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
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
export default {
  name: 'header',
  props: [
    'navbarclass'
  ],
  data () {
    return {
      navbarcontainer: 'uk-navbar-container',
      light: 'uk-light'
    }
  }
}
</script>

<style scoped>
  #logo {
    height: 50px;
  }
</style>
