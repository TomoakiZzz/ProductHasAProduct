import {getCategoryList,classifyProduct,sortInterface} from "../../service/index"
const state={
    //分类页
    CategoryListData:[],
    classifyProductData:[],
    sortInterfaceData:[]
}
const mutations={
    //分页面
    getCategoryListData(state,payload){
        console.log(payload,"payload....分页面数据")
        state.CategoryListData = payload
    },
    //分类接口
    sortInterfaceData(state,payload){
        console.log(payload,"payload....分页面数据")
        state.sortInterfaceData = payload
    },
    //按分类查询商品
    classifyProductData(state,payload){
        console.log(payload,"payload....按分类查询商品")
        state.classifyProductData = payload
    }
}
const actions = {
    //分页面数据
    async getCategoryLists({commit},payload){
        let data = await getCategoryList()
        console.log(data,"分页面数据")
        commit("getCategoryListData",data.result)
    },
    //分类接口
    async sortInterfaces({commit},payload){
        let data = await sortInterface()
        console.log(data,"分类接口")
        commit("sortInterfaceData",data.result)
    },
    //按分类查询商品
    async classifyProducts({commit},payload){
        let data = await classifyProduct()
        console.log(data,"按分类查询商品")
        commit("classifyProductData",data.result)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}