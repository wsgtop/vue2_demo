<template>
  <div>
    <div>
      <slot name="title"></slot>
    </div>
    <hr />
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
