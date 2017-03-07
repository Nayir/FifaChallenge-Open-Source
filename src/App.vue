<template>
  <div id="app">
      <router-view name="header"></router-view>
      <router-view name="content"></router-view>
      <transition name="fade">
        <main-loader v-show="!isLoad"></main-loader>
      </transition>
  </div>
</template>

<script>
import mainLoader from 'system/loaders/main-loader.vue'
export default {
  computed: {
    isLoad () {
      return this.$store.state.loader.isLoaded
    }
  },
  components: {
    mainLoader
  }
}
</script>

<style>
@import url('./assets/css/iziToast.min.css');
@import url('./assets/css/uikit.fifachallenge.css');
@import url('./assets/css/custom.css');
@import url('./assets/css/transitions.css');

.background-primary {
  background-color: #3498DB!important;
}

</style>
