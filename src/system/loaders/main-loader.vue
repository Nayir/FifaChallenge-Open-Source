<template>
  <div class="fullloader">
    <div class="uk-position-center">
      <div id="main-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.fullloader {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 99999;
}
#main-loader span{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #3498db;
  margin: 35px 5px;
  opacity: 0;
}

#main-loader span:nth-child(1){
  animation: opacitychange 1s ease-in-out infinite;
}

#main-loader span:nth-child(2){
  animation: opacitychange 1s ease-in-out 0.33s infinite;
}

#main-loader span:nth-child(3){
  animation: opacitychange 1s ease-in-out 0.66s infinite;
}

@keyframes opacitychange{
  0%, 100%{
    opacity: 0;
  }

  60%{
    opacity: 1;
  }
}
</style>
