
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-14 00:03:09
 * @LastEditors: Please set LastEditors
 */
import { getGoodsData, detailPicture, hint, standard, related} from "../../service";
//数据

const state = {
  goodsItem: {},
  detailImg: [],
  packageInfo:'' ,//快递提示
  standardInfo: [],//产品规格
  related: [],//相关信息
  isShow: false //显示规格弹窗
 
};

//同步操作
const mutations = {
  updataGoods(state,payload){
    state.goodsItem = payload
    console.log(state.goodsItem,'state.goodsItemstate.')
  },
  updataDetailImg(state,payload){
    state.detailImg=payload
  },
  //更新快递提示
  updateInfo(state,payload){
    state.packageInfo=payload
  },
  updateStandard(state,payload){
      console.log(payload,'goodsItemstandardInfo')
    state.standardInfo=payload
  },
  //是否显示弹窗
  updateModual(state,payload){
    state.isShow=payload

  }
  
};

//异步操作
const actions = {
    //获取首页数据
    async getDataFn({commit}, payload){
        let data = await getGoodsData(payload) 
        if(data.res_code === 1){
            commit("updataGoods",data.result)
            let Hint = await hint({sstid:data.result.sstid})
            if(Hint.res_code === 1){
                commit("updateInfo",Hint.result)
            }
            let standard = await related({pid:data.result.pid,uid:data.result.uid,bid:data.result.bid}) 
            console.log(standard,'startg')
            
            if(standard.res_code === 1){
                commit("updateStandard",standard.result)
            }
         
        }
    },
    //获取详情图片
    async  getDetailImg({commit}, payload){
      let data = await detailPicture(payload) 
      if(data.res_code === 1){
        commit("updataDetailImg",data.result)
      }
    },
    async check({commit}, payload){
      let data = await standard(payload) 
      if(data.res_code === 1){
        commit("updateStandard",data.result)
      }
    },
  
    
   
  
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
