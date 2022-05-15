<template>
  <div class="demo1">
    <h3>Demo1</h3>
    <div class="list">
      <ul>
        <li>
          <a href="">
            jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi舍不得放hi巴斯达标排放hi病毒后放鞭炮哈斯
          </a>
        </li>
        <li>jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi</li>
        <li>jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi</li>
        <li>jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi</li>
        <li>jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi</li>
        <li>jdbfibsidbfibhisbdibfibaisbdhifbhisabdifbiasbhidfbi</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.list {
  width: 180px;
  li {
    list-style-position: inside;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 90px;
  }
  li::marker {
    background: red;
    // display: block;
  }
}
</style>
