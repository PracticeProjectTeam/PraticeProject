<template>
  <div id="zhuti">
        <div class="order">
            <div class="order-one">
                <div class="order-top">
                    <img src="../../../assets/avatar.png" alt="">
                    <h6>aLIEz613</h6>
                </div>
                <ul>
                    <li><a>我的订单</a></li>
                    <li><a class="lanse">售后服务</a></li>
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
                            售后服务
                            <button><a href="">通过 IMEI 号或 SN 号发起售后</a></button>
                        </span>
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
                    <!-- 售后服务 -->
                    <div class="section-border">
                        <div>
                            <img src="../../../assets/order-empty.59ff1162.png" alt="">
                            <p>您目前还没此类服务单</p>
                            <button>返回首页</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Order'
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

                        button {
                            height: 36px;
                            margin-left: 25px;
                            outline: none;
                            border: 1px solid #DBDBDB;
                            background-color: #FFFFFF;

                            a {display: block;
                                width: 164px;
                                text-decoration:none;
                                color: #98AFEE;
                                font-size: 12px;
                            }
                        }
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

                .section-border {
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
                            font-size: 12px;
                            padding: 0 15px;
                            color: #646464;
                            border: 1px solid #DBDBDB;
                            height: 28px;
                            line-height: 28px;
                            display:block;
                            margin: 0 auto;
                            background-color: #FFFFFF;
                            border-radius: 5px;
                            outline: none;
                            cursor: pointer;

                            &:hover{
                                background-color: #DBDBDB ;
                            }
                        }
                    }
                    
                }
            }
        }
    }
}
</style>