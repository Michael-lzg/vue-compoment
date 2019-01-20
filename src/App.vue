<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
  #app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.iconfont{
  font-size: 0.32rem;
}
.dp-header .dp-item.dp-right {
  color: #597ef7 !important;
}
._v-container>._v-content>.pull-to-refresh-layer[data-v-ecaca2b0] {
  width: 100%;
  height: 60px !important;
  margin-top: -60px !important;
  text-align: center;
  font-size: 16px !important;
  color: #aaa;
}
._v-container>._v-content>.loading-layer .spinner-holder .text[data-v-ecaca2b0], ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .text[data-v-ecaca2b0] {
    display: block;
    margin: 0 auto;
    font-size: 14px !important;
    line-height: 20px !important;
    color: #aaa;
}
._v-container>._v-content>.loading-layer .spinner-holder .arrow[data-v-ecaca2b0], ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .arrow[data-v-ecaca2b0] {
    width: 20px !important;
    height: 20px !important;
    margin: 8px auto 0 !important;
}
._v-container>._v-content>.loading-layer[data-v-ecaca2b0] {
    width: 100%;
    height: 40px !important;
    text-align: center !important;
    font-size: 16px !important;
    line-height: 40px !important;
    color: #aaa;
    position: relative;
}
._v-container>._v-content>.loading-layer .spinner-holder .spinner[data-v-ecaca2b0], ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner[data-v-ecaca2b0] {
    margin-top: 14px !important;
    width: 24px !important;
    height: 24px !important;
    fill: #444;
    stroke: #69717d;
}
</style>
