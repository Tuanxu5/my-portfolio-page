<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import ListProjectSection from '@/sections/Projects/ListProjectSection.vue';


</script>
<template>
  <main class="flex flex-col gap-[100px] pt-[120px] pb-[50px] h-full items-center">
    <TitlePageComponent title="Projects" :subTitle="`Take a look at some of the ideas <br />
        we’ve helped to implement. Will yours be next?`" />
    <ListProjectSection />
    <ContactComponent />

  </main>
</template>

<style scoped></style>
