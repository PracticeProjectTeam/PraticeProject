<template>
  <div id="zhuti">
        <div class="order">
            <div class="order-one">
                <div class="order-top">
                    <img src="../../assets/avatar-default.png" alt="">
                    <h6>{{userInfo.nickName}}</h6>
                </div>
                <ul>
                    <li><a :class="cuts?'lanse':''" @click="oncut" >我的订单</a></li>
                    <li><a :class="cuts?'':'lanse'" @click="oncuts" >售后服务</a></li>
                    <li><a>我的优惠</a></li>
                    <li><a>账户资料</a></li>
                    <li><a>收货地址</a></li>
                </ul>
            </div>

            <div class="one">
                <orderList v-if="cut=='A'"/>
                <afterSale v-else-if="cut=='B'"/>
                <particulars :orderIndex="orderIndex" v-else/>
            </div>
            
        </div>
    </div>
</template>
<script>
import afterSale from './afterSale/afterSale'
import orderList from './orderList/orderList'
import particulars from './particulars/particulars'
//import axios from 'axios'
import { mapState} from 'vuex'
export default {
  name: 'Order',
  components:{
      afterSale,
      orderList,
      particulars
  },
  data(){
      return {
          cut:"A",
          cuts:'true',
          userInfo:{},
          orderIndex:''
      }
  },
  methods:{
      oncut(){
          this.cuts = true
          this.cut = 'A'
      },
      oncuts(){
          this.cuts = false
          this.cut = 'B'
      },
    //   concutt(){
    //       this.cut = 'C'
    //   }
  },

  computed:{
			...mapState({
                check:state=>state.order.check,
			}),
            
  },
  async mounted() { 
        this.$store.dispatch("getOrderList")
        this.$bus.$on('curr',(data)=>{
        this.cut = data.cut
        this.orderIndex = data.index
        console.log(data)
      })
      const result = await this.$API.reqUserInfo(localStorage.getItem("UID"))
      if(result.status===200){
          this.userInfo = result.data
      }
    
  }
  
//   async mounted(){
//       const url = `http://localhost:3000/userOrder`
//       const result = await axios.get(url)
//       this.orderList = result.data
//       console.log(this.orderList)
//     // const result = await reqOrderList()
//     // console.log(result.data)
//   },
  
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
#zhuti {
    width: 100%;
    min-width: 1220px;
    background-color:#EDEDED;

    .order {
        display: flex;
        width: 1220px;
        margin: 0 auto;
        padding: 20px 0;

        .order-one {
            width: 212px;
            height: 496px;
            background-color:#FFFFFF;
            border-radius: 10px;
            border: 1px solid #DBDBDB;
            overflow: hidden;
            ul{
                li{
                    cursor: pointer;
                }
                
            }
            

            .order-top {
                width: 210px;
                height: 240px;

                img {
                    width: 168px;
                    height: 168px;
                    padding-top: 20px;
                    display: block;
                    margin: auto;
                }

                h6 {
                    width: 210px;
                    height: 48px;
                    line-height: 48px;
                    margin: 0;
                    font-size: 20px;
                    text-align: center;
                    color: #666B7F;
                }
            }

            ul {
                display: flex;
                margin: 0;
                padding: 0;
                flex-direction: column;
                justify-content: space-between;
                width: 210px;
                height: 255px;
                /*隐藏列表前面的点*/
                list-style-type: none;

                li {
                    width: 210px;
                    
                    a {
                        display: block;
                        width: 210px;  
                        height: 50px;
                        font-size: 16px;
                        line-height: 50px;
                        text-align: center;
                        border: 1px;
                        color: #666666;

                        &.lanse {
                            background-color: #98AFEE;
                        }

                        &:hover{
                            background-color: #98AFEE;
                        }
                    }
                    
                }
            }
        }

        .one {
            //display: flex;
            width: 986;
        }
    }
}
</style>