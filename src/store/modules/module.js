import * as types from "../mutation-tpes";
console.log(types);
const state = {
  sample: [],
  total: 0,
};

const getters = {
  sampleCount: (state) => state.sample.length,
  sampleTotal: (state) => state.total,
};

const mutations = {
  [types.ADD_SAMPLE](state, payload) {
    state.sample.push(payload);
    state.total++;
  },
  [types.DELETE_SAMPLE](state) {
    state.sample.shift();
  },
};

const actions = {
  delSample({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(types.DELETE_SAMPLE);
        resolve();
      }, 1000);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
