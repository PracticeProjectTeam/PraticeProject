<template>
  <!-- <div class="hot">
    <header>
      <h5>热门商品</h5>
      <div class="btn">
        <button class="btn-left"></button>
        <button class="btn-right"></button>
      </div>
    </header>
    <div class="allgoods" v-if="homeDataList.data">
      <div class="hotgoods" v-for="item in homeDataList.data.home_hot" :key="item.spu_id">
        <div class="hotimg">
          <img :src="item.spu.sku_info[0].ali_image" alt="" />
        </div>
        <div class="hottext">
          <h3>{{item.spu.name}}</h3>
          <h5>{{item.spu.sku_info[0].sub_title}}</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥{{item.spu.sku_info[0].price}}</span>
        </div>
      </div>
    </div>
  </div> -->

  <div class="hot">
    <header>
      <h5>热门商品</h5>
    </header>
    <swiper
      class="allgoods"
      :options="{
        slidesPerView: 4, //显示几个图片（每次显示几屏）
        slidesPerGroup: 5, //每次移动几个图片（每次移动几屏）
        //如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }"
    >
      <swiper-slide class="hotgoods" v-for="item in homeDataList.data.home_hot" :key="item.spu_id">
        <div class="hotimg">
          <img :src="item.spu.sku_info[0].ali_image" alt="" />
        </div>
        <div class="hottext">
          <h3>{{ item.spu.name }}</h3>
          <h5>{{ item.spu.sku_info[0].sub_title }}</h5>
        </div>
        <div class="hotselect"></div>
        <div class="hotprice">
          <span>￥{{ item.spu.sku_info[0].price }}</span>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Hotgoods",
  mounted() {
    console.log(this.homeDataList);
  },
  computed: {
    ...mapState({
      homeDataList: (state) => state.home.homeDataList,
    }),
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.hot {
  margin-top: 25px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  overflow: hidden;
  .allgoods {
    display: flex;
    .hotgoods {
      flex: 0 0 25%;
      border-right: 1px solid #efefef;
      background-color: white;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      .hotimg {
        display: flex;
        margin: 0 auto;
        padding: 45px 0 20px;
        img {
          height: 216px;
          width: 216px;
          margin: 0 auto;
        }
      }
      .hottext {
        text-align: center;
        h3 {
          white-space: nowrap;
          line-height: 1.2;
          text-overflow: ellipsis;
          overflow: hidden;
          font-weight: 700;
          margin: 0 8px;
          color: #333;
          cursor: pointer;
        }
        h5 {
          padding: 15px 12px 0;
          font-size: 12px;
          color: #999;
        }
      }
      .hotselect {
        margin-top: 15px;
        height: 17px;
      }
      .hotprice {
        font-size: 18px;
        margin: 20px 0;
        color: #d44d44;
        text-align: center;
        font-weight: bolder;
        .discount {
          font-size: 12px;
          text-decoration: line-through;
          color: #ccc;
          padding-left: 10px;
          font-weight: 400;
        }
      }
    }
  }
  header {
    background-color: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    h5 {
      margin-left: 25px;
      font-weight: bolder;
      font-size: 18px;
      line-height: 60px;
      color: #666;
    }
    // .btn {
    //   margin-right: 10px;
    //   height: 60px;
    //   .btn-left {
    //     background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
    //     opacity: 0.3;
    //     cursor: not-allowed;
    //     pointer-events: none;
    //     width: 48px;
    //     height: 48px;
    //     background-size: 48px;
    //     transform: rotate(180deg);
    //     border: none;
    //   }
    //   .btn-right {
    //     width: 48px;
    //     height: 48px;
    //     background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
    //     background-size: 48px;
    //     border: none;
    //   }
    // }
  }
}
</style>
