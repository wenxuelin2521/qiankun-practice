import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 当第一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载的子应用
  initGlobalState, // 微前端之间的通信
  start // 启动
} from 'qiankun'

// import './store-qiankun'
// import action from './store-reactive'


Vue.config.productionTip = false



new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'sub-vue',
    entry: '//localhost:8001',
    activeRule: '/sub-vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      msg: {
        data: {
          mt: 'you are sub-vue'
        }
      },
      fn: {
        sayHi(msg) {
          console.log('sub-vue:', msg)
        },
        // getGlobalState: action.getGlobalState // 下发getGlobalState方法
      }
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:8002',
    activeRule: getActiveRule('/sub-react'),
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      msg: {
        data: {
          mt: 'you are sub-react'
        }
      },
      fn: {
        sayHi(msg) {
          console.log('sub-react:', msg)
        }
      }
    }
  },
])

function getActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(`${routerPrefix}`)
}

setDefaultMountApp('sub-react')

runAfterFirstMounted(() => {
  console.log('第一个子应用加载完毕后的回调')
})

start({
  // strictStyleIsolation: true // 开启严格的样式隔离模式
})