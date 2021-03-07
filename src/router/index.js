// 引入vue
import Vue from 'vue'
// 引入vuerouter
import VueRouter from 'vue-router'
// 引入路由表
import routes from './routes'

// 声明使用
Vue.use(VueRouter)
// 创建并暴露路由器
export default new VueRouter({
  mode:"history",
  routes,
  // 设置路由跳转的时候显示顶部
  scrollBehavior() {
    // x轴 y轴
    return {x:0,y:0}
  }
})
