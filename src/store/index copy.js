import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    count: 100,
  },
  mutations: {
    addCount(state, val = 1) {
      state.count += val;
    },
    subCount(state, val = 1) {
      state.count -= val;
    },
    // 更新右键菜单数据
    updateRightMenuStatus(state, menuObj) {
      state.rightMenu.status = menuObj.status;
      state.rightMenu.top = menuObj.top;
      state.rightMenu.left = menuObj.left;
      state.rightMenu.list = menuObj.list;
    },
  },
  actions: {},
  modules: {},
});
