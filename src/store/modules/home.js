
import {reqHome} from '../../api/index'
const state = {
    homeDataList:[]//存放home首页数据
}
const mutations = {
    RECEIVE_HOMEDATALIST(state,homeDataList){
        homeDataList.data.home_floors.forEach(floor=>{
            floor.bigImg = floor.tabs[0].tab_items[0]
            floor.tabs[0].tab_items.shift()
          })
          homeDataList.data.home_forum.pop()
        state.homeDataList = homeDataList
        console.log(homeDataList.data)
        
    }
}
const actions = {
    async getHomeDataList({commit}){
        const result = await reqHome()
        console.log(result)
            commit('RECEIVE_HOMEDATALIST',result.data)
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