<template>
  <div class="main">
    <h3>用户</h3>
    <p>userInfo: {{ userInfo }}</p>
    <el-button type="primary" @click="add"> 点击</el-button>
    <el-button type="warning" @click="add2"> 点击延迟变化</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store";
export default {
  data() {
    return {
      age: 0,
    };
  },
  methods: {
    // ...mapActions({ getUserInfo: (state) => state.user.getUserInfo }),
    add() {
      this.age++;
      store.commit("SET_USER_INFO", { name: "张楚岚", age: this.age });
    },
    add2() {
      this.age++;
      store.dispatch("getUserInfo", { name: "张楚岚", age: this.age });
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 20px;
  width: 400px;
  height: 400px;
  border: solid 1px rebeccapurple;
}
</style>
