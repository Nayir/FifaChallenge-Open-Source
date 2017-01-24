<template>
  <div class="uk-card uk-card-hover uk-card-body uk-text-center">
    <div class="icon-stat uk-inline">
      <img class="uk-position-bottom-center" width="50" height="50" :src="icon">
    </div>
    <div class="count-stat uk-margin-top"> {{ count }} </div>
    <div class="legend-stat uk-margin-top"> {{ legend }}</div>
  </div>
</template>

<script>
export default {
  name: 'cardStat',
  props: [
    'icon',
    'count',
    'legend'
  ]
}
</script>

<style>
.icon-stat {
  display: block;
  margin: 0 auto;
  height: 50px;
  width: 50px;
}

.count-stat {
  font-size: 36px;
  font-weight: 300;
  color:#646f7a;
}
.legend-stat {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: #aebcca;

}
</style>
