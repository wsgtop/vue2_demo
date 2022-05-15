import * as types from "./mutation-tpes";

export const add_sample = ({ commit }, payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      commit(types.ADD_SAMPLE, payload);
      resolve();
    }, 1000);
  });
};
