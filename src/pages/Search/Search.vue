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
      <ul class="good-list">
        <li class="good-item" v-for="goodItem in goodList" :key="goodItem.id" @click="toGoodDetail(goodItem.shop_info.default_sku)" >
          <img :src="goodItem.sku_info[0].ali_image" alt="">
          <h3>{{goodItem.name}}</h3>
          <h5>{{goodItem.sku_info[0].sub_title}}</h5>
          <!-- <div class="color-selector" v-show="goodItem.skuList.length>1" >
            <ul class="color-list" >
              <li class="color-item" :class="goodItem.colorIndex==index?'active':''" v-for="(item,index) in goodItem.skuList" :key="item.skuId" @mouseenter="selectColor(goodItem,index)" >
                <img :src="item.skuColor" alt="">
              </li>
            </ul>
          </div> -->
          <span class="good-price">￥{{goodItem.sku_info[0].price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入axios
import axios from '@/api/ajax'
export default {
  name: 'Search',
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
      const searchResult = await axios({url:`/v1/search/result?keyword=${this.$route.params.keyword}page=1&size=20&sort=0`})
      if(searchResult.status===200){
        const listResult = await axios({url:`/product/spus?ids=${searchResult.data.data.spu.toString()}`})
        // 商品列表与keyword相关度排序
        let goodlist = [...listResult.data.data.list]
        goodlist.forEach((item,index)=>{
          let searchKey = item.name.indexOf(this.$route.params.keyword)
          if(searchKey){
            let keyItem = goodlist[index]
            goodlist.splice(index,1)
            goodlist.unshift(keyItem)
          }
        })
        // 用于保存原始排序(综合)
        this.originGoodList = [...goodlist]
        this.goodList = [...goodlist]

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
          return Number(p1.sku_info[0].price)-Number(p2.sku_info[0].price)
        })
      }else if(rule=="priceReverse"){
         this.goodList = this.goodList.sort((p1,p2)=>{
          return Number(p2.sku_info[0].price)-Number(p1.sku_info[0].price)
        })
      }
    },
    // 进入商品详情页
    toGoodDetail(skuId){
      this.$router.push("/item/"+skuId)
    }
  },
  watch:{
    $route:{
      handler(){
        this.getGoodList()
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
  .good-list{
        width: 1220px;
        display: flex;
        flex-wrap: wrap;
        .good-item{
          width: 25%;
          flex-shrink: 0;
          height: 375px;
          border-right: 1px solid rgb(226, 225, 225);
          border-bottom: 1px solid rgb(226, 225, 225);
          box-sizing: border-box;
          padding-top: 20px;
          position: relative;
          &:hover{
            box-shadow: inset 0 0 30px rgb(0 0 0 / 6%);
            cursor: pointer;
          }
          .active-tag{
            position: absolute;
            right: 10px;
            top: 10px;
            width: 46px;
            height: 20px;
            padding:0 10px;
            box-sizing: border-box;
            border-radius: 10px;
            font-weight: 700;
            border: 1px solid;
            &.full-reduction{
              color: #d03b34;
              background: #ffe7e5;
              border-color: #f3938b;
            }
            &.straight-down{
              color: #a06e37;
              background: #fffbdf;
              border-color: #d5b480;
            }
          }
          img{
            height: 204px;
            width: 204px;
            margin: 0 44px;
          }
          h3{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-top:8px;
            margin: 0 12px;
            text-align: center;
            box-sizing: border-box;
          }
          h5{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 15px 10px 0px;
            text-align: center;
            color: #999999;
          }
          .color-selector{
            height: 17px;
            margin: 15px 0 0 0 ;
            .color-list{
              display: flex;
              justify-content: center;
              .color-item{
                height: 14px;
                width: 14px;
                border-radius: 50%;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2px;
                margin: 0 5px;
                box-sizing: border-box;
                cursor: pointer;
                &.active{
                  border: 3px solid #ccc;
                }
                img{
                  display: block;
                  height: 8px;
                  width: 8px;
                  border-radius: 50%;
                }
              }
            }
          }
          .good-price{
            width: 100%;
            font-size: 18px;
            color: #D44D44;
            font-weight: bolder;
            height: 24px;
            margin: 20px 0;
            position: absolute;
            bottom: 0;
            text-align: center;
            line-height: 24px;
          }
        }
      }
</style>