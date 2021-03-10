<template>
  <div class="wrapper">
    <div class="item-wrapper">
      <section class="gray-box clearfix">
        <div class="gallery-wrapper clearfix">
          <div class="gallery">
            <!--缩略图-->
            <figure class="thumbnail">
              <ul>
                <li @click="changeCurrentIndex(index)" :class="{on:imgCurrentIndex==index}" v-for="(item,index) in aliImages" :key="item">
                  <img :src="item">
                </li>
              </ul>
            </figure>
            <!--展示图-->
            <figure class="thumb">
              <ul>
                <li class="on">
                  <img alt :src="aliImages[imgCurrentIndex]">
                </li>
              </ul>
            </figure>
          </div>
        </div>
        <!--商品信息-->
        <div class="item-information">

          <article class="item-title">
            <h1>{{skuInfo.title}}</h1>
            <h2>{{skuInfo.sub_title}}</h2>
            <div class="item-price">
              <span>
                <em>￥</em>
                <i>{{skuInfo.price}}</i>
              </span>
            </div>
          </article>

          <!--活动-->
          <section class="activities-wrapper clearfix">
            <div class="activities">
              <span class="activities-title">促销活动</span>
              <div class="activities-list">
                <article class="activities-item">
                  <figure class="tag-wrapper">
                    <span class="tag tag-red">新人礼</span>
                  </figure>
                  <label style="color:gray">
                    下载 App 领新人大礼包，首单优惠购最低只要 ¥ 9.9
                    <a href="http://baidu.com">查看详情</a>
                  </label>
                </article>
                <template v-if="promotions">
                  <article class="activities-item" v-for="item in promotions" :key="item.id">
                    <figure class="tag-wrapper">
                      <span class="tag tag-red">{{item.tag}} </span>
                    </figure>
                    <label v-if="item.type === 9">
                      满 {{item.rule.result.discount[0].full_money}} 减 {{item.rule.result.discount[0].decrease_money}}
                      <a href="http://baidu.com">查看活动详情</a>
                    </label>
                  </article>
                </template>

              </div>
            </div>
          </section>

          <!--颜色容量选择-->
          <template v-if="specV2">
            <section class="item-spec-wrapper clearfix item-spec-package" v-for="(attr,index) in specV2" :key="index">
              <div class="item-spec">
                <span class="spec-title">{{attr.spec_name}}选择</span>
                <template v-if="index==0">
                  <ul class="spec-info">
                    <li class="normal" :class="[value.isChecked?'active':'']" v-for="(value,index2) in attr.spec_values" :key="value.id" @click="setVal(index,value,attr.spec_values,index2,attr)">
                      <aside class="spec-item item-inline">
                        <h1 class="item-name">{{value.item_value}}</h1>
                      </aside>
                    </li>
                  </ul>
                </template>
                <template v-if="index==1">
                  <ul class="spec-info">
                    <li class="normal" :class="[value.isChecked?'active':'',!AllspecV2Json[specIndex1][index3]?'disabled':'']" v-for="(value,index3) in attr.spec_values" :key="value.id" @click="setVal(index,value,attr.spec_values,index3,attr)">
                      <aside class="spec-item item-inline">
                        <h1 class="item-name">{{value.item_value}}</h1>
                      </aside>
                    </li>
                  </ul>
                </template>
              </div>
            </section>
          </template>

          <!--数量选择-->
          <section class="item-do-count-wrapper clearfix">
            <div class="item-do-count">
              <span class="do-count-title">数量选择</span>
              <aside class="do-count">
                <div class="select">
                  <span class="down" :class="[skuInfo.stock>0 && count>0?'':'disabled']" @click="changeNumber(-1)">-</span>
                  <span class="num">{{count}}</span>
                  <span class="up" :class="[skuInfo.stock>0?'':'disabled']" @click="changeNumber(1)">+</span>
                </div>
              </aside>
            </div>
          </section>
          <!--服务说明-->
          <section class="sku-custom-tips-wrapper clearfix">
            <div class="sku-custom-tips">
              <span class="sku-custom-tips-title">服务说明</span>
              <aside class="sku-custom-tips-text">
                <p>
                  满 88 元包邮
                </p>
              </aside>
            </div>
          </section>
          <!--保修服务-->
          <section class="insurance-wrapper">
            <span class="insurance-title">保修服务</span>
            <ul class="insurance-info">
              <li v-for="(item) in accessory" :key="item.goods_code">
                <div class="insurance-item">
                  <div class="insurance-item-left">
                    <h1>{{item.goods_name}}</h1>
                    <p>“屏幕意外摔碎，可以免费更换 ? ”</p>
                  </div>
                  <div class="insurance-item-right">
                    <h2>
                      <span class="money">{{item.price}}</span>元 / {{item.service_time/12}} 年
                    </h2>
                    <p>折算后仅需
                      <span>{{(item.price/((item.service_time/12)*365)).toFixed(2)}}</span> 元/天
                    </p>
                  </div>
                  <div class="icon"></div>
                </div>
              </li>

            </ul>
          </section>
        </div>
      </section>
      <section class="gray-box clearfix">
        <article class="headline">
          <h2>产品信息</h2>
        </article>
        <div class="item-info">
          <img :src="item" v-for="item in skuInfo.goodsView" :key="item">
        </div>
      </section>
      <section class="gray-box clearfix">
        <article class="headline">
          <h2>相关推荐</h2>
        </article>
        <ul class="recommend-items clearfix">
          <li class="recommend-item-four">

          </li>
        </ul>
      </section>
      <div class="product-fix-bar " :class="{follow:footer}">
        <div class="fix-bar-wrapper">
          <h1 class="bar-text">您已选择了</h1>
          <div class="bar-device-info">
            <h1 class="clearfix">
              <span class="title">{{skuInfo.title}}</span>
            </h1>
            <h2>{{skuInfo.color}}</h2>
          </div>
          <div @click="addToCart" v-if="skuInfo.stock&&skuInfo.in_stock" class="bar-btn">
            <a>加入购物车</a>
          </div>
          <div :class="[skuInfo.stock>0&&skuInfo.in_stock?'white-btn':'disabled notice','bar-btn']">
            <a v-if="skuInfo.stock&&skuInfo.in_stock">现在购买</a>
            <a v-else>到货通知</a>
          </div>
          <div class="no-discount-price">
            <div class="bar-price">
              <i>￥</i>
              <span>{{skuInfo.price}}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--客服-->
    <div>
      <aside class="service-fixed-bar">
        <figure class="bar-item cus-service">
          <span class="icon icon-cus-service"></span>
          <figcaption class="txt">联系客服</figcaption>
        </figure>
        <figure class="bar-item backtop" @click="toTop">
          <span class="icon icon-backtop"></span>
          <figcaption class="txt">回到顶部</figcaption>
        </figure>
      </aside>
    </div>
    <!--到货通知弹窗-->
    <div class="d"></div>
  </div>
