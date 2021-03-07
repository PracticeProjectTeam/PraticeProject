<template>
  <div>
    <ul class="good-list">
        <li class="good-item" v-for="goodItem in goodList" :key="goodItem.spuInfo.skuId" @click="toGoodDetail(goodItem.spuInfo.skuId)"  >
          <div class="active-tag" v-if="goodItem.spuInfo.tagText&&goodItem.spuInfo.store_nums>0" 
          :class="goodItem.spuInfo.tagText=='满减'?'full-reduction':'straight-down'" >{{goodItem.spuInfo.tagText}}</div>
          <img :src="goodItem.skuList[goodItem.colorIndex?goodItem.colorIndex:0].images" alt="">
          <h3>{{goodItem.spuInfo.spuTitle}}</h3>
          <h5>{{goodItem.spuInfo.activeTitle||goodItem.spuInfo.spuSubTitle}}</h5>
          <div class="color-selector" v-show="goodItem.skuList.length>1" >
            <ul class="color-list" >
              <li class="color-item" :class="goodItem.colorIndex==index?'active':''" v-for="(item,index) in goodItem.skuList" :key="item.skuId" @mouseenter="selectColor(goodItem,index)" >
                <img :src="item.skuColor" alt="">
              </li>
            </ul>
          </div>
          <span class="good-price">￥{{goodItem.skuList[goodItem.colorIndex?goodItem.colorIndex:0].originalPrice}}</span>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Gooditems',
  // 获取属性中传递的商品列表
  props:['goodList'],
  methods:{
    // 选择商品颜色
    selectColor(goodItem,index){
      if(Object.prototype.hasOwnProperty.call(goodItem, 'colorIndex')){
        goodItem.colorIndex = index
      }else{
        this.$set(goodItem,'colorIndex',index)
      }
    },
    // 进入商品详情页
    toGoodDetail(skuId){
      this.$router.push("/item/"+skuId)
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .good-list{
        width: 1220px;
        display: flex;
        flex-wrap: wrap;
        .good-item{
          width: 20%;
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
            margin: 0 20px;
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