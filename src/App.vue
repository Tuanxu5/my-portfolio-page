<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderPage from './components/layout/HeaderPage.vue'

const cursorBig = ref(null)
const cursorSmall = ref(null)
const links = document.getElementsByTagName('a')
const withClassHover = document.getElementsByClassName('cursor-hover')
const withHover = [...links, ...withClassHover]

// Event Listeners
onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mousedown', onMouseHover)
  document.addEventListener('mouseup', onMouseHoverOut)
  document.addEventListener('mouseenter', () => {
    cursorBig.value.style.opacity = 1
    cursorSmall.value.style.opacity = 1
  })
  document.addEventListener('mouseleave', () => {
    cursorBig.value.style.opacity = 0
    cursorSmall.value.style.opacity = 0
  })
  withHover.forEach((element) => {
    element.addEventListener('mouseover', onMouseHover)
    element.addEventListener('mouseout', onMouseHoverOut)
  })
})

// Event Handlers
function onMouseMove(e) {
  cursorSmall.value.style.opacity = 1
  gsap.to(cursorBig.value, 0.4, {
    x: e.clientX - 18,
    y: e.clientY - 18
  })
  gsap.to(cursorSmall.value, 0.1, {
    x: e.clientX - 4,
    y: e.clientY - 4
  })
}

function onMouseHover() {
  gsap.to(cursorBig.value, 0.3, {
    scale: 3
  })
}

function onMouseHoverOut() {
  gsap.to(cursorBig.value, 0.3, {
    scale: 1
  })
}
</script>

<template>
  <HeaderPage />
  <router-view />
  <div class="custom-cursor">
    <div ref="cursorSmall" class="custom-cursor__ball custom-cursor__ball--small"></div>
  </div>
</template>

<style scoped>
.custom-cursor__ball {
  position: fixed;
  top: -2px;
  left: -2px;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 999999;
}

.custom-cursor__ball--small {
  content: '';
  width: 12px;
  height: 12px;
  background: #ffabf7;
  border-radius: 50%;
  pointer-events: none;
}
</style>
