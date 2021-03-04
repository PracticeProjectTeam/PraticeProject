// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 声明使用
Vue.use(Vuex)
// 引入modules对象
import modules from './modules/index'

export default new Vuex.Store({
  modules
})