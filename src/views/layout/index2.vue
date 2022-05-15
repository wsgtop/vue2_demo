<template>
  <div class="main">
    <div class="header"></div>
    <div class="content">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="footer"></div>
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
.main {
  margin: 0px auto;
  width: 1100px;
  height: 1000px;
  .header {
    height: 10%;
    width: 50%;
    background: #eee;
  }
  .content {
    width: 50%;
    height: 90%;
    background: violet;
    .right {
      float: right;
      // height: 200px;
      height: 80%;
      width: 200px;
      background: red;
    }
    .left {
      float: left;
      height: 300px;
      width: 100px;
      background-color: antiquewhite;
    }
  }
  .footer {
    width: 50%;
    height: 10%;
    background-color: darkgray;
  }
}
</style>
