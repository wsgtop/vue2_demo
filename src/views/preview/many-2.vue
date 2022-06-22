<template>
  <div>
    <pdf
      class="pdf"
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="display: inline-block; width: 25%"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

var loadingTask = pdf.createLoadingTask(
  "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
);

export default {
  components: {
    pdf,
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined,
    };
  },
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
};
</script>

<style lang="less" scoped>
.pdf {
  width: 700px;
  margin-left: 300px;
  margin-bottom: 10px;
  border: 1px solid;
}
</style>
