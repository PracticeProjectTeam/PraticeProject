

// 引入组件
const Home=()=>import('@/pages/Home/Home.vue') // 按需加载
const Detail=()=>import('@/pages/Detail/Detail.vue')
const Login=()=>import('@/pages/Login/Login.vue')



export default [
  // 主页路由
  {
    path:'/home',
    component:Home
  
  },
  // 详情页路由
  {
    path:'/detail/:ids',
    name:'detail',
    component:Detail
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]