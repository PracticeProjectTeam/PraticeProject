
// 引入请求
import {reqUserShopCart,reqGetGoodInfoList} from '../../api/index.js'
const state = {
  // 商品列表
  cartList:[],
  // 商品详细信息列表
  goodInfoList:[],
  ids:'', //skuId列表
}
const mutations = {
  // 获取商品列表和skuId列表
  GETCARTLIST(state,cartList){
    state.cartList = cartList
    // 获取skuId列表
    let ids = []
    cartList.forEach(item=>{
      ids.push(item.skuId)
    })
    state.ids = ids.toString()
    console.log(state.ids)
  },
  // 获取商品详细信息列表
  GETGOODINFOLIST(state,goodInfoList){
    state.goodInfoList = goodInfoList
  }
}
const actions = {
  // 获取商品列表
  async getCartList({commit,dispatch},userId){
    const result = await reqUserShopCart(userId)
    if(result.status==200){
      let cartList = result.data[0].cartList
      commit("GETCARTLIST",cartList)
      dispatch('getGoodInfoList')
    }
    
  },
  // 获取商品详细信息列表
  async getGoodInfoList({commit,state}){
    const result = await reqGetGoodInfoList(state.ids)
    console.log("resul;t",result)
    if(result.status==200){
      commit("GETGOODINFOLIST",result.data.data.list)
    }
  }
}
const getters = {
   //计算购物项的总数(选中的)
   totalCount(state) {
    return state.cartList.reduce((preTotal, goodsItem) => {
        if (goodsItem.isSelected) {
            //   return preTotal + goodsItem.skuNum * goodsItem.price
            return preTotal + goodsItem.count
        }else{
            return preTotal
        }
        
        //   return preTotal+goodsItem.reduce((pre,item)=>pre+(item.isChecked===true?item.skuNum*item.skuPrice:0),0)
    }, 0)
},
//   //计算购物项的总价格(选中)
totalPrice() {
    return state.cartList.reduce((preTotal, goodsItem,index) => {
        if (goodsItem.isSelected) {
            return preTotal + goodsItem.count * state.goodInfoList[index].price
        }else{
            return preTotal
        }
    }, 0)
},
}

// 导出模块
export default {
  state,
  mutations,
  actions,
  getters
}