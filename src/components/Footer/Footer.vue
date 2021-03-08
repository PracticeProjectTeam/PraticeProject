<template>
  <div class="footerContainer" v-if="$route.meta!='login'">
    <div class="footer-menu">
      <!-- 用户服务 -->
      <div class="footer-service">
        <div class="footer-service-item">
          <p class="footer-service-title">订单服务</p>
          <ul>
            <li><a href="#">购买指南</a></li>
            <li><a href="#">送货政策</a></li>
          </ul>
        </div>
        <div class="footer-service-item">
          <p class="footer-service-title">服务支持</p>
          <ul>
            <li><a href="#">零售门店</a></li>
            <li><a href="#">自助服务</a></li>
            <li><a href="#">维修门店</a></li>
          </ul>
        </div>
        <div class="footer-service-item">
          <p class="footer-service-title">媒体中心</p>
          <ul>
            <li><a href="#">新闻动体</a></li>
            <li><a href="#">官方视频</a></li>
            <li><a href="#">图片资源</a></li>
          </ul>
        </div>
        <div class="footer-service-item">
          <p class="footer-service-title">关注我们</p>
          <ul>
            <li><a href="#">新浪微博</a></li>
            <li><a href="#">官方微信</a></li>
            <li><a href="#">荣誉奖项</a></li>
          </ul>
        </div>
        
      </div>
      <!-- 信息 -->
      <div class="footer-info">
         <h1>400 - 603 - 5000</h1>
         <h2>周一到周日 9:00 - 18:00</h2>
         <h2>(仅收市话费)</h2>
         <a href="#">在线帮助</a>
      </div>
    </div>
    <div class="footer-security">
      <ul>
        <li>Copyright © 2020 smartisan.com 版权所有</li>
        <li><a href="">锤子商城隐私政策</a></li>
        <li><a href="">锤子商城用户协议</a></li>
        <li><a href="">资质证照</a></li>
        <li><a href="">京 ICP 备 19048576 号 - 1</a></li>
        <li><img src="../../assets/icon-public-security.png" alt=""><a href="">京公网安备 11010502039854号</a></li>
        <li><a href="">京食药网食备 202010031</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
 .footerContainer{
   background-color: #fff;
   height: 340px;
   .footer-menu{
     width: 1220px;
     margin: 0 auto;
     padding: 60px 0 55px 0;
     height: 226px;
     box-sizing: border-box;
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid rgb(231, 231, 231);
     .footer-service{
       display: flex;
       .footer-service-item{
         margin-right: 90px;
         font-size: 12px;
         font-weight: bold;
         p{
           padding-bottom: 20px;
         }
         ul{
           li{
             a{
               color:#969696;
               display: block;
               font-weight: bold;
               padding: 7px 0;
               width: 48px;
               height: 26px;
               box-sizing: border-box;
             }
           }
         }
       }
     }
     .footer-info{
       h1{
         text-align: right;
         color: #5079d9;
       }
       h2{
         text-align: right;
         color: #999;
         font-size: 12px;
         &:nth-of-type(1){
           margin-top: 15px;
         }
         &:nth-of-type(2){
           margin-top: 5px;
         }
       }
       a{
         display: block;
         width: 132px;
         height: 30px;
         border: 1px solid #ccc;
         border-radius: 5px;
         text-align: center;
         line-height: 30px;
         background: linear-gradient(#fcfcfc,#f5f5f5);
         color: #5079d9;
         font-weight: bold;
         margin-top: 15px;
         float: right;
         font-size: 12px;
         box-sizing: border-box;
         transition: all 400ms;
         &:hover{
           background: #fff;
         }
       }
     }
    

   }
   .footer-security{
     padding: 30px 0 60px;
      width: 1220px;
      margin: 0 auto;
      box-sizing: border-box;
      ul{
        width: 600px;
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        li{
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          padding:0 10px;
          color: #ABABAB;
          font-weight: 700;
          text-align: center;
          border-right: 1px solid #ccc;
          margin-top: 4px;
          img{
            vertical-align: middle;
          }
          a{
            color: #ABABAB;
            vertical-align: middle;
          }
        }
      }
    }
 }
</style>