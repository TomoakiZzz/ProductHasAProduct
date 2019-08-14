/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 19:22:18
 * @LastEditTime: 2019-08-14 07:37:33
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import page from "./modules/page";
import goods from "./modules/goods";
import search from "./modules/search"
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    page,
    goods,
    search
  },
  plugins: [CreateLogger()]
})