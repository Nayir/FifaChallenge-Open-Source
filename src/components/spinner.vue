<template>
  <div class="loading-container">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.loading-container {
  height: 28px;
  padding-top: 2px;
  padding-bottom: 8px;
}
.loading {
  margin: 0 10px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  -webkit-animation: spin 1s infinite linear;
          animation: spin 1s infinite linear;
}

</style>
