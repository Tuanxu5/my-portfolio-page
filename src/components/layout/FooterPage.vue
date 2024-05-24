<script setup>
import ScrollToTopCpnVue from '../ScrollToTopCpn.vue';
</script>

<template>
  <footer class="flex flex-col mb-5 mt-10 h-full items-center">
    <div class="container px-[140px]">
      <nav class="nav-footer flex justify-between">
        <span class="text-sm text-[#03030f80]">© 2024 Tuanxu. All rights reserved.</span>
      </nav>
      <div class="flex flex-col fixed gap-2 left-6 bottom-6">
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
      <ScrollToTopCpnVue />
    </div>
  </footer>
</template>
<style scoped>
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
</style>
