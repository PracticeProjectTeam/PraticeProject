

// 引入组件
// 主页
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
// 商品列表
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue')
// 结算页
const Settlement=()=>import('@/pages/Settlement/Settlement.vue')
// 搜索结果页
const Search=()=>import('@/pages/Search/Search.vue')
// 商品详情页
const Item=()=>import('@/pages/Item')

const Cart=()=>import('@/pages/Cart/Cart.vue') // 按需加载
const Showgoods=()=>import('@/pages/Cart/showGoods.vue') // 按需加载
const Order=()=>import('@/pages/order/order.vue') // 按需加载

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
    path:'/goodlist/:categoryid',
    component:Goodlist
  },
  // 商品详情
  {
    path:'/item/:ids',
    component:Item
  },
  // 结算页
  {
    path:'/settlement',
    component:Settlement
  },
  // 搜索结果页
  {
    path:'/search/:keyword',
    component:Search
  },
  // 重定向
  {
    path:'/',
    redirect:'/home'
  },
  //订单路由
  {
    path:'/order',
    component:Order
  
  }
]