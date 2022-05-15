<template>
  <!--右键菜单-->
  <div
    id="rightMenuDom"
    class="right-menu"
    :style="{
      display: rightMenuStatus,
      top: rightMenuTop,
      left: rightMenuLeft,
    }"
  >
    <ul>
      <!--分为2组渲染-->
      <li>
        <span
          v-for="item in rightMenuList"
          :key="item.id"
          v-show="item.id <= 3"
          @click="item.handler"
          >{{ item.text }}
        </span>
      </li>
      <li>
        <span
          v-for="item in rightMenuList"
          :key="item.id"
          v-show="item.id > 3"
          @click="item.handler"
          >{{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    // 监听全局点击事件
    document.addEventListener("click", () => {
      // 隐藏右键菜单
      this.$store.commit("updateRightMenuStatus", {
        status: "none",
        left: "0px",
        top: "0px",
      });
    });
  },
  computed: {
    // 右键菜单显隐状态
    rightMenuStatus() {
      return this.$store.state.rightMenu.status;
    },
    // 右键菜单距离浏览器顶部高度
    rightMenuTop() {
      return this.$store.state.rightMenu.top;
    },
    // 右键菜单距离浏览器左边长度
    rightMenuLeft() {
      return this.$store.state.rightMenu.left;
    },
    // 右键菜单列表内容
    rightMenuList() {
      return this.$store.state.rightMenu.list;
    },
  },
};
</script>

<style lang="less" scoped>
// 右键菜单样式
.right-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 166px;
  height: auto;
  background-color: rgb(242, 242, 242);
  border: solid 1px #c2c1c2;
  box-shadow: 0 10px 10px #c2c1c2;
  display: none;
  border-radius: 5px;

  ul {
    padding: 0;
    margin: 0;
    font-size: 15px;

    li {
      list-style: none;
      box-sizing: border-box;
      padding: 6px 0;
      border-bottom: 1px solid rgb(216, 216, 217);

      &:nth-child(1) {
        padding-top: 2px;
      }

      &:nth-last-child(1) {
        border-bottom: none;
      }

      span {
        display: block;
        height: 20px;
        line-height: 20px;
        padding-left: 16px;

        &:hover {
          background-color: #0070f5;
          cursor: pointer;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
