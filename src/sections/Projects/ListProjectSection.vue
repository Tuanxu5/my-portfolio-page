<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
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
        <div class="mt-20">
            <ContactComponent />
        </div>
    </section>
</template>

<style scoped></style>
