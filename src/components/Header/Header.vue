<template>
  <div style="min-width:1400px" v-if="$route.meta!='login'" >
    <div class="topbar-container">
      <div class="topbar-logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <ul>
        <li><a href="" class="active" >在线商城</a></li>
        <li><a href="">坚果 R2</a></li>
        <li><a href="">Smartisan TNT go</a></li>
        <li><a href="">坚果 TNT 工作站</a></li>
        <li><a href="">Smartisan OS</a></li>
        <li><a href="">欢喜云</a></li>
        <li><a href="">应用</a></li>
        <li><a href="">论坛</a></li>
        <li><a href="">开发者支持</a></li>
        <li><a href="">荣誉与奖项</a></li>
        <li><a href="">加入我们</a></li>
        <li><a href="">下载 APP</a></li>
      </ul>
      <div class="topbar-icon">
        <div class="topbar-user" @click="toOrder" @mouseenter="isShowProfile=true" >
          <div class="user-profile" :class="isShowProfile?'active':''" @mouseleave="isShowProfile=false" v-if="isLogin">
            <div class="user-profile-top">
              <img src="../../assets/avatar-default.png" alt="">
              <p>158***5025</p>
            </div>
            <ul>
              <li>
                <div class="user-options"></div>
                <p>我的订单</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>售后服务</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>我的优惠</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>账户资料</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>收货地址</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>退出登录</p>
              </li>
            </ul>
            
          </div>
        </div>
        <div class="topbar-cart" @click="toShopCart" @mouseenter="isShowProfile=false"></div>
      </div>
    </div>
    <div class="topbar-nav" :class="isShowInput?'':'scrollNav'"   @mouseleave="getNavCurrentIndex(-1)" >
      <div class="search-area">
        <ul>
          <li v-for="(navItem,index) in navData" :key="index" @mouseenter="getNavCurrentIndex(index)" ><router-link class="nav-links" :to="navItem.url" >{{navItem.name}}</router-link></li>
          <li><a href="">服务</a></li>
        </ul>
        <!-- 搜索区域 -->
        <div class="search-bar" v-show="isShowInput">
          <div class="search-icon" @click="search" style="cursor:pointer"></div>
          <input type="text" v-model="keyword" :placeholder="isSearching?'请输入搜索的商品':''" @focus="changeSearchState(true)" @blur="changeSearchState(false)">
          <el-button type="primary" round plain class="search-btn" v-show="!isSearching" >坚果 R2</el-button>
          <el-button type="success" round plain class="search-btn" v-show="!isSearching">TNT</el-button>
        </div>
        <div class="topbar-nav-icon" v-show="!isShowInput">
          <div class="topbar-nav-user" @click="toOrder" @mouseenter="isShowProfile=true">
            <div class="user-profile" :class="isShowProfile?'active':''" @mouseleave="isShowProfile=false" v-if="isLogin">
            <div class="user-profile-top">
              <img src="../../assets/avatar-default.png" alt="">
              <p>158***5025</p>
            </div>
            <ul>
              <li>
                <div class="user-options"></div>
                <p>我的订单</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>售后服务</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>我的优惠</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>账户资料</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>收货地址</p>
              </li>
              <li>
                <div class="user-options"></div>
                <p>退出登录</p>
              </li>
            </ul>
            
          </div>
          </div>
          <div class="topbar-nav-cart" @click="toShopCart" @mouseenter="isShowProfile=false"></div>
        </div>
      </div>
      
      <!-- sub-pannel -->
      <!-- <div class="sub-pannel" :class="navCurrentIndex!=-1?'pannel-active':''" >
        <template v-if="navData[navCurrentIndex]" >
          <ul class="nav-sub-list" v-if="navData[navCurrentIndex].type=='category'">
            <li class="nav-sub-item" v-for="(item,index) in navData[navCurrentIndex].list" :key="index"  >
              <div class="sub-title" >{{item.title}}</div>
              <ul class="sub-list" :style="{'width':(Math.floor(item.sub.length/5)+1)*202+'px'}" >
                <li class="sub-item" v-for="subItem in item.sub" :key="subItem.id">
                  <img :src="subItem.image" alt="">
                  <span>{{subItem.name}}</span>
                </li>
              </ul>
            </li>
          </ul>
          
          <ul class="nav-good-list" v-if="navData[navCurrentIndex].type=='goods'">
            <li class="nav-good-item" v-for="(goodItem,index) in navData[navCurrentIndex].list" :key="index">
              <img :src="goodItem.ali_image" alt="">
              <p>{{goodItem.sku_name}}</p>
              <p>￥{{goodItem.sell_price}}</p>
            </li>
          </ul>
        </template>
      </div> -->

      <!-- sub-pannel -->
      <div 
      class="sub-pannel"
      v-for="(navItem,index) in navData" 
      :class="{'pannel-active':navCurrentIndex==index,'pannel-enter':navCurrentIndex!=-1}"
      :key="index" >
        <template>
          <ul class="nav-sub-list" v-if="navItem.type=='category'"  >
            <li class="nav-sub-item" v-for="(item,index) in navItem.list" :key="index"  >
              <div class="sub-title" >{{item.title}}</div>
              <ul class="sub-list" :style="{'width':(Math.floor(item.sub.length/5)+1)*202+'px'}" >
                <li class="sub-item" v-for="subItem in item.sub" :key="subItem.id" @click="toGoodList(subItem.id)">
                  <img :src="subItem.image" alt="">
                  <span>{{subItem.name}}</span>
                </li>
              </ul>
            </li>
          </ul>
          
          <ul class="nav-good-list" v-if="navItem.type=='goods'" >
            <li class="nav-good-item" v-for="(goodItem,index) in navItem.list" :key="index" @click="toGoodDetail(goodItem.sku)">
              <img :src="goodItem.ali_image" alt="">
              <p>{{goodItem.sku_name}}</p>
              <p>￥{{goodItem.sell_price}}</p>
            </li>
          </ul>
        </template>
      </div>
      
    </div>
    
  </div>
  
