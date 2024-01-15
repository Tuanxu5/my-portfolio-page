<script setup>
const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
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
      <button
        class="cursor-pointer fixed right-6 bottom-6 w-10 h-10 bg-[#03030f] text-white rounded-2xl flex justify-center items-center"
        @click="topFunction">
        <img src="../../assets/icons/icon_to_top.svg" class="w-4 h-4" />
      </button>
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
