
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-15 18:51:11
 * @LastEditors: Please set LastEditors
 */
import { getGoodsData, detailPicture, hint, standard, related, checkType} from "../../service";
//数据

const state = {
  goodsItem: {},
  detailImg: [],
  packageInfo:'' ,//快递提示
  standardInfo: [],//产品规格
  related: [],//相关信息
  isShow: false, //显示规格弹窗
  type: "" ,//选择的规格
  num: 0 ,//加入购物车数量
  Type: []
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
    state.standardInfo=payload
  },
  //是否显示弹窗
  updateModual(state,payload){
    state.isShow=payload
  },
  //更新选择的产品规格
  updateType(state,payload){
    console.log(payload,'paylooaakjskjakska')
    state.Type = payload
  },
  //更新选择
  updateCheck(state,payload){
    state.type = payload
  },
  //清除type
  clear(state,payload){
    state.type = ""
    state.num = 0
  },
  //购物车++--
  addCartFn(state,payload){
    if(payload.type==='+'){
      state.num++;
      if(state.num>=payload.num){
        state.num = payload.num
      }
    }else{
      state.num--;
      if(state.num<= 0){
        state.num = 0
      }
    }
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
    //切换商品类型
    async changeType({commit}, payload){
      console.log(payload,'paggggg')
      let data = await checkType(payload) 
      console.log(data,'chehuhnjnj')
      if(data.res_code === 1){
        commit("updateType",data.result)
      }
    },
  
    
   
  
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