</template>
<script>
// 引入请求
import axios from '@/api/ajax'
export default {
  name: 'Header',
  data(){
    return {
      navData:[], // nav数据
      navCurrentIndex:-1, // 选中的navIndex
      isShowInput:true,// 是否展示搜索框
      isSearching:false, // 是否正在搜索
      keyword:'', // 搜索的关键词
      isShowProfile:false, // 是否显示用户资料卡
      isLogin:false
    }
  },
  async mounted(){
    // 检查用户是否登录
    if(localStorage.getItem("UID")){
      this.isLogin = true
    }
    // 获取nav数据
    this.getNavData()
    
    // 监听系统滚动条高度
    document.addEventListener("scroll",()=>{
      this.navCurrentIndex = -1
      let scrollTop = document.documentElement.scrollTop
      if(scrollTop>45){
        this.isShowInput = false
      }else{
        this.isShowInput = true
      }
    })
  },
  watch:{
    $route:{
      handler(){
        this.navCurrentIndex = -1
      }
    }
  },
  methods:{
    // 获取选中的navindex
    getNavCurrentIndex(index){
      this.navCurrentIndex = index
    },
    // 改变搜索状态
    changeSearchState(state){
      this.isSearching = state
    },
    // 获取nav数据
    async getNavData(){
      const result = await axios({url:"/v1/cms/second_nav"})
      if(result.status == 200){
        let navData = result.data
        navData.forEach(item=>{
          let urlArr = item.url.split('/')
          if(urlArr[urlArr.length-1]){
            item.url = '/goodlist/'+urlArr[urlArr.length-1]
          }else{
            item.url = '/home'
          }
          
        })
        this.navData = navData
      }
    },
    // 搜索
    search(){
      this.$router.push('/search/'+this.keyword)
    },
    // 进入商品详情页
    toGoodDetail(skuId){
      this.$router.push("/detail/"+skuId)
    },
    // 进入商品列表
    toGoodList(categoryId){
      this.$router.push('/goodlist/'+categoryId)
    },
    // 进入订单页
    toOrder(){
      this.$router.push('/order')
    },
    // 进入购物车
    toShopCart(){
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .topbar-container{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    background-color: #28292b;
    .topbar-logo{
      margin: 12px 0 0 20px;
    }
    ul{
      display: flex;
      li{
        height: 46px;
        padding: 0 20px;
        font-size: 12px;
        line-height: 46px;
        text-align: center;
        font-weight: bold;
        display: flex;
        align-items: center;
        
        a{
          color: #a2a3a4;
          display: block;
          &:hover{
            color: #a2a3a4 !important;
          }
          &.active{
            color: #fff;
          }
        }
        
      }
    }
    .topbar-icon{
      width: 72px;
      height: 45px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
      .topbar-user{
        width: 20px;
        height: 20px;
        background: url("../../assets/header-icon.png") 50% no-repeat;
        background-position: 1px 1px;
        background-size: 180%;
        cursor: pointer;
        position: relative;
        .user-profile{
          display: none;
          position: absolute;
          top: 35px;
          right: -20px;
          height: 377px;
          width: 170px;
          padding-top: 18px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 1px 1px 10px #ccc;
          &.active{
            display: block;
            z-index: 20;
          }
          .user-profile-top{
            text-align: center;
            img{
              height: 46px;
              width: 46px;
              border-radius: 50%;
              margin-top: 5px;
            }
            p{
              font-size: 12px;
              font-weight: 700;
              margin-top: 10px;
            }
          }
          ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            li:nth-child(1) .user-options{
              background-position: 0 -41px;
            }
            li:nth-child(2) .user-options{
              background-position: -20px -41px;
            }
            li:nth-child(3) .user-options{
              background-position: -20px -81px;
            }
            li:nth-child(4) .user-options{
              background-position: 0 -61px;
            }
            li:nth-child(5) .user-options{
              background-position: -20px -61px;
            }
            li:nth-child(6) .user-options{
              background-position: 0 -81px;
            }
            li{
              height: 45px;
              line-height: 45px;
              border-top: 1px solid rgb(238, 237, 237);
              &:hover{
                background-color: rgb(238, 237, 237);
              }
              .user-options{
                width: 20px;
                height: 20px;
                background-size: 240px 107px;
                background-repeat: no-repeat;
                background-image: url(//static.smartisanos.cn/indexnew/img/links.32d87deb.png);
                margin-right: 18px;
              }
            }
          }
        }
      }
      .topbar-cart{
        width: 20px;
        height: 20px;
        background: url("../../assets/header-icon.png") no-repeat;
        background-position: 0 -17px;
        background-size: 180%;
        cursor: pointer;
      }
    }
  }
  .topbar-nav{
    background-color: #fff;
    &.scrollNav{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
    .search-area{
      width: 100%;
      box-sizing: border-box;
      height: 74px;
      padding: 0 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e1e1e1;
      box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
      ul{
        display: flex;
        height: 74px;
        align-items: center;

        li{
          height: 20px;
          font-size: 14px;
          font-weight: bold;
          .nav-links{
            text-decoration: none !important;
            &:hover{
              text-decoration: none !important;
            }
            &:active{
              color:#333 !important;
            }
          }
          a{
            margin-right: 30px;
          }
        }
      }
      .search-bar{
        height: 36px;
        width: 330px;
        border-radius: 30px;
        border: 1px solid #ebebeb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        .search-icon{
          margin: auto 0px;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          background-color: transparent;
          border: none;
          background-image:url("../../assets/search-icon.png");
        }
        input{
          height: 36px;
          width: 330px;
          border: none;
          outline: none;
          font-size: 14px;
          font-weight: 700;
          padding: 0 0 0 4px;
        }
        .search-btn{
          height: 20px;
          width: 66px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          &:nth-of-type(1){
            color: #3965cc;
            // border-color: #3965cc;
          }
          &:nth-of-type(2){
            color: #8aad37;
            // border-color: #8aad37;
          }
          
        }
      }
      .topbar-nav-icon{
        width: 72px;
        height: 45px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
        .topbar-nav-user{
          width: 20px;
          height: 20px;
          background: url("../../assets/nav-user-icon.png") 50% no-repeat;
          background-position: 50%;
          background-size: cover;
          cursor: pointer;
          position: relative;
          .user-profile{
            display: none;
            position: absolute;
            top: 35px;
            right: -20px;
            height: 377px;
            width: 170px;
            padding-top: 18px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 1px 1px 10px #ccc;
            &.active{
              display: block;
              z-index: 20;
            }
            .user-profile-top{
              text-align: center;
              img{
                height: 46px;
                width: 46px;
                border-radius: 50%;
                margin-top: 5px;
              }
              p{
                font-size: 12px;
                font-weight: 700;
                margin-top: 10px;
              }
            }
            ul{
              width: 100%;
              display: flex;
              flex-direction: column;
              margin-top: 20px;
              li:nth-child(1) .user-options{
                background-position: 0 -41px;
              }
              li:nth-child(2) .user-options{
                background-position: -20px -41px;
              }
              li:nth-child(3) .user-options{
                background-position: -20px -81px;
              }
              li:nth-child(4) .user-options{
                background-position: 0 -61px;
              }
              li:nth-child(5) .user-options{
                background-position: -20px -61px;
              }
              li:nth-child(6) .user-options{
                background-position: 0 -81px;
              }
              li{
                height: 45px;
                line-height: 45px;
                border-top: 1px solid rgb(238, 237, 237);
                &:hover{
                  background-color: rgb(238, 237, 237);
                }
                .user-options{
                  width: 20px;
                  height: 20px;
                  background-size: 240px 107px;
                  background-repeat: no-repeat;
                  background-image: url(//static.smartisanos.cn/indexnew/img/links.32d87deb.png);
                  margin-right: 18px;
                }
              }
            }
          }
        }
        .topbar-nav-cart{
          width: 20px;
          height: 20px;
          background: url("../../assets/nav-cart-icon.png") no-repeat;
          background-position: 50%;
          background-size: cover;
          cursor: pointer;
        }
      }
    }
    .sub-pannel{
      position: absolute;
      height: 0px;
      width: 100%;
      flex-shrink: 0;
      // opacity: 0;
      // z-index: -10;
      display: none;
      background-color: #fff;
      border-bottom: 1px solid #e1e1e1;
      box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
      transition: height 400ms;
      &.pannel-enter{
        height: 280px;
      }
      &.pannel-active{
        // opacity: 1;
        z-index:10;
        // z-index:10;
        display: block;
      }
      .nav-sub-list{
        width: 100%;
        height: 280px;
        display: flex;
        justify-content: center;
        padding:28px 0 0 0 ;
        .nav-sub-item{
          flex-shrink: 0;
          .sub-title{
            font-size: 12px;
            color: #000;
            opacity: .5;
            font-weight: 700;
          }
          .sub-list{
            height: 222px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            padding: 12px 0 0 0;
            .sub-item{
              height: 40px;
              flex-shrink: 0;
              margin: 0 0 10px 0;
              cursor: pointer;
              img{
                height: 40px;
                width: 40px;
                margin-right: 10px;
                vertical-align: middle;
              }
              span{
                display: inline-block;
                height: 40px;
                width: 132px;
                font-weight: bolder;
                font-size: 14px;
                line-height: 40px;
                padding: 0 20px 0 0 ;
              }
            }
          }
        }
        
      }
      .nav-good-list{
        display: flex;
        justify-content: center;
        padding-top: 37px;
        height: 222px;
        background-color: #fff;
        .nav-good-item{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 30px 0 0;
          cursor: pointer;
          img{
            height: 126px;
            width: 126px;
          }
          p{
            width: 126px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 16px 0 8px;
            font-size: 14px;
            text-align: center;
            font-weight: 700;
            color: #333;
            &:nth-of-type(2){
              color: #d85c53;
              &::after{
                padding-left: 4px;
                content: "起";
                color: grey;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  
</style>