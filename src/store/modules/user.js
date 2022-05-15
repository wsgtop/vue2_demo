import * as types from "../mutation-tpes";
// console.log(types);
const state = {
  userInfo: {
    name: "张三",
  },
};

const getters = {
  sampleUserInfo: (state) => state.userInfo,
};

const mutations = {
  [types.SET_USER_INFO](state, payload) {
    state.userInfo = payload;
  },
};

const actions = {
  getUserInfo({ commit }, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(types.SET_USER_INFO, payload);
        resolve();
      }, 3000);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
