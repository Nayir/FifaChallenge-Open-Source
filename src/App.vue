<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('./assets/css/uikit.fifachallenge.css');
@import url('./assets/css/custom.css');

.background-primary {
  background-color: #3498DB!important;
}
</style>
