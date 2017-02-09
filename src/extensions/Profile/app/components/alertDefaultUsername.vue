<template>
  <div class="uk-alert-danger" uk-alert v-if="!username">
    <a class="uk-alert-close" uk-close></a>
    <p>Si vide, votre nom public sera votre nom de compte Google.</p>
  </div>
</template>

<script>
  export default {
    computed: {
      username () {
        return this.$store.state.profile.fifachallengeprofile.username
      }
    }
  }
</script>

<style>

</style>
