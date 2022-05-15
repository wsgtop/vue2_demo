<template>
  <div>
    <div>
      <slot>默认值，当父组件没有值传入时显示</slot>
    </div>
    <hr />
    <div>
      <div v-for="(item, i) in List" :key="i">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["List"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
