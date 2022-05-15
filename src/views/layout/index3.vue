<template>
  <div class="main">
    <h2>百分比布局</h2>

    <!-- 子元素的宽和高的百分比都是以父元素为参照 -->
    <!-- <div class="father">
      <div class="child"></div>
    </div> -->

    <!-- 子元素的top和bottom -->
    <!-- 子元素的left和right -->
    <!-- <div class="father1">
      <div class="child1"></div>
    </div> -->

    <!--  子元素的pading的百分比是以父元素的宽度为参照的，和高度无关-->
    <!-- <div class="father2">
      <div class="child2"></div>
    </div> -->

    <!-- 子元素的margin的百分比是以父元素的宽度为参照的，和高度无关 -->
    <!-- 设置子元素marging-top实际效果，子元素和父元素一起掉下来了，原因是因为当父元素没有设置padding和border值得时候,出现了一个bug,
      父元素的上方与子元素的上方完全重合在一起，无法分开，所以导致上述问题：父元素和子元素同时向下的情况
      解决方法：
      1. 给父元素加 padding值  padding-top:1px  缺点：增加1px误差
      2. 给父元素加 border值 border:solid 1px  缺点：增加1px误差
      3. 给父元素添加属性  overflow:hidden     没有误差
      4. 给父元素或者子元素声明浮动 float       没有必要
      5. 父元素或者子元素设置为绝对定位 position:absolute
      6. 给父元素添加属性   overflow:auto; position:relative -->
    <!-- <div class="father3">
      <div class="child3-1"></div>
      <div class="child3-2"></div>
    </div> -->

    <!-- 设置border-radius为百分比，则是相对于自身的宽度 -->
    <!-- 除了border-radius外，还有比如translate、background-size等都是相对于自身的 -->
    <!-- <div class="father4">
      <div class="child4-1"></div>
      <div class="child4-2"></div>
    </div> -->

    <div class="trangle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #a6a6a6;
  .father {
    width: 200px;
    height: 100px;
    background-color: green;
    .child {
      width: 50%;
      height: 50%;
      background-color: blue;
    }
  }
  .father1 {
    width: 800px;
    height: 600px;
    background-color: greenyellow;
    .child1 {
      // top: 10%;
      // left: 10%;
      // right: 100px;
      // bottom: 100px;
      width: 50%;
      height: 50%;
      background-color: blueviolet;
    }
  }
  .father2 {
    width: 800px;
    height: 600px;
    background-color: greenyellow;
    .child2 {
      width: 0;
      height: 0;
      background-color: blueviolet;
      padding-top: 50%;
      padding-left: 50%;
    }
  }
  .father3 {
    width: 800px;
    height: 600px;
    background-color: greenyellow;
    // margin-top: 100px;
    // padding-top: 1px;
    // border: solid 1px;
    // overflow: hidden;
    // position: absolute;
    overflow: auto;
    position: relative;
    .child3-1 {
      width: 100px;
      height: 100px;
      background-color: blueviolet;
      margin-top: 10%;
      // margin-left: 50%;
      // margin-right: 50%;
      // margin-bottom: 50%;
    }
    .child3-2 {
      width: 100px;
      height: 100px;
      background-color: bisque;
      margin-top: 50%;
      margin-left: 50%; //子元素距离父元素左侧边框的距离,右外边距等同
      // margin-right: 50%;
      // margin-bottom: 50%;
    }
  }
  .father4 {
    width: 800px;
    height: 800px;
    background-color: green;
    border: solid 1px;
    .child4-1 {
      width: 50%;
      height: 50%;
      background-color: blue;
      border-radius: 50%;
      margin-top: 10%;
    }
    .child4-2 {
      width: 40%;
      height: 20%;
      background-color: red;
      border-radius: 50%;
      margin-top: 10%;
    }
  }
  .trangle {
    height: 0;
    width: 100%;
    padding-top: 75%;
    background-color: aqua;
  }
}
</style>
