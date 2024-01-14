<script setup>
const props = defineProps(['openTab', "toggleTabs", "projects"])
</script>
<template>
    <section class="px-[140px] flex flex-wrap">
        <ul class="flex mb-0 list-none flex-wrap pb-4 flex-row">
            <li v-for="project in props?.projects" :key="project.id" class="mr-2 last:mr-0 text-center cursor-pointer mb-3">
                <a class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border-[1.5px] border-[#03030f]"
                    v-on:click="toggleTabs(project?.id)" v-bind:class="{
                        'text-[#03030f] bg-[#fff] button-hover': props.openTab !== project?.id,
                        'text-[#fff] bg-[#03030f]': props.openTab === project?.id
                    }">
                    {{ project?.tab }}
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.button-hover {
    position: relative;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        color: #fff;
        z-index: 3;
        background: #03030f;
    }
}
</style>
