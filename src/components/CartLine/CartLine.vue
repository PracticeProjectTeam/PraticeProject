<template>
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
</template>
<script>
export default {
  name: "CartLine",
  props: [],
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>