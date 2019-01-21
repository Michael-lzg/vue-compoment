
<template>
  <div class="noData">
    <img :src="img" alt="">
    <div class="txt">{{txt}}</div>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String
    },
    img: {
      type: String,
      default: require('../assets/img/no_data.png')
    }
  }
}
</script>

<style scoped lang="less">
.noData {
  text-align: center;
  font-size: 0.40rem;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  padding: 0 15px;
  transform: translate(-50%,-50%);
  .txt {
    margin-top: 0.2rem;
    color: #888;
  }
  > img {
    width: 2.8rem;
  }
}
</style>
