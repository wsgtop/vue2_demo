<template>
  <div>
    <h3>Params</h3>
    <div></div>
    <div>{{ this.$route.params }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("created =>this.$route", this.$route);
    console.log("Created =>Params", this.$route.params);
  },
};
</script>

<style lang="less" scoped></style>
