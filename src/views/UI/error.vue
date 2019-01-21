<template>
  <div class="maingPage">
    <noData txt="该应用已关闭，请重新打开"></noData>
  </div>
</template>

<script>
import noData from '../../components/error'

export default {
  components: { noData }

}
</script>

<style scoped>
.maingPage{
  height: 100%;
  background-color: #fff;
}
</style>
