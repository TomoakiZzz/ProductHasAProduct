
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-13 19:41:46
 * @LastEditors: Please set LastEditors
 */
import { getGoodsData, detailPicture, hint, standard, related} from "../../service";
//数据

const state = {
  goodsItem: {},
  detailImg: [],
  packageInfo:'' ,//快递提示
  standardInfo: [],//产品规格
  related: []//相关信息
 
};

//同步操作
const mutations = {
  updataGoods(state,payload){
    state.goodsItem = payload
  },
  updataDetailImg(state,payload){
    state.detailImg=payload
  },
  //更新快递提示
  updateInfo(state,payload){
    state.packageInfo=payload
  },
  updateStandard(state,payload){
    state.standardInfo=payload
  }
  
};

//异步操作
const actions = {
    //获取首页数据
    async getDataFn({commit}, payload){
        let data = await getGoodsData(payload) 
        if(data.res_code === 1){
          commit("updataGoods",data.result)
        }
    },
    //获取详情图片
    async  getDetailImg({commit}, payload){
      let data = await detailPicture(payload) 
      if(data.res_code === 1){
        commit("updataDetailImg",data.result)
      }
    },
    //获取快递提示
    async getHint({commit}, payload){
      let data = await hint(payload) 
      if(data.res_code === 1){
        commit("updateInfo",data.result)
      }
    },
    async check({commit}, payload){
      let data = await standard(payload) 
      if(data.res_code === 1){
        commit("updateStandard",data.result)
      }
    },
    //获取相关信息
    async getRelated({commit}, payload){
      let data = await related(payload) 
      console.log(data,'kkkkkk')
      // if(data.res_code === 1){
      //   commit("updateRelated",data.result)
      // }
    },
    
   
  
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
