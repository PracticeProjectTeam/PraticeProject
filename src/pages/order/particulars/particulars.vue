<template>
  <div id="zhuti">
        <div class="order">
            <div class="order-one">
                <div class="order-top">
                    <img src="../../../assets/avatar.png" alt="">
                    <h6>aLIEz613</h6>
                </div>
                <ul>
                    <li><a class="lanse">我的订单</a></li>
                    <li><a>售后服务</a></li>
                    <li><a>我的优惠</a></li>
                    <li><a>账户资料</a></li>
                    <li><a>收货地址</a></li>
                </ul>
            </div>
            <div class="order-two">
                <div class="order-two-1">
                    <!-- title版块 -->
                    <div class="order-two-2">
                        <span>
                            订单号: 210305895825227
                        </span>
                    </div>
                    <!-- 进度条 -->
                    <div class="order-progress">
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
                        <div  class="order-items">
                            <div  class="items-thumb">
                                <a href=""><img src="" alt></a>
                                <div  class="nam">
                                    <a title="坚果 R2（浅黑色，8G + 128GB）" href="/item/100162801" target="_blank">
                                        坚果 R2（浅黑色，8G + 128GB）
                                    </a>
                                </div>
                            </div>
                            
                            <div  class=" goods-num">
                                <span>
                                    ￥3,999.00
                                </span>
                                <span>
                                    1
                                </span>
                                <span>
                                    ￥3,999.00
                                </span>
                            </div>
                        </div>
                    </div>  
                    <!-- 商品金额 -->
                    <div class="order-money">
                        <div class="dq">
                            <p>商品总计：￥499.00</p>
                            <p>运费：+ ￥0.00</p>
                            <p class="hs">优惠：- 
                                <span>￥300.00</span>
                            </p>
                            <p class="monry">应付金额：
                                <span>￥199.00</span>
                            </p>
                        </div>
                    </div>
                    <!-- 收货信息 -->
                    <div class="order-goods-info">
                        <span>收货信息</span>
                    </div>
                    <div class="order-cargo">
                        <p>姓名：隔壁老王</p>
                        <p>联系电话：1336666666</p>
                        <p>详细地址： 广东省 深圳市 宝安区 草围新一村</p>
                    </div>
                    <!-- 发票信息 -->
                    <div class="order-goods-info">
                        <span>发票信息</span>
                    </div>     
                    <div class="order-cargo">
                        <p>发票类型：电子发票</p>
                        <p>发票抬头：个人</p>
                        <p>发票内容：购买商品明细</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Order',
    methods: {
     
    }
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
                    height: 130px;
                    border-top: 1px solid #DBDBDB; 
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
    }
}
</style>