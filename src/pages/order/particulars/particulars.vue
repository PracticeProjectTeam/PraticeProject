<template>
    <div class="order-two">
                <div class="order-two-1">
                    <!-- title版块 -->
                    <div class="order-two-2">
                        <span>
                            订单号: {{orderList[orderIndex].orderId}}
                        </span>
                    </div>
                    <!-- 进度条 -->
                    <div class="order-progress"> 
                        <div class="schedule">
                            <div class="schedule-title">
                                <span>下单</span>
                                <span>{{orderList[orderIndex].state}}</span>
                            </div>
                            <el-progress :percentage="100" status="success"></el-progress>
                            <div class="schedule-botton">
                                <p>{{orderList[orderIndex].orderTime}}</p>
                                <!-- <p>10.12</p> -->
                            </div>
                        </div>
                        
                    </div>
                    <!-- 商品名称 -->
                    <div class="order-goods-info">
                        <span>商品名称</span>
                        <div>
                            <span>单价</span>
                            <span>数量</span>
                            <span>小计</span>
                        </div>
                    </div>
                    <!-- 商品信息 -->
                    <div  class="order-parameter">
                        <div  class="order-items" v-for="(goodInfo,index) in goodInfoList[orderIndex]" :key="index">
                            <div  class="items-thumb">
                                <a href=""><img :src="goodInfo.shop_info.ali_image" alt></a>
                                <div  class="nam">
                                    <a title="坚果 R2（浅黑色，8G + 128GB）" href="/item/100162801" target="_blank">
                                        {{goodInfo.name}}
                                    </a>
                                </div>
                            </div>
                            
                            <div  class=" goods-num">
                                <span>
                                    ￥{{goodInfo.price}}
                                </span>
                                <span v-if="orderList[orderIndex].orderCart[index]">
                                    {{orderList[orderIndex].orderCart[index].count}}
                                </span>
                                <span v-if="orderList[orderIndex].orderCart[index]">
                                    ￥{{orderList[orderIndex].orderCart[index].count*goodInfo.price}}
                                </span>
                            </div>
                        </div>
                    </div>  
                    <!-- 商品金额 -->
                    <div class="order-money">
                        <div class="dq">
                            <p>商品总计：￥{{allPrice}}</p>
                            <p>运费：+10 ￥</p>
                            <p class="hs">优惠：- 
                                <span>￥</span>
                            </p>
                            <p class="monry">应付金额：
                                <span>￥{{allPrice+10}}</span>
                            </p>
                        </div>
                    </div>
                    <!-- 收货信息 -->
                    <div class="order-goods-info">
                        <span>收货信息</span>
                    </div>
                    <div class="order-cargo">
                        <p>姓名：{{orderList[orderIndex].receiveAddress.name}}</p>
                        <p>联系电话：{{orderList[orderIndex].receiveAddress.phone}}</p>
                        <p>详细地址：{{orderList[orderIndex].receiveAddress.address}}</p>
                    </div>
                    <!-- 发票信息 -->
                    <div class="order-goods-info">
                        <span>发票信息</span>
                    </div>
                    <div class="order-cargo">
                        <p>发票类型：电子发票</p>
                        <p>发票抬头：{{orderList[orderIndex].invoiceOwner}}</p>
                        <p>发票内容：购买商品明细</p>
                    </div>  
                </div>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
    name: 'particulars',
    data(){
        return{
            
        }
    },
    props:['orderIndex'],
    computed:{
		...mapState({
			orderList:state=>state.order.orderList ,
            goodInfoList:state=>state.order.goodInfoList
		}),
        allCount(){
            let count = 0
            this.orderList[this.orderIndex].orderCart.forEach(item=>{
                count+=item.count
            })
            return count
        },
        allPrice(){
            let price = 0
            this.orderList[this.orderIndex].orderCart.forEach((good,index2)=>{
                if(this.goodInfoList[this.orderIndex]){
                    if(this.goodInfoList[this.orderIndex][index2]){
                        price+=good.count * this.goodInfoList[this.orderIndex][index2].price
                    }
                }
                
            })
            return price
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
            margin: 0 10px 0 20px;
            
            background-color: #FAFAFA;
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
        .order-progress {
            height: 140px;
            padding: 0 30px;
            border-top: 1px solid #DBDBDB; 
            //display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
            .schedule {
                
                .schedule-title {
                            padding-top: 30px;
                            height: 20px;
                            display: flex;
                            // display:table-cell;      /*按照单元格的样式显示元素*/
                            // vertical-align:bottom;   /*底对齐*/
                            justify-content: space-between;

                            span {
                                font-size: 15px;
                                color: #646464;
                            }
                }
                .schedule-botton{
                    p {
                        margin: 10px 0 0 0;
                        font-size: 12px;
                    }
                }
            }
        }
        .order-goods-info {
            height: 38px;
            line-height: 38px;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            background-color:#EDEDED;
            font-size: 12px;
            color: #666;
            div {
                span {
                    padding: 0 45px;
                }
            }
             
        }
        .order-parameter {
            border: 1px solid #EDEDED;
            .order-items{
                
                display: flex;
                padding: 20px;
                justify-content: space-between;
                .items-thumb {
                    display: flex;
                    /* border: 1px solid #EDEDED; */
                    
                    
                    a {
                        /* display: block; */
                        
                        img {
                                width: 79px;
                                height: 79px;
                        }
                    }
                    .nam {
                        margin-left: 30px;
                        a{
                            
                            line-height: 78px;
                            text-decoration:none;
                            color: #646464;
                        }
                    }
                }
                .items-title {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 0 0 20px;
                    height: 50px;

                }
                .goods-num {
                    line-height: 80px;
                    display: flex;
                    span {
                        margin: 0 20px 0 50px; 
                    }
                }
            }
        }
        .order-money {
            margin: 20px 30px;
            display: flex;
            flex-direction: row-reverse;
            
            .dq {
                p {
                    height: 38px;
                    width: 200px;
                    line-height: 38px;
                    margin: 0px;
                    font-size: 14px;
                    color: #646464;
                    text-align:right;
                    
                    &.hs {
                        color: red;
                    }
                    &.monry {
                        font-size: 17px;
                    }
                    span {
                        color: red;
                        font-weight:bold;
                    }
                }
            }
        }
        .order-cargo{
            margin: 20px 30px;
            
            p {
                height: 38px;
                line-height: 38px;
                font-size: 14px;
                color: #646464;
                margin: 0px;
            }
        }
    }
}
</style>