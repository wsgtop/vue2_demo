<template>
  <div class="home">
    <div class="top">
      <div class="top_left"></div>
      <div class="top_right"></div>
    </div>
    <div class="logo">
      <div class="logo_left"></div>
      <div class="logo_right"></div>
    </div>
    <!-- <div class="header"></div>
    <div class="nav"></div>
    <div class="content"></div>
    <div class="footer"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  .top {
    height: 50px;
    width: 1200px;
    background-color: gray;
    margin: 0px auto;
    .top_left {
      width: 400px;
      height: 50px;
      background-color: aqua;
      // border: 1px solid gold;
      float: left;
    }
    .top_right {
      width: 400px;
      height: 50px;
      background-color: aqua;
      border: 1px solid gold;
      float: right;
    }
  }

  .logo {
    height: 120px;
    width: 1200px;
    background-color: gray;
    margin: 10px auto;
    .logo_left {
      height: 120px;
      width: 200px;
      background-color: #f2e2c3;
      float: left;
    }
    .logo_right {
      height: 120px;
      width: 200px;
      background-color: #f2e2c3;
      float: right;
    }
  }
  .header {
    height: 45px;
    background-color: #f2e2c3;
  }
  .nav {
    height: 45px;
    background-color: rebeccapurple;
  }
  .content {
    height: 800px;
    background-color: #fff;
  }
  .footer {
    height: 150px;
    background-color: black;
  }
}
</style>
