/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 14:41:05
 * @LastEditTime: 2019-08-15 14:47:06
 * @LastEditors: Please set LastEditors
 */

const state = {
    userInfo: {}
    
}
const mutations = {
    saveUserInfo(state,payload){
        console.log(payload)
        state.userInfo = payload
        console.log(state.goodsItem,'state.goodsItemstate.')
    },
}
const actions = {
  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}