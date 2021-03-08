//import {reqOrderList} from '@/api'

const state = {
   orderList:[
     {
        "orderId":"210305267249218",
        "orderTime":"2021-03-05",
        "state":"true",
        "Url":"https://resource.smartisan.com/resource/c9a55fe8b5bc506fec60659aa2dcebe9.png?x-oss-process=image/resize,w_100/format,webp",
        "name":"Smartusan 智能手写笔 (灰色)",
        "unit":"￥499.00",
        "pay":"￥199.00",
        "quantity":"1",
        "receiveAddress":{
          "name":"mine",
          "phone":15859145025,
          "address":"福建省 福清市 福州市"
        },
        "orderCart":[
          {
            "skuId":"100060201",
            "count":1,
            "isSelected":"true"
          }
        ],
        "invoiceOwner":"个人"
     },
     {
        "orderId":"210305267249219",
        "orderTime":"2021-03-05",
        "state":"false",
        "Url":"https://resource.smartisan.com/resource/211d521553c8816ae1dc6fb5ecdcc99d.jpg?x-oss-process=image/resize,w_100/format,webp",
        "name":"真蓝牙无线耳机 (灰色)",
        "unit":"￥299.00",
        "pay":"￥299.00",
        "quantity":"1",
        "receiveAddress":{
          "name":"mine",
          "phone":15859145025,
          "address":"福建省 福清市 福州市"
        },
        "orderCart":[
          {
            "skuId":"100060201",
            "count":1,
            "isSelected":"true"
          }
        ],
        "invoiceOwner":"个人"
     },
     {
        "orderId":"21030526724927",
        "orderTime":"2021-03-05",
        "state":"false",
        "Url":"https://resource.smartisan.com/resource/4d9e7683b590cf4a6996d3b13136bcf8.png?x-oss-process=image/resize,w_100/format,webp",
        "name":"坚果 R2 (浅黑色, 8G + 128GB)",
        "unit":"￥3999.00",
        "pay":"￥3999.00",
        "quantity":"1",
        "receiveAddress":{
          "name":"mine",
          "phone":15859145025,
          "address":"福建省 福清市 福州市"
        },
        "orderCart":[
          {
            "skuId":"100060201",
            "count":1,
            "isSelected":"true"
          }
        ],
        "invoiceOwner":"个人"
     }
   ],
   check :[
    {
      "Url":"https://account.smartisan.com/files/00/0e/a0/64/04/84/31/1d/avatar.png?ts=1614826217?tmp=1",
      "name":"aLIEz",
      "ID":"01"
    }
   ],
   Detail :[
     {
      "porder_id": "210305895825227",
      "province_name": "广东省",
      "city_name": "深圳市",
      "district_name": "宝安区",
      "street": "草围新一村",
      "user_id": "4117001106895100",
      "accept_name": "老王",
      "notice_mobile": "13341382008",
      "order_amount": "499.00",
      "pay_channel_type": "1",
      "goods_price": "499.00",
      "goods_nums": "1",
      "discount": "300",
      "goods_name": "Smartisan 智能手写笔（灰色）",
      "img": "https://resource.smartisan.com/resource/c9a55fe8b5bc506fec60659aa2dcebe9.png",
      "pgoods_id": "0",
      "toy":"199"
     }
   ]
}
const mutations = {
  // 直接修改订单页面
  // ORDERLIST(state,orderList){
  //   state.orderList = orderList
  // }
}
const actions = {
  // 获取订单页的信息数据
  // async getOrderList ({ commit }) {
  //   const result = await reqOrderList()
  //     if (result.code === 200) {
  //     commit('ORDERLIST', result.data)
  //     console.log('result',result)
  //   }
  // }
}
const getters = {}

// 导出模块
export default {
  state,
  mutations,
  actions,
  getters
}