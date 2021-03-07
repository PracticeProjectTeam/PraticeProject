<template>
  <div class="goodlist-container">
    <div class="sort-methods">
      <ul>
        <li :class="sortRule=='origin'?'active':''" @click="setSortRule('origin')" >综合排序&nbsp;&nbsp;</li><span>·</span>
        <li :class="sortRule=='saleCount'?'active':''" @click="setSortRule('saleCount')" >销量排序</li><span>·</span>
        <li :class="sortRule=='price'?'active':''" @click="setSortRule('price')">价格低到高</li><span>·</span>
        <li :class="sortRule=='priceReverse'?'active':''" @click="setSortRule('priceReverse')">价格高到低</li>
      </ul>
    </div>
    <div class="good-area">
      <Gooditems :goodList="goodList"/>
    </div>
  </div>
</template>
<script>
// 引入axios
import axios from '@/api/ajax'
// 引入商品列表组件
import Gooditems from '../../components/Gooditems/Gooditems.vue'
export default {
  name: 'Goodlist',
  components:{
    Gooditems
  },
  data(){
    return {
      goodList:[], // 商品列表
      sortRule:'origin', // 排序规则
    }
  },
  mounted(){
    // 获取商品列表
    this.getGoodList()
  },
  methods:{
    async getGoodList(){
      // 获取商品列表
      // const result = await axios({url:"/v1/search/goods-list?category_id=747&page=1&sort=sort&num=20&type=shop&channel_id=1001"})
      const result = await axios({url:`/v1/search/goods-list?category_id=${this.$route.params.categoryid}&page=1&sort=sort&num=20&type=shop&channel_id=1001`})
      if(result.status===200){
        this.goodList = [...result.data.data.list]
        // 用于保存原始排序(综合)
        this.originGoodList = [...result.data.data.list]
      }
    },
    // 设置排序规则
    setSortRule(rule){
      this.sortRule = rule
      if(rule=='origin'){
        this.goodList = [...this.originGoodList]
      }else if(rule=="saleCount"){
        this.goodList = [...this.originGoodList]
      }else if(rule=="price"){
        this.goodList = this.goodList.sort((p1,p2)=>{
          return Number(p1.spuInfo.price)-Number(p2.spuInfo.price)
        })
      }else if(rule=="priceReverse"){
         this.goodList = this.goodList.sort((p1,p2)=>{
          return Number(p2.spuInfo.price)-Number(p1.spuInfo.price)
        })
      }
    }
  },
  watch:{
    $route:{
      handler(){
        this.getGoodList()
        this.sortRule = 'origin'
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .goodlist-container{
    background-color: #ededed;
    padding-bottom: 60px;
    .sort-methods{
      height: 60px;
      padding-left: 10px;
      width: 1220px;
      margin: 0 auto;
      font-size: 12px;
      font-weight: 700;
      color: #999999;
      ul{
        display: flex;
        height: 60px;
        li{
          width: 70px;
          height: 60px;
          line-height: 60px;
          cursor: pointer;
          &:hover{
            color: #5683ea;
          }
          &.active{
            color: #5683ea;
          }
        }
        span{
          display: block;
          width: 30px;
          line-height: 60px;
          font-size: 12px;
          color:#999999;
          transform: scale(.8);
        }
      }
    }
    .good-area{
      width: 1220px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 10px;
      
    }
  }
</style>