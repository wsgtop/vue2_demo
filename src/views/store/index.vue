<template>
  <div>
    <h3>vuex的使用</h3>
    <div class="content flex">
      <User></User>
      <Simple></Simple>
    </div>
  </div>
</template>

<script>
import User from "./user";
import Simple from "./sample";
export default {
  components: {
    User,
    Simple,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
</style>
