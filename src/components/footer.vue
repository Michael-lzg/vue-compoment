<template>
  <div>
    <ul>
      <li v-for="(item,index) in items" :key='index' @click="toUrl(index)">
        <img :src="item.img" alt="" v-if="$route.path==item.url" class="img">
        <img :src="item.img1" alt="" v-if="$route.path!==item.url" class="img">
        <div class="name" :class="{'c1':$route.path==item.url}">{{item.name}}</div>
      </li>
      <div class="bt1"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '组件',
          url: '/',
          img: require('../assets/img/on1.png'),
          img1: require('../assets/img/off1.png')
        },
        {
          name: '插件',
          url: '/plugin',
          img: require('../assets/img/on2.png'),
          img1: require('../assets/img/off2.png')
        }
        // {
        //   name: '签到',
        //   url: '/',
        //   img: require('../assets/img/on4.png'),
        //   img1: require('../assets/img/off4.png')
        // },
        // {
        //   name: '统计',
        //   url: '/statistics',
        //   img: require('../assets/img/on5.png'),
        //   img1: require('../assets/img/off5.png')
        // },
        // {
        //   name: '我的',
        //   url: '/mine',
        //   img: require('../assets/img/on3.png'),
        //   img1: require('../assets/img/off3.png')
        // }
      ]
    }
  },
  methods: {
    toUrl (i) {
      this.$router.replace({
        path: this.items[i].url
      })
    }
  }
}
</script>

<style scoped lang='less'>
ul {
  width: 100%;
  height: 1.1rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  li {
    float: left;
    text-align: center;
    font-size: 0.24rem;
    height: 1.1rem;
    width: 50%;
    .img {
      width: 0.48rem;
      height: 0.48rem;
      margin: 0 auto;
      margin-top: 0.18rem;
    }
    .name {
      text-align: center;
      color: #888888;
      line-height: 0.44rem;
    }
  }
}
.cblue {
  color: #1890ff !important;
}
</style>
