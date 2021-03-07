<template>
  <swiper v-if="homeDataList.data"
    ref="mySwiper"
    :options="{
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    }"
  >
    <swiper-slide
    v-for="item in homeDataList.data.home_carousel"
    :key="item"
      ><a :href="item.link" target=”_blank”><img :src="item.image" alt=""
    /></a></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
// import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  name: "Bannerswiper",
  data(){
    return{

    }
  },
  mounted(){
    console.log(this.homeDataList)
  },
  computed:{
    ...mapState({
    homeDataList:state =>state.home.homeDataList
  })
 },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.swiper-container {
  width: 100%;
  height: 554px;
  border-radius: 8px;
  overflow: hidden;
  transition-duration: 0ms;
  .swiper-slide {
    width: 1218px;
    // transition-duration: 0ms;
    // opacity: 1;
    // transform: translate3d(0px, 0px, 0px);
    img {
      width: 100%;
      height: 100%;
      // position: relative;
      // top: 50%;
      // left: 50%;
      // -webkit-transform: translate(-50%, -50%);
      // transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
}
</style>
