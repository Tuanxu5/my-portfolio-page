<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = ref(null)
const isScrolled = ref(false)

watch(
  () => route.fullPath,
  async () => {
    currentRoute.value = route.fullPath
  }
)
const isRouteActive = (route) => {
  return currentRoute.value === route
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0 ? true : false
}
</script>

<template>
  <header class="header-page" :class="{ 'is-scrolled': isScrolled }">
    <nav class="header-nav">
      <div class="header-logo">
        <img src="../../assets/icons/icon_logo_project.svg" height="24" width="24" alt="" />
        <span>TuanXu</span>
      </div>
      <div class="nav-menu">
        <ul class="list-menu">
          <router-link to="/">
            <li class="item-menu" :class="{ active: isRouteActive('/') }">Home</li>
          </router-link>
          <router-link to="/about">
            <li class="item-menu" :class="{ active: isRouteActive('/about') }">About</li>
          </router-link>
          <router-link to="/projects">
            <li class="item-menu" :class="{ active: isRouteActive('/projects') }">Project</li>
          </router-link>
          <router-link to="/skills">
            <li class="item-menu" :class="{ active: isRouteActive('/skills') }">Skills</li>
          </router-link>
          <router-link to="/contacts">
            <li class="item-menu" :class="{ active: isRouteActive('/contacts') }">Contacts</li>
          </router-link>
        </ul>
        <button class="button-cv">Curriculum Vitae</button>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header-page {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100vw;
  transition: all 0.5s;
  color: #03030f;
  z-index: 10;
  padding: 0 30px;
  height: 100px;
  background: hsla(0, 0%, 100%, 0.6);
  &.is-scrolled {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(3, 3, 15, 0.2);
  }

  .header-logo {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      font-size: 16px;
      .list-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
        font-weight: 700;
        .item-menu {
          position: relative;
          transition: all 0.5s;
          cursor: pointer;
          &:before {
            position: absolute;
            left: 0;
            width: 0%;
            height: 2px;
            top: 24px;
            background: #03030f;
            content: '';
            transition: all 0.5s;
          }
          &:hover {
            &:before {
              position: absolute;
              left: 0;
              width: 100%;
              height: 2px;
              top: 24px;
              background: #03030f;
              content: '';
              transition: all 0.5s;
            }
          }
        }
        .active {
          position: relative;
          &:before {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            top: 24px;
            background: #03030f;
            content: '';
            transition: all 0.5s;
          }
        }
      }
      .button-cv {
        padding: 20px 24px;
        background-color: #03030f;
        border-radius: 30px;
        color: white;
        font-weight: 600;
      }
    }
  }
}
</style>
