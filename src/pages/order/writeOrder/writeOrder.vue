<template>
    <div id="fill-order">
        <div class="subject">
            <div class="goods">
                <div class="goods-top">
                    <span>收货信息</span>
                </div>
                <div class="goods-button">
                    <ul >
                        <li class="goods-xx">
                            <div class="xq">
                                <p class="xm">
                                <span>隔壁老王</span>
                                <span>√</span>
                            </p>
                            <p>1336666666</p>
                            <p>广东省 深圳市 宝安区</p>
                            <p>草围新一村</p>
                            </div>
                            <div class="anniu">
                                <button>修改</button>
                                <button>删除</button>
                            </div>
                        </li>
                        <li class="goods-xj">
                            
                        </li>
                    </ul>
                </div>
            </div>

            <div class="inventory">
                <div class="inventory-top">
                    <p>购物清单</p>
                    <div class="inventory-top-info">
                        <span>商品信息</span>
                        <div>
                            <span>单价</span>
                            <span>数量</span>
                            <span>应付总额</span>
                        </div>
                    </div>
                </div>
                <div class="inventory-button">
                    <div class="inventory-left">
                        <a class="tp" href=""><img src="../../../assets/4d9e7683b590cf4a6996d3b13136bcf8.webp" alt=""></a>
                        <div class="tp-two">
                            <a href="">Smartisan 真无线蓝牙耳机（抖音文创限量款）（黑色）</a>
                            <p>优惠活动：女神节  配件大促</p>
                        </div>
                    </div>
                    <div class="inventory-right">
                        <span>¥299.00</span>
                        <span>1</span>
                        <div>
                            <p>¥149</p>
                            <p>已优惠¥150</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="invoice">
                <div class="invoice-top">
                    <p>发票信息</p>
                </div>
                <div class="invoice-button">
                    <p>发票类型：电子发票</p>
                    <div class="invoice-one">
                        <span> 发票抬头： </span>
                        <div class="invoice-two">
                            <el-radio v-model="radio" label="1">各人</el-radio>
                            <el-radio v-model="radio" label="2">单位</el-radio>
                        </div>
                    </div>
                    <p>发票内容：购买商品明细</p>
                    <p>*电子发票是税务局认可的有效付款凭证，可作为售后服务凭据，电子发票打印后可以用于企业报销。</p>
                </div>
            </div>
            <div class="discounts">
                <div class="discounts-top">
                    <span>优惠券</span>
                    <button>可用优惠券</button>
                </div>
                <div class="discounts-button">
                    <div class="discounts-button-tp">
                        <img src="../../../assets/下载.png" alt="">
                        <p>暂无优惠券</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'Order',

    data () {
      return {
        radio: '1'
      };
    },
    methods: {
      
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    body html {
        margin: 0;
        padding: 0;
    }

    #fill-order {
        width: 100%;
        min-width: 1220px;
        background-color:#EDEDED;
        

        .subject{
            width: 1218px;
            padding-top: 30px;
            margin: 0 auto;

            .goods { 
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid #D6D6D6;
                margin-bottom: 30px;

                .goods-top {
                    padding: 0 20px;
                    height: 50px;
                    line-height: 50px;
                    background-color: #F5F5F5;
                    
                    }
                    .goods-button{
                        background-color: #FFFFFF;
                        padding: 30px 30px 0 30px;

                        ul {
                            list-style-type: none;
                            display: flex;
                            margin: 0;

                            .goods-xx {
                                width: 276px;
                                height: 158px;
                                border: 1px solid #6A8FE5;
                                margin: 0 18px 30px 0;
                                position: relative;
                                overflow: hidden;

                                .xq {
                                    padding: 19px 14px 0 19px;
                                    p {
                                        font-size: 13px;
                                        color: #999999;
                                        margin: 8px 0 0 0;

                                        &.xm {
                                            display: flex;
                                            justify-content: space-between;
                                            font-size: 16px;
                                            color: #666666;
                                            margin: 0px;
                                        }
                                    }
                                }

                                .anniu {
                                    position: absolute;
                                    bottom: -38px;

                                    button{
                                        width: 138px;
                                        height: 38px;
                                        border:1px solid #999999;
                                        padding: 5px 30px;
                                        background-color: #FFFFFF;
                                        outline: none;

                                        &:hover {
                                            background-color: #EDEDED
                                        }
                                    }
                                }

                                &:hover .anniu{
                                    bottom: 0px;
                                    /*过渡时间*/
                                    transition-duration:500;
                                    /*过渡方式*/
                                    transition-timing-function: ease-in;
                                }
                            }
                            .goods-xj {
                                width: 241px;
                                height: 137px;
                                border: 1px solid #6A8FE5;
                                padding: 19px 14px 0 19px;
                                margin: 0 18px 30px 0;

                            }
                            
                    }
                }
            }

            .inventory {
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid #D6D6D6;
                margin-bottom: 30px;

                .inventory-top {
                    p {
                        padding: 0 20px;
                        margin: 0;
                        height: 50px;
                        line-height: 50px;
                        background-color: #F5F5F5;
                        
                        }
                    }

                    .inventory-top-info {
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
                
                .inventory-button {
                    height: 110px;
                    /* line-height: 110px; */
                    padding: 0 20px;
                    background-color:#fff;
                    display: flex;
                    justify-content: space-between;

                    .inventory-left {
                        display: flex;

                        .tp {
                            border: 1px solid #F5F5F5;
                            width: 79px;
                            height: 79px;
                            margin-top: 15px;

                            img {
                                width: 79px;
                                height: 79px;
                            }
                        }
                        .tp-two {
                            padding-top: 30px;
                            margin-left: 20px;
                            font-size: 14px;

                            a {
                                text-decoration:none;
                                color: black;
                            }

                            p {
                                color: #646464;
                                font-size: 12px;
                            }
                        }
                    }

                    .inventory-right {
                        display: flex;
                        font-weight: bold;
                        font-size: 12px;
                        text-align: right;
                        
                        span {
                            margin: 0 50px;
                            line-height: 110px;
                        }

                        div {
                            margin:34px;

                            p {
                                margin: 0 0 5px 0;

                                &:nth-of-type(2) {
                                    color: red;
                                }
                            }
                        }
                    }
                }
            }

            .invoice {
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid #D6D6D6;
                margin-bottom: 30px;

                .invoice-top {
                    p {
                        padding: 0 20px;
                        margin: 0;
                        height: 50px;
                        line-height: 50px;
                        background-color: #F5F5F5;
                        
                    }
                }

                .invoice-button{
                    padding: 22px 30px 28px 30px;
                    font-size: 15px;
                    color: #5a5858;
                    background-color: #fff;

                    p {
                        margin: 0;
                        height: 38px;
                        line-height: 38px;
                        
                        &:nth-of-type(3) {
                            font-size: 12px;
                            padding-top: 15px;
                            border-top: solid 1px #E5E5E5;
                        }
                    }

                    .invoice-one {
                        display: flex;
                    }
                }
            }

            .discounts {
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid #D6D6D6;

                .discounts-top {
                    display: flex;
                    background-color: #F5F5F5;

                    span {
                        padding: 0 20px;
                        margin: 0;
                        height: 50px;
                        line-height: 50px;
                        
                        
                    }
                }

                .discounts-button {
                    padding: 0 24px;
                    background-color: #Fff;

                    .discounts-button-tp {
                        height: 195px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        

                        img {
                            height: 52px;
                            width: 72px;
                            margin-bottom: 15px;
                        }

                        p {
                            margin: 0;
                        }

                    }
                }
            }

        }

        
    }
</style>