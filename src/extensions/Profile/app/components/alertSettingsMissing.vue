<template>
  <div uk-alert v-if="!settings">
    <a class="uk-alert-close" uk-close></a>
    <h3>Profil complété à {{ pourcentage }}</h3>
    <p>Afin de pouvoir commencer à jouer, vous devez indiquer vos <a href="/user/settings#idchallengers">informations de challengers</a></p>
    <ul>
      <li v-if="!username">
        Votre Username
      </li>
      <li v-if="isEmptyGamerinfo">
        Au moins une console de jeu et son id de joueur correspondant
      </li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    computed: {
      username () {
        return this.$store.state.profile.fifachallengeprofile.username
      },
      isEmptyGamerinfo () {
        var gamerinfo = _.isEmpty(this.$store.state.profile.fifachallengeprofile.gameConsoles)
        return gamerinfo
      },
      settings () {
        if (this.username && !this.isEmptyGamerinfo) {
          return true
        } else {
          return false
        }
      },
      pourcentage () {
        if (this.settings) {
          return '100%'
        } else if (this.username || this.isLenghtGamerinfo) {
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
