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
            <div class="add-btn">修改</div>
            <div class="delete-btn">删除</div>
          </div>
        </div>
        <div class="receive-message-box plus-box">
          <p class="add-icon">+</p>
          <div class="plus-address">使用新地址</div>
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
          <div class="table-good-item">
            <div class="table-good-item-left">
              <img src="https://resource.smartisan.com/resource/4d9e7683b590cf4a6996d3b13136bcf8.png?x-oss-process=image/resize,w_100/format,webp" alt="">
              <p>坚果 R2（浅黑色，8G + 128GB）</p>
            </div>
            <div class="table-good-item-right">
              <p>¥ 3,999.00</p>
              <p>1</p>
              <p>¥ 3,999.00</p>
            </div>
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
    <div class="foot-bar " :class="ac?'active':''">

    </div>
  </div>
</template>
<script>
// 引入axios
// import axios from '../../api/ajax'
// 引入辅助函数
import {mapState} from 'vuex'
export default {
  name: 'Settlement',
  data(){
    return {
      ac:true,
      invoiceOwner: '个人',
      agree:false
    }
  },
  computed:{
    ...mapState({
      addressList:state=>state.user.addressList
    })
  },
  mounted(){
    // this.getUserAddressList()
    this.$nextTick(()=>{
      console.log(document.querySelector('.settle-box').clientHeight)
      document.addEventListener("scroll",()=>{
        let height = document.documentElement.scrollTop - document.querySelector('.settle-box').offsetHeight + 45 +75
        if(height>0){
          this.ac = false
        }else{
          this.ac = true
        }
      })
    })
    
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
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
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