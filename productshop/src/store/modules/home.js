import {getHomeData,getCategoryList,getBetterShopData} from "../../service/index"
const state={
    //首页数据
    homeListData:[],
    //下拉的数据
    betterShopList:[],
    //下拉数据的页数
    pageIndex:1,
    //判断数据还有没有
    hasMore:true
}
const mutations={
    //首页分配数据
    homeAllocationData(state,payload){
        // console.log(payload)
        state.homeListData = payload
    }
}
const actions = {
    //获取首页的数据
    async getHomeListData({commit,state},payload){
        let data = await getHomeData()
        let res = await getBetterShopData({pageIndex:state.pageIndex})
        // let data = await getCategoryList(123)

        console.log(res)
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