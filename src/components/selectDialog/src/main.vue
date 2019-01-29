<style lang="less" scoped>
@import '../../../assets/css/custom.less';
  .select-dialog-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog-box {
    position: fixed;
    background-color: #FFFFFF;
    width: 5.4rem;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 0.32rem;
    border-radius: 0.16rem;
    .header {
      color: #222222;
      padding: 0.3rem 0.3rem 0;
      font-size: 0.36rem;
      line-height: 0.56rem;
      text-align: center;
    }
    .body {
      padding: 0 0.3rem 0.3rem;
      color: #555555;
      font-size: 0.32rem;
      line-height: 0.48rem;
    }
    .change-body{
      padding-top: 0.3rem !important;
      color: #222222 !important;
    }
    .list-item{
      text-align: center;
      color: #555555;
      font-size: 0.32rem;
      line-height: 0.56rem;
      padding: 0.22rem 0.3rem 0.22rem 0.3rem;
      background-color: #fff;
      border-top: 0.01rem solid #EEEEEE;
    }
    .footer {
      border-top: 0.01rem solid #EEEEEE;
      white-space: nowrap;
      font-size: 0;
      .my-cancel-btn {
        padding: 0.22rem 0;
        font-size: 0.36rem;
        line-height: 0.56rem;
        width: 50%;
        color: #222222;
        border-radius: 0 0 0 0.16rem;
        border-right: 0.01rem solid #EEEEEE;
        background-color: white;
      }
      .confirm-btn {
        padding: 0.22rem 0;
        font-size: 0.36rem;
        line-height: 0.56rem;
        width: 50%;
        color: #222222;
        border-radius: 0 0 0.16rem 0.16rem;
        background-color: white;
        color: @kduiThemeColor;
      }
    }
  }
  textarea {
    background-color: #F5F5F5;
  }
</style>
<template>
  <div class="select-dialog-mask" v-if="showDialog" @click.self="cancelClick">
    <div class="dialog-box">
      <header class="header" v-html="title" v-if="title">
      </header>
      <article class="body tc" v-html="text" v-if="text" :class="!title ? 'change-body' : ''">
      </article>
      <div class="list-item" v-for="(item,index) in list" :key="index"
           @click="toSelect(item,index)" :class="{'kduiThemeColor':item.selected === 'true'}">
        {{item[defaultProps.name]}}
      </div>
      <footer class="footer tc">
        <div class="my-cancel-btn dib" v-show="showCancelBtn" v-text="cancelText" @click="cancelClick">
        </div>
        <div class="confirm-btn" :style="{width: showCancelBtn ? '50%' : '100%'}" v-text="confirmText"
                @click="confirmClick" :class="showCancelBtn ? 'dib' : ''">
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialog-box',
  data () {
    return {
      showDialog: true,
      title: '',
      /* 文本 */
      text: '',
      list: [],
      selectItem: {},
      defaultProps: {
        name: 'name',
        /* 唯一标识 */
        code: 'id'
      },
      showCancelBtn: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: null
    }
  },
  methods: {
    cancelClick () {
      this.showDialog = false
    },
    toSelect (item) {
      if (this.selectItem[this.defaultProps.code]) {
        this.$set(this.selectItem, 'selected', 'false')
      }
      this.$set(item, 'selected', 'true')
      this.selectItem = item
    },
    confirmClick () {
      console.log(this.selectItem)
      this.confirm(this.selectItem)
      this.showDialog = false
    }
  },
  mounted () {
    this.list.forEach((item) => {
      this.$set(item, 'selected', 'false')
    })
    for (let i = 0; i < this.list.length; i++) {
      if (this.selectItem[this.defaultProps.code] === this.list[i][this.defaultProps.code]) {
        this.selectItem = this.list[i]
        this.$set(this.list[i], 'selected', 'true')
        break
      }
    }
  }
}
/* 使用例子 支持列表属性名配置(不传有默认值)
  this.$selectDialog({
    title: '流程结束',
    text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
    showCancelBtn: true,
    confirmText: '确认',
    defaultProps: {
      name: 'myName',
      /!* 唯一标识 *!/
      code: 'myId'
    },
    list: [
      { myId: 1, myName: '选项一' },
      { myId: 2, myName: '选项二' },
      { myId: 3, myName: '选项三' }
    ],
    // selectItem: {
    //       myId: 2, myName: '选项二'
    //     },
     confirm () {
    }
  }) */
</script>
