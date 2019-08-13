import { getSpecialData } from "../../service/index"
const state = {
    specialData:[]
}

const actions = {
    async getSpecialDatas({ commit }, payload) {
        let data = await getSpecialData(payload);
        console.log('oooooooooooooooo',data)
        commit('specialList',data)   //  data.data X
    }
}
const mutations = {
    specialList(state,payload){
       console.log('payload',payload)
       state.specialData = payload;
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}