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
  name: 'plugin',
  components: { footerBar },
  data () {
    return {
      list: [
        {name: '拖拽移动', url: '/Draggable'},
        {name: '省市三级联动', url: '/citySelect'},
        {name: '图片上传预览', url: '/uploadImg'},
        {name: '高德/百度地图', url: '/map'},
        {name: '获取位置并搜索周边', url: '/location'},
        {name: 'echarts', url: '/echart'},
        {name: '时间选择器', url: '/dateTime'},
        {name: '选择年月', url: '/selectMonth'},
        {name: '日历及日期选择器', url: '/calendar'},
        {name: '下拉加载更多', url: '/pulltoload'}
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
