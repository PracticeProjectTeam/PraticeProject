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
      <div
        class="item-content"
        v-for="(goodsItem, index) in shopgoods"
        :key="index"
      >
        <div class="checked">
          <!-- <img src="../images/buttom1.png" alt="" v-if="goodsItem.ischecked">
            <img src="../images/buttom.png" alt="" v-if="!goodsItem.ischecked" > -->
          <el-checkbox
            v-model="goodsItem.ischecked"
            @change="changeCheckItem(goodsItem)"
          ></el-checkbox>
        </div>

        <div class="items-thumb">
          <div class="http-img">
            <img :src="goodsItem.shop_info.ali_image" alt="" />
          </div>
          <div class="blank">
            <h4 class="phone-type">
              {{ goodsItem.product_info.product_name }}
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
            <span>¥{{ goodsItem.price }}</span>
          </div>
          <div class="butttom-num">
            <span class="add xy">
              <img
                class="add1"
                src="../images/add.png"
                alt=""
                @click="updateSkuNum(goodsItem, 1)"
              />
            </span>
            <span>
              <input
                type="text"
                class="input"
                :value="goodsItem.skuNum"
                @change="
                  updateSkuNum(
                    goodsItem,
                    $event.target.value - goodsItem.skuNum,
                    $event
                  )
                "
                @input="validInput"
            /></span>
            <span class="reduce xy">
              <img
                class="reduce1"
                src="../images/del.png"
                alt=""
                @click="updateSkuNum(goodsItem, -1)"
              />
            </span>
          </div>
          <div class="subtotal a1">
            <span>¥ {{ totalPrice }}</span>
          </div>
          <div class="multiply a1">
            <img
              src="../images/multiply.png"
              alt=""
              @click="deleteItem(index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="instructions">
      <div class="instructions-image a1">
        <!-- <img src="../images/ia_100000003612.png" alt="" /> -->
      </div>
      <i
        class="el-icon-circle-plus a1"
        style="color:#409EFF"
        type="text"
        @click="centerDialogVisible = true"
      ></i>
      <el-dialog
        title="选购保修服务"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <ul class="dialog">
          <div class="dialog-img a1">
            <img src="https://resource.smartisan.com/resource/dbc577f11569177d8a8aacab3931e8d9.jpeg?x-oss-process=image/format,webp" >
          </div>
          <div class="dialog-right">
             <div class="smartisan a1">
            <div>Smartisan TNT go 意外碎屏保修服务</div>
            </div>
          <div class="dialog-day">
              <div>仅需 0.41 元/天 了解详情</div>
              
          </div>
          </div>
         
        </ul>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <div class="show-content">
        购买 坚果 R2 保修服务，折算后每天仅需 0.41 元。
        <a href="#">进一步了解详情</a>
      </div>
    </div>
    <div class="total-price">
      <div class="checked">
        <div class="ischecked a1">
          <el-checkbox v-model="allChecked" @change="checkAll"></el-checkbox>
          <span class="check-all a2">全选</span>
          <span class="bar a2">|</span>
          <span class="Delete-content a2" @click="deletecheked(index)"
            >删除选中按钮</span
          >
        </div>
      </div>
      <div class="total-content"></div>
      <div class="settlement">
        <div class="purchase-num">
          <div class="choose">
            已选择 <i class="a4">{{ totalCount }}</i
            >件商品
          </div>
          <div class="total-goods a5">
            共计 <i>{{ totalCount }}</i
            >件商品
          </div>
        </div>
        <!-- <div>|</div> -->
        <div class="vertical">
          <div class="total-amount">
            应付总额：￥
            <i class="a4">{{ totalPrice }}</i>
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
import { mapGetters, mapState } from "vuex";
import vue from "vue";

export default {
  name: "Header",
  data() {
    return {
      allChecked: false,
      centerDialogVisible: false,
      color1: "#409EFF",
    };
  },
  mounted() {
    this.$store.dispatch("getShopgoods");
    this.$store.dispatch("delShopgoods");
  },
  computed: {
    ...mapGetters(["totalCount", "totalPrice"]),
    ...mapState({
      shopgoods: (state) => state.shopcart.shopgoods,
    }),
  },
  methods: {
    //对话框内容
   
    //全选按钮
    deletecheked(index) {
      this.$store.dispatch("delShopgoods", index);
    },
    //修改选中状态
    changeCheckItem(item) {
      console.log(item);
      vue.set(item, "ischecked", !item.ischecked);
      this.allChecked = item.ischecked;
      console.log(item.ischecked);
    },
    //全部选中的数量
    checkAll() {
      this.shopgoods.forEach((item) => {
        console.log("====");
        // vue.set(item,'ischecked',this.allChecked)
        item.ischecked = this.allChecked;
        this.shopgoods.splice(this.shopgoods.length, 0);
        console.log(item);
      });
    },
    //修改当前商品数量
    async updateSkuNum(item, changeNum, event) {
      const { skuNum } = item;
      //判断当前的修改的数据和原先的数据相加是否有意义
      const targetNum = skuNum + changeNum;
      console.log(targetNum);
      if (targetNum > 0) {
        vue.set(item, "skuNum", targetNum);
        //分发action
        //  try {
        //     await this.$store.dispatch('getShopgoods',{
        //       id,
        //       skuNum: changeNum,
        //     })
        //  } catch (error) {
        //   //  this.$message.error(error.message|| '修改数量失败了')
        //  }
      } else {
        if (event) {
          //文本输入框是无效数据，那么失去焦点后恢复到原来的样子
          event.target.value = item.skuNum;
        }
      }
    },
    // 修改当前商品的数量操作----对应着的文本框的input事件的回调
    validInput(event) {
      // 获取文本框的数据
      const value = event.target.value;
      // 通过正则的方式校验错误的数据后,进行替换成正确的数据,再次赋值给文本框
      event.target.value = value.replace(/^0+|\D+0*/, "");
    },

    deleteItem(index) {
      this.$confirm("您确定要删除当前的商品吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store
            .dispatch("delShopgoods", index)
            .then(() => {
              this.$message.success("删除成功");
            })
            .catch((error) => {
              this.$message.error(error.message || "删除失败");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.dialog{
  margin: 0;
  padding: 0;
  width: 300px;
  height: 100px;
  position: relative;
}
.dialog .dialog-img{
   height: 100%;
   width: 50px;
}
.dialog .dialog-img img{
  width: 30px;
  height: 50px;
}


.dialog-right{
  height: 100%;
  width: 228px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 70px;
  right: 0;
}
.dialog .smartisan{
  height: 50px;
  font-size: 14px;
    font-weight: 700;
    line-height: 1.34;
    color: #333;
    width: 100%;
   
}
.dialog-day{
 width: 100%;
  height: 50px;
  color: #d44d55;
    font-size: 12px;
    font-weight: 700;
  position: relative;
}
.dialog-day div{
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 0px;
  right: 0;
}



.shopping-content {
  width: 1220px;
  /* height: 600px; */
  margin: 0 auto;
  color: #666;
  border: 1px solid #dbdbdb;
  background: #fff;
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
  margin-top: 30px;
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
  position: relative;
}
.shopping-content .instructions i {
  width: 20px;
  height: 20px;
  // border:1px solid red;
  position: absolute;
  margin-left: 50px;
  margin-top: 30px;
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
