import Vbutton from './components/button.vue'
import Vfooter from './components/footer.vue'
import showTip from './components/showTip'
import dialog from './components/dialog'

const vUI = {
  Vbutton,
  Vfooter
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(vUI).forEach(key => {
    Vue.component(key, vUI[key])
  })

  Vue.prototype.$showTip = showTip
  Vue.prototype.$dialog = dialog
  // Vue.use(ToastPlugin)
  // Vue.use(DialogPlugin)
  // Vue.use(ActionsheetPlugin)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // 通过use方式全部引入
}

const API = {
  install,
  ...vUI
}

export default API // 通过插件单独引入
