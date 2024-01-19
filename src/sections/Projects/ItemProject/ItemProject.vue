<script setup>
const props = defineProps(["project"])
</script>
<template>
    <section class="flex px-[100px] py-10 gap-20 rounded-[32px] items-center min-h-[500px] relative overflow-hidden "
        :class="{ 'flex-row-reverse': props.project && !props.project.isLeft }"
        :style="{ 'background-color': props.project ? props.project.background : 'transparent' }">
        <div class="flex flex-col gap-4 max-w-[40%]">
            <h4 class="text-[16px]">{{ props?.project?.type }}</h4>
            <h1 class="text-4xl font-bold">{{ props?.project?.name }}</h1>
            <h6 class="text-[15px] leading-5 text-[#03030f]">{{ props?.project?.title }}
            </h6>
            <div class="flex flex-wrap max-w-md gap-x-2 gap-y-1.5 mt-2">
                <span v-for="tech in props?.project.techStack" :key="tech" class="tag-tech-stack">
                    {{ tech }}
                </span>
            </div>
            <router-link :to="'/projects/' + props.project.redirectLink">
                <button class="px-10 py-6 bg-black text-white rounded-full text-md font-semibold mt-10">
                    Show more
                </button>
            </router-link>
        </div>
        <div class="w-[60%]">
            <img :src="props?.project?.image" class="w-full">
        </div>
    </section>
</template>

<style scoped>
.tag-tech-stack {
    font-size: 12px;
    display: flex;
    padding: 6px 12px;
    border-radius: 50px;
    border: 1px solid #03030f;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #03030f;
    /* background-color: white; */

    &:hover {
        background: #03030f;
        color: #fff;
        border: 1px solid #03030f;
    }
}
</style>
