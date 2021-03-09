import {reqUserOrder,reqGetGoodInfoList} from '@/api'

const state = {
   orderList:[],
   ids:[],
   goodInfoList:[]
}
const mutations = {
  // 获取订单数据订单页面
  ORDERLIST(state,orderList){
    state.orderList = orderList
    let ids = []
    orderList.forEach(order=>{
      let arr = []
      order.orderCart.forEach(good=>{
        arr.push(good.skuId)
        })
      ids.push(arr)
      })
      // 获取商品详情列表
      state.ids = ids
      let goodInfoList = []
      state.ids.forEach(async (item)=>{
        const result = await reqGetGoodInfoList(item.toString())
        if(result.status===200){
          goodInfoList.push(result.data.data.list)
        }
      })
      state.goodInfoList = goodInfoList
   
  }
}
const actions = {
  // 获取订单页的信息数据
  async getOrderList ({ commit }) {
    const result = await reqUserOrder(localStorage.getItem("UID"))
      if (result.status === 200) {
      commit('ORDERLIST', result.data.orderList)
    }
  }
}
const getters = {}

// 导出模块
export default {
  state,
  mutations,
  actions,
  getters
}