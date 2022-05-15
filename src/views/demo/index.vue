<template>
  <div>
    <h2>列表</h2>
    <ul>
      <li><router-link to="/demo1">demo1</router-link></li>
      <li><router-link to="/demo2">demo2</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped></style>
