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
    <div class="list-contact">
      <a href="https://www.linkedin.com/in/tuanxu5/" target="_blank">
        <button class="contact-item">
          <img src="../../assets/icons/icon_contact_linkedIn.svg" />
        </button>
      </a>
      <a href="https://github.com/Tuanxu5" target="_blank">
        <button class="contact-item">
          <img src="../../assets/icons/icon_contact_github.svg" />
        </button>
      </a>

      <a href="https://www.instagram.com/tuann__n/" target="_blank">
        <button class="contact-item">
          <img src="../../assets/icons/icon_contact_intasgram.svg" />
        </button>
      </a>
      <a href="https://www.facebook.com/tunnxu5/" target="_blank">
        <button class="contact-item">
          <img src="../../assets/icons/icon_contact_facebook.svg" />
        </button>
      </a>
    </div>
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
    right: 25px;
    bottom: 25px;
    width: 40px;
    height: 40px;
    background-color: #03030f;
    color: #fff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
    }
  }
  .list-contact {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 25px;
    bottom: 25px;
    gap: 8px;
    .contact-item {
      width: 35px;
      height: 35px;
      background-color: #03030f;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      padding: 10px;
    }
  }
}
</style>
