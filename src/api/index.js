// 封装api接口请求函数
import ajax from './ajax'
import axios from 'axios'


// 根据id获取spu规格
export const reqSpus = (ids)=>ajax.get(`/product/spus?ids=${ids}`)

// 获取商品详情信息的api接口函数
export const reqDetailInfo = (ids,with_stock,with_spu)=>ajax.get(`product/skus?ids=${ids}&with_stock=${with_stock}&with_spu=${with_spu}`)


// 获取所有促销活动
export const reqPromotions = (with_num)=>ajax.get(`product/promotions?with_num=${with_num}`)
//获取购物车的列表
export const reqGetShopCartList = () => ajax.get(`/product/skus?ids=100162801,100187101,100052801,100023501,100061001,100060501,100060201,100086802&with_stock=true&with_spu=true`)
//获取购物车的水平
export const reqGetShopgoods = () => ajax.get(`/product/skus?ids=100187101&with_stock=true&with_spu=true`)
// 获取商品信息列表(公用) //ids:100162801,100187101,100052801,100023501,100061001,100060501,100060201,100086802
export const reqGetGoodInfoList = (ids) => ajax.get(`/product/skus?ids=${ids}&with_stock=true&with_spu=true`)



// 用户登录
export const reqLogin = (phone) => axios.get(`http://localhost:3000/user?phone=${phone}`)

