<template>
  <div class="settlement-container">
    <!-- 订单结算信息单元 -->
    <div class="settle-box">
      <div class="settle-title">
        <h3>收货信息</h3>
      </div>
      <div class="settle-content">
        <div class="receive-message-box active" v-for="(item,index) in addressList" :key="index" >
          <p>{{index}}</p>
          <div class="receive-message-name">{{item.name}}</div>
          <div class="receive-message-phone">{{item.phone}}</div>
          <div class="receive-message-address">{{item.address}}</div>
          <div class="address-options">
            <div class="add-btn" >修改</div>
            <div class="delete-btn">删除</div>
          </div>
        </div>
        <div class="receive-message-box plus-box">
          <p class="add-icon">+</p>
          <div class="plus-address" @click="addUserAddress">使用新地址</div>
        </div>
      </div>
    </div>
     <!-- 订单结算信息单元 -->
    <div class="settle-box user-agree-box">
      <div class="settle-title">
        <h3>用户须知</h3>
      </div>
      <div class="settle-content">
        <!-- 内容 -->
        <p>根据 2017 年 1 月 6 日国家工商行政管理总局令第 90 号公布的《网络购买商品七日无理由退货暂行办法》，手机激活后将不适用七日无理由退货规定。</p>
        <label><el-checkbox class="check-box" v-model="agree">我已阅读并同意上述内容</el-checkbox></label>
        <p>请您阅读用户须知内容，如果确认同意，请勾选“我已阅读并同意上述内容”</p>
      </div>
    </div>
     <!-- 订单结算信息单元 -->
    <div class="settle-box shop-list-box">
      <div class="settle-title">
        <h3>购物清单</h3>
      </div>
      <div class="settle-content">
        <!-- 内容 -->
        <div class="table-title">
          <div class="table-title-left">
            <span>商品信息</span>
          </div>
          <div class="table-title-right">
            <span>单价</span>
            <span>数量</span>
            <span>应付总额</span>
          </div>
          
        </div>
        <div class="table-good-list">
          <div class="table-good-item" v-for="(cart,index) in cartList" :key="index" >
            <template  v-if="goodInfoList[index]">
              <div class="table-good-item-left">
                <img :src="goodInfoList[index].shop_info.ali_image" alt="">
                <p>{{goodInfoList[index].name}}</p>
              </div>
              <div class="table-good-item-right">
                <p>￥{{goodInfoList[index].price}}.00</p>
                <p>{{cart.count}}</p>
                <p>￥{{goodInfoList[index].price}}.00</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
     <!-- 订单结算信息单元 -->
    <div class="settle-box invoice-box">
      <div class="settle-title">
        <h3>发票信息</h3>
      </div>
      <div class="settle-content">
        <!-- 内容 -->
        <p>发票类型：电子发票</p>
        <p>
          <span>发票抬头：</span>
          <el-radio class="invoice-owner" v-model="invoiceOwner" label="个人">个人</el-radio>
          <el-radio v-model="invoiceOwner" label="单位">单位</el-radio>
        </p>
        <p>发票内容：购买商品明细</p>
        <p class="invoice-tag">电子发票是税务局认可的有效付款凭证，可作为售后服务凭据，电子发票打印后可以用于企业报销。</p>
        
      </div>
    </div>
    <div class="product-fix-bar ">
        <div class="fix-bar-wrapper">
          <h1 class="bar-text">您已选择了</h1>
          <div class="bar-device-info">
            <h1 class="clearfix">
              <span class="title"></span>
            </h1>
            <h2></h2>
          </div>
          <div @click="toOrderList" class="bar-btn">
            <a>提交订单</a>
          </div>
          <div class="no-discount-price">
            <div class="bar-price">
              <i>￥</i>
              <span>{{totalPrice}}</span>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>
