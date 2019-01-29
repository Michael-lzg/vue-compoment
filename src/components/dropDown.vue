<template>
  <div :class="showList ? 'mask' : ''" @click.self="showSelectList">
    <div class="top">
      <div class="title pr" @click="showSelectList" :class="showList ? 'add-border' : ''">
        {{list[selectIndex][defaultProps.name]}}
        <img src="../assets/img/down-icon.png" :class="showList ? 'down-icon-up' : ''"
             alt="" class="down-icon">
      </div>
    </div>
    <div class="selectList dropDown" v-if="showList">
      <div class="listItem pr" v-for="(item,index) in list" :key="index"
           @click="toSelect(item,index)" :class="{'kduiThemeColor': selectIndex === index}">
        {{item[defaultProps.name]}}
        <i class="iconfont icon-i kduiThemeColor fr" v-if="selectIndex === index"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectIndex: '',
      showList: false
    }
  },
  props: {
    defaultProps: {
      type: Object,
      default () {
        return {
          name: 'name',
          /* 唯一标识 */
          code: 'id'
        }
      }
    },
    list: {
      type: Array
    },
    selectItem: {
      type: Object
    }
  },
  methods: {
    showSelectList () {
      this.showList = !this.showList
    },
    toSelect (item, index) {
      this.selectIndex = index
      this.showList = false
      this.$emit('selectChange', item)
    }
  },
  created () {
    this.list.forEach((item) => {
      this.$set(item, 'selected', 'false')
    })
    if (!this.selectItem[this.defaultProps.code]) {
      this.selectIndex = 0
      this.$set(this.list[0], 'selected', 'true')
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (this.selectItem[this.defaultProps.code] === this.list[i][this.defaultProps.code]) {
          this.selectIndex = i
          this.$set(this.list[i], 'selected', 'true')
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .mask{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .top{
    padding-left: 0.3rem;
    background-color: white;
  }
  .add-border{
    border-bottom: 0.01rem solid #EEEEEE;
  }
  .title{
    color: #000000;
    font-size: 0.32rem;
    line-height: 0.56rem;
    padding: 0.22rem 0.9rem 0.22rem 0;
    .down-icon{
      position: absolute;
      top: 0.42rem;
      right: 0.3rem;
      width: 0.28rem;
      height: 0.16rem;
      -webkit-transition: transform 0.5s;
    }
    .down-icon-up{
      transform: rotate(180deg);
      -webkit-transform:rotate(180deg)
    }
  }
  .selectList{
    padding-left: 0.3rem;
    background-color: #fff;
    .listItem{
      color: #555555;
      font-size: 0.32rem;
      line-height: 0.56rem;
      padding: 0.22rem 0.3rem 0.22rem 0;
      background-color: #fff;
      border-bottom: 0.01rem solid #EEEEEE;
      >i{
        font-size: 0.32rem;
      }
    }
    .listItem:last-child{
      border-bottom: none;
    }
  }
  .dropDown{
    animation: down 0.3s linear;
    overflow: hidden;
  }

  @keyframes down{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
