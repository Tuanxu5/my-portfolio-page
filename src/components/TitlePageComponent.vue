<script setup>
defineProps({
    title: String,
    subTitle: String,
    name: String,

})
</script>

<template>
    <section class="container px-[140px] flex flex-wrap">
        <div>
            <h5 class="text-[18px] font-medium mb-10">{{ title }}</h5>
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
