<template>
  <div>
    <div>
      <slot name="title"></slot>
    </div>
    <hr />
    <div>
      <div v-for="(item, i) in List" :key="i">
        <slot name="item"></slot>
      </div>
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
