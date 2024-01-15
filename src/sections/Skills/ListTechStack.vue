<script setup>
const props = defineProps(["skills"])
</script>
<template>
    <section v-for="skill in props.skills" :key="skill.id" class="w-full rounded-3xl border border-[#dbdbdb] p-12">
        <div class="col-span-6 text-center text-3xl mb-5 font-semibold flex justify-center ">
            <div class="px-5 py-3 rounded-2xl bg-[#26a0f81a] flex justify-center gap-2 items-center mb-5">
                <span class="icon_all icon-tech-stack"></span>
                <h1 class="text-2xl font-bold bg-gradient-to-br from-blue-500 to-blue-300 text-transparent bg-clip-text">
                    Tech Stack
                </h1>
            </div>
        </div>
        <div class="grid grid-cols-6 gap-x-5 gap-y-10">
            <div v-for="item in skill.children" :key="item.id" class="flex flex-col items-center gap-2.5 text-sm font-bold">
                <div class="bg-[#f4f6f7] rounded-2xl w-14 h-14 flex justify-center items-center">
                    <img :src="item.image" :height="item.height" :width="item.width" :alt="item.name" />
                </div>
                <div>{{ item.name }}</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.icon-tech-stack {
    background-position: 221px -160px;
    width: 30px;
    height: 30px;
}
</style>
