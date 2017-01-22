<template>
  <div class="home-background">
    <header-fifachallenge></header-fifachallenge>
    <div class="waves">
      <img class="dot" src="~assets/images/home-wave-a.svg"  />
      <img class="dot" src="~assets/images/home-wave-b.svg"  />
      <img class="dot" src="~assets/images/home-wave-c.svg"  />
      <img class="dot" src="~assets/images/home-wave-d.svg"  />
      <img class="controller controller-p" src="~assets/images/playstation-controller.png"/>
      <img class="controller controller-x" src="~assets/images/xbox-controller.png"/>
    </div>
    <main>

    </main>
  </div>
</template>

<script>
import dynamics from 'dynamics.js'
import HeaderFifachallenge from '../Header'

export default {
  name: 'home',
  components: {
    HeaderFifachallenge
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
  main {
    position: absolute;
    background-color: #fff;
    z-index: 2;
    width: 100%;
    min-height: 500px;
    margin-top: -100px;
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
