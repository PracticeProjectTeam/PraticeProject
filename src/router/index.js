// 引入vue
import Vue from 'vue'
// 引入vuerouter
import VueRouter from 'vue-router'
// 引入路由表
import routes from './routes'


// 声明使用
Vue.use(VueRouter)
//重写router的push/replace方法，解决重复访问同一路径时报错问题
//push/replace方法返回一个promise对象,参数二onComplete是成功时执行的回调函数,新版vue-router需要填入该值,否则重复访问同一路径时报错
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, onComplete=()=>{}, onAbort){
    return originPush.call(this,location,onComplete,onAbort)
}
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location, onComplete=()=>{}, onAbort){
    return originReplace.call(this,location,onComplete,onAbort)
}
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
