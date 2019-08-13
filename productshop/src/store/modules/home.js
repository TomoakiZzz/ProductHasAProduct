import { getHomeData, getCategoryList, getBetterShopData } from "../../service/index"
const state = {
    //首页数据
    homeListData: [],
    //下拉的数据
    betterShopList: [],
    //topTab的数据
    topTabList: [{cname:"今日推荐"}],
    //下拉数据的页数
    pageIndex: 1,
    //每页的数据
    pageSize: 20,
    //判断数据还有没有
    hasMore: true,
    //topTap的参数
    parentId: 0
}
const mutations = {
    //首页分配数据
    homeAllocationData(state, payload) {
        // console.log(payload)
        state.homeListData = payload
    },
    updateLocation(state, payload) {
        if (payload.betterShopList) {
            if (payload.betterShopList.length === state.pageIndex * state.pageSize) {
                state.hasMore = true
            } else {
                state.hasMore = false
            }
        }
        // console.log(payload.pageIndex,"组件的传过来的页数")
        for (let key in payload) {
            state[key] = payload[key]
        }
    },
    updateTopTabList(state, payload) {
        // console.log(payload,"*******")
        state.topTabList = [...state.topTabList,...payload]
    },
}
const actions = {
    //获取首页的数据
    async getHomeListData({ commit, state }, payload) {
        let data = await getHomeData()

        commit("homeAllocationData", data.result)

    },
    async getCategoryListData({ commit, state }, payload) {
        let data = await getCategoryList({ parentId: state.parentId })
        console.log(data)
        commit("updateTopTabList", data.result)
    },
    async getBetterShopList({ commit, state }, payload) {
        // console.log(state.pageIndex,"pageIndex页数")
        let data = await getBetterShopData({ pageIndex: state.pageIndex })
        if (state.pageIndex === 1) {
            commit("updateLocation", { betterShopList: data.result })
        } else {
            commit("updateLocation", { betterShopList: [...state.betterShopList, ...data.result] })
        }

    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}