<template>
  <div class="tabBar clearfix">
    <div class="item" :class="{'active':activeIndex==index}" v-for="(item,index) in list" :key="index" @click="toUrl(item)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number
    },
    list: {
      type: Array
    }
  },
  methods: {
    toUrl (item) {
      this.$router.replace({
        path: item.url
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/custom.less';
.tabBar {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 0.9rem;
  line-height:0.9rem;
  padding: 0 0.3rem;
  background-color: #fff;
  z-index: 99;
  .item {
    width: 50%;
    text-align: center;
    float: left;
    font-size: 0.32rem;
  }
  .active {
    height: 0.88rem;
    color: @kduiThemeColor;
    border-bottom: 0.06rem solid @kduiThemeColor;
  }
}
</style>
