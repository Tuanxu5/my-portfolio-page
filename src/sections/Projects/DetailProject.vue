<script setup>
import { useRoute } from 'vue-router';
import ProjectAppSeller from "./DetailProjectCustom/ProjectAppSeller.vue";

const { fullPath } = useRoute()
const pathSegments = fullPath.split('/');
const appName = pathSegments[pathSegments.length - 1];
</script>
<template>
    <div v-if="appName === 'honganh-app-seller'">
        <ProjectAppSeller />
    </div>
</template>

<style scoped></style>
