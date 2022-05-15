<template>
  <div>
    <h2>列表</h2>
    <ul>
      <li @click="click">Home</li>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/helloWorld">helloWorld</router-link></li>
      <li><router-link to="/demo">Demo</router-link></li>
      <li><router-link to="/vueDemo">VUE2组件测试</router-link></li>
      <li>
        <router-link to="/img/svg">图片 SVG的使用</router-link>
      </li>
      <li>
        <router-link to="/store">vuex的使用</router-link>
      </li>
      <li>
        <router-link to="/layout">布局</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    console.log(process.env);
  },
  methods: {
    click() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped></style>
