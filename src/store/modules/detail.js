// 引入api接口
import { reqDetailInfo, reqPromotions } from '@/api'
import Vue from 'vue'
const state = {
  detailInfo: {}, // 商品详情信息对象
  promotions: [], // 活动列表
}

const mutations = {
  // 修改商品信息对象的数据
  RECEIVE_DETAIL_INFO(state, { list }) {
    state.detailInfo = list[0]
  },

  // 修改活动列表
  RECEIVE_PROMOTIONS(state, { list }) {
    state.promotions = list
  },

}

const actions = {
  // 获取商品详情的信息数据
  async getDetailInfo({ commit }, ids, with_stock = true, with_spu = true) {
    // 调用接口，发送请求，传入skuId参数
    const result = await reqDetailInfo(ids, with_stock, with_spu)
    // 判断请求是否成功
    if (result.status === 200) {

      // 提交mutation
      commit('RECEIVE_DETAIL_INFO', result.data.data)

    }
  },

  // 获取活动信息
  async getPromotions({ commit }, with_num = true) {
    const result = await reqPromotions(with_num)
    if (result.status === 200) {

      commit('RECEIVE_PROMOTIONS', result.data.list)
    }
  },
}

const getters = {
  // 有效销售属性值的json
  specV2Json(state) {
    let specV2Json = []
    let spu = state.detailInfo.spu
    if (spu) {
      let skuInfos = spu.sku_info
      skuInfos.forEach(item => {
        let temp = []
        let skuId = item.sku_id
        item.spec_json.forEach(item2 => {
          temp.push(item2.spec_value_id)
        })
        let json = temp.join('|')
        let obj = {}
        obj[json] = skuId
        specV2Json.push(obj)
      })
      return specV2Json
    }

  },

  // 当前第一个销售属性所处的下标
  // specIndex(state) {

  //   let shopInfo = state.detailInfo.shop_info
  //   let arr = []
  //   if(shopInfo) {
  //     // console.log(shopInfo.spec_v2[0].spec_values)
  //     arr = shopInfo.spec_v2[0].spec_values.map(item=>{
  //       return item.id
  //     })
  //   }
  //   // Object.keys(obj).forEach(item => {
  //   //   if (obj[item].length == 0) {
  //   //     delete obj[item]
  //   //   }
  //   // })

  //   // 获取当前的第一个销售属性id
  //   let attrInfo = state.detailInfo.attr_info
  //   let val
  //   if(attrInfo) {
  //     val = attrInfo[Object.keys(attrInfo)[1]].spec_value_id
  //   }

  //   console.log(1111)
  //   console.log(arr)
  //   console.log(attrInfo[Object.keys(attrInfo)[1]].spec_value_id)
  //   console.log(22222)
    
  //   let index = arr.indexOf(String(val))
  //   console.log(index)
  //   return index

  // },

  // 所有销售属性是否有库存对应的对象
  AllspecV2Json(state) {
    let obj = {}
    let shop_info = state.detailInfo.shop_info
    if (shop_info) {
      let specV2 = state.detailInfo.shop_info.spec_v2
      
      specV2.forEach((item, index) => {
        item.spec_values.forEach(item2 => {
          let id1 = item2.id
          obj[id1] = []
          if ((specV2[index + 1])) {
            specV2[index + 1].spec_values.forEach(item3 => {
              let id2 = item3.id
              obj[id1].push(id2)
            })
          }
        })
      })
    }
    Object.keys(obj).forEach(item => {
      if (obj[item].length == 0) {
        delete obj[item]
      }
    })
    

    let obj2 = {}
    let spu = state.detailInfo.spu
    if (spu) {
      let skuInfos = spu.sku_info
      skuInfos.forEach(item=>{
        item.spec_json.forEach((item2,index)=>{
          if(!obj2[item2.spec_value_id]) {
            obj2[item2.spec_value_id] = []
            if(item.spec_json[index+1]) {
              let id2 = item.spec_json[index+1].spec_value_id
              obj2[item2.spec_value_id].push(id2)
            }
          }else {
            if(item.spec_json[index+1]) {
              let id2 = item.spec_json[index+1].spec_value_id
              obj2[item2.spec_value_id].push(id2)
            }
          }
        })
      })

      Object.keys(obj2).forEach(item => {
        if (obj2[item].length == 0) {
          delete obj2[item]
        }
      })
     
    }
    
    // 是否有库存的数组
    let isStocks = []
    let length = Object.keys(obj).length

    for (const key in obj) {
      let temp = []
      obj[key].forEach((item)=>{
        if(obj2[key]) {
          let arr = obj2[key]
          if(arr.includes(item)) {
            temp.push(true)
          }else {
            temp.push(false)
          }
        }
      })
      isStocks.push(temp)
    }
    return isStocks
  },

  // 销售属性值对应产品id的键值对数据
  // 销售属性值数组
  specV2(state) {
    let shop_info = state.detailInfo.shop_info
    let attrInfo = state.detailInfo.attr_info
    let spu = state.detailInfo.spu

    if (shop_info && attrInfo && spu) {

      let attr = JSON.parse(JSON.stringify(attrInfo))
      let keys = Object.keys(attr)
      let specV2 = shop_info.spec_v2
      let skuInfoWithStock = spu.sku_info


      // 新建一个数组来存储有效的销售属性值
      let spec = {}
      skuInfoWithStock.forEach(item => {
        item.spec_json.forEach(item2 => {
          let id = String(item2.spec_id)
          if (Object.prototype.hasOwnProperty.call(spec, id)) {

            let valueIds = spec[id]
            let valueId = item2.spec_value_id
            if (!valueIds.includes(valueId)) {
              valueIds.push(valueId)
            }
          } else {
            spec[id] = []
          }
        })
      })
      

      // 给选中的销售属性加上一个isChecked=true，否则为false
      specV2.forEach(item => {
        keys.forEach(item2 => {
          if (item.spec_id == item2) {
            item.spec_values.forEach(item3 => {
              if (item3.id == attr[item2].spec_value_id) {
                Vue.set(item3, 'isChecked', true)
                // item3.isChecked = true
              } else {
                Vue.set(item3, 'isChecked', false)
                // item3.isChecked = false
              }
            })
          }
        })
      })


      // 给有库存的销售属性加上一个isStock=true，否则为false
      let keys2 = Object.keys(spec)
      specV2.forEach(item => {
        keys2.forEach(item2 => {
          if (item.spec_id == item2) {
            item.spec_values.forEach(item3 => {
              if (spec[item2].includes(item3.id)) {
                item3.isStock = true
              } else {
                item3.isStock = false
              }
            })
          }
        })
      })

     





      return specV2
    } else {
      return []
    }
  },

  //缩略图
  aliImages(state) {
    // return state
    let shop_info = state.detailInfo.shop_info
    if (shop_info) {
      return shop_info.ali_images
    } else {
      return []
    }
  },

  // 活动信息
  promotions(state) {
    const id = state.detailInfo.id
    state.promotions.filter((item) => {
      if (item.rule.condition.main_skus.toString()) {
        return item.rule.condition.main_skus.includes(Number(id))
      }
    })
  },

  //库存，价格，title，sub_title，对应销售属性的id组合起来的商品信息对象
  skuInfo(state) {
    let skuId = state.detailInfo.id
    let stock = state.detailInfo.stock
    let in_stock = state.detailInfo.in_stock
    let price = state.detailInfo.price
    let spuId = state.detailInfo.spu_id
    let attrInfo = state.detailInfo.attr_info
    let color
    if(attrInfo) {
      let obj = attrInfo[Object.keys(attrInfo)[0]]
      color = obj.value
    }
   
    

    let shop_info = state.detailInfo.shop_info
    let sub_title, title, goodsView;
    if (shop_info) {
      title = shop_info.title
      sub_title = shop_info.sub_title
      let goods_view = shop_info.tpl_content.base.images.goods_view || shop_info.tpl_content.base.images.goods_view_mobile
      if(goods_view) {
        goodsView = goods_view.map(item=>{
          return item.url
        })
      }

      // attr_info = shop_info.spec_json.map(item => {
      //   let spec_id = item.spec_id
      //   let spec_value_id = item.spec_value_id
      //   return { spec_id, spec_value_id };
      // })

    } else {
      title = ''
      sub_title = ''
      // spec_json = []
      goodsView = []
    }



    return { skuId, stock, in_stock, price, spuId, title, sub_title, attrInfo, goodsView, color }
  },


  // 服务
  accessory(state) {
    if (state.detailInfo.spu) {
      return state.detailInfo.spu.product_info.accessory_goods
    } else {
      return ''
    }

  },

  // // 有效的销售属性
  // skuInfoWithStock(state) {



  // }




}

export default {
  state,
  mutations,
  actions,
  getters
}
