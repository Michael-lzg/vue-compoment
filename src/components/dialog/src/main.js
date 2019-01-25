import Vue from 'vue'
import Main from './main.vue'

let DialogConstructor = Vue.extend(Main)

let instance
const Dialog = {
  show (options) {
    options = options || {}
    instance = new DialogConstructor({
      data: options
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance.vm
  },
  hide () {
    if (instance) {
      instance.vm.showDialog = false
    }
  }

}
export default Dialog
