<template>
  <div>
    <h2>列表</h2>
    <ul>
      <li @click="click">Home</li>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/helloWorld">helloWorld</router-link></li>
      <li><router-link to="/demo">Demo</router-link></li>
      <li><router-link to="/vueDemo">VUE2组件测试</router-link></li>
      <li><router-link to="/img/svg">图片 SVG的使用</router-link></li>
      <li><router-link to="/store">vuex的使用</router-link></li>
      <li><router-link to="/layout">布局</router-link></li>
      <li><router-link to="/echarts">TODO图表</router-link></li>
      <li><router-link to="/previewPDF">PDF预览 仅第一页</router-link></li>
      <li>
        <router-link to="/previewPDF/many">PDF预览 当前页/页数</router-link>
      </li>
      <li><router-link to="/previewPDF/many-2">PDF预览 显示同一 pdf 文档的多个页面</router-link></li>
      <li><router-link to="/previewPDF/many-3">PDF预览 打印所有页面</router-link></li>
      <li><router-link to="/previewPDF/many-4">PDF预览 打印多页</router-link></li>
      <li><router-link to="/previewPDF/many-5">PDF预览 获取文本内容</router-link></li>
      <li><router-link to="/previewPDF/many-6">PDF预览 完成</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    console.log("当前环境", process.env);
  },
  methods: {
    click() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped></style>
