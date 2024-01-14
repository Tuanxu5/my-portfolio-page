<script setup>
const props = defineProps(["project"])
console.log(props?.project);
</script>
<template>
    <section class="flex px-[100px] py-10 gap-10 rounded-[32px] items-center min-h-[500px] relative overflow-hidden "
        :class="{ 'flex-row-reverse': props.project && !props.project.isLeft }"
        :style="{ 'background-color': props.project ? props.project.background : 'transparent' }">
        <div class="flex flex-col gap-4 max-w-[50%]">
            <h4 class="text-[16px]">{{ props?.project?.type }}</h4>
            <h1 class="text-4xl font-bold">{{ props?.project?.name }}</h1>
            <h6 class="text-[15px] leading-5 text-[#03030f] opacity-50">{{ props?.project?.title }}
            </h6>
            <div class="flex flex-wrap max-w-md gap-x-2 gap-y-1.5">
                <span v-for="tech in props?.project.techStack" :key="tech" class="tag-tech-stack">
                    {{ tech }}
                </span>
            </div>
            <button class="w-[120px] bg-black h-[50px] text-[#fff] rounded-full text-sm mt-5">Show more</button>
        </div>
        <div class="">
            <img :src="props?.project?.image" height="200">
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

    &:hover {
        background: #03030f;
        color: #fff;
        border: 1px solid #03030f;
    }
}
</style>
