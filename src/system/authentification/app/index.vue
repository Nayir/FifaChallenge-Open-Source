<template>
  <div>
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

 html {
   font: normal 14px / 20px "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
 }

 @media (min-height: 700px) {
   .tm-header {
       margin-bottom: 65px;
   }
 }

 .tm-header {
     position: relative;
     background: #3a94e0;
     color: #fff;
 }

 .tm-headerbar {
     height: 60px;
 }

 @media (min-width: 768px) {
   .tm-headerbar {
       height: 120px;
   }
 }
</style>
