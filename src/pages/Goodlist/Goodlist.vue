<template>
  <div class="goodlist-container">
    goodlist
  </div>
</template>
<script>
// 引入axios
import axios from '@/api/ajax'
export default {
  name: 'Goodlist',
  data(){
    return {
      goodList:[]
    }
  },
  mounted(){
   this.getGoodList()
  },
  methods:{
    async getGoodList(){
      // 获取商品列表
      const result = await axios({url:"/v1/search/goods-list?category_id=151&page=1&sort=sort&num=20&type=shop&channel_id=1001"})
      //console.log(result)
      if(result.status===200){
        this.goodList = result.data.data.list
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>