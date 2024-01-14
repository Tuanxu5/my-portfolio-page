<script setup>
import ItemProject from "../ItemProject/ItemProject.vue";
const props = defineProps(["project"])
</script>

<template>
    <section class="mt-10 flex flex-col gap-10">
        <div v-for="project in props.project.children" :key="project?.id">
            <ItemProject :project="project" />
        </div>
    </section>
</template>

<style scoped></style>
