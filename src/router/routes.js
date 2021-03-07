// 引入组件
// 主页
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
// 商品列表
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue')
// 结算页
const Settlement=()=>import('@/pages/Settlement/Settlement.vue')
// 搜索结果页
const Search=()=>import('@/pages/Search/Search.vue')


export default [
  // 主页路由
  {
    path:'/home',
    component:Home
  
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
  }
]