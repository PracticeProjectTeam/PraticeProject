<template>
  <swiper
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
      ><img src="./images/1f0f2209a141202179277019dd1eeec5.webp" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="./images/111309b00a4d3cb5f5289849ce422b44.webp" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="./images/1c6c6b970fc8f773a6e37c25dd7d5789.webp" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="./images/2da3a3f5ed70d4a3ff3cfe5d68e2d4a9.webp" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="./images/ce6aab589d4d0818206e51c700602585.webp" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="./images/d5f455111845c9542f399fa398c451f9.webp" alt=""
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
// import Swiper from 'swiper'
export default {
  name: "Bannerswiper",
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
