<template>
  <div class="hot">
    <header>
      <h5>热门商品</h5>
      <div class="btn">
        <button class="btn-left"></button>
        <button class="btn-right"></button>
      </div>
    </header>
    <div class="allgoods">
      <div class="hotgoods">
        <div class="hotimg">
          <img src="./images/623bad86546352a2035ec704e2faf041.webp" alt="" />
        </div>
        <div class="hottext">
          <h3>坚果 R2</h3>
          <h5>是下一代手机，更是下一代电脑</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥4,299.00</span>
        </div>
      </div>
      <div class="hotgoods">
        <div class="hotimg">
          <img src="./images/79c58355d2f5fd53988684b96d405f9b.webp" alt="" />
        </div>
        <div class="hottext">
          <h3>Smartisan TNT 大满足套装</h3>
          <h5>下一代手机，下一代电脑</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥6,499.00</span>
        </div>
      </div>
      <div class="hotgoods">
        <div class="hotimg">
          <img src="./images/14cec941bbf9d9a8eaf774768028d5be.webp" alt="" />
        </div>
        <div class="hottext">
          <h3>2020年足迹系列卫衣 人类首次突破音速</h3>
          <h5>精心剪裁、版型百搭、舒适服帖、易于打理</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥129.00</span>
          <span class="discount">￥249.00</span>
        </div>
      </div>
      <div class="hotgoods">
        <div class="hotimg">
          <img src="./images/211d521553c8816ae1dc6fb5ecdcc99d.webp" alt="" />
        </div>
        <div class="hottext">
          <h3>Smartisan 真无线蓝牙耳机（抖音文创限量款）</h3>
          <h5>抖音文创限量版</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥149.00</span>
          <span class="discount">￥299.00</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hotgoods",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.hot{
    margin-top: 25px;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 8px;
    overflow: hidden;
    .allgoods{
        display: flex;
        .hotgoods{
            flex: 0 0 25%;
            border-right: 1px solid #efefef;
            background-color: white;
            box-sizing: border-box;
            cursor: pointer;
            overflow: hidden;
            .hotimg{
                display: flex;
                margin: 0 auto;
                padding: 45px 0 20px;;
                img{
                    height: 216px;
                    width: 216px;
                    margin: 0 auto;
                }
            }
            .hottext{
                text-align: center;
                h3{
                    white-space: nowrap;
                    line-height: 1.2;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-weight: 700;
                    margin: 0 8px;
                    color: #333;
                    cursor: pointer;
                }
                h5{
                    padding: 15px 12px 0;
                    font-size: 12px;
                    color: #999;
                }
            }
            .hotselect{
                margin-top: 15px;
                height: 17px;
            }
            .hotprice{
                font-size: 18px;
                margin: 20px 0;
                color: #d44d44;
                text-align: center;
                font-weight: bolder;
                .discount{
                  font-size: 12px;
                  text-decoration: line-through;
                  color: #ccc;
                  padding-left: 10px;
                  font-weight: 400;
                }
            }
        }
    }
    header{
        background-color: #fafafa;
        border-bottom: 1px solid rgba(0,0,0,.1);
        display: flex;
        justify-content: space-between;
        h5{
            margin-left: 25px;
            font-weight: bolder;
            font-size: 18px;
            line-height: 60px;
            color: #666;
        }
        .btn{
            margin-right: 10px;
            height: 60px;
            .btn-left{
                background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
                opacity: .3;
                cursor: not-allowed;
                pointer-events: none;
                width: 48px;
                height: 48px;
                background-size: 48px;
                transform: rotate(180deg);
                border: none;
            }
            .btn-right{
                width: 48px;
                height: 48px;
                background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
                background-size: 48px;
                border: none;
            }
        }
    }
}
</style>
