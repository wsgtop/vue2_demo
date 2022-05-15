<template>
  <div class="layout">
    <div class="left">
      <h5>自定义颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">123</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ttt: 1,
    };
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        //监听浏览器窗口大小改变
        //浏览器变化执行动作
        var t = window.devicePixelRatio; // 获取下载的缩放 125% -> 1.25    150% -> 1.5
        this.ttt = t;
        console.log(t, "0001");
        t = t.toFixed(2);
        if (t < 2 && t != 1) {
          document.body.style.zoom = -0.6 * t + 1.4;
        } else if (t >= 2 && t <= 3) {
          //
        } else if (t >= 4) {
          document.body.style.zoom = -0.6 * 2 + 1.4;
        }
      });
    });
  },
  mounted() {
    //
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.layout {
  transform: scaleX(1.5);
  display: flex;
  .left {
    width: 255px;
    background: gray;
  }
  .right {
    width: 900px;
    height: 1200px;
    background: hotpink;
  }
}
</style>
