<template>
    <div class="order-two">

                <div class="order-two-1" v-if="!orderList">
                    <!-- title版块 -->
                    <div class="order-two-2">
                        <span>我的订单</span>
                        <div>
                            <select>
                                <option value="volvo">最近三个月</option>
                                <option value="saab">今年内</option>
                                <option value="opel">2020年</option>
                                <option value="audi">2019年</option>
                            </select>
                            <select>
                                <option value="volvo">全部状态</option>
                                <option value="saab">未完成</option>
                                <option value="opel">已完成</option>
                                <option value="audi">已关闭</option>
                              </select>
                        </div>
                    </div>
                    <!-- 遍历 -->
                    <div class="section-borderw">
                        <div>
                            <img src="./image/order-empty.59ff1162.png" alt="">
                            <p>您目前还没此类订单</p>
                            <button>返回首页</button>
                        </div>
                    </div>    
                </div>
                <div class="order-two-1" v-else>
                    <!-- title版块 -->
                    <div class="order-two-2">
                        <span>我的订单</span>
                        <div>
                            <select>
                                <option value="volvo">最近三个月</option>
                                <option value="saab">今年内</option>
                                <option value="opel">2020年</option>
                                <option value="audi">2019年</option>
                            </select>
                            <select>
                                <option value="volvo">全部状态</option>
                                <option value="saab">未完成</option>
                                <option value="opel">已完成</option>
                                <option value="audi">已关闭</option>
                              </select>
                        </div>
                    </div>
                    <!-- 查看详情 -->
                    <div class="section-border" v-for="item in orderList" :key="item.orderId">
                        <div class="order-title">
                            <div class="order-left">
                                <span>{{item.orderTime}}</span>
                                订单号:
                                <a href="">{{item.orderId}}</a>
                            </div>
                            <div class="order-right">
                                <span>单价</span>
                                <span>数量</span>
                                <span>应付金额</span>
                                <span>已关闭</span>
                            </div>        
                        </div>
                        <div  class="order-cart">
                            <div  class="order-info">
                                <div  class="order-items">
                                    <div  class="items-thumb"><a href=""><img :src="item.Url" alt></a>
                                    </div>
                                    <div  class="items-title">
                                        <div  class="name">
                                            <a title="坚果 R2（浅黑色，8G + 128GB）" href="/item/100162801" target="_blank">
                                                {{item.name}}
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div  class="right goods-num">
                                        {{item.unit}}
                                    </div>
                                    <div  class="rights goods-num">
                                        {{item.quantity}}
                                    </div>
                                </div>
                            </div>
                            <div  class="order-operation">
                                <div  class="total-price">
                                    {{item.pay}}
                                </div>
                                <div  class="order-status">
                                    <a  href="javascript:;">
                                        <button  @click="concutt" type="button" class="btn" style="width: 74px;">
                                            <a>查看详情</a>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 现在支付 -->    
                    <!-- <div class="section-border">
                        <div class="order-title">
                            <div class="order-left">
                                <span>2021-03-04</span>
                                订单号:
                                <a href="">210304897222397</a>
                            </div>
                            <div class="order-right">
                                <span>单价</span>
                                <span>数量</span>
                                <span>应付金额</span>
                                <span class="dzf">待支付</span>
                            </div>        
                        </div>
                        <div  class="order-cart">
                            <div  class="order-info">
                                <div  class="order-items">
                                    <div  class="items-thumb"><a href=""><img src="../../assets/4d9e7683b590cf4a6996d3b13136bcf8.webp" alt></a>
                                    </div>
                                    <div  class="items-title">
                                        <div  class="name">
                                            <a title="坚果 R2（浅黑色，8G + 128GB）" href="/item/100162801" target="_blank">
                                                坚果 R2（浅黑色，8G + 128GB）
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div  class="dzf goods-num">
                                        ￥3,999.00
                                    </div>
                                    <div  class="rights goods-num">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div  class="order-operation">
                                <div  class="dzf yzf total-price">
                                    ￥3,999.00
                                </div>
                                <div  class="order-status">
                                    <a   href="">
                                        <button type="button" class="btn dzf" style="width: 74px;">
                                            <span>现在支付</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>   -->
                    <!-- 查看详情 -->
                    <!-- <div class="section-border">
                        <div class="order-title">
                            <div class="order-left">
                                <span>2021-03-04</span>
                                订单号:
                                <a href="">210304897222397</a>
                            </div>
                            <div class="order-right">
                                <span>单价</span>
                                <span>数量</span>
                                <span>应付金额</span>
                                <span>已关闭</span>
                            </div>        
                        </div>
                        <div  class="order-cart">
                            <div  class="order-info">
                                <div  class="order-items">
                                    <div  class="items-thumb"><a href=""><img src="../../assets/4d9e7683b590cf4a6996d3b13136bcf8.webp" alt></a>
                                    </div>
                                    <div  class="items-title">
                                        <div  class="name">
                                            <a title="坚果 R2（浅黑色，8G + 128GB）" href="/item/100162801" target="_blank">
                                                坚果 R2（浅黑色，8G + 128GB）
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div  class="right goods-num">
                                        ￥3,999.00
                                    </div>
                                    <div  class="rights goods-num"> 
                                        1
                                    </div>
                                </div>
                            </div>
                            <div  class="order-operation">
                                <div  class="total-price">
                                    ￥3,999.00
                                </div>
                                <div  class="order-status">
                                    <a  href="">
                                        <button type="button" class="btn" style="width: 74px;">
                                            <span>查看详情</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>   -->
                </div>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
  name: 'orderList',
  data(){
      return {
        cut:"",
      }
  },
  
  computed:{
			...mapState({
				orderList:state=>state.order.orderList ,
                check:state=>state.order.check 
			}),
            
  },
  methods:{
      concutt(){
        //   this.cut = 'C'
          this.$bus.$emit('curr','C')
      }
  },

}
</script>
<style lang="less" rel="stylesheet/less" scoped>
            .order-two {
            width: 988px;
            background-color:#FFFFFF;
            border-radius: 10px;
            margin-left: 20px;
            border: 1px solid #DBDBDB;

            .order-two-1 {
                .order-two-2{
                    display: flex;
                    justify-content: space-between;
                    width: 956px;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 10px 0 20px;
                    background-color: #F3F3F3;
                    border-bottom: 1px solid #DBDBDB;

                    span{
                        font-size: 18px;
                        color: #646464;
                    }

                    div {
                        select{
                            font-size: 16px;
                            margin-left: 12px;
                            color: #646464;
                            border: 1px solid #DBDBDB;
                            height: 34px;
                            line-height: 34px;
                            border-radius: 5px;
                        }

                    }
                }

                .section-borderw {
                    display: flex;
                    justify-content: center;
                    width: 956px;
                    height: 520px;
                    border-top: 1px solid #DBDBDB ;

                    div{
                        img{
                            width: 300px;
                            height: 300px;
                            margin-top: 50px;
                        }
                        p {
                            text-align: center;
                            color: #646464;
                            font-size: 15px;
                        }
                        button{
                            font-size: 16px;
                            padding: 0 15px;
                            color: #646464;
                            border: 1px solid #DBDBDB;
                            height: 34px;
                            line-height: 34px;
                            display:block;
                            margin: 0 auto;
                            outline: none;
                            cursor: pointer;

                            &:hover{
                                background-color: #DBDBDB ;
                            }
                        }
                    }
                    
                }

                .section-border {
                    .order-title{
                        display: flex;
                        justify-content: space-between;
                        height: 39px;
                        line-height: 39px;
                        padding: 0 20px;
                        font-size: 12px;
                        background-color:#EDEDED;

                        .order-left {
                            
                            span{
                                padding-right: 50px;
                                text-decoration:none;
                            }

                            a{
                                text-decoration:none;
                            }
                        }

                        .order-right {
                            span{
                                padding-right: 80px;

                                &.dzf {
                                    color: red;
                                }
                            }
                            &>span:nth-child(4){
                                padding-right: 20px;
                                font-weight: bold;
                            }
                        }
                    }

                    .order-cart {
                        display: flex;
                        border: 1px solid #EDEDED;

                        .order-info{
                            border-right: 1px solid #EDEDED;

                            .order-items{
                                width: 698px;
                                display: flex;
                                padding: 20px;

                                .items-thumb {
                                    border: 1px solid #EDEDED;
                                    width: 79px;
                                    height: 79px;
                                    a {
                                        img {
                                                width: 78px;
                                                height: 78px;
                                        }
                                    }
                                }

                                .items-title {
                                    padding: 20px 0 0 20px;
                                    height: 50px;
                                    
                                    .name {
                                        width: 430px;
                                        overflow:hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;

                                        a{
                                            line-height: 50px;
                                            text-decoration:none;
                                            margin-right: 180px;
                                            color: #646464;
                                        }
                                    }

                                    
                                }

                                .goods-num {
                                    padding: 20px 0 0 0px;
                                    line-height: 50px;

                                }

                                .rights{
                                    margin-left: 50px; 
                                }
                            }
                        }

                        .order-operation{
                            display: flex;
                            line-height: 124px;
                            
                            .total-price{
                                margin: 0 40px 0 30px;
                                font-weight: bold;

                                &.dzf {
                                    color: red;
                                }
                            }

                            .order-status{
                                a {
                                    button{
                                        font-size: 14px;
                                        margin-left: 12px;
                                        border-radius: 5px;
                                        color: #646464;
                                        border: 1px solid #DBDBDB;
                                        width: 80px;
                                        height: 30px;
                                        line-height: 25px;

                                        

                                    &.dzf {
                                        background-color: #537EEE;
                                        color: #FFF;
                                    }
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }
</style>