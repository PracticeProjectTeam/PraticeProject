import router from '../router/index.js'
// 引入组件
// 主页
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
// 商品列表
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue')
// 结算页
const Settlement=()=>import('@/pages/Settlement/Settlement.vue')
// 搜索结果页
const Search=()=>import('@/pages/Search/Search.vue')
const Detail=()=>import('@/pages/Detail/Detail.vue')
const Login=()=>import('@/pages/Login/Login.vue')

const Cart=()=>import('@/pages/Cart/Cart.vue') // 按需加载
const Showgoods=()=>import('@/pages/Cart/showGoods.vue') // 按需加载
const Order=()=>import('@/pages/order/order.vue') // 按需加载
//WriteOrder
const WriteOrder=()=>import('@/pages/order/writeOrder/writeOrder.vue') // 按需加载

export default [
  // 主页路由
  {
    path:'/home',
    component:Home
  },
  // 购物车
  {
    path:'/cart',
    component:Cart,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('UID')){
        next()
      }else{
        router.push('/login')
      }
    }
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
    component:Order,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('UID')){
        next()
      }else{
        router.push('/login')
      }
    }
  },
  
  /* 订单详情 */
  {
    path:'/order/writeOrder',
    component:WriteOrder
  },
  {
    path:'/detail/:ids',
    name:'detail',
    component:Detail
  },
  {
    path:'/login',
    name:'login',
    meta:"login",
    component:Login
  }
]