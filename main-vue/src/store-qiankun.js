

// 基本使用
// 1. 引入api
import { initGlobalState } from 'qiankun'
import Vue from 'vue'

// 2. 传入数据，创建一个实例
const actions = initGlobalState({
    // 初始化state，里面内容您随意
    userName: 'xiaoming',
    age: 18,
    current:'11'
})

// 3. 实例方法进行监听：onGlobalStateChange
actions.onGlobalStateChange((state, prev) => {
    console.log('main state change', state, prev)
})

// 4.绑定到原型上，方便调用
Vue.prototype.$actions = actions