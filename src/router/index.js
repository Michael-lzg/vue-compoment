import Vue from 'vue'
import Router from 'vue-router'
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../views/UI', false, /\.vue$/)
console.log(requireAll(req))
// console.log(req)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => {
        require(['../views/UI/index.vue'], resolve)
      }
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: (resolve) => {
        require(['../views/plugin/index.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component: (resolve) => {
        require(['../views/UI/search.vue'], resolve)
      }
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: (resolve) => {
        require(['../views/UI/textarea.vue'], resolve)
      }
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: (resolve) => {
        require(['../views/UI/dialog.vue'], resolve)
      }
    },
    {
      path: '/button',
      name: 'button',
      component: (resolve) => {
        require(['..//views/UI/button'], resolve)
      }
    },
    {
      path: '/action-sheet',
      name: 'actionSheet',
      component: (resolve) => {
        require(['../views/UI/actionSheet.vue'], resolve)
      }
    },
    {
      path: '/error',
      name: 'error',
      component: (resolve) => {
        require(['../views/UI/error.vue'], resolve)
      }
    },
    {
      path: '/noData',
      name: 'noData',
      component: (resolve) => {
        require(['../views/UI/noData.vue'], resolve)
      }
    },
    {
      path: '/list',
      name: 'list',
      component: (resolve) => {
        require(['../views/UI/list.vue'], resolve)
      }
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: (resolve) => {
        require(['../views/UI/dropDown.vue'], resolve)
      }
    },
    {
      path: '/toast',
      name: 'showTip',
      component: (resolve) => {
        require(['../views/UI/showTip.vue'], resolve)
      }
    }
  ]
})

export default router
