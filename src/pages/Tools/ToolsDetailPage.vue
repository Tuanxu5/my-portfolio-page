<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import DetailTool from "../../sections/Tools/DetailTool.vue";

</script>
<template>
    <main class="flex flex-col gap-[100px] pt-[120px] pb-[50px] h-full items-center">
        <TitlePageComponent title="Icons" :subTitle="`Discover useful tools <br />that you may not have known!`"
            :isLink="true" titleLink="Back" link="/tools" />
        <DetailTool />
        <ContactComponent />
    </main>
</template>

<style scoped></style>
