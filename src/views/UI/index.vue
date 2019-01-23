<template>
  <div class="mainPage">
    <div class="list">
      <div class="listItem" v-for="(item,index) in list" :key="index" @click="toUrl(item)">{{item.name}}</div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../../components/footer'
export default {
  components: { footerBar },
  data () {
    return {
      list: [
        // {name: 'radio', url: '/radio'},
        {name: 'dropDown', url: '/dropDown'},
        {name: 'actionSheet', url: '/action-sheet'},
        {name: 'button', url: '/button'},
        {name: 'toast', url: '/toast'},
        {name: 'dialog', url: '/dialog'},
        {name: 'textarea', url: '/textarea'},
        {name: 'list', url: '/list'},
        {name: 'error', url: '/error'},
        {name: 'search', url: '/search'}
        // {name: '倒计时', url: '/djs'},
        // {name: '百分比圆环', url: '/progressBar'}
      ]
    }
  },
  methods: {
    toUrl (item) {
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>
<style scoped lang="less">
.mainPage{
  padding-bottom:1.1rem;
}
.list{
  width: 100%;
  background-color: #fff;
  font-size: 0.32rem;
  .listItem{
    width: 100%;
    padding: 0 0.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 0.01rem solid #eee;
  }
}
</style>
