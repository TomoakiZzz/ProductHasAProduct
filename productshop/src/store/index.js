import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import special from './modules/special'
import page from "./modules/page";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    special,
    page
  },
  plugins: [CreateLogger()]
})