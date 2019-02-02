<template>
  <div class="list">
    <div class="item" @click="comfirm1">一个按钮(不带标题)</div>
    <div class="item" @click="comfirm2">两个按钮(带有标题)</div>
    <div class="item" @click="feedback">填写反馈</div>
    <div class="item" @click="toSelect">弹窗选择</div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
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
    comfirm1 () {
      this.$dialog.show({
        title: '删除提示',
        text: '是否确定删除此标签？',
        showCancelBtn: false,
        confirmText: '我知道了',
        confirm (content) {
          alert('删除成功')
        }
      })
    },
    comfirm2 () {
      this.$dialog.show({
        title: '删除提示',
        text: '是否确定删除此标签？',
        showCancelBtn: true,
        confirmText: '确认',
        confirm (content) {
          alert('删除成功')
        }
      })
    },
    feedback () {
      this.$dialog.show({
        title: '请填写反馈',
        text: '辅助文本',
        type: 'input',
        placeholder: '请输入反馈内容...',
        length: 10,
        showCancelBtn: true,
        confirmText: '确认',
        confirm (content) {
          alert(content)
        }
      })
    },
    toSelect () {
      this.$selectDialog.show({
        title: '流程结束',
        text: '请选择其中一项进行处理',
        showCancelBtn: true,
        confirmText: '确认',
        defaultProps: {
          name: 'myName',
          code: 'myId'
        },
        list: this.list,
        selectItem: {
          myId: 2, myName: '选项二'
        },
        confirm (content) {
          alert(content[this.defaultProps.name])
        }
      })
    }
  },
  destroyed () {
    this.$dialog.hide()
    this.$selectDialog.hide()
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
