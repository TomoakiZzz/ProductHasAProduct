import {getHomeData,getCategoryList} from "../../service/index"
const state={
    //首页数据
    homeListData:[]
}
const mutations={
    //首页分配数据
    homeAllocationData(state,payload){
        console.log(payload)
        state.homeListData = payload
    }
}
const actions = {
    //获取首页的数据
    async getHomeListData({commit},payload){
        let data = await getHomeData(123)

        // let data = await getCategoryList(123)
        console.log(data)
        commit("homeAllocationData",data.result)
    },
    async getCategoryList(){
        
        console.log(data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}