/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 21:35:30
 * @LastEditTime: 2019-08-15 18:51:49
 * @LastEditors: Please set LastEditors
 */
import { addCart } from "../../service"
const state={
    
}
const mutations={
    
}
const actions = {
    async addShop({commit}, payload){
        console.log(payload,'payload')
        let data = await addCart( payload )
        console.log(data,'datatattadtadtdatdatd')
    }
    
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
  