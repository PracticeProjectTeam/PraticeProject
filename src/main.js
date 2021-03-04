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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
