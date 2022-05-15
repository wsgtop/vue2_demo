<template>
  <div class="main">
    <h2>rem布局</h2>
    <div>哈哈哈</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main {
  // 默认情况html的font-size大小为16px, 所以默认情况 1rem = 16px
  // 若更改html的font-size大小，则rem的大小也会随之更改
  width: 10rem;
  height: 10rem;
  background-color: #e6e6e6;
}
</style>
