// 引入axios
import axios from 'axios'
const ajax = axios.create({
  baseURL:'/api',  //设置根路径
  timeout:20000  //设置请求的超时时间
})
export default ajax