<script setup>
import { ref } from 'vue';
import { mockDataProject } from '../../mock/_mockProject';
import ContentProjectSection from "./ContentProjectSection.vue";
import TabProjectSection from "./TabProjectSection.vue";
const openTab = ref(1)
const toggleTabs = (tabNumber) => {
    openTab.value = tabNumber
}
const projects = ref(mockDataProject);
</script>
<template>
    <section class="container flex flex-wrap mt-[-80px]">
        <TabProjectSection :toggleTabs="toggleTabs" :openTab="openTab" :projects="projects" />
        <ContentProjectSection :openTab="openTab" :projects="projects" />
    </section>
</template>

<style scoped></style>
