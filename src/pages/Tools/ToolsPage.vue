
<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import ListTools from '../../sections/Tools/ListTools.vue';

</script>
<template>
    <main class="flex flex-col gap-[100px] pt-[120px] pb-[50px] h-full items-center">
        <TitlePageComponent title="Tools" :subTitle="`Tools for developer,<br />Recommend by me`" />
        <ListTools />
        <ContactComponent />
    </main>
</template>

<style scoped></style>
