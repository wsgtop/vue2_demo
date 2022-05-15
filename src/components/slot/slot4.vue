<template>
  <Child>
    <template v-slot:header="scope">
      {{ scope.user.firstName }}
    </template>
  </Child>
</template>

<script>
import Child from "./slot4-1.vue";
export default {
  components: { Child },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
