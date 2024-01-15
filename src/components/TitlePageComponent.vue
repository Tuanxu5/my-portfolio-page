<script setup>
defineProps({
    title: String,
    subTitle: String,
    name: String,
    isLink: {
        type: Boolean,
        default: false,
    },
    titleLink: String,
    link: {
        type: String,
        default: "#",
    },
})
</script>

<template>
    <section class="container px-[140px] flex flex-wrap">
        <div class="w-full">
            <div class="flex justify-between items-center">
                <h5 class="text-[18px] font-medium mb-10">{{ title }}</h5>
                <template v-if="isLink">
                    <router-link :to="link" class="font-semibold text-right flex items-center justify-end gap-1 text-15px">
                        <svg data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" width="15" height="15"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                        <span>{{ titleLink }}</span>
                    </router-link>
                </template>
            </div>
            <h1 class="text-[60px] font-bold leading-[70px]">
                {{ name }}
            </h1>
            <h1 class="text-[45px] font-bold leading-[50px]">
                <div v-html="subTitle"></div>
            </h1>
        </div>
    </section>
</template>

<style scoped></style>
