// 封装api接口请求函数
import axios from './ajax'


// 根据id获取商品spu
export const reqSpus = (ids)=>axios.get(`/product/spus?ids=${ids}`)

// 获取商品信息的api接口函数
export const reqItemInfo = (ids,with_stock,with_spu)=>axios.get(`product/skus?ids=${ids}&with_stock=${with_stock}&with_spu=${with_spu}`)


// 获取所有促销活动
export const reqPromotions = (with_num)=>axios.get(`product/promotions?with_num=${with_num}`)
//获取购物车的列表
export const reqGetShopCartList = () => axios.get(`/product/skus?ids=100162801,100187101,100052801,100023501,100061001,100060501,100060201,100086802&with_stock=true&with_spu=true`)
//获取购物车的水平
export const reqGetShopgoods = () => axios.get(`/product/skus?ids=100187101&with_stock=true&with_spu=true`)

