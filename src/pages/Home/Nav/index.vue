<template>
  <section class="Navwrap">
    <figure>
      <img src="./images/fbefae00ef98859f342e9f56889899a0.webp" alt="" />
    </figure>
    <figure>
      <img src="./images/1023fe9691eaf03abbfd261b36df4985.webp" alt="" />
    </figure>
    <figure>
      <img src="./images/33ea4bfa05068e0741b7278fec9da8a6.webp" alt="" />
    </figure>
    <figure>
      <img src="./images/fdc4370d1ce14a67fadc35d74209ac0f.webp" alt="" />
    </figure>
  </section>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.Navwrap {
  height: 200px;
  width: 100%;
  display: flex;
  margin-top:25px;
  border-radius: 8px;
  overflow: hidden;
  figure {
    margin: 0;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
