<template>
  <div uk-alert v-if="!settings">
    <a class="uk-alert-close" uk-close></a>
    <h3>Profil complété à {{ pourcentage }}</h3>
    <p>Afin de pouvoir commencer à jouer, vous devez indiquer vos <a href="/user/settings#idchallengers">informations de challengers</a></p>
    <ul>
      <li v-if="!username">
        Votre Username
      </li>
      <li v-if="!gamerinfo">
        Au moins une console de jeu et son id de joueur correspondant
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      username () {
        return this.$store.state.profile.fifachallengeprofile.username
      },
      gamerinfo () {
        if (this.$store.state.profile.fifachallengeprofile.gamerinfo.playstationfour.owned || this.$store.state.profile.fifachallengeprofile.gamerinfo.xboxone.owned) {
          return true
        } else {
          return false
        }
      },
      settings () {
        if (this.username && this.gamerinfo) {
          return true
        } else {
          return false
        }
      },
      pourcentage () {
        if (this.settings) {
          return '100%'
        } else if (this.username || this.gamerinfo) {
          return '50%'
        } else {
          return '0%'
        }
      }
    }
  }
</script>

<style>

</style>
