<script setup>
import CursorComponent from '@/components/CursorComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import FooterPage from '@/components/layout/FooterPage.vue';
import HeaderPage from '@/components/layout/HeaderPage.vue';
import { ref } from 'vue';

const showWelcome = ref(false);
const currentLoader = ref(1);
const loaderCount = 3;

const updateShowWelcome = () => {
  showWelcome.value = true
}

const updateCurrentLoader = () => {
  currentLoader.value++;
}
</script>

<template class="flex flex-col items-center justify-center">
  <LoaderComponent :showWelcome="showWelcome" :currentLoader="currentLoader" :loaderCount="loaderCount"
    :updateShowWelcome="updateShowWelcome" :updateCurrentLoader="updateCurrentLoader" />
  <CursorComponent />
  <div v-if="showWelcome">
    <HeaderPage />
    <router-view />
    <FooterPage />
  </div>
</template>

<style>
.icon_all {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: top;
  background: url(/Users/admin/my-profile/src/assets/icons/icon_all.svg);
  background-position: 30px 30px;
}
</style>
