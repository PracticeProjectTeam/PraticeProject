<template>
  <div class="body">
    <div class="header">
      <div class="shopping">
        <h2>
          购物清单
        </h2>
      </div>
       <Showgoods/>
      <!-- <div class="shop-cart" v-else>
        <div class="shopDetail">
          <img src="../images/ia_200000016.png" alt="" />
          <div class="none">您的购物车中还没有商品</div>
          <div class="button">
            <button>现在选中</button>
          </div>
        </div>
      </div> -->
     
      
       <div class="recommend">
        <div class="shopping">
          <h2>
            相关推荐
          </h2>
        </div>
        <div class="flex1">
        <div class="flex ConHover"  v-for="(shopItem) in shopCartList" :key="shopItem.id">
          <div class="Related-recommends ">
            <div class="Related-content">
              <img
                class="Related-image"
                :src="shopItem.shop_info.ali_image"
                alt=""
              />
              <div class="text-one">
                {{shopItem.product_info.product_name}}
              </div>
              <div class="text-two"> {{shopItem.shop_info.sku_mobile_sub_title}}</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥{{shopItem.price}}</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
         
        </div>
        
      </div>


      </div>


      </div>
    </div>

</template>
<script>
import Showgoods from './showGoods'
// 引入axios
// import axios from '@/api/ajax'
import {mapState} from 'vuex';
export default {
  name: 'Cart',
   components: {
       Showgoods
   },
  mounted(){
    //mine
    this.$store.dispatch("getCartList",localStorage.getItem("UID"))
    this.$store.dispatch('getShopCartList')
  },
  computed:{
     ...mapState({
       shopCartList:(state)=>state.shopcart.shopCartList
     }),
   
   }


}
</script>
<style lang="less" rel="stylesheet/less" scoped>


.body {
  width: 100%;
  min-width: 1220px;
  margin: 0;
  padding: 0;
  background-color: #ededed;
}
.header {
  width: 1220px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
}
.shopping {
  width: 100%;
  height: 60px;
  //  border: 1px solid red;
  background: #fafafa;
}
.shopping h2 {
  width: 1178px;
  // border: 1px solid pink;
  padding-right: 20px;
  margin: 0 auto;
  padding: 0;
  line-height: 60px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
}
.shop-cart {
  padding: 40px 0 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #ffc0cb;
  margin-bottom: 30px;
  background-color: #fff;
}
.shopDetail .none {
  font-size: 14px;
  text-align: center;
  color: #8d8d8d;
  margin: 35px 0px 20px 0px;
}
.shopDetail .button {
  text-align: center;
  margin-bottom: 50px;
}
.float-content {
  line-height: 38px;
  height: 38px;
  padding: 0 0 0 30px;
  font-size: 12px;
  font-weight: 700;
  background: #f5f5f5;
  border-bottom: 1px solid #dbdbdb;
  border-bottom-color: rgba(0, 0, 0, 0.08);
  color: #838383;
}
.float-content .num{
  width: 36px;
    height: 18px;
    border: none;
    border-radius: 3px;
    line-height: 18px;
    text-align: center;
    font-size: 14px;
    
}

.left {
  float: left;
}
.right {
  float: right;
}
.right div {
  float: left;
  padding-right: 45px;
  padding-left: 45px;
}
.cart-item{
  height: 110px;
  width: 100%;
  border: 1px solid red;
  background-color: #fff;
  position: relative;
}

.cart-item .checked img{
    display: block;
    padding:50px 20px 50px 20px;
    width: 18px;
    height: 18px;
    position: absolute;
}
.items-thumb{
   
    position:absolute;
    padding: 20px 80px;
}
.items-thumb img{
     width: 80px;
    height: 80px;
    border: 1px solid hotpink;
    border: 0 solid hsla(0,0%,100%,.1);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
}
.items-thumb .blank{
    width: 180px;
    height: 80px;
    border: 1px solid hotpink;
    // color: #333;
    // font-size: 16px;
    // font-weight: 700;
    top: -60px;
    left: 110px;
    bottom: 0;
    right: 0;
    position: relative;
}
.items-thumb .blank1{
  color: #333;
    font-size: 16px;
    font-weight: 700;
}
.items-thumb span{
    color: #999;
    font-size: 12px;
    padding-top: 6px;
    line-height: 17px;
}


.shopDetail button {
  border: 1px solid #e1e1e1;
  width: 140px;
  height: 50px;
  // border: none;
  color: #646464;
  background-color: #f9f9f9;
  border-radius: 6px;
  cursor: pointer;
}

.recommend {
   height: 900px;
  border: 1px solid red;
  background-color: #fff;
}
.flex1 .flex {
  
  float: left;
   height: 400px;
}
.flex .Related-recommends {
  width: 300px;
  // height: 430px;
  // border: 1px solid rebeccapurple;
  text-align: center;
  border: 1px solid #e5e5e5
}
.Related-recommends .Related-content .Related-image {
  width: 216px;
  height: 216px;
  // padding: 45px 0 20px;
  // border: 1px solid rebeccapurple;
}
.Related-recommends .Related-content .text-one {
  line-height: 1.2;
  font-size: 14px;
  color: #333;
  font-weight: 700;
  margin: 0 24px;
  overflow:hidden; /*超出的部分隐藏起来。*/ 
  white-space:nowrap;/*不显示的地方用省略号...代替*/
}
.Related-recommends .Related-content .text-two {
  padding: 15px 24px 0;
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999;
  overflow:hidden; /*超出的部分隐藏起来。*/ 
  white-space:nowrap;/*不显示的地方用省略号...代替*/
}
.Related-recommends .Related-content .Related-image-one {
  width: 8px;
  height: 8px;
  margin-top: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  padding: 2px;
  transition: all 0.15s ease-out;
  box-shadow: inset 0 0 0 1px #b2b2b2;
  border-color: #b2b2b2;
}
.Related-recommends .Related-content .price {
  font-family: Arial;
  color: #d44d44;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 130px;
  text-align: center;
  transition: all 0.1s ease-out;
  // position: relative;
}
.Related-recommends .Related-content .whole-link {
  // position: absolute;
  margin-top: 20px;
  margin-left: 5px;
  display: none;
}

.ConHover:hover  .whole-link{
  display: block;
}
.ConHover:hover .price {
  display: none;
}
.whole-link .check-detail {
  width: 90px;
  height: 30px;

  border-radius: 6px;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #e1e1e1;
  color: #888;
  background-color: #f9f9f9;
  text-decoration: none;
  //  padding-top: -50px;
}

.whole-link .sell-out {
  // padding-top: -50px;
  width: 90px;
  height: 30px;
  margin-left: 10px;
  border-radius: 6px;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #e1e1e1;
  color: #fff;
  background-color: #00ee;
  text-decoration: none;
}
</style>
