<template>
  <div class="main">
    <h3>sample</h3>
    <p>sample: {{ sample }}</p>
    <p>sampleTotal: {{ total }}</p>
    <el-input v-model="value"></el-input>
    <el-button type="primary" @click="add">输入后点击</el-button>
    <el-button type="danger" @click="del">删除</el-button>
    <el-button type="danger" @click="del2">延迟删除</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    add() {
      if (this.value) {
        this.$store.commit("ADD_SAMPLE", this.value);
      } else {
        alert("先输入信息，再进行点击");
      }
    },
    del() {
      this.$store.commit("DELETE_SAMPLE");
    },
    del2() {
      this.$store.dispatch("delSample");
    },
  },
  computed: {
    ...mapState({
      sample: (state) => state.module.sample,
      total: (state) => state.module.total,
    }),
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 20px;
  width: 400px;
  height: 400px;
  border: 1px solid yellowgreen;
}
</style>
