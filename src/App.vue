<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './system/pages/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import url('./assets/css/uikit.fifachallenge.css');

.background-primary {
  background-color: #3498DB!important;
}
</style>
