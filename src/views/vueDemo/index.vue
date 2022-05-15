<template>
  <div>
    <h3>列表</h3>
    <ul>
      <li><router-link to="/one"> 弹窗测试 </router-link></li>
      <li @click="click1">1. 路由传参 params</li>
      <li @click="click2">2. 路由传参 query</li>
      <li @click="click3">3. 路由传参 默认</li>
      <li>
        <router-link to="/two">插槽 </router-link>
      </li>
      <li>
        <router-link to="/slot/slot2"> 1. 普通插槽 </router-link>
      </li>
      <li>
        <router-link to="/slot/slot1"> 2. 具名插槽 </router-link>
      </li>
      <li>
        <router-link to="/slot/slot3"> 3. 作用域插槽 </router-link>
      </li>
      <li>
        <router-link to="/slot/slot4"> 3-2. 作用域插槽 </router-link>
      </li>
      <li>
        <router-link to="/directive"> 自定义指令 </router-link>
      </li>
      <li>
        <router-link to="/debounce"> 自定义指令 - 1. 防抖 </router-link>
      </li>
      <li>
        <router-link to="/trans"> transition </router-link>
      </li>
      <li>keepAlive</li>
      <li>封装组件</li>
      <li>nextTick</li>
      <li>混入 mixin</li>
      <li>权限管理</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    click1() {
      this.$router.push({
        name: "router1",
        params: { id: 123, name: "姓名", sex: "性别" },
      });
    },
    click2() {
      this.$router.push({
        path: "/router2",
        query: { id: 123, name: "姓名", sex: "性别" },
      });
    },
    click3() {
      this.$router.push("/router3?id=123&name=姓名&sex=性别");
    },
  },
};
</script>

<style lang="less" scoped></style>
