<template>
  <div>
    <h3>防抖指令</h3>
    <button v-debounce="debounceClick">防抖</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  directives: {
    debounce: {
      inserted: function (el, binding) {
        let timer;
        el.addEventListener("keyup", () => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            binding.value();
          }, 1000);
        });
      },
    },
  },
  methods: {
    debounceClick() {
      console.log("只触发一次");
    },
  },
};
</script>

<style lang="less" scoped></style>
