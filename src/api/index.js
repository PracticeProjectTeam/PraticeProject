//引入axios
import axios from './ajax'
//获取购物车的列表
export const reqGetShopCartList = () => axios.get(`/product/skus?ids=100162801,100187101,100052801,100023501,100061001,100060501,100060201,100086802&with_stock=true&with_spu=true`)
//获取购物车的水平
export const reqGetShopgoods = () => axios.get(`/product/skus?ids=100187101&with_stock=true&with_spu=true`)

