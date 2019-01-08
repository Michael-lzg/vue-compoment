<style lang="less">
.little-tip {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.2rem 0.26rem;
  border-radius: 0.08rem;
  text-align: center;
  font-size: 0;
  max-width: 3.8rem;
  img {
    margin: 0.1rem 0;
    width: 0.72rem;
  }
  div {
    text-align: center;
    display: block;
    color: #ffffff;
    font-size: 0.32rem;
    line-height: 0.48rem;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
.loading {
  transition: 0.5s;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(200deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div>
    <transition name="fade">
      <div class="little-tip" v-show="showLittleTip">
        <img src="../../../assets/img/success.png" alt="" v-if="type==='success'">
        <img src="../../../assets/img/fail.png" alt="" v-if="type==='fail'">
        <img src="../../../assets/img/warning.png" alt="" v-if="type==='warning'">
        <img src="../../../assets/img/loading.png" alt="" v-if="type==='loading'" class="loading">
        <div>{{littleTipMessage}}</div>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'little-tip',
  data () {
    return {
      showLittleTip: true,
      littleTipMessage: '',
      type: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.showLittleTip = false
    }, 1500)
  }
}
</script>
