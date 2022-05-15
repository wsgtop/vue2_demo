<template>
  <div>
    <svg-icon icon-class="undraw_design" className="test" />
    <!-- svg图片在vue中的使用 -->
    <!-- 1. 安装依赖  npm install svg-sprite-loader -->
    <!-- 2. 在vue.config中进行配置 -->
    <!-- 3. 矢量图在目录中的配置需要与vue.config中的保持一致 -->
    <!-- 4. 在components对svg图片进行封装-->
    <!-- 5. 在icons中引入封装的组件 -->
    <!-- 6. 在main.js中引入 /icons/index.js文件，挂载全局 -->
    <!-- 7. 在模板文件中使用封装好的svg组件 -->
    <!-- icon-class:存放在icon中的svg名称 -->
    <!-- className：可以修改svg的样式，例如：大小、颜色 -->
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
.test {
  width: 500px;
  height: 300px;
}
</style>
