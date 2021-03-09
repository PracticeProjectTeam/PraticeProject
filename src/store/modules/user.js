// 引入请求
import { reqLogin } from "@/api/index.js";
import { GETUSERINFO } from "../mutation-types.js";
const state = {
  // 用户数据
  userInfo:{},
  userAddress:[],//用户地址数据
  
}
const mutations = {
  [GETUSERINFO](state,userInfo){
    state.userInfo = userInfo
  }
}
const actions = {
  // 用户请求登录
  async login({commit},{phone,password}){
    const result = await reqLogin(phone)
    return new Promise((resolve,reject)=>{
      if(result.status===200){
        let userInfo = result.data[0]
        if(userInfo){
          if(userInfo.password==password){
            commit(GETUSERINFO,userInfo)
            localStorage.setItem("UID",userInfo.id)
            resolve()
          }else{
            reject('密码错误')
          }
        }else{
          reject('账号不存在')
        }
      }
    })
    
    
  }
}
const getters = {}

// 导出模块
export default {
  state,
  mutations,
  actions,
  getters
}