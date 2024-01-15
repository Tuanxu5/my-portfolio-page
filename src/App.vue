<script setup>
import CursorComponent from '@/components/CursorComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
// import FooterPage from '@/components/layout/FooterPage.vue';
// import HeaderPage from '@/components/layout/HeaderPage.vue';
</script>

<template class="flex flex-col items-center justify-center">
  <LoaderComponent />
  <CursorComponent />
  <div id="content">
    xinhchao
  </div>
  <!-- <HeaderPage />
  <router-view />
  <FooterPage /> -->
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
