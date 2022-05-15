<template>
  <div>
    <CustomList>
      <template v-slot:title>
        <span>书籍列表</span>
      </template>
      <template v-slot:content>
        <div>
          <div v-for="(item, index) in books" :key="index">
            {{ item.name }}
          </div>
        </div>
      </template>
    </CustomList>
    <CustomList2 :List="books">
      <template v-slot:title>
        <span>书籍列表</span>
      </template>
      <!-- <template v-slot:content>
        <div>
          <div v-for="(item, index) in books" :key="index">
            {{ item.name }}
          </div>
        </div>
      </template> -->
    </CustomList2>
  </div>
</template>

<script>
import CustomList from "./slot1-1.vue";
import CustomList2 from "./slot1-2.vue";

export default {
  components: { CustomList, CustomList2 },
  data() {
    return {
      title: "书籍列表",
      books: [
        { name: "Dom编程艺术", icon: "face" },
        { name: "你不知道的Javascript", icon: "favorite" },
        { name: "CSS世界", icon: "av_timer" },
        { name: "HTML入门教程", icon: "star_half" },
      ],
    };
  },
};
</script>
