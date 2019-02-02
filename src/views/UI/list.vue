<template>
  <div class="mainPage">
    <tableBar :activeIndex="activeIndex" :list="tabList"></tableBar>
    <searchBar defaultText="搜索" @toSearch='toSearch' @cancelSearch='cancelSearch'></searchBar>
    <div class="list">
      <scroller ref="scroller" class="my-scroller" :on-refresh="refresh" :on-infinite="infinite" noDataText="已无更多数据">
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <span>这是一行数据{{index+1}}</span>
        </div>
      </scroller>
    </div>
  </div>

</template>

<script>
import tableBar from '../../components/tableBar'
import searchBar from '../../components/searchBar'
export default {
  name: 'list',
  components: { tableBar, searchBar },
  data () {
    return {
      activeIndex: 0,
      tabList: [
        { name: '我接收的', url: '/list' },
        { name: '我发起的', url: '/empty' }
      ],
      params: {
        pageNum: 0,
        pageSize: 20
      },
      list: []
    }
  },
  methods: {
    refresh (done) {
      this.list = []
      this.params.pageNum = 1
      this.getList(done)
    },
    infinite (done) {
      if (this.list.length > 25) {
        this.$refs.scroller.finishInfinite(true)
        if (this.list.length < 10) {
          document.getElementsByClassName('loading-layer')[0].style.display = 'none'
        }
        document.getElementsByClassName('pull-to-refresh-layer')[0].style.display = 'none'
      } else {
        this.params.pageNum++
        this.getList(done)
      }
    },
    getList (done) {
      document.getElementsByClassName('pull-to-refresh-layer')[0].style.display = 'block'
      for (let i = 0; i < 10; i++) {
        this.list.push({id: i + 1})
      }
      done && done()
    },
    toSearch () {
      console.log('搜索')
    },
    cancelSearch () {
      console.log('取消搜索')
    }
  },
  created () {
    // this.getList()
  }
}
</script>

<style scoped lang="less">
.mainPage{
  padding-top: 0.9rem;
  height: 100%;
}
.list{
  height: calc(100% - 1rem);
  background-color: #fff;
  position: relative;
}
.listItem{
height: 0.9rem;
line-height: 0.9rem;
font-size: 0.32rem;
padding:0 15px;
}
</style>
