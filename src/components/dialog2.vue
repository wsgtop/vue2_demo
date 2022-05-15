<template>
  <div>
    <el-dialog title="提示" :visible.sync="status" @close="closeDialog">
      <span>这是一段信息</span>
      {{ status }}
      <p>{{ message }}</p>
      <el-button @click="chuanzhi" type="primary"
        >点击向父组件传值 this.$emit</el-button
      >
      <el-button @click="click2" type="primary"
        >点击调用父组件方法 this.$parent</el-button
      >
      <div>
        <el-button @click="click3" type="primary">点击向兄弟组件传值</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Bus from "@/utils/eventBus.js";

export default {
  props: ["status", "message"],
  data() {
    return {};
  },
  created() {
    this.$on("changeStatus", (val) => {
      this.status = val;
    });
  },
  methods: {
    closeDialog() {
      console.log("close dialog");
      this.$emit("update:status", false);
    },
    confirm() {
      console.log("save and close dialog");
      this.$emit("update:status", false);
    },
    chuanzhi() {
      console.log("传值方法被调用");
      this.$emit("dianji-chuanzhi", { id: "123", name: "哈哈" });
    },
    click2() {
      // 子组件调用父组件中的方法  $parent
      this.$parent.water("===，我是子组件中传递的数据");
    },
    click3() {
      Bus.$emit("wo-xiangni", { id: "2", name: "box2" });
    },
    say() {
      console.log("我是子组件的say方法");
    },
  },
};
</script>
