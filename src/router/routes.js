// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
const Order=()=>import('@/pages/order/order.vue') // 按需加载
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue') // 按需加载
//const AfterSale=()=>import('@/pages/order/afterSale/afterSale.vue') // 按需加载
//const Particulars=()=>import('@/pages/order/particulars/particulars.vue') // 按需加载
const WriteOrder=()=>import('@/pages/order/writeOrder/writeOrder.vue') // 按需加载

export default [
  // 主页路由
  {
    path:'/home',
    component:Home
  
  },
  //订单路由
  {
    path:'/order',
    component:Order,
    children:[
      /* 售后服务 */
      // {
      //   path:'/order/afterSale',
      //   component:AfterSale
      // },
      /* 填写订单 */
      // {
      //   path:'/order/writeOrder',
      //   component:WriteOrder
      // }
    ]
  },
  // 商品列表
  {
    path:'/goodlist',
    component:Goodlist
  },
  /* 订单详情 */
  {
    path:'/order/writeOrder',
    component:WriteOrder
  },
  // 重定向
  {
    path:'/',
    redirect:'/goodlist'
  }
]