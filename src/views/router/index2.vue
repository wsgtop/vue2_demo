<template>
  <div>
    <h3>Query</h3>
    <div>路由传参显示在地址栏中,参数不会丢失</div>
    地址栏参数：{{ this.$route.query }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
     console.log("created =>this.$route", this.$route);
    console.log("Created =>Query", this.$route.query);
  },
};
</script>

<style lang="less" scoped></style>
