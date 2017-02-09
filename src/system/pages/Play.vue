<template>
  <div class="home-background">
    <main>
      <div id="main_content" class="uk-container uk-container-small uk-margin-large-top">
        <div class="uk-grid">
          <div class="soon uk-width-1-3@m uk-visible@m uk-margin-large-top">
            <h3 class="uk-text-center"">Bientôt</h3>
            <div class="container-soon">
              <div class="play-soon">
                <img class="uk-align-center" :src="ghalfcircle" width="200" height="200" />
                <img class="podium uk-align-center" :src="podium" />
              </div>
            </div>
          </div>
          <div class="leage uk-width-1-3@m uk-margin-large-top">
            <h3 class="uk-text-center">FifaChallenge League</h3>
            <router-link tag="div" :to="{ name: 'fcl.room' }" class="play-fcleague">
              <img class="uk-align-center" :src="halfcircle" width="400" height="400" />
              <img class="cup uk-align-center" :src="cup" width="400" height="400" />
            </router-link>
          </div>
          <div class="soon uk-width-1-3@m uk-visible@m uk-margin-large-top">
            <h3 class="uk-text-center">Bientôt</h3>
            <div class="container-soon">
              <div class="play-soon">
                <img class="uk-align-center" :src="ghalfcircle" width="200" height="200" />
                <img class="club uk-align-center" :src="club" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import halfcircle from 'assets/images/green-halfcircle.svg'
import ghalfcircle from 'assets/images/grey-halfcircle.svg'
import cup from 'assets/images/cup-fcl.svg'
import podium from 'assets/images/podium.svg'
import club from 'assets/images/club.svg'

export default {
  name: 'play',
  data () {
    return {
      halfcircle,
      ghalfcircle,
      cup,
      podium,
      club
    }
  }
}
</script>

<style scoped>
.play-fcleague, .play-soon {
  position: relative;
  margin-top: 150px;
}

.play-fcleague {
  cursor: pointer;
}
.play-fcleague img, .play-soon img{
  position: absolute;
  left: 0;
  right: 0;
}

.soon h3 {
  margin-top: 40px;
}

.container-soon {
  margin-top: -40px;
}

.cup {
  top: 50%;
  left: 50%!important;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
}

.club, .podium {
  top: 50%;
  left: 50%!important;
  width: 120px;
  height: 120px;
  margin-top: -60px;
  margin-left: -60px;
}
</style>
