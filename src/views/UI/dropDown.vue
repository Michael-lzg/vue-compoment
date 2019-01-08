<template>
  <div>
    <dropDown :list="list" @selectChange="selectChange"
              :default-props="defaultProps" :select-item="selectItem"></dropDown>
    <!--<div class="item">-->
      <!--<radio :list="list" @selectChange="selectChange"></radio>-->
    <!--</div>-->
    <!--<div class="item">-->
      <!--<dropDown :list="list" @selectChange="selectChange"></dropDown>-->
    <!--</div>-->
    <!--<div class="title" @click="toSelect">弹窗选择</div>-->
    <!--<selectBox :list="list" @submitSelect="submitSelect" @cancelSelect="cancelSelect" v-if="showSelect"></selectBox>-->
  </div>
</template>

<script>
// import radio from '../components/radio'
import dropDown from '../../components/dropdown'
// import selectBox from '../components/selectBox'
export default {
  data () {
    return {
      showSelect: false,
      defaultProps: {
        name: 'myName',
        /* 唯一标识 */
        code: 'myId'
      },
      list: [
        { myId: 1, myName: '下拉选择一' },
        { myId: 2, myName: '下拉选择二' },
        { myId: 3, myName: '下拉选择三' }
      ],
      selectItem: {
        myId: 2, myName: '下拉选择二'
      }
    }
  },
  // components: { radio, dropdown, selectBox },
  components: { dropDown },
  methods: {
    selectChange (val) {
      alert(val[this.defaultProps.name])
    },
    toSelect () {
      this.showSelect = true
    },
    submitSelect (val) {
      alert(val[this.defaultProps.id])
      this.selectItem = val
      this.showSelect = false
    },
    cancelSelect () {
      this.showSelect = false
    }
  }
}
</script>

<style scoped lang="less">
.item{
  /*margin-bottom: 10px;*/
  background-color: #fff;
}
.title{
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  background-color: #fff;
}
</style>
