<template>
   <div class="login-container">
      <div class="login-table">
         <div class="login-title">
            <img src="https://static.smartisanos.cn/account.common/img/v3/logo/cloud_b308865e15.png" alt="">
            <p>使用 Smartisan ID 登录官网</p>
         </div>
         <div class="login-form">
            <div class="login-location">
               <p class="login-location-left">国家和地区</p>
               <select class="login-location-right" placeholder="选择国家和地区" v-model="area">
                  <option label="中国" value="中国"></option>
                  <option label="美国" value="美国"></option>
               </select>
            </div>
            <div class="login-account">
               <p class="login-account-left">+86</p>
               <input class="login-account-right" placeholder="手机号" v-model="phone" type="text">
            </div>
            <div class="login-password">
               <input placeholder="密码" type="password" v-model="password">
            </div>
            <button class="login-btn" :class="canLogin?'active':''" @click="login" >登录</button>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
       name: 'Login',
       data(){
          return {
             area:"中国", // 国家和地区,
             phone:'15859145025',
             password:'123456'
          }
       },
       methods:{
          async login(){
             let {phone,password} = this
             try {
                await this.$store.dispatch('login',{phone,password})
                this.$message.success('登录成功')
                this.$router.push('/home')
             } catch (error) {
                this.$message.error(error)
             }
          }
       },
       computed:{
          canLogin(){
             return (this.phone.trim()!=='')&&(this.password.trim()!=='')
          }
       }
   };
</script>
<style lang='less' rel='stylesheet/less' scoped>
   .login-container{
      background-color: #f1f1f1;
      height: 100%;
      display: flow-root;
      .login-table{
         width: 480px;
         height: calc(366px + 210px);
         border-radius: 10px;
         background-color: #ffffff;
         margin: 30px auto 0;
         border: 1px solid #ccc;
         box-shadow: #ccc 1px 1px 10px;
         .login-title{
            text-align: center;
            margin-bottom: 60px;
            p{
               font-size: 24px;
               margin-top: 30px;
            }
            img{
               margin-top: 30px;
            }
         }
         .login-form{
            width: 100%;
            color: #d2d2d2;
            .login-location{
               width: 444px;
               margin: 0 auto;
               position: relative;
               height: 40px;
               .login-location-left{
                  position: absolute;
                  left: 10px;
                  z-index: 10;
                  top:50%;
                  transform: translateY(-50%);
                  font-size: 15px;
                  font-weight: 700;
                  color: #333;
               }
               .login-location-right{
                  width: 100%;
                  height: 40px;
                  border: 1px solid #d2d2d2;
                  border-radius: 6px;
                  outline: none;
                  padding-left:380px;
                  box-sizing: border-box;
                  background-color: #f7f7f7;
                  option{
                     font-size: 15px;
                     font-weight: 700;
                  }
               }
            }
            .login-account{
               width: 444px;
               margin: 10px auto;
               position: relative;
               height: 40px;
               &:hover .login-account-left{
                  color: #333;
               }
               .login-account-left{
                  position: absolute;
                  left: 10px;
                  z-index: 10;
                  top:50%;
                  transform: translateY(-50%);
                  font-size: 15px;
                  font-weight: 700;
               }
               .login-account-right{
                  background-color: #f7f7f7;
                  width: 100%;
                  height: 40px;
                  border: 1px solid #d2d2d2;
                  border-radius: 6px;
                  outline: none;
                  padding-left:60px;
                  box-sizing: border-box;
                  font-size: 15px;
                  font-weight: 700;
                  &::-webkit-input-placeholder{
                     color: #d2d2d2;
                  }
               }
            }
            .login-password{
               width: 444px;
               margin: 10px auto;
               position: relative;
               height: 40px;
               input{
                  background-color: #f7f7f7;
                  width: 100%;
                  height: 40px;
                  border: 1px solid #d2d2d2;
                  border-radius: 6px;
                  outline: none;
                  padding-left:10px;
                  box-sizing: border-box;
                  font-size: 15px;
                  font-weight: 700;
                  &::-webkit-input-placeholder{
                     color: #d2d2d2;
                  }
               }
            }
            .login-btn{
               display: block;
               margin: 0 auto;
               height: 60px;
               width: 444px;
               border-radius: 10px;
               background-color: #cedcfb;
               color: #fff;
               font-size: 15px;
               font-weight: 700;
               outline: none;
               border: none;
               cursor:not-allowed;
               &.active{
                  background-color: #5c89f2;
                  cursor: pointer;
               }
            }
         }
      }
   }
</style>