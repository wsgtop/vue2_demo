<template>
  <CustomList :List="books">
    <!-- 实际传的数据格式为： { row：{ name: xx, icon: xx } },所以这里可以使用结构赋值 -->
    <template v-slot:item="{ row }">
      {{ row }}
    </template>
    <template v-slot:demo="scope">
      {{ scope }}
    </template>
  </CustomList>
</template>

<script>
import CustomList from "./slot3-1.vue";
export default {
  components: { CustomList },
  data() {
    return {
      title: "书籍列表",
      books: ["Dom编程艺术", "你不知道的Javascript", "CSS世界", "HTML入门教程"],
    };
  },
};
</script>

<style lang="less" scoped></style>
