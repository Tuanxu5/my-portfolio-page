<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import ListSkill from '../../sections/Skills/ListSkill.vue';


</script>
<template>
  <main class="flex flex-col gap-[100px] pt-[120px] pb-[50px] h-full items-center">
    <TitlePageComponent title="Skills" :subTitle="`Programming Languages & Tools`" />
    <ListSkill />
    <ContactComponent />
  </main>
</template>

<style scoped></style>
