<template>
  <div>
    <button
      @click="
        $refs.myPdfComponent.print(
          100,
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        )
      "
    >
      print
    </button>
    <pdf
      ref="myPdfComponent"
       src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

var loadingTask = pdf.createLoadingTask(
  "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
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