</template>
<script>
//  引入vuex的辅助函数
import { mapState, mapGetters } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      imgCurrentIndex: 0, //当前缩略图的下标
      footer: true, //购买条是否固定定位
      count: 1, // 加入购物车的数量,
      specs: [], //可选择的销售属性
      isActive: false,
      isStocks: [],
      specIndex: "",
    };
  },
  mounted() {
    this.load = this.$loading.service({ text: "加载中" });
  },
  updated() {
    let wrapperHeight = document.querySelector(".wrapper").clientHeight;
    document.addEventListener("scroll", () => {
      let height =
        document.documentElement.scrollTop - wrapperHeight + 340 + 75 + 45;

      if (height > 0) {
        this.footer = false;
      } else {
        this.footer = true;
      }
    });

    this.load.close();
  },
  methods: {
    // 选择缩略图
    changeCurrentIndex(index) {
      this.imgCurrentIndex = index;
    },

    // 获取所有的sku_info
    // async getSkuInfo(ids) {
    //   const result = await this.$API.reqSpus(ids);
    //   if (result.status === 200) {
    //     this.skuInfos = result.data.data.list[0].sku_info;
    //     this.load.close()
    //   }
    // },

    // 点击属性值，修改选中项，同时发送请求获取属性值对应的商品
    setVal(index0,val, attr, index, attrParent) {
      console.log(this.specs, index);
      // 把当前下标变成index
      if (attrParent.spec_name == "颜色") {
        this.specIndex = index;
      } 
        // 把当前的属性值对象所在的数组进行遍历
        attr.forEach((value) => {
          // this.$set(value,'isChecked',false)
          value.isChecked = false;
        });
        val.isChecked = true;

        // 获取当前对应的id
        const valId = val.id;
        console.log(valId);

        // 获取有效的销售属性对象
        // const specV2Json = this.specV2Json
        // 把属性值的id保存到数组容器中
        this.specs[index0] = valId;
        // 把数组中的所有数字变成字符串，中间以|的方式隔开
        const selectedSpecValue = this.specs.join("|");

        // 获取有效字符串的keys
        //let keys = Object.keys(this.specV2Json)
        // 将当前字符串与有效的字符串进行匹配
        this.specV2Json.forEach((item) => {
          if (item[selectedSpecValue]) {
            // 存在就获取对应的skuid
            let skuId = item[selectedSpecValue];
            console.log(skuId);
            // 判断是否与当前skuid一样，就不重新请求
            if (this.$route.params.ids != skuId) {
              this.$router.replace(`/detail/${skuId}`);
            }
          }
        });
      
    },

    // 改变商品数量
    changeNumber(num) {
      if (this.skuInfo.stock > 0) {
        this.count += num * 1;
      }
    },

    // 加入购物车
    async addToCart() {
      // 获取sukId和count
      const skuId = this.$route.params.ids;
      const count = this.count;
      const item = {
        skuId,
        count,
        isSelected:true
      }
      let userId = localStorage.getItem("UID")
      if(!userId){
        this.$router.push('/login')
      }else{
        const result = await this.$API.reqUserShopCart(userId)
        let cartList = result.data[0].cartList
        let haveBuyGood = cartList.find(cartItem=>{
          return cartItem.skuId===item.skuId
        })
        if(haveBuyGood){
          haveBuyGood.count = haveBuyGood.count+1
        }else{
          cartList.push(item)
        }

        const result2 = await this.$API.reqChangeCart(userId,cartList)
        if(result2.status == 200) {
          console.log('添加成功')
          this.$router.push('/cart')
        }
      }
      
    },

    // 回到顶部
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  computed: {
    ...mapState({}),

    ...mapGetters([
      "specV2",
      "aliImages",
      "skuInfo",
      "promotions",
      "accessory",
      "specV2Json",
      "AllspecV2Json",
      // "specIndex",
    ]),

    specIndex1: {
      get() {
        let spec_values = this.specV2[0].spec_values;
        let arr = [];
        if (spec_values) {
          arr = spec_values.map((item) => {
            return item.id;
          });
        }
        // Object.keys(obj).forEach(item => {
        //   if (obj[item].length == 0) {
        //     delete obj[item]
        //   }
        // })

        // 获取当前的第一个销售属性id
        let attrInfo = this.skuInfo.attrInfo;
        let val;
        if (attrInfo) {
          val = attrInfo[Object.keys(attrInfo)[1]].spec_value_id;
        }

        let index = arr.indexOf(String(val));
        console.log(index);
        // this.$set(this.specIndex, index)
        if (this.specIndex) {
          index = this.specIndex;
        }

        return index;
      },
    },

    set() {},
  },
  watch: {
    // 监视商品的数量
    count(value) {
      //
      if (value <= 0) {
        this.count = 1;
      }
    },
    // 监视route,route信息改变就请求商品信息数据
    $route: {
      handler(route) {
        // 获取路由地址中的params的参数ids
        let ids = route.params.ids;
        // 调用action获取产品信息数据
        this.$store.dispatch("getDetailInfo", ids);
      },
      // 该回调将回在侦听开始之后被立即调用
      immediate: true,
    },

    // 监视specV2
    specV2: {
      handler(spec) {
        const temp = [];
        spec.forEach((item) => {
          item.spec_values.forEach((item2) => {
            if (item2.isChecked) {
              temp.push(item2.id);
            }
          });
        });

        this.specs = temp;
      },
    },

    // 监视specV2Json
    // specV2Json:{
    //   handler(spec) {
    //     // const isStocks = []
    //     console.log(1111111111111)
    //     console.log(this.AllspecV2Json)
    //     console.log(spec)
    //     console.log(2222222222222222)
    //     let arr = []
    //     spec.forEach(item=>{
    //       for (const key in item) {
    //         console.log(key)
    //         let temp = key.split('|')
    //         if(arr.incl)
    //       }
    //     })
    //   }
    // }
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
html {
  line-height: 1.15;
}
//清除浮动
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.wrapper {
  min-width: 1220px;
  min-height: calc(100vh-353px);
  background: #ededed;
  overflow: hidden;
  width: 100%;
}

.item-wrapper {
  min-height: 600px;
  // padding-bottom: 60px;
  color: #666;
  font-size: 14px;
  .gray-box {
    // display: table;
    // padding: 60px;
    overflow: hidden;
    width: 1220px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    box-shadow: 0 3px 8px -6px rgb(0, 0, 0 / 10%);
    .gallery-wrapper {
      display: table-cell;
      vertical-align: top;
      .gallery {
        float: left;
        width: 540px;
        display: table-cell;
        .thumbnail {
          display: table-cell;
          vertical-align: middle;
          li {
            width: 54px;
            height: 54px;
            border-radius: 5px;
            cursor: pointer;
            padding: 12px;
            margin-top: 10px;
            border: 1px solid rgba(0, 0, 0, 0.06);
            &.on {
              padding: 10px;
              border: 3px solid rgba(0, 0, 0, 0.2);
            }
          }
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
        }
        .thumb {
          display: table-cell;
          vertical-align: middle;
          & > ul {
            margin-left: 20px;
            width: 400px;
            height: 400px;
            position: relative;
            li {
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              text-align: center;
              user-select: none;
              &.on {
                display: block;
                z-index: 1;
                opacity: 1;
              }
              img {
                display: block;
                max-width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }
    .item-information {
      display: table-cell;
      vertical-align: middle;
      width: 610px;
      .item-title {
        width: 100%;
        position: relative;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        h1 {
          width: 420px;
          font-size: 24px;
          line-height: 30px;
          color: #000;
          padding: 0 0 20px;
        }
        h2 {
          width: 420px;
          color: #999;
          font-size: 14px;
          line-height: 18px;
          padding-bottom: 28px;
          font-weight: 400;
        }
        .item-price {
          position: absolute;
          right: 9px;
          bottom: 28px;
          text-align: right;
          overflow: hidden;
          span {
            display: block;
            color: #d44d44;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            text-align: right;
            i {
              font-size: 24px;
              padding-left: 3px;
            }
          }
        }
      }
      .activities-wrapper {
        margin: 0;
        padding: 30px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        .activities {
          position: relative;
          .activities-title {
            width: 85px;
            height: 28px;
            line-height: 28px;
            color: #666;
            font-size: 14px;
            float: left;
          }
          .activities-list {
            top: 2px;
            position: relative;
            float: left;
            width: 472px;
            height: 100%;
            & article:not(:first-child) {
              margin-top: 12px;
            }
            .activities-item {
              display: flex;
              white-space: nowrap;
              font-size: 12px;
              line-height: 20px;
              height: 20px;
              box-sizing: border-box;
              overflow: hidden;
              .tag-wrapper {
                flex-shrink: 0;
                position: relative;
                span {
                  margin-right: 10px;
                  display: inline-block;
                  position: relative;
                  left: -35px;
                  top: -12px;
                }
                .tag {
                  margin-top: -1px;
                  overflow: hidden;
                  vertical-align: middle;
                  text-align: center;
                  padding: 0 8px;
                  font-size: 12px;
                  line-height: 18px;
                  border-radius: 13px;
                  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 5%);
                  border: 1px solid #d3d3d3;
                }
                .tag.tag-red {
                  color: #d44d44;
                  background: #fce9e8;
                  border-color: #f0bab6;
                }
              }
              label {
                color: #d44d44;
                display: inline-block;
                position: relative;
                left: -80px;
                a {
                  display: inline-block;
                  height: 20px;
                  line-height: 20px;
                  color: #5079d9;
                  cursor: pointer;
                  transition: all 0.15s ease-out;
                  text-decoration: none;
                  background-color: transparent;
                }
              }
            }
          }
        }
      }
      .item-spec-wrapper {
        margin-top: 30px;
        .item-spec {
          position: relative;
          .spec-title {
            position: relative;
            width: 85px;
            height: 39px;
            line-height: 39px;
            color: #666;
            font-size: 14px;
            float: left;
          }
          .spec-info {
            display: inline-block;
            position: relative;
            float: left;
            width: 472px;
            height: 100%;
            padding-bottom: 30px;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
            & > li {
              width: auto;
              padding: 0 20px;
              margin: 5px 10px 5px 0;
              float: left;
              border-radius: 6px;
              cursor: pointer;
              .spec-item.item-inline {
                width: 100%;
                display: block;
                line-height: 1.4;
                text-align: center;
                padding: 13px 0;
                .item-name {
                  color: #323232;
                  font-size: 18px;
                  text-align: left;
                  height: 100%;
                  font-weight: 400;
                }
              }
            }
            & > li.normal {
              float: left;
              border: 1px solid red;
              border-radius: 7px;
              cursor: pointer;
              transition: box-shadow 0.15s linear;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            & > li.active {
              color: #999;
              border: 1px solid #6a8fe6;
              transition: none;
              box-shadow: none;
            }

            & > li.disabled {
              cursor: not-allowed;
              border: 1px dotted #e5e5e5;
            }
          }
        }
      }
      //数量选择
      .item-do-count-wrapper {
        margin: 0;
        padding: 30px 0;
        .item-do-count {
          position: relative;
          // display: flex;
          & .do-count-title {
            width: 85px;
            height: 28px;
            line-height: 28px;
            color: #666;
            font-size: 14px;
            float: left;
          }
          & .do-count {
            position: relative;
            float: left;
            width: 472px;
            height: 100%;
          }
        }
      }
      .select {
        position: absolute;
        left: 0;
        top: -3px;
        overflow: hidden;
        width: 128px;
        height: 40px;
        text-align: center;
        & .num {
          position: relative;
          overflow: hidden;
          float: left;
          display: inline-block;
          width: 56px;
          height: 18px;
          margin: 7px 0 0;
          border: none;
          border-radius: 3px;
          line-height: 18px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #454549;
        }
      }
      .select .down {
        position: relative;
        float: left;
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 40px;
        text: index -9999em;
        user-select: none;
      }
      .select .up {
        position: relative;
        float: left;
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 40px;
        text: index -9999em;
        user-select: none;
      }
      .select .down:before {
        content: "";
        position: absolute;
        left: -4px;
        right: -4px;
        top: 0;
        height: 45px;
        background: url("http://static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png");
        background-size: 100% auto;
        background-position: 0 -300px;
      }
      .select .down.disabled:before {
        background-position: 0 -60px;
      }
      .select .up:before {
        content: "";
        position: absolute;
        left: -4px;
        right: -4px;
        top: 0;
        height: 45px;
        background: url("http://static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png");
        background-size: 100% auto;
        background-position: 0 0;
      }
      .disabled {
        cursor: not-allowed;
      }
      .select .up.disabled:before {
        background-position: 0 -240px;
      }
      .sku-custom-tips-wrapper {
        margin: 0;
        padding: 25px 0;
        .sku-custom-tips {
          position: relative;
          display: flex;
          .sku-custom-tips-title {
            width: 85px;
            height: 28px;
            line-height: 28px;
            color: #666;
            font-size: 14px;
            float: left;
          }
          .sku-custom-tips-text {
            position: relative;
            top: 5px;
            width: 472px;
            p {
              position: relative;
              line-height: 1.5;
              padding-left: 10px;
              color: #999;
              font-size: 12px;
            }
            p:last-child {
              padding-bottom: 0;
            }
            p:before {
              content: "*";
              top: 2px;
              margin: auto;
              position: absolute;
              left: 0;
              font-size: 14px;
            }
          }
        }
      }

      .insurance-wrapper {
        padding: 30px 0;
        overflow: auto;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        .insurance-title {
          width: 85px;
          height: 70px;
          line-height: 70px;
          color: #666;
          font-size: 14px;
          float: left;
          box-sizing: border-box;
        }
        .insurance-info {
          position: relative;
          float: left;
          width: 525px;
          height: 100%;
          & li {
            position: relative;
            width: 525px;
            cursor: pointer;
            transition: box-shadow 0.15s linear;
            margin-bottom: 20px;

            & .insurance-item {
              position: relative;
              height: 70px;
              border: 1px solid #e5e5e5;
              border-radius: 7px;
              & .insurance-item-left {
                float: left;
                color: #333;
                margin-left: 20px;
                & h1 {
                  font-size: 18px;
                  margin-top: 13px;
                }
                & p {
                  font-size: 14px;
                  margin-top: 11px;
                  color: #999;
                }
              }

              & .insurance-item-right {
                float: right;
                color: #d44d44;
                margin-right: 20px;
                & h2 {
                  font-size: 14px;
                  margin-top: 9px;
                  & .money {
                    font-size: 21px;
                  }
                }
                & p {
                  font-size: 14px;
                  margin-top: 10px;
                }
              }

              & .icon {
                position: absolute;
                width: 15px;
                height: 15px;
                top: -1px;
                right: 0;
                background-image: -webkit-image-set(
                  url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAWRJREFUKBWFU01qg1AQHp9GlJpNkqURLxAh7UUKPUq7L5Su05uUXqRQcoS4DIgSIonR2PmGTGuaSoTk/cz3N76ntVwuW7ryWJZFbdtuGfbZNM3bfD7/AMUC2fM8OgF6ZVB3XZeOxyNtNpuXJEmehez7fi+pW2CBmsk2i1h5nj8YFDlSF9M7Z5xjjGmQgsdHpxfZKfwRd6qqQpu34tzBXUzR42AwoDiOaTgcSs8nkPevM5wQTYnT6VTw+/1e9rEARpwB1I0wDGk8HlNd1+IYRZEAV6sVKVnbEGd1gkBZljQajcQhCAIRTdOUDocDXpKs9e8sNhKs12uJO5lMhABHEG3bvjgVkLdMulE1gLIsI75JtNvteonAG478hZvDAo0KIF5RFIQjwVx71LqOXDMLvFUGMP9XAAl4rbizUffNbDZ757v66jiO4fO0gYLTSVDmWOtP6xh/pPkDuWfAEye5430P4GvPNxEywUBOq+QDAAAAAElFTkSuQmCC)
                    1x,
                  url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAcRJREFUSIm91k+L00AYx/FvMsH+IZYcQiHdSyseBK++EAkiCL6FPQlV9hUsyx59FYpR34HvQAh497AitKTQrJdmk4mHZEK2thKaSX4QkpCBT57hyWSMMAxz9OYPcAN8Bz4DX4MgSPYHmZpRABt4ArwCPgA/fN/39wcZquLRaKRFzfO8OtI0RUqpHl0BF0EQZACWFq0WwzAwDAMAIQRZlpEkCcCyHPIWupnqexFCMBgM1O3S9/0X0MFUH0ut8l/Ao84rVhFCYJomwBnwsjcYwLKqlnreK1xWDPCsV1h1O+Bphx3HYT6f1zv5UB5ohR3HwXVdLMtiNpv9d6w2WKEqm82me3gfXa/XbLfbdvBwOGSxWDCZTLShjWDP8xBCMJ1O/8FPRRvBURRV13W8DQoN/k5xHFeoOo/HY2zbPhmFhs0VxzGr1aq6b4s2hg/hbVAopvoWeJjneX1JO4oDuK5LFEUnowr+3RRWuHqBNjGBEIq9Up8xgS8AaZr2Dn8EbqSUZFnWK5wAbwCSJKlvRzuHodh4XwPsdrteKq9/x++A91BUrl6gq6arL5kZcA58Ay6llI/L7WgnObRyfQKeAq/L65/AnW74L7B9xudJBPyKAAAAAElFTkSuQmCC)
                    2x
                );
                background-size: contain;
              }
            }
          }
        }
      }
    }
    &:first-child {
      padding: 60px;
      display: table;
    }
    .headline {
      position: relative;
      z-index: 10;
      height: 60px;
      padding: 0 10px 0 24px;
      border-bottom: 1px solid #d4d4d4;
      border-radius: 8px 8px 0 0;
      box-shadow: 0 1px 7px rgb(0, 0, 0 / 6%);
      background: linear-gradient(#fbfbfb, #ececec);
      line-height: 60px;
      font-size: 18px;
      color: #333;
      h2 {
        font-size: 100%;
        font-weight: 400;
      }
    }
    .item-info {
      overflow: hidden;
      margin-bottom: -6px;
      border-radius: 0 0 10px 10px;
      img {
        display: block;
        margin: 0 auto;
        max-width: 1220px;
      }
    }
  }
  .product-fix-bar {
    width: 100%;
    height: 60px;

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
}

.service-fixed-bar {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  z-index: 999;
  width: 80px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 18px rgb(0 0 0 / 15%);
  border-radius: 8px;
  overflow: hidden;
  .bar-item {
    right: 40px;
    width: 80px;
    height: 80px;
    padding: 12px 0 9px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      top: 1px;
      right: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
    .icon.icon-cus-service {
      background: url(https://static.smartisanos.cn/index/assets/images/icon-cus-service@2x.bcaf6deda3ace302acd6f8cfa8cbb1ae.png)
        no-repeat 50%;
      background-image: -webkit-image-set(url(https://static.smartisanos.cn/index/assets/images/icon-cus-service@2x.bcaf6deda3ace302acd6f8cfa8cbb1ae.png) 1x,url(https://static.smartisanos.cn/index/assets/images/icon-cus-service@3x.5c2361d8c08df8da86d294499841e15b.png) 2x);
      background-size: 36px;
    }
    .icon.icon-backtop {
      background: url(https://static.smartisanos.cn/index/assets/images/icon-backtop@2x.09b1d3c5be6fe8ff132de51901780d9b.png)
        no-repeat 50%;
      background-image: -webkit-image-set(url(https://static.smartisanos.cn/index/assets/images/icon-backtop@2x.09b1d3c5be6fe8ff132de51901780d9b.png) 1x,url(https://static.smartisanos.cn/index/assets/images/icon-backtop@3x.c979a3d8e2c42cf66a63769745b64e1a.png) 2x);
      background-size: 36px;
    }
    .icon {
      display: block;
      width: 36px;
      height: 36px;
      margin: 0 auto 5px;
      background: rgba(0, 0, 0, 0.1);
    }
    .txt {
      font-size: 13.5px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>