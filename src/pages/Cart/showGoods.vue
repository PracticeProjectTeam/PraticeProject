<template>
  <div class="shopping-content">
    <div class="purchase">
      <div class="Details-left">
        <div>商品详情</div>
      </div>
      <div class="Middle-layout"></div>
      <div class="Details-right">
        <div>单价</div>
        <div>数量</div>
        <div>小计</div>
        <div>操作</div>
      </div>
    </div>
    <div class="for-details">
      <h4 class="a1">
        <label for="">满减</label>
      </h4>
      <span class="promotion a1">已享满 3000 减 1000 元</span>
    </div>
    <div class="cart-item">
      <div class="item-content">
        <div class="checked">
          <img src="../images/buttom.png" alt="" />
        </div>
        <div class="items-thumb">
          <div class="http-img">
            <img
              src="https://resource.smartisan.com/resource/623bad86546352a2035ec704e2faf041.png?x-oss-process=image/resize,w_80"
              alt=""
            />
          </div>
          <div class="blank">
            <h4 class="phone-type">
              坚果 R2
            </h4>
            <div class="phone-name">
              <span>
                松绿色
              </span>
              <span>|</span>
              <span>8G + 256GB</span>
            </div>
          </div>
        </div>
        <div class="phone-price">
          <div class="unit-price">
            <span>¥ 4,299.00</span>
          </div>
          <div class="butttom-num">
            <span class="add xy">
              <img class="add1" src="../images/add.png" alt="" />
            </span>
            <span> <input type="text" placeholder="2" class="input"/></span>
            <span class="reduce xy">
              <img class="reduce1" src="../images/del.png" alt="" />
            </span>
          </div>
          <div class="subtotal a1">
            <span>¥ 8,598.00</span>
          </div>
          <div class="multiply a1">
            <img src="../images/multiply.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="instructions">
      <div class="instructions-image a1">
        <img src="../images/ia_100000003612.png" alt="" />
      </div>
      <div class="show-content">
        购买 坚果 R2 保修服务，折算后每天仅需 0.41 元。
        <a href="#">进一步了解详情</a>
      </div>
    </div>
    <div class="total-price">
      <div class="checked">
        <div class="ischecked a1">
          <img src="../images/buttom.png" alt="" />
          <span class="check-all a2">全选</span>
          <span class="bar a2">|</span>
          <span class="Delete-content a2">删除选中按钮</span>
        </div>
      </div>
      <div class="total-content"></div>
      <div class="settlement">
        <div class="purchase-num">
          <div class="choose">已选择 <i class="a4">1</i>件商品</div>
          <div class="total-goods a5">共计 <i>1</i>件商品</div>
        </div>
        <!-- <div>|</div> -->
        <div class="vertical">
          <div class="total-amount">
            应付总额：￥
            <i class="a4">2,999.00</i>
          </div>
          <div class="not-including a5">
            总额节省：￥
            <i>1,000.00</i>
          </div>
        </div>

        <div class="buttom">
          <div class="buttom-content">现在结算</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.shopping-content {
  width: 1220px;
  /* height: 600px; */
  margin: 0 auto;
  color: #666;
  border: 1px solid #dbdbdb;
  background: #fff
}
.shopping-content .purchase {
  display: flex;
  height: 38px;
  line-height: 38px;
  height: 38px;
  padding: 0 0 0 30px;
  font-size: 12px;
  font-weight: 700;
  background: #f5f5f5;
  border-bottom: 1px solid #dbdbdb;
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.shopping-content .Details-left {
  display: flex;
  width: 100px;
}
.shopping-content .Details-right {
  display: flex;
  justify-content: space-around;
  width: 50%;
  height: 100%;
}
.Details-right div {
  margin-left: 30px;
}
.Middle-layout {
  width: 40%;
  height: 100%;
}
.for-details {
  height: 80px;
  width: 1144px;
  display: flex;
  color: #d44d44;
  font-size: 14px;
  font-weight: 700;
}
.for-details label {
  line-height: 26px;
  display: inline-block;
  margin: 10px 0 10px 80px;
  text-align: center;
  width: 80px;
  height: 26px;
  display: inline-block;
  box-sizing: border-box;
  background: #fcebea;
  border: 1px solid #f0b8b5;
  border-radius: 13px;
  margin-right: 20px;
}
.shopping-content .cart-item {
  width: 1220px;
}
.shopping-content .cart-item .item-content {
  height: 100px;
  display: flex;
}
.shopping-content .cart-item .checked {
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
}
.shopping-content .cart-item .checked img {
  height: 30px;
  width: 30px;
}
.shopping-content .items-thumb {
  display: flex;
  width: 40%;
}
.shopping-content .cart-item .items-thumb .http-img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0 solid hsla(0, 0%, 100%, 0.1);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  color: #5079d9;
  cursor: pointer;
  transition: all 0.15s ease-out;
}
.shopping-content .cart-item .items-thumb img {
  height: 80px;
  width: 80px;
}
.shopping-content .cart-item .items-thumb .blank h4 {
  margin-bottom: 0;
  margin-left: 15px;
}
.shopping-content .cart-item .items-thumb .phone-name {
  display: block;
  color: #999;
  font-size: 12px;
  padding-top: 6px;
  line-height: 17px;
  margin-left: 15px;
}
.shopping-content .phone-price {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.shopping-content .cart-item .phone-price .unit-price {
  width: 137px;
  text-align: center;
  color: #666;
  line-height: 110px;
  font-size: 14px;
}
.shopping-content .cart-item .phone-price .butttom-num {
  width: 112px;
  line-height: 110px;
  position: relative;
}
.shopping-content .cart-item .butttom-num .xy {
  position: relative;
  top: 12px;
}
.shopping-content .cart-item .phone-price .input {
  width: 10px;
  height: 10px;
  border: none;
}
.shopping-content .a1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shopping-content .instructions {
  width: 1114px;
  line-height: 80px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  background: #fafafa;
  margin: 10px 0 0 80px;
  display: flex;
}
.shopping-content .instructions .instructions-image {
  width: 100px;
}
.shopping-content .instructions .instructions-image img {
  width: 20px;
  height: 20px;
}
.shopping-content .instructions .show-content {
  font-size: 14px;
  color: #323232;
}
.shopping-content .instructions a {
  text-decoration: none;
  color: #5079d9;
}
.shopping-content .total-price {
  margin-top: 60px;
  width: 100%;
  height: 80px;
  display: flex;
  font-weight: 700;
}
.shopping-content .total-price .checked {
  width: 260px;
  line-height: 80px;
  display: flex;
}
.shopping-content .total-price .checked .ischecked {
  width: 200px;
  line-height: 80px;
}
.shopping-content .total-price .a2 {
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
}
.shopping-content .total-price .Delete-content {
  color: #bbb;
}
.shopping-content .total-price .bar {
  color: #bbb;
}
.settlement {
  display: flex;
}
.total-price .total-content {
  display: flex;
  width: 30%;
}
.total-price .settlement {
  display: flex;
  width: 50%;
  justify-content: space-around;
  margin-top: 20px;
}
.total-price .settlement .a3 {
  color: #323232;
  font-size: 16px;
}
.total-price .settlement .a4 {
  font-size: 18px;
  color: #d44d44;
}
.total-price .settlement .a5 {
  color: #959595;
  font-size: 14px;
}
.total-price .settlement i {
  font-style: normal;
  margin-left: 5px;
  margin-right: 10px;
}
.total-goods {
  margin-left: 10px;
}
.buttom {
  border-radius: 9px;
  width: 120px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  height: 44px;
  line-height: 45px;
  padding: 1px;
  border-radius: 9px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.15) 0 -1px 0;
  background: #567ce6 linear-gradient(#799cea, #567ce6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.2);
}
</style>
