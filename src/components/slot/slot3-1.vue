<template>
  <div>
    <div v-for="(item, i) in List" :key="i">
      <slot name="item" :row="item">
        {{ item }}
      </slot>
    </div>
    <span>----------分割线-------------</span>
    <div v-for="(item, i) in List" :key="i">
      <slot name="demo" :row="item">
        {{ item }}
      </slot>
    </div>
  </div>
</template>

<script>
// import slot from '../slot.vue';
export default {
  // components: { slot },
  props: ["List"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
