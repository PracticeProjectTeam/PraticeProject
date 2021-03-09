<template>
  <div v-if="homeDataList.data">
    <div class="Recommend" v-for="item in homeDataList.data.home_floors" :key="item">
      <header>
        <h5>{{item.title}}</h5>
      </header>
      <div class="allRecommend">
        <div class="mainimg">
          <a :href="item.bigImg.link" target="_blank"><img :src="item.bigImg.image" alt="" /></a>
        </div>
        <div class="Recommendgoods" v-for="itemgoods in item.tabs[0].tab_items" :key="itemgoods">
          <!-- <div class="Recommendimg"> -->
            <router-link class="Recommendimg" :to="`/detail/${itemgoods.sku_id}`">
              <img :src="itemgoods.spu.sku_info[0].ali_image" alt="" />
            </router-link>
          <!-- </div> -->
          <div class="Recommendtext">
            <h3>{{itemgoods.spu.sku_info[0].title}}</h3>
            <h5 class="Rmeishuju">{{itemgoods.spu.sku_info[0].sub_title}}</h5>
            <h5 class="Rmeishuju2" style="display:none">满1000减5000</h5>
          </div>
          <div class="Recommendselect"></div>
          <div class="Recommendprice">
            <span>￥{{itemgoods.spu.sku_info[0].price}}</span>
          </div>
          <div class="Rredtext">
            <spanR class="Rred">免费</spanR>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "Recommend",
  data(){
    return{
      isShow: false
    }
  },
  mounted(){
    console.log(this.homeDataList)
  },
  computed:{
    ...mapState({
    homeDataList:state =>state.home.homeDataList
  }),
 },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.Recommend {
  margin-top: 25px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  overflow: hidden;
  .allRecommend {
    display: flex;
    flex-wrap: wrap;
    .mainimg {
      flex: 0 0 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .Recommendgoods:hover{
      box-shadow:inset 0 0 30px rgba(0,0,0,.06);
      .Rmeishuju{
        display: none;
      }
      .Rmeishuju2{
        display: block!important;
        color: #d44d44;
      }
    }
    .Recommendgoods {
      flex: 0 0 25%;
      border-right: 1px solid #efefef;
      background-color: white;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      .Recommendimg {
        display: flex;
        margin: 0 auto;
        padding: 45px 0 20px;
        img {
          height: 216px;
          width: 216px;
          margin: 0 auto;
        }
      }
      .Recommendtext {
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
          font-weight: 400;
        }
      }
      .Recommendselect {
        margin-top: 15px;
        height: 17px;
      }
      .Recommendprice {
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
      .Rredtext{
        width: 46px;
        height: 20px;
        border:1px solid #f3938b;
        border-radius: 13px;
        background-color: #ffe7e5;
        position: absolute;
        top: 10px;
        right: 10px;
        align-items: center;
        .Rred{
          color: #d03b34;
          font-weight: 700;
          padding: 0 10px;
          font-size: 12px;
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
    .Recommendbtn {
      margin-right: 10px;
      height: 60px;
      .Recommendbtn-left {
        // background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
        opacity: 0.3;
        cursor: not-allowed;
        pointer-events: none;
        width: 48px;
        height: 48px;
        background-size: 48px;
        transform: rotate(180deg);
        border: none;
      }
      .Recommendbtn-right {
        width: 48px;
        height: 48px;
        // background: url(./images/hde7ixhldfwhx1j72d2h3ssnb9kk7qw1.png) no-repeat;
        background-size: 48px;
        border: none;
      }
    }
  }
}
</style>
