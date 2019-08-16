import { getSpecialData } from "../../service/index"
const state = {
    specialData:[],
    getContentData:[]
}

const actions = {
    async getSpecialDatas({ commit }, payload) {
        let data = await getSpecialData(payload);
        console.log('oooooooooooooooo',data.result);
        // let result = data\\
        commit('specialList',data.result)   //  data.data X  异步调用同步
        commit('getContents',data.result.anchors[0].products)
    },
    // async getContent({commit}, payload){
    //     let res = await getSpecialData(payload);
    //     console.log('getContent',res)
    //     commit('getContents',res.result.anchors[0].products)
    // }
}
const mutations = {
    specialList(state,payload){
       console.log('payload',payload)
       state.specialData = payload;
    },
    getContents(state,payload){
        console.log('26262626262626getContentData',payload)
        state.getContentData = payload;
    }
}
// 获取数据和接口用异步
// 更新数据用同步
export default {
    namespaced: true,
    state,
    mutations,
    actions
}