<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

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
            <li class="item-menu" :class="{ active: isRouteActive('/') || isRouteActive(null) }">
              About
            </li>
          </router-link>
          <router-link to="/projects">
            <li class="item-menu" :class="{ active: isRouteActive('/projects') }">Project</li>
          </router-link>
          <router-link to="/skills">
            <li class="item-menu" :class="{ active: isRouteActive('/skills') }">Skills</li>
          </router-link>
          <router-link to="/tools">
            <li class="item-menu" :class="{ active: isRouteActive('/tools') }">Tools</li>
          </router-link>
          <router-link to="/contacts">
            <li class="item-menu" :class="{ active: isRouteActive('/contacts') }">Contacts</li>
          </router-link>
          <!-- <router-link to="/donates">
            <li class="item-menu" :class="{ active: isRouteActive('/donates') }">Buy me a coffee</li>
          </router-link> -->
        </ul>
        <div>
          <div class="toggle colour">
            <input id="check3" class="toggle-checkbox hidden" type="checkbox" />
            <label for="check3"
              class="toggle-label block w-[24px] h-[14px] rounded-full transition-color duration-150 ease-out">
            </label>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/17L2w4xwv94PEyIy4VsiZmQtjQgtXWXTp/view?usp=sharing" target="_blank">
          <button class="button-cv">Curriculum Vitae</button>
        </a>
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
  height: 80px;
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
      gap: 40px;
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

      .toggle-label {
        position: relative;

        &:before {
          position: absolute;
          top: 1px;
          left: 1px;
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 9999%;
          background-color: #03030f;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 40%;
          transition: transform 0.5s cubic-bezier(0, 0, 0.5, 1);
          transform: translateX(0);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      }

      .toggle-checkbox:checked+.toggle-label:before {
        transform: translateX(10px);
        background-color: #fff;
      }

      .toggle {
        &.slim {
          .toggle-label:before {
            top: -0.15rem;
            left: 0;
          }

          .toggle-checkbox:checked+.toggle-label:before {
            transform: translateX(1.75rem);
          }
        }

        &.colour {
          .toggle-label {
            background-color: #fff;
            border: 1px solid #03030f;
          }

          .toggle-checkbox:checked+.toggle-label {
            background-color: #03030f;
          }
        }
      }

      .button-cv {
        padding: 20px 24px;
        background-color: #03030f;
        border-radius: 100px;
        color: white;
        font-weight: 600;
      }
    }
  }
}
</style>
