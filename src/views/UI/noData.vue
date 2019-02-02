<template>
  <div class="mainPage">
    <tableBar :activeIndex="activeIndex" :list="tabList"></tableBar>
    <searchBar defaultText="搜索" @toSearch='toSearch' @cancelSearch='cancelSearch'></searchBar>
    <div class="list">
      <noData txt="暂无收到的消息"></noData>
    </div>
  </div>
</template>

<script>
import noData from '../../components/noData'
import tableBar from '../../components/tableBar'
import searchBar from '../../components/searchBar'
export default {
  name: 'empty',
  components: { noData, tableBar, searchBar },
  data () {
    return {
      activeIndex: 1,
      tabList: [
        { name: '我接收的', url: '/list' },
        { name: '我发起的', url: '/empty' }
      ]
    }
  },
  methods: {
    toSearch () {
      console.log('搜索')
    },
    cancelSearch () {
      console.log('取消搜索')
    }
  }
}
</script>

<style scoped lang="less">
.mainPage {
  padding-top: 0.9rem;
  height: 100%;
}
.list {
  height: calc(100% - 1rem);
  // height: 100%;
  background-color: #fff;
  position: relative;
}
.listItem {
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.32rem;
  padding: 0 15px;
}
</style>
