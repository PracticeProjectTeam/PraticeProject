<template>

  <div class="wrapper">
    <div class="item-wrapper">
      <section class="gray-box clearfix">
        <div class="gallery-wrapper clearfix">
          <div class="gallery">
            <!--缩略图-->
            <figure class="thumbnail">
              <ul>
                <li @click="changeCurrentIndex(index)" :class="{on:imgCurrentIndex==index}" v-for="(item,index) in shop_info.ali_images" :key="item">
                  <img :src="item">
                </li>
              </ul>
            </figure>
            <!--展示图-->
            <figure class="thumb">
              <ul>
                <li class="on">
                  <img alt :src="shop_info.ali_images[imgCurrentIndex]">
                </li>
              </ul>
            </figure>
          </div>
        </div>
        <!--商品信息-->
        <div class="item-information">

          <article class="item-title">
            <h1>{{shop_info.title}}</h1>
            <h2>{{shop_info.sub_title}}</h2>
            <div class="item-price">
              <span>
                <em>￥</em>
                <i>{{price}}</i>
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
                <article class="activities-item" v-for="item in promotions" :key="item.id">
                  <figure class="tag-wrapper">
                    <span class="tag tag-red">{{item.tag}} </span>
                  </figure>
                  <label v-if="item.type === 9">
                    满 {{item.rule.result.discount[0].full_money}} 减 {{item.rule.result.discount[0].decrease_money}}
                    <a href="http://baidu.com">查看活动详情</a>
                  </label>
                </article>
              </div>
            </div>
          </section>

          <!--颜色选择-->
          <section class="item-spec-wrapper clearfix item-spec-package" v-for="item in shop_info.spec_v2" :key="item.spec_id">
            <div class="item-spec">
              <span class="spec-title">{{item.spec_name}}选择</span>
              <ul class="spec-info">
                <li class="active" v-for="(item2) in item.spec_values" :key="item2.id">
                  <aside class="spec-item item-inline">
                    <h1 class="item-name">{{item2.item_value}}</h1>
                  </aside>
                </li>
              </ul>
            </div>
          </section>
          <!--数量选择-->
          <section class="item-do-count-wrapper clearfix">
            <div class="item-do-count">
              <span class="do-count-title">数量选择</span>
              <aside class="do-count">
                <div class="select">
                  <span class="down" :class="[stock.stock>0 && count>0?'':'disabled']">-</span>
                  <span class="num">{{count}}</span>
                  <span class="up" :class="[stock.stock>0?'':'disabled']">+</span>
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
        </div>
      </section>
      <section class="gray-box clearfix">
        <article class="headline">
          <h2>产品信息</h2>
        </article>
        <div class="item-info">
          <img :src="goods_view">
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
              <span class="title">Smartisan 真无线蓝牙耳机 Pro × 1 </span>
            </h1>
            <h2>白色</h2>
          </div>
          <div v-if="stock.stock&&stock.in_stock" class="bar-btn">
            <a>加入购物车</a>
          </div>
          <div :class="[stock.stock>0&&stock.in_stock?'white-btn':'disabled notice','bar-btn']">
            <a v-if="stock.stock&&stock.in_stock">现在购买</a>
            <a v-else>到货通知</a>
          </div>
          <div class="no-discount-price">
            <div class="bar-price">
              <i>￥</i>
              <span>129.00</span>
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
        <figure class="bar-item backtop">
          <span class="icon icon-backtop"></span>
          <figcaption class="txt">回到顶部</figcaption>
        </figure>
      </aside>
    </div>
  </div>
</template>
<script>
//  引入vuex的辅助函数
import { mapState, mapGetters } from "vuex";
export default {
  name: "Item",
  data() {
    return {
      imgCurrentIndex: 0, //当前缩略图的下标
      footer: true, //购买条是否固定定位
      promotions: [], // 优惠活动
      count: 1, // 加入购物车的数量
      productCurrentIndex:0,
      skuInfos:[], //可选择的skuinfos
    };
  },
  mounted() {},
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

    this.getPromotions(true);
    this.getSkuInfo(1001628)
  },
  methods: {
    // 选择缩略图
    changeCurrentIndex(index) {
      this.imgCurrentIndex = index;
    },

    // 获取所有的促销活动
    async getPromotions(with_num) {
      const result = await this.$API.reqPromotions(with_num);
      if (result.status == 200) {
        this.promotions = result.data.data.list.filter((item) => {
          const goods_code = this.product_info.goods_code;
          if (item.rule.condition.main_skus.toString()) {
            return item.rule.condition.main_skus.includes(Number(goods_code));
          }
        });
      }
    },

    // 获取所有的sku_info
    async getSkuInfo(ids) {
      const result = await this.$API.reqSpus(ids)
      if(result.status === 200) {
        console.log(111111111111111111)
        console.log(result.data.data.list[0])
        this.skuInfos = result.data.data.list[0].sku_info
      }
    }
  },
  computed: {
    ...mapState({
      // //
      // itemInfo:(state)=>state.item.itemInfo,
    }),
    // 产品详情信息对象
    ...mapGetters([
      "shop_info",
      "product_info",
      "price",
      "goods_view",
      "stock",
      'sku_info'
    ]),
  },
  watch: {
    // 监视route,route信息改变就请求商品信息数据
    $route: {
      handler(route) {
        // 获取路由地址中的params的参数ids
        let ids = route.params.ids;
        // 调用action获取产品信息数据
        this.$store.dispatch("getItemInfo", ids);
      },
      // 该回调将回在侦听开始之后被立即调用
      immediate: true,
    },
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
            & > li.active {
              color: #999;
              border: 1px solid #6a8fe6;
              transition: none;
              box-shadow: none;
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
        cursor:not-allowed;
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