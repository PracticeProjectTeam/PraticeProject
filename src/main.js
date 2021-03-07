import Vue from 'vue'
import App from './App.vue'
// 导入store
import store from '@/store/index.js'
// 引入路由
import router from '@/router/index.js'
// 引入swiper
import '@/plugin/swiper.js'
// 引入element-ui
import '@/plugin/element-ui.js'
// 引入所有的api接口函数
import * as API from '@/api'

Vue.config.productionTip = false

// 把API接口函数暴露在每个组件的实例对象上
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
