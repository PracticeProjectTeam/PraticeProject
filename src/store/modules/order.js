import {reqUserOrder} from '@/api'

const state = {
   orderList:[],
   ids:[]
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