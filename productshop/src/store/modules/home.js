import {getHomeData,getCategoryList} from "../../service/index"
const state={
    bannerList:[]
}
const mutations={
    homeAllocationData(state,payload){

    }
}
const actions = {
    async getHomeListData({commit},payload){
        let data = await getHomeData(123)

        // let data = await getCategoryList(123)
        console.log(data)
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