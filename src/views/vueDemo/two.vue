<template>
  <div>
    <h3>作用域插槽 component-slot</h3>
    <!-- <Layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </Layout> -->
    <span>---------------------</span>
    <Home-test></Home-test>
    <Test></Test>
  </div>
</template>

<script>
// import Layout from "@/components/slot.vue";
import HomeTest from "@/components/slot/homeTest.vue";
import test from "@/components/slot/hhh.vue";
export default {
  components: { HomeTest, test },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
header {
  color: aqua;
}
main {
  color: bisque;
}
footer {
  color: blueviolet;
}
</style>
