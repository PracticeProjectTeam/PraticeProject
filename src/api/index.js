// 封装api接口请求函数
import axios from './ajax'


// 根据id获取spu规格
export const reqSpus = (ids)=>axios.get(`/product/spus?ids=${ids}`)

// 获取商品详情信息的api接口函数
export const reqDetailInfo = (ids,with_stock,with_spu)=>axios.get(`product/skus?ids=${ids}&with_stock=${with_stock}&with_spu=${with_spu}`)


// 获取所有促销活动
export const reqPromotions = (with_num)=>axios.get(`product/promotions?with_num=${with_num}`)

// 获取购物车
export const reqGetToCart = ()=>axios.get(`http://localhost:3000/userShopCart/?id=000001`)

// 添加购物车
export const reqAddToCart =(cartList)=>axios({
  method:"patch",
  url:"http://localhost:3000/userShopCart/000001",//ID
  data:{
    cartList: cartList//要修改成什么
  }
})