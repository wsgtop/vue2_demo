<template>
  <div>
    {{ currentPage }} / {{ pageCount }}
    <pdf
    class="pdf"
      src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
    ></pdf>
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
      currentPage: 0,
      pageCount: 0,
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
