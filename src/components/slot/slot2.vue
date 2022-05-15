<template>
  <custom-list :List="books">
    <span>书籍列表 其实此处使用的是普通的插槽功能</span>
  </custom-list>
</template>

<script>
import CustomList from "./slot2-1.vue";

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
