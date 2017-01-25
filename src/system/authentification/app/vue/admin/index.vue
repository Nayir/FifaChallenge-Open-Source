<template>
  <div>
    <main class="tm-main uk-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

 html {
   overflow-y: scroll;
   font: normal 14px / 20px "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
   font-weight: 400;
 }


 .pk-width-sidebar, .pk-width-content {
     -moz-box-sizing: border-box;
     box-sizing: border-box;
     width: 100%}
 @media (min-width:768px) {
     .pk-width-sidebar {
     width: 225px;
 }
 .pk-width-content {
     width: calc(100% - 25px - 200px);
 }
 }@media (min-width:960px) {
     .pk-grid-large {
     margin-left: -40px;
 }
 .pk-grid-large>* {
     padding-left: 40px;
 }
 .pk-grid-large+.pk-grid-large, .pk-grid-large>.uk-grid-margin, .pk-grid-large>*>.uk-panel+.uk-panel {
     margin-top: 40px;
 }
 .pk-width-sidebar {
     width: 290px;
 }
 .pk-width-content {
     width: calc(100% - 290px);
 }
 }@media (min-width:1220px) {
     .pk-grid-large {
     margin-left: -50px;
 }
 .pk-grid-large>* {
     padding-left: 50px;
 }
 .pk-grid-large+.pk-grid-large, .pk-grid-large>.uk-grid-margin, .pk-grid-large>*>.uk-panel+.uk-panel {
     margin-top: 50px;
 }
 .pk-width-sidebar {
     width: 300px;
 }
 .pk-width-content {
     width: calc(100% - 300px);
 }
 .pk-width-sidebar-large .pk-width-sidebar {
     width: 320px;
 }
 .pk-width-sidebar-large .pk-width-content {
     width: calc(100% - 320px);
 }
 }

.tm-main {
  margin-bottom: 25px;
}
@media (max-width:767px) {
  .tm-main {
    margin-bottom: 15px;
  }
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

 .uk-container {
  box-sizing: border-box;
  max-width: 1320px;
  padding: 0 25px;
}

.uk-button::-moz-focus-inner {
    border: 0;
    padding: 0;
}
.uk-button {
    -webkit-appearance: none;
    margin: 0;
    border: none;
    overflow: visible;
    font: inherit;
    color: #aaa;
    text-transform: none;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 15px;
    background: transparent;
    vertical-align: middle;
    line-height: 33px;
    min-height: 35px;
    font-size: 13px;
    text-decoration: none;
    text-align: center;
    min-width: 90px;
    border: 1px solid #c3c3c3;
    border-radius: 2px;
    text-transform: uppercase;
    -webkit-transition: all .05s linear;
    transition: all .05s linear;
}
.uk-button:not(:disabled) {
    cursor: pointer;
}
.uk-button:hover, .uk-button:focus {
    background-color: transparent;
    color: #888;
    outline: none;
    text-decoration: none;
    border-color: #a2a2a2;
}
.uk-button:active, .uk-button.uk-active {
    background-color: transparent;
    color: #666;
    border-color: #808080;
}
.uk-button-primary {
    background-color: #489be0;
    color: #fff;
    border-color: transparent;
}
.uk-button-primary:hover, .uk-button-primary:focus {
    background-color: #3a94e0;
    color: #fff;
    border-color: transparent;
}
.uk-button-primary:active, .uk-button-primary.uk-active {
    background-color: #3589cf;
    color: #fff;
    border-color: transparent;
}
.uk-button-success {
    background-color: #3DC372;
    color: #fff;
    border-color: transparent;
}
.uk-button-success:hover, .uk-button-success:focus {
    background-color: #23b25c;
    color: #fff;
    border-color: transparent;
}
.uk-button-success:active, .uk-button-success.uk-active {
    background-color: #0fa74c;
    color: #fff;
    border-color: transparent;
}
.uk-button-danger {
    background-color: #e44e56;
    color: #fff;
    border-color: transparent;
}
.uk-button-danger:hover, .uk-button-danger:focus {
    background-color: #db353f;
    color: #fff;
    border-color: transparent;
}
.uk-button-danger:active, .uk-button-danger.uk-active {
    background-color: #d2232d;
    color: #fff;
    border-color: transparent;
}
.uk-button:disabled {
    background-color: transparent;
    color: #c3c3c3;
    border-color: #ddd;
}
.uk-button-link, .uk-button-link:hover, .uk-button-link:focus, .uk-button-link:active, .uk-button-link.uk-active, .uk-button-link:disabled {
    border-color: transparent;
    background: none;
    min-width: inherit;
}
.uk-button-link {
    color: #4091D2;
}
.uk-button-link:hover, .uk-button-link:focus, .uk-button-link:active, .uk-button-link.uk-active {
    color: #4587BE;
    text-decoration: none;
}
.uk-button-link:disabled {
    color: #aaa;
}
.uk-button-link:focus {
    outline: 1px dotted;
}
.uk-button-mini {
    min-height: 22px;
    padding: 0 8px;
    line-height: 20px;
    font-size: 12px;
}
.uk-button-small {
    min-height: 30px;
    padding: 0 12px;
    line-height: 28px;
    font-size: 12px;
}
.uk-button-large {
    min-height: 45px;
    padding: 0 20px;
    line-height: 43px;
    font-size: 16px;
}
.uk-button-group {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: .001px;
    white-space: nowrap;
}
.uk-button-group>* {
    display: inline-block;
}
.uk-button-group .uk-button {
    vertical-align: top;
}
.uk-button-dropdown {
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.uk-button-link:focus {
    outline: none;
}
.uk-button-group>.uk-button:not(:first-child):not(:last-child), .uk-button-group>div:not(:first-child):not(:last-child) .uk-button {
    border-radius: 0;
}
.uk-button-group>.uk-button:first-child, .uk-button-group>div:first-child .uk-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.uk-button-group>.uk-button:last-child, .uk-button-group>div:last-child .uk-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.uk-button-group>.uk-button:nth-child(n+2), .uk-button-group>div:nth-child(n+2) .uk-button {
    margin-left: -1px;
}
.uk-button-group .uk-button:hover, .uk-button-group .uk-button:active, .uk-button-group .uk-button.uk-active {
    position: relative;
}
</style>
