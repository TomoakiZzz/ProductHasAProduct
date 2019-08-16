/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 19:22:18
 * @LastEditTime: 2019-08-15 18:52:16
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import special from './modules/special'
import page from "./modules/page";
import goods from "./modules/goods";
import receiverAddress from "./modules/receiverAddress";

import search from "./modules/search"
import user from "./modules/user";
import shop from "./modules/shopCart";
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    special,
    page,
    goods,
    receiverAddress,
    search,
    user,
    shop
  },
  plugins: [CreateLogger()]
})


