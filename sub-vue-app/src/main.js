import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import './public-path' // 引入public-path


Vue.config.productionTip = false



let instance = null
// 封装一下渲染函数
function render(props={}) {
  const {container} = props
  console.log('container', container)
  !instance && (instance = new Vue({
    render: h => h(App)
  }).$mount(container?container.querySelector('#app'):'#app'))
}

// 生命周期 - 挂载前
export async function bootstrap(props) {
  console.log('one bootstrap')
}

// 生命周期 - 挂载后
export async function mount(props) {
  console.log('sub-vue mount', props)

  // 设置主应用下发的方法
  // 将主应用传递过来的 props.msg 的 data 绑定到子应用的原型链上。这样后面就可以直接访问到了
  Vue.prototype.$msg = props.msg.data
  // 主应用传递过来的 props.fn 是一个对象。循环遍历下，将各个属性绑定到子应用的原型链上
  Object.keys(props.fn).forEach(method => {
    Vue.prototype[`$${method}`] = props.fn[method]
  })

  console.log('========123123123', props)

  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState

  // 渲染
  render(props)
}

// 生命周期 - 解除挂载
export async function unmount() {
  console.log('one unmount')
  instance.$destroy()
  instance = null
}

// 单独启动，不依赖qiankun，本地调试
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}