import {searchShop} from "../../service/index"
const state = {
    inpValue:"",
    searchShopList:[]
}
const mutations = {
    updateSearchList(state,payload){
        console.log(payload,"1234679")
        state.searchShopList=payload
    }
}
const actions = {
    async searchShopData({commit},payload){
        console.log(payload,"123")
        let data = await  searchShop(payload)
        console.log(data)
        commit("updateSearchList",data.result)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}