import vue from 'vue'
import {
    GETSHOPCARTLIST,
    SHOPGOODS,
} from '../mutation-types'
import {
    reqGetShopCartList,
    reqGetShopgoods
} from '../../api/index'

const state = {
    shopCartList: [],
    shopgoods: [],

}
const mutations = {
    [GETSHOPCARTLIST](state, shopCartList) {
        // console.log('state',getShopCartList);
        state.shopCartList = shopCartList
    },
    [SHOPGOODS](state, shopgoods) {
        state.shopgoods = shopgoods
    }
}
const actions = {
    // 查看购物车数据
    async getShopCartList({
        commit
    }) {
        const result = await reqGetShopCartList()
        //   console.log(result)
        commit(GETSHOPCARTLIST, result.data.data.list)
        // console.log(result )

    },
    async getShopgoods({
        commit
    }) {

        const result = await reqGetShopgoods()
            let shopCartList = result.data.data.list
            shopCartList.forEach(item => {
                // item.skuNum =1
                vue.set(item, 'skuNum', 1)
                vue.set(item, 'isChecked', false)
            });
            commit(SHOPGOODS, shopCartList)


    },
    async delShopgoods(index){
       
        state.shopgoods.splice(index,1);
    },
  
   
  
}
const getters = {
    //计算购物项的总价格(选中的)
    // totalCount(state) {
    //     return state.shopgoods.reduce((preTotal, goodsItem) => {
    //         if (goodsItem.isChecked) {
    //             //   return preTotal + goodsItem.skuNum * goodsItem.price
    //             return goodsItem.skuNum
    //         }else{
    //             return goodsItem.skuNum
    //         }
            
    //         //   return preTotal+goodsItem.reduce((pre,item)=>pre+(item.isChecked===true?item.skuNum*item.skuPrice:0),0)
    //     }, 0)
    // },
    // //   //计算购物项的总价格(选中)
    // totalPrice() {
    //     return state.shopgoods.reduce((preTotal, goodsItem) => {
    //         if (goodsItem.isChecked) {
    //             return preTotal + goodsItem.skuNum * goodsItem.price
    //         }else{
    //             return goodsItem.skuNum * goodsItem.price
    //         }
    //     }, 0)
    // },

    //   //计算购物项是否全选的状态
    //   isAllChecked(state,getters){
    //       return state.shopgoods.every(goodsItem=>goodsItem.every(item=>item.isChecked===true))&&getters.totalCount>0
    //   }
}

// 导出模块
export default {
    state,
    mutations,
    actions,
    getters
}

// import axios from '@/api/ajax'
// export default {
//   name: 'Settlement',
//   data(){
//     return {
//       shopCartList:[]
//     }
//   },
//   mounted(){  
//     this.getShopCart()
//   },
//   methods:{
//     async getShopCart(){
//       const result = await axios({url:'/product/skus?ids=100162801,100187101&with_stock=true&with_spu=true'})
//       console.log(result)
//       if(result.status==200){
//         this.shopCartList = result.data.data.list
//       }
//     }
//   }
// }

// import axios from '@/api/ajax'
// export default {
//   name: 'Settlement',
//   data(){
//     return {
//       shopCartList:[]
//     }
//   },
//   mounted(){  
//     this.getShopCart()
//   },
//   methods:{
//     async getShopCart(){
//       const result = await axios({url:'/product/skus?ids=100162801,100187101&with_stock=true&with_spu=true'})
//       console.log(result)
//       if(result.status==200){
//         this.shopCartList = result.data.data.list
//       }
//     }
//   }
// }