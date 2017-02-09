<template>
  <div class="home-background">
    <div id="hero" class="uk-container uk-text-center">
      <h1 class="uk-heading-primary uk-text-center uk-light uk-margin-large-bottom"> Prêt à relever le Challenge ?</h1>
      <router-link v-if="!isauth" :to="{ name: 'registration' }" class="uk-button uk-button-primary">Inscription</router-link>
      <router-link v-if="!isauth" :to="{ name: 'login' }" class="uk-button uk-button-secondary">Connexion</router-link>
    </div>

    <div class="waves">
      <img class="dot" src="~assets/images/home-wave-a.svg"  />
      <img class="dot" src="~assets/images/home-wave-b.svg"  />
      <img class="dot" src="~assets/images/home-wave-c.svg"  />
      <img class="dot" src="~assets/images/home-wave-d.svg"  />
      <img class="controller controller-p" src="~assets/images/playstation-controller.png"/>
      <img class="controller controller-x" src="~assets/images/xbox-controller.png"/>
    </div>
    <main>
      <div id="main_content" class="uk-container">
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <h3 class="uk-card-title">Left</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-card-title">Right</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <h3 class="uk-card-title">Left</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-card-title">Right</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <h3 class="uk-card-title">Left</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <h3 class="uk-card-title">Right</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import dynamics from 'dynamics.js'

export default {
  name: 'home',
  computed: {
    isauth () {
      return this.$store.state.authentification.isauth
    }
  },
  mounted () {
    var item = document.querySelectorAll('.dot')
    var controllers = document.querySelectorAll('.controller')

    // Start the 3 dot animations with different delays
    function animateDots () {
      for (var i = 0; i < item.length; i++) {
        dynamics.animate(item[i], {
          translateY: 50
        }, {
          type: dynamics.easeOut,
          duration: 5000,
          friction: 400,
          delay: i * 250,
          complete: animateDots2
        })
      }
    }
    function animateDots2 () {
      for (var i = 0; i < item.length; i++) {
        dynamics.animate(item[i], {
          translateY: -50
        }, {
          type: dynamics.easeIn,
          duration: 5000,
          friction: 400,
          delay: i * 250,
          complete: animateDots
        })
      }
    }
    function animateController () {
      dynamics.animate(controllers, {
        translateY: 5
      }, {
        type: dynamics.easeOut,
        duration: 2000,
        friction: 400,
        complete: animateController2
      })
    }
    function animateController2 () {
      dynamics.animate(controllers, {
        translateY: -5
      }, {
        type: dynamics.easeOut,
        duration: 2000,
        friction: 400,
        complete: animateController
      })
    }
    animateDots()
    animateController()
  }
}
</script>

<style scoped>
  #hero {
    padding-top: 100px;
  }
  main {
    position: absolute;
    background-color: #fff;
    z-index: 2;
    width: 100%;
    min-height: 500px;
    margin-top: -300px;
  }
  #main_content {
    margin-top: 200px;
    margin-bottom: 100px;
  }
  .home-background {
    background-color: #2980B9;
    min-height: 100vh;
  }
  .waves {
    min-height: 80vh;
  }
  .waves .dot {
     position: absolute;
     z-index: 0;
     bottom: 10px;
     width: 100%;
  }
  .controller {
    position: absolute;
    height: 400px;
    bottom: 0px;
    z-index: 3;
  }
  .controller-p {
    left: 50px;
  }
  .controller-x {
    right: 50px;
  }
</style>
