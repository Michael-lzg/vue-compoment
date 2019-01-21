<template>
  <div class="mainPage" @click="inputLoseBlur">
    <h2>div模拟textarea实现高度自适应</h2>
    <div class="test_box" contenteditable="true"></div>

    <h2>JS控制textarea高度自适应</h2>
    <textarea id="text-adaption" class="text-adaption" rows="1" @keyup="init"></textarea>

    <div class="remark">

    </div>
    <!-- <div class="footer">
      <div class="test_box plbtn" contenteditable="true"></div>
      <span>评论</span>
    </div> -->
    <footer @click.stop="noLoseInput">
      <form action="javascript:;" class="pl" @submit="sendMessage">
        <!-- <i class="icon-icon_normal_yuyinshuru2 iconfont voice-input-icon c1"></i> -->
        <textarea v-model.trim="content" id="chatInput" class="input-content" rows="1" @keyup.enter="sendMessage($event)" @click.stop="clickInput" @keyup="init" @blur="inputLoseBlur"></textarea>
        <img src="../../assets/img/chat-add.png" class="chat-add-icon" v-show="content.trim().length<=0" @click.stop="showBtn">
        <input type="button" class="send" v-show="content.trim().length>0" value="发送" @click.stop="sendMessage" />
      </form>
      <div class="box" v-show="showIcon">
        <div class="iconList fl" v-for="(item,index) in iconList" :key="index" @click="doSomething(index)">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      showIcon: false,
      isFocus: false,
      iconList: [
        { title: '照片', icon: '#icon-icon_more_zhaopian' },
        { title: '拍照', icon: '#icon-icon_more_paizhao' },
        { title: '小视频', icon: '#icon-icon_more_xiaoshipin' },
        { title: '语音通话', icon: '#icon-icon_more_yuyintonghua' },
        { title: '视频通话', icon: '#icon-icon_more_shipintonghua' },
        { title: '会诊意见', icon: '#icon-icon_more_huizhenyijian1' }
      ]
    }
  },
  methods: {
    getId (id) {
      return document.getElementById(id)
    },
    init () {
      this.getId('text-adaption').style.height = 'auto'
      this.getId('text-adaption').style.height =
        this.getId('text-adaption').scrollHeight + 'px'
    },
    sendMessage (e) {
      e.preventDefault()
      if (!this.content) {
        return
      }
      alert(this.content)
      this.content = ''
      this.showIcon = false
      this.getId('chatInput').style.height = 30 * this.dpr + 'px'
      // document.getElementById('chatInput').blur()
      this.$nextTick(() => {
        document.body.scrollTop = document.body.scrollHeight + 200
      })
    },
    clickInput () {
      this.isFocus = true
      this.showIcon = false
      let cnt = 0
      this.timerId = setInterval(() => {
        if (cnt < 3) {
          cnt++
        } else {
          clearInterval(this.timerId)
          this.timerId = null
          return
        }
        this.$nextTick(() => {
          document.body.scrollTop = document.body.scrollHeight + 200
        })
        clearInterval(this.timerId)
      }, 300)
    },
    inputLoseBlur () {
      if (!this.isFocus) return
      this.showIcon = false
      document.getElementById('chatInput').blur()
      this.isFocus = false
      this.$nextTick(() => {
        document.body.scrollTop = document.body.scrollHeight + 200
      })
    },
    noLoseInput () {
      console.log('不失焦')
    },
    showBtn () {
      this.isFocus = true
      this.showIcon = !this.showIcon
      document.getElementById('chatInput').blur()
      this.$nextTick(() => {
        document.body.scrollTop = document.body.scrollHeight
      })
    },
    doSomething () {}
  },
  mounted () {}
}
</script>

<style scoped lang="less">
.mainPage {
  height: 100%;
  padding: 0.3rem;
  font-size: 0.32rem;
  padding-bottom: 1rem;
}
h2 {
  text-align: center;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
}

.test_box {
  width: 100%;
  min-height: 0.2rem;
  max-height: 3rem;
  _height: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.1rem;
  outline: 0;
  // border: 0.01rem solid #bbb;
  font-size: 0.32rem;
  line-height: 0.48rem;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.2rem 0.3rem;
  padding-right: 1rem;
  > span {
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
    color: #1890ff;
  }
}
.plbtn {
  width: 100%;
  background-color: #fff;
  border-radius: 0.4rem;
}

.text-adaption {
  width: 100%;
  height: 0.68rem;
  min-height: 0.2rem;
  max-height: 3rem;
  _height: 3rem;
  // overflow: hidden;
  padding: 0.1rem 0.2rem;
  resize: none;
  line-height: 0.48rem;
  font-size: 0.32rem;
  // border: 0.01rem solid #ccc;
  outline: 0 none;
  border-radius: 0.06rem;
  box-sizing: border-box;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  .voice-input-icon {
    position: absolute;
    bottom: 0.3rem;
    left: 0.3rem;
    width: 0.4rem;
    font-size: 0.4rem;
    // height: 20px;
  }
  .send {
    position: absolute;
    bottom: 0.2rem;
    right: 0.3rem;
    font-size: 0.28rem;
    line-height: 0.6rem;
    color: #597ef7;
    background-color: #fff;
  }
  .chat-add-icon {
    position: absolute;
    bottom: 0.2rem;
    right: 0.3rem;
    width: 0.6rem;
    height: 0.6rem;
  }
  .input-content {
    padding: 0.1rem 0.2rem;
    background-color: #f1f2f5;
    border-radius: 032rem;
    caret-color: #597ef7;
    // height: 30px;
    line-height: 0.4rem;
    color: #000000;
    font-size: 0.28rem;
    width: 100%;
    min-height: 0.4rem; /*设置最小高度*/
    max-height: 2rem; /*设置最大高度超过300px时出现滚动条*/
    _height: 2rem;
  }
}
.pl {
  position: relative;
  width: 100%;
  // padding: 10px 55px 10px 45px;
  padding: 0.2rem 1.1rem 0.2rem 0.3rem;
  font-size: 0;
}
.box {
  width: 100%;
  height: 3.44rem;
  .iconList {
    width: 33.3%;
    text-align: center;
    margin-bottom: 0.3rem;
    // font-size: 0;
    svg {
      width: 0.8rem;
      height: 0.8rem;
      // margin-bottom: 6px;
    }
    .title {
      font-size: 0.28rem;
      color: black;
      margin-top: 0.2rem;
    }
  }
}
.noMessage {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.32rem;
}
.timeOut {
  padding: 0.2rem 0;
  background-color: #d6e4ff;
  text-align: center;
  font-size: 0.32rem;
}
.remark{
  background-color:#eee;
  height: 20rem;
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
}
</style>
