

// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载


export default [
  //主页路由
  {
    path:'/',
    component:Home
  
  },
  // 详情页路由
  {
    path:'/item',
    component:()=>import('@/pages/Item/index.vue') 
  }
]