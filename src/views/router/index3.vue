<template>
  <div>
    <h3>默认路由</h3>
    <div></div>
    <div>fullPath:  {{ this.$route.fullPath }}</div>
    <div>path:  {{ this.$route.path }}</div>
    <div>query:  {{ this.$route.query }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("created =>this.$route", this.$route);
  },
};
</script>

<style lang="less" scoped></style>
