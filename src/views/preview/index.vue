<template>
  <div>
    <h3>预览PDF</h3>
    <pdf ref="pdf" :src="url" class="pdf"> </pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
    };
  },
};
</script>

<style lang="less" scoped>
.pdf {
  width: 500px;
  margin-left: 50px;
  border: 1px solid;
}
</style>
