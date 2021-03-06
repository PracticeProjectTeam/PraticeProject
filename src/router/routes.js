// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
const Order=()=>import('@/pages/order/order.vue') // 按需加载

export default [
  //主页路由
  {
    path:'/',
    component:Home
  
  },
  //订单路由
  {
    path:'/order',
    component:Order
  
  }
]