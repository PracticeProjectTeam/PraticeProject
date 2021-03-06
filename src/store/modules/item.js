// 引入api接口
import { reqItemInfo, reqSpus } from '@/api'
const state = {
  itemInfo: {}, // 商品详情信息对象
  spusInfo: {}, // spus详情信息对象
}

const mutations = {
  // 修改商品信息对象的数据
  RECEIVE_ITEM_INFO(state, { list }) {
    state.itemInfo = list[0]
    
  },

  // 修改spus对象数据
  RECEIVE_SPUS_INFO(state,{list}) {
    state.spusInfo = list[0]
  }

}

const actions = {
  // 获取商品详情的信息数据
  async getItemInfo({ commit }, ids, with_stock = true, with_spu = true) {
    // 调用接口，发送请求，传入skuId参数
    const result = await reqItemInfo(ids, with_stock, with_spu)
    // 判断请求是否成功
    if (result.status === 200) {

      // 提交mutation
      commit('RECEIVE_ITEM_INFO', result.data.data)
    }
  },


  // 根据id获取spu
  async getSpus({commit},ids) {
    // 调用接口，发送请求，传入spuid
    const result = await reqSpus(ids) 
    // 判断请求是否成功
    if(result.status === 200) {
      // 提交mutation
      commit('RECEIVE_SPUS_INFO',result.data.data)
    }
  }
}

const getters = {
  // product_info
  product_info(state) {
    return state.itemInfo.product_info || {}
  },
  // shop_info
  shop_info(state) {
    return state.itemInfo.shop_info || {}
  },

  // 价格
  price(state) {
    return state.itemInfo.price || {}
  },

  // 展示图
  goods_view(state) {
    return state.itemInfo.shop_info.tpl_content.base.images.goods_view[0].url
  },

  //库存
  stock(state) {
    let stock = state.itemInfo.stock
    let in_stock = state.itemInfo.in_stock
    return {stock,in_stock}
  },

  // sku_info
  sku_info(state) {
    console.log()
    return state.spusInfo.sku_info
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
