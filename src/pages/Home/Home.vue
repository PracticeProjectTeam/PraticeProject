<template>
  <div class="cz-main">
    <section class="homewrap">
      <Bannerswiper />
      <Nav />
      <Hotgoods />
    </section>
  </div>
</template>
<script>
import Bannerswiper from "./Bannerswiper/index";
import Nav from "./Nav/index";
import Hotgoods from "./Hotgoods/index"
export default {
  name: "Home",
  components: {
    Bannerswiper,
    Nav,
    Hotgoods
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.cz-main {
  max-width: 1220px;
  min-height: calc(100vh - 320px);
  margin: 0 auto;
  .homewrap{
    padding: 25px 0;
  }
}
</style>
