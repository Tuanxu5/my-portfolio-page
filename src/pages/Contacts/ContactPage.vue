<script setup>
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import SectionContact from "../../sections/Contact/SectionContact.vue";

</script>
<template>
  <main class="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
    <TitlePageComponent title="Contact" :subTitle="`Interested?
        <br />
        Let’s talk!`" />
    <SectionContact />
  </main>
</template>

<style scoped></style>
