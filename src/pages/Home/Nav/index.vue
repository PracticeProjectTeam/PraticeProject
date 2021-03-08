<template>
  <section class="Navwrap" v-if="homeDataList.data">
    <figure class="Navfigure" v-for="item in homeDataList.data.home_activities" :key="item">
      <a :href="item.link" target=”_blank”><img :src="item.image" alt="" /></a>
    </figure>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "Nav",
  data() {
    return {};
  },
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
.Navwrap {
  height: 200px;
  width: 100%;
  display: flex;
  margin-top: 25px;
  border-radius: 8px;
  overflow: hidden;
  .Navfigure {
    margin: 0;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
