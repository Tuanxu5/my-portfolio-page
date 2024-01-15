<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mockDataTools } from "../../mock/_mockTools";
const route = useRoute();

const toolDetail = ref([]);
onMounted(() => {
    toolDetail.value = mockDataTools.find(item => `${item.id}` === route.params.id)?.children;
});
</script>
<template>
    <section class="container px-[140px] flex flex-wrap mt-[-80px] pt-5 w-full ">
        <div class="grid grid-cols-3 gap-x-6 gap-y-4">
            <div class="tools-item" v-for="tool in toolDetail" :key="tool.id">
                <a :href="tool.link" target="_blank">
                    <div class="overflow-hidden img-tools rounded-[10px] h-40 w-full border-[0.5px] border-[#ddd]">
                        <img :src="tool.image" :alt="tool.name"
                            class="rounded-lg h-40 w-full overflow-hidden transition-all duration-500 ease-in-out">
                    </div>
                    <span class="mt-1 text-[22px] font-bold flex items-center justify-between">
                        <span>{{ tool.name }}</span>
                        <button class="button-show-more">
                            <svg data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" width="12" height="12"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </button>
                    </span>
                    <span class="mt-1 text-[16px] line-clamp-1">{{ tool.title }}</span>
                    <span class="mt-1.5 text-[13px] text-[#03030f80] line-clamp-2 leading-4">{{ tool.subTittle }}</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.tools-item {
    padding: 14px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 8px;

    .button-show-more {
        background-color: #03030f;
        height: 25px;
        width: 25px;
        color: #fff;
        font-size: 13px;
        border-radius: 8px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        img {
            transition: all 0.5s ease-in-out;
            transform: scale(1.08);
        }

        .button-show-more {
            background-color: #69ccfe;
        }
    }
}
</style>
