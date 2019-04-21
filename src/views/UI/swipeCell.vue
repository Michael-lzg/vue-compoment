<template>
  <div class="swipeCell">
    <van-swipe-cell :right-width="130" :left-width="130">
      <span slot="left">选择</span>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import { SwipeCell, Cell, CellGroup } from 'vant'
Vue.use(Cell).use(CellGroup).use(SwipeCell)
// Vue.use(SwipeCell)
export default {
  name: 'swipeCell'
}
</script>

<style lang='less'>
.swipeCell{
  .van-swipe-cell {
    &__left,
    &__right {
      color: white;
      font-size: 15px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
      background-color: red;
    }
  }
}

</style>
