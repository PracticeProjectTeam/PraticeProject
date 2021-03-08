// 引入请求
import { reqLogin,reqUserAddress } from "@/api/index.js";
import { GETUSERINFO,GETUSERADDRESS } from "../mutation-types.js";
const state = {
  // 用户数据
  userInfo:{},
  userAddress:{},//用户地址数据
}
const mutations = {
  // 获取用户信息
  [GETUSERINFO](state,userInfo){
    state.userInfo = userInfo
  },
  // 获取用户地址
  [GETUSERADDRESS](state,userAddress){
    state.userAddress = userAddress
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
    
    
  },
  // 获取用户地址
  async getUserAddress({commit},userId){
    const result = await reqUserAddress(userId)
    console.log(result)
    if(result.status==200){
      commit(GETUSERADDRESS,result.data)
    }
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