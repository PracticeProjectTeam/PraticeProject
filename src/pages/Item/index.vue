<template>

  <div class="wrapper">
    <div class="header"></div>
    <div class="header2"></div>
    <div class="item-wrapper">
      <section class="gray-box clearfix">
        <div class="gallery-wrapper clearfix">
          <div class="gallery">
            <!--缩略图-->
            <figure class="thumbnail">
              <ul>
                <li class="on">
                  <img src="../../../public/image/item/1.png">
                </li>
                <li>
                  <img alt src="../../../public/image/item/2.png">
                </li>
                <li>
                  <img alt src="../../../public/image/item/3.png">
                </li>
                <li>
                  <img alt src="../../../public/image/item/4.png">
                </li>
                <li>
                  <img alt src="../../../public/image/item/5.png">
                </li>
              </ul>
            </figure>
            <!--展示图-->
            <figure class="thumb">
              <ul>
                <li class="on">
                  <img alt src="../../../public/image/item/1.png">
                </li>
              </ul>
            </figure>
          </div>
        </div>
        <!--商品信息-->
        <div class="item-information">

          <article class="item-title">
            <h1>Smartisan 真无线蓝牙耳机 Pro</h1>
            <h2>通话降噪 全新升级</h2>
            <div class="item-price">
              <span>
                <em>￥</em>
                <i>129.00</i>
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
                    <span class="tag tag-red">新人礼 </span>
                  </figure>
                  <label>
                    下载 App 领新人大礼包，首单优惠购最低只要 ¥ 9.9
                    <a href="http://baidu.com">查看详情</a>
                  </label>
                </article>
              </div>
            </div>
          </section>

          <!--颜色选择-->
          <section class="item-spec-wrapper clearfix item-spec-package">
            <div class="item-spec">
              <span class="spec-title">颜色选择</span>
              <ul class="spec-info">
                <li class="active">
                  <aside class="spec-item item-inline">
                    <h1 class="item-name">白色</h1>
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
                  <span class="down disabled">-</span>
                  <span class="num">1</span>
                  <span class="up disabled">+</span>
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
            <img src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_0/format,webp/quality,Q_100">
            <img _ngcontent-c7="" src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_1/format,webp/quality,Q_100">
            <img _ngcontent-c7="" src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_2/format,webp/quality,Q_100">
            <img _ngcontent-c7="" src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_3/format,webp/quality,Q_100">
            <img _ngcontent-c7="" src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_4/format,webp/quality,Q_100">
            <img _ngcontent-c7="" src="https://resource.smartisan.com/resource/090895d3a227c6b345736b2859fd3ec8.png?x-oss-process=image/resize,w_1525/indexcrop,y_1440,i_5/format,webp/quality,Q_100">
         </div>
      </section>
      <section>

      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
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
.header {
  height: 45px;
  z-index: 30;
}
.header2 {
  height: 65px;
}
.item-wrapper {
  min-height: 600px;
  padding-bottom: 60px;
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
            &:on {
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
            .activities-item {
              display: flex;
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
                color: gray;
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
            li.active {
              color: #999;
              border: 1px solid #6a8fe6;
              transition: none;
              box-shadow: none;
            }
          }
        }
      }
      .item-do.count-wrapper {
        margin: 0;
        padding: 30px 0;
        .item-do-count {
          position: relative;
          .do-count-title {
            width: 85px;
            height: 28px;
            line-height: 28px;
            color: #666;
            font-size: 14px;
            float: left;
          }
          .do-count {
             position: relative;
             float: left;
             width: 472px;
             height: 100%;
          }
          .select {
             position:absolute;
             left: 0;
             top: -3px;
             overflow: hidden;
             width: 128px;
             height: 40px;
             text-align: center;
             .down.disabled .up.disabled {
                cursor:not-allowed;
             }
             .down {
                margin: 0;
             }
             .up {
                float: right;
                margin: 0;
             }
             .down:before  .up:before {
                content:'';
                position:absolute;
                left: -4px;
                right: -4px;
                top: 0;
                height: 45px;
                background: url("http://static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png");
                background-size: 100% auto;
             }
             .down.disabled:before .down.display:hover:before{
                background-position: 0 -300px;
             }
             .down .up {
                position: relative;
                float: left;
                display: inline-block;
                width: 36px;
                height: 36px;
                line-height: 40px;
                text-indent: -9999em;
                user-select: none;
             }

             .num {
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
        }
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
}
</style>