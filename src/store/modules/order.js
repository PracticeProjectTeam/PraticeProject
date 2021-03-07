const state = {
  // 商品列表
  orderGoodList:[],
  // 发票信息,收件人名称，电话，地址
  orderInfo:{
    name:'',
    phone:'',
    address:''
  },
  invoiceOwner:'' //发票抬头(个人/单位)'person'或'company'
}
const mutations = {}
const actions = {}
const getters = {}

// 导出模块
export default {
  state,
  mutations,
  actions,
  getters
}