<template>
  <div>
    <h3>transition</h3>
    <div id="demo">
      <button v-on:click="show = !show">过渡类</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="example-1">
      <button @click="show2 = !show2">css 过渡</button>
      <transition name="slide-fade">
        <p v-if="show2">hello</p>
      </transition>
    </div>
    <div id="example-2">
      <button @click="show3 = !show3">css动画</button>
      <transition name="bounce">
        <p v-if="show3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
    };
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