<script>
// 引入axios
// import axios from '../../api/ajax'
// 引入辅助函数
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'Settlement',
  data(){
    return {
      invoiceOwner: '个人',
      agree:false
    }
  },
  computed:{
    ...mapState({
      addressList:state=>state.user.userAddress.addressList,
      cartList:state=>state.cart.cartList,
      goodInfoList:state=>state.cart.goodInfoList

    }),
    ...mapGetters(["totalPrice"])
  },
  mounted(){
    this.$store.dispatch('getUserAddress',localStorage.getItem("UID"))
    this.$store.dispatch("getCartList",localStorage.getItem("UID"))
    
    
  },
  methods:{
    // async getUserAddressList(){
    //   const result = await axios({url:"/store/serv/v1/address/list"})
    //   if(result.status===200){
    //     this.userAddressList = result.data.data.list
    //   }
    // }
    checked(){
      return 0
    },
    toOrderList(){
      this.$router.push('/order')
    },
    addUserAddress(){
        this.$alert(`
        <input type="text" placeholder="收货人姓名">
        <input type="text" placeholder="手机号">
        <input type="text" placeholder="区号可选">`, '管理收货地址', {
          dangerouslyUseHTMLString: true
        });
      
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .product-fix-bar {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    background: #fafafa;
    border-top: 1px solid #e3e3e3;
    box-shadow: 0 -1px 3px rgb(0 0 0 / 4%);
    z-index: 25;
    &.follow {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .fix-bar-wrapper {
      width: 1220px;
      line-height: 20px;
      margin: 12px auto 0;
      .bar-text {
        color: #707070;
        font-size: 12px;
        font-weight: 500;
        margin-right: 20px;
        float: left;
      }
      .bar-device-info {
        position: relative;
        margin-right: 20px;
        font-size: 14px;
        float: left;
        h1 {
          font-size: 100%;
          font-weight: 400;
          .title {
            color: #707070;
            float: left;
            font-weight: 700;
          }
        }
        h2 {
          font-size: 12px;
          color: #9d9d9d;
          font-weight: 400;
        }
      }
      .bar-btn {
        background-color: #6383c6;
        background-image: linear-gradient(#6383c6, #4262af);
        width: 118px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        margin-left: 10px;
        border-radius: 6px;
        margin-top: -2px;
        padding: 1px;
        float: right;
        a {
          color: #fff;
        }

        &.white-btn {
          height: 40px;
          padding: 0;
          border: 1px solid #dedede;
          background-color: #f8f8f8;
          background-image: linear-gradient(#fbfbfb, #f5f5f5);
          a {
            height: 40px;
            line-height: 40px;
            padding: 0;
            color: #646464;
            font-weight: 700;
            background-color: #f8f8f8;
            background-image: linear-gradient(#fbfbfb, #f5f5f5);
            box-shadow: none;
            text-shadow: none;
          }
        }
        &.notice {
          background-color: #ffd330;
          background-image: linear-gradient(#ffd330, #ffd22d);
          cursor: not-allowed;
          a {
            color: #fff;
            cursor: pointer;
            background-color: #c7a522;
            background-image: linear-gradient(#ffd330, #ffd22d);
            box-shadow: inset 0 1px 2px #ffeb83;
            text-shadow: none;
          }
        }
      }

      .no-discount-price {
        float: right;
        margin-right: 20px;
        text-align: right;
        .bar-price {
          position: relative;
          font-size: 20px;
          font-weight: 700;
          color: #d44d44;
          line-height: 40px;
          i {
            font-style: normal;
            font-size: 14px;
          }
        }
      }
    }
  }
  .settlement-container{
    .foot-bar{
      width: 100%;
      height: 50px;
      background-color: red;
      &.active{
        position: fixed;
        bottom: 0;
        left: 0;
      }
    }
    background-color: #ededed;
    display: flow-root;
    padding: 0px 0 25px;
    .settle-box{
      width:1220px;
      margin: 0 auto;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #ccc;
      margin-top: 30px;
      .settle-title{
        height: 50px;
        padding: 0 10px 0 20px;
        background: linear-gradient(#fbfbfb,#ececec);
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        h3{
          font-size: 18px;
          font-weight: bolder;
          color: #666666;
        }
      }
      .settle-content{
        padding: 30px 30px 0;
        background-color: #fff;
        display: flow-root;
        font-size: 14px;
        font-weight: bolder;
        .receive-message-box{
          width: 276px;
          height: 158px;
          border: 1px solid #ccc;
          float: left;
          margin-bottom: 30px;
          margin-right: 18px;
          padding: 19px 14px 0 19px;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          &:hover .address-options{
            bottom: 0px;
            transition: all 400ms;
          }
          &.plus-box{
            transition: all 400ms;
            &:hover{
              background-color: rgb(238, 238, 238);
            }
          }
          >div{
            padding-top: 5px;
            font-weight: bolder;
            font-size: 14px;
            color: #999999;
            &:nth-of-type(2){
              padding-top: 15px;
            }
          }
          p{
            font-weight: bolder;
            font-size: 14px;
            color: #999999;
          }
          .address-options{
            position: absolute;
            display: flex;
            left: 0;
            bottom: -30px;
            >div{
              width: 136px;
              height: 28px;
              text-align: center;
              line-height: 28px;
              border: 1px solid #999999;
              background-color: #fff;
              &:hover{
                transition: all 400ms;
                background-color: rgb(238, 238, 238);
              }
            }
          }
          &.active{
            border-color: #5079d9;
          }
          &.active::after{
            content: "✔";
            display: block;
            position: absolute;
            right: 17px;
            top: 19px;
            font-family: SmartisanIconFont;
            font-size: 24px;
            color: #5079d9;
          }
          .plus-address{
            text-align: center;
          }
          .add-icon{
            margin-top: 30px;
            text-align: center;
          }
        }
      }
      
    }
    .settle-box.user-agree-box{
        .settle-content{
          
          padding:0 20px;
          p{
            padding-top: 20px;
            &:nth-of-type(2){
              height: 50px;
              width: 100%;
              background-color: #d44d44;
              padding: 0  20px;
              margin-left: -20px;
              line-height: 50px;
              color: #fff;
              font-size: 12px;
            }
          }
          label{
            padding: 20px 0;
            display: flow-root;
            .check-box{
              border-radius: 50%;
            }
          }
        }
        
    }
    .settle-box.shop-list-box{
      .settle-content{
        padding: 0;
        .table-title{
        height: 38px;
        padding: 0 20px;
        font-size: 12px;
        border-bottom: 1px solid #dbdbdb;
        background-color: #eee;
        display: flex;
        justify-content: space-between;
        line-height: 38px;
        color: #838383;
        font-weight: bold;
        .table-title-right{
          span{
            display: inline-block;
            width: 137px;
            text-align: center;
          }
        }
        }
        .table-good-list{
          .table-good-item{
            height: 110px;
            margin: 0 20px;
            display: flex;
            justify-content: space-between;
            .table-good-item-left{
              display: flex;
              align-items: center;
              img{
                height: 80px;
                width: 80px;
              }
            }
            .table-good-item-right{
              display: flex;
              align-items: center;
              p{
                width: 137px;
                text-align: center;
              }
            }
          }
        }
      }
      
    }
    .settle-box.invoice-box{
      color: #666666;
      font-size: 14px;
      .settle-content{
        padding: 22px 30px 28px;
        p{
          height: 36px;
          line-height: 36px;
          span{
            margin-right: 8px;
          }
          .invoice-owner{
            color: #666666;
            font-size: 14px;
            font-weight: 900;
          }
        }
        .invoice-tag{
          font-size: 12px;
          height: 24px;
          line-height: 24px;
          color: #999999;
          padding-top: 24px;
          border-top: 1px solid #ccc;
          margin-top: 10px;
        }
      }
    }
    
  }
</style>