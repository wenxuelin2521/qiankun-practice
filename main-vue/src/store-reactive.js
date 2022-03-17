import { initGlobalState } from 'qiankun'
import Vue from 'vue'

// Vue.observable是为了让initialState变成可响应
const initialState = Vue.observable({
    userName: 'xiaoming',
    age: 18,
    current:'11'
})

// 使用initGlobalState创建一个实例，实例方法：onGlobalStateChange，getGlobalState，setGlobalState
const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  // newState: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? initialState[key] : initialState
}
Vue.prototype.$actions = actions

export default actions