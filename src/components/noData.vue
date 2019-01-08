<template>
  <div class="noData">
    <img src="../assets/img/no_data.png" alt="">
    <div class="txt">{{txt}}</div>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.noData{
  text-align: center;
  padding-top: 2rem;
  font-size: 0.32rem;
  .txt{
    margin-top: 0.2rem;
    color: #888;
  }
  >img{
    width: 2rem;
  }
}
</style>
