<template>
  <div>
    <h3>组件通信</h3>
    {{ count }}
    <button @click="add">加</button>
    <button @click="subduction">减</button>
    <el-button type="primary" @click="openDialog">点击打开 Dialog</el-button>
    <el-button type="primary" @click="click2">父组件调用子组件之ref</el-button>
    <el-button type="primary" @click="click3"
      >父组件调用子组件之 children</el-button
    >
    <Dialog
      :status.sync="status"
      :message="data"
      @dianji-chuanzhi="jieshouzhi"
      ref="dialog"
      :iphone="iphone_number"
      @open-dialog2="openDialog2"
    ></Dialog>
    <Dialog2 :status.sync="status2"></Dialog2>
  </div>
</template>

<script>
import Dialog from "@/components/dialog.vue";
import Dialog2 from "@/components/dialog2.vue";
import { mapState } from "vuex";
export default {
  components: { Dialog, Dialog2 },
  data() {
    return {
      data: [{ id: "123", name: "张三" }],
      status: false,
      iphone_number: "130789123",
      status2: false,
    };
  },
  created() {
    console.log("组件传值 created");
  },
  // computed: {
  //   count: () => {
  //     return this.$store.state.count;
  //   },
  // },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    add() {
      this.$store.commit("addCount");
    },
    subduction() {
      this.$store.commit("subCount");
    },
    water(msg) {
      console.log("我是父组件，这是我的方法打印。", msg);
    },
    openDialog() {
      this.status = true;
    },
    openDialog2() {
      this.status2 = true;
    },
    click2() {
      // 组件传值方式之 ref组件传值
      // 子组件注册ref后，父组件可以根据ref调用到子组件的方法
      console.log("调用子组件的方法", this.$refs.dialog);
      this.$refs.dialog.chuanzhi();
    },
    click3() {
      // 组件传值之 $children,会查询出所有子组件的信息，返回的是一个子组件的数据集合
      console.log(this.$children);
      this.$children[3].say();
    },
    jieshouzhi(msg) {
      console.log("子组件通过emit向父组件中传值，值是：", msg);
    },
  },
};
</script>

<style lang="less" scoped></style>
