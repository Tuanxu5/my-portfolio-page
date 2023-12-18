<script setup>
const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  console.log(123)
}
</script>

<template>
  <footer class="footer-page">
    <nav class="nav-footer">
      <span class="all-right">© 2023 Tuanxu. All rights reserved.</span>
    </nav>
    <button class="to-top" @click="topFunction">
      <img src="../../assets/icons/icon_to_top.svg" />
    </button>
  </footer>
</template>
<style scoped>
.footer-page {
  padding: 100px 200px 30px 200px;
  width: 100%;
  height: 100%;
  .nav-footer {
    display: flex;
    justify-content: space-between;
    .all-right {
      font-size: 14px;
      color: #03030f80;
    }
  }
  .to-top {
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    background-color: #03030f;
    color: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
