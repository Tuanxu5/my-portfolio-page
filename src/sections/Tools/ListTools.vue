
<script setup>
import { ref } from 'vue';
import { mockDataTools } from '../../mock/_mockTools';
const tools = ref(mockDataTools);

</script>
<template>
    <section class="container px-[140px] flex flex-wrap mt-[-80px] pt-[50px] w-full">
        <div class="grid grid-cols-3 gap-x-[40px] gap-y-[20px] w-full">
            <router-link :to="'/tools/' + tool.id" v-for="tool in tools" :key="tool.id">
                <div
                    class="tools-item p-5 text-lg font-semibold rounded-lg cursor-pointer flex justify-between items-center relative bg-white">
                    <span>{{ tool?.name }} ({{ tool?.children?.length }})</span>
                    <box-icon name='chevron-right' size="md"></box-icon>
                </div>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
.tools-item {
    transition: all 0.5s ease-in-out;
    border: 2px solid #111;
    box-sizing: border-box;
    /* transform: translate(0px, 0px); */


    &::before {
        background-color: #03030f;
        border-radius: 8px;
        content: "";
        display: block;
        height: 80px;
        left: 0;
        width: 100%;
        position: absolute;
        top: -2px;
        transform: translate(8px, 8px);
        transition: transform .2s ease-out;
        z-index: -1;
    }
}
</style>
