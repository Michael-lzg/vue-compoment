// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './JS/flexible'

/* 引入自定义组件 */
import Dialog from './components/dialog'
import VueScroller from 'vue-scroller'
import selectDialog from './components/selectDialog'
import showTip from './components/showTip'
Vue.use(VueScroller)

Vue.prototype.$dialog = Dialog
Vue.prototype.$selectDialog = selectDialog
Vue.prototype.$showTip = showTip
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
