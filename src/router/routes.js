// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
const Cart=()=>import('@/pages/Cart/Cart.vue') // 按需加载
const Showgoods=()=>import('@/pages/Cart/showGoods.vue') // 按需加载
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue') // 按需加载

export default [
  // 主页路由
  {
    path:'/home',
    component:Home
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/Showgoods',
    component:Showgoods
  },
  
  
  // 商品列表
  {
    path:'/goodlist',
    component:Goodlist
  },
  // 重定向
  {
    path:'/',
    redirect:'/goodlist'
  }
]