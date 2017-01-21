<template>
  <div class="home-background">
    <header-fifachallenge></header-fifachallenge>
    <div class="waves">
      <img class="dot" src="~assets/images/home-wave-a.svg"  />
      <img class="dot" src="~assets/images/home-wave-b.svg"  />
      <img class="dot" src="~assets/images/home-wave-c.svg"  />
      <img class="dot" src="~assets/images/home-wave-d.svg"  />
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
    var dots = document.querySelectorAll('.dot')
    // Start the 3 dot animations with different delays
    function animateDots () {
      for (var i = 0; i < dots.length; i++) {
        dynamics.animate(dots[i], {
          translateY: 50
        }, {
          type: dynamics.forceWithGravity,
          duration: 8000,
          bounciness: 350,
          elasticity: 200,
          delay: i * 250
        })
      }
      dynamics.setTimeout(animateDots, 10000)
    }
    animateDots()
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
    background-color: #3498DB;
    min-height: 100vh;
  }
  .waves {
    min-height: 100vh;
  }
  .waves img {
   position: absolute;
   z-index: 0;
   bottom: 0;
   width: 100%;
 }
</style>
