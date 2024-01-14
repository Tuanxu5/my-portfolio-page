<script setup>
import ListItemProject from "./ListItemProject/ListItemProject.vue";
const props = defineProps(["openTab", "projects"])

</script>
<template>
    <section class="container flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div class="py-5 flex-auto">
            <div class="tab-content tab-space">
                <div v-for="project in props?.projects" :key="project.id"
                    v-bind:class="{ hidden: props?.openTab !== project?.id, block: props.openTab === project?.id }">
                    <ListItemProject :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
