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

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
