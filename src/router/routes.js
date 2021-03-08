// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
const Goodlist=()=>import('@/pages/Goodlist/Goodlist.vue') // 按需加载
const Item=()=>import('@/pages/Item/index.vue')
export default [
  // 主页路由
  {
    path:'/',
    component:Home
  
  },
  //商品详情
  {
    path:'/item/:skuId',
    name:Item,
    component:Item
  },
  // 商品列表
  {
    path:'/goodlist',
    component:Goodlist
  },
  // 重定向
  // {
  //   path:'/',
  //   redirect:'/goodlist'
  // }
  {
    path:'/',
    redirect:'/home'
  }
]