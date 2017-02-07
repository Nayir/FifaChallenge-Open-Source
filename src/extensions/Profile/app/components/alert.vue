<template>
  <div uk-alert v-show="!username">
    <a class="uk-alert-close" uk-close></a>
    <h3>Renseignements importants</h3>
    <p>Afin de pouvoir commencer à jouer, vous devez indiquer vos <a href="/user/settings#idchallengers">informations de challengers</a> ci dessous</p>
  </div>
</template>

<script>
  export default {
    props: ['username']
  }
</script>

<style>

</style>
