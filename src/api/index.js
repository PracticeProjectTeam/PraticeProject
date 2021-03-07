// 封装api接口请求函数
import axios from './ajax'


// 根据id获取商品spu
export const reqSpus = (ids)=>axios.get(`/product/spus?ids=${ids}`)

// 获取商品信息的api接口函数
export const reqItemInfo = (ids,with_stock,with_spu)=>axios.get(`product/skus?ids=${ids}&with_stock=${with_stock}&with_spu=${with_spu}`)


// 获取所有促销活动
export const reqPromotions = (with_num)=>axios.get(`product/promotions?with_num=${with_num}`)