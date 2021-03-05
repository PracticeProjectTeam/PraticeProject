<template>
  <div class="body">
    <div class="header">
      <div class="shopping">
        <h2>
          购物清单
        </h2>
      </div>
      <!-- <div class="shop-cart">
        <div class="shopDetail">
          <img src="../images/ia_200000016.png" alt="" />
          <div class="none">您的购物车中还没有商品</div>
          <div class="button">
            <button>现在选中</button>
          </div>
        </div>
      </div> -->
      <Showgoods />
      
      <div class="recommend">
        <div class="shopping">
          <h2>
            相关推荐
          </h2>
        </div>
        <div class="flex">
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <a href="#" class="sell-out">加入购物车</a>
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
              <div class="whole-link">
                <a href="#" class="check-detail">查看详情</a>
                <!-- <a href="#" class="sell-out">加入购物车</a> -->
              </div>
            </div>
          </div>
          <div class="Related-recommends">
            <div class="Related-content">
              <img
                class="Related-image"
                src="../images/ia_100000003715.png"
                alt=""
              />
              <div class="text-one">
                坚果 QuickCharge 4+ 快速充电器
              </div>
              <div class="text-two">全面兼容的 18W 快速充电</div>
              <img
                class="Related-image-one"
                src="../images/ia_200000002.jpg"
                alt=""
              />
              <div class="price">￥199.00</div>
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
</template>
<script>
import Showgoods from './showGoods'
export default {
  name: 'Cart',
   components: {
       Showgoods
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
  // height: 600px;
  border: 1px solid red;
}
.flex {
  background-color: #fff;
  display: flex;
}
.flex .Related-recommends {
  width: 300px;
  height: 430px;
  // border: 1px solid rebeccapurple;
  text-align: center;
}
.Related-recommends .Related-content .Related-image {
  width: 216px;
  height: 216px;
  padding: 45px 0 20px;
  // border: 1px solid rebeccapurple;
}
.Related-recommends .Related-content .text-one {
  line-height: 1.2;
  font-size: 14px;
  color: #333;
  font-weight: 700;
  margin: 0 24px;
}
.Related-recommends .Related-content .text-two {
  padding: 15px 24px 0;
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999;
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
  text-align: center;
  transition: all 0.1s ease-out;
  // position: relative;
}
.whole-link {
  // position: absolute;
  margin-top: 20px;
  margin-left: 5px;

  display: none;
  // width:100%;
  // height: 100%;
  // left:0;
  // top:0;
  // box-shadow: 0 0 35px #ddd inset;
}

.Related-content:hover .whole-link {
  display: block;
}
.Related-content:hover .price {
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
