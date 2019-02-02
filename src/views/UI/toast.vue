<template>
  <div class="list">
    <div class="item" @click="successTip">成功提示</div>
    <div class="item" @click="failTip">失败提示</div>
    <div class="item" @click="warningTip">警示提示</div>
    <div class="item" @click="loadingTip">加载提示</div>
    <div class="item" @click="oneTip">字数少</div>
    <div class="item" @click="multiTip">字数多</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      list: [
        { myId: 1, myName: '选项一' },
        { myId: 2, myName: '选项二' },
        { myId: 3, myName: '选项三' }
      ]
    }
  },
  methods: {
    successTip () {
      this.$showTip({
        littleTipMessage: '成功提示',
        type: 'success'
      })
    },
    failTip () {
      this.$showTip({
        littleTipMessage: '失败提示',
        type: 'fail'
      })
    },
    warningTip () {
      this.$showTip({
        littleTipMessage: '警示提示',
        type: 'warning'
      })
    },
    loadingTip () {
      this.$showTip({
        littleTipMessage: '正在加载',
        type: 'loading'
      })
    },
    oneTip () {
      this.$showTip({
        littleTipMessage: '字数少字数少'
      })
    },
    multiTip () {
      this.$showTip({
        littleTipMessage: '字数多怎么办字数多怎么办'
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/css/custom.less';
.list{
  padding: 0 0.3rem;
}
.item{
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  color: @kduiThemeColor;
  margin-top: 0.2rem;
  border: 0.01rem solid @kduiThemeColor;
  border-radius: 0.08rem;
  font-size: 0.32rem;
}
</style>
