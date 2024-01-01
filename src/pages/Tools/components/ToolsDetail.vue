<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mockDataTools } from '../../../mock/_mockTools';
const route = useRoute();

const toolDetail = ref([]);
onMounted(() => {
    toolDetail.value = mockDataTools.find(item => `${item.id}` === route.params.id)?.children;
});
</script>
<template>
    <section class="tools-page">
        <div class="title-page">
            <div class="flex items-center justify-between">
                <h5>Icons</h5>
                <router-link to="/tools">
                    <h6 class="font-semibold text-right flex items-center justify-end gap-1 text-[15px]">
                        <svg data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" width="15" height="15"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                        <span>Quay lại</span>
                    </h6>
                </router-link>
            </div>
            <h1>Discover useful tools
                <br />
                that you may not have known!
            </h1>
        </div>
        <div class="list-detail-tools grid grid-cols-3 gap-x-[25px] gap-y-[30px]">
            <div class="tools-item" v-for="tool in toolDetail" :key="tool.id">
                <a :href="tool.link" target="_blank">
                    <div class="overflow-hidden img-tools">
                        <img :src="tool.image" :alt="tool.name">
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
.tools-page {
    padding: 150px 200px 50px 200px;

    .title-page {
        h5 {
            font-size: 20px;
            font-weight: 600;
            line-height: 50px;
        }

        h1 {
            font-size: 40px;
            font-weight: 700;
            line-height: 50px;
        }
    }

    .coming-soon {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .block-img {
            position: relative;

            .img-bg {
                width: 350px;
            }

            .img-person {
                position: absolute;
                top: 50%;
                margin-top: -100px;
                right: 30px;
                height: 200px;
            }
        }


    }

    .list-detail-tools {
        margin-top: 30px;

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

            .img-tools {
                border: 0.5px solid #ddd;
                border-radius: 10px;
                height: 160px;
                width: 100%;

                img {
                    border-radius: 8px;
                    width: 100%;
                    height: 160px;
                    transition: all 0.5s ease-in-out;
                    overflow: hidden;
                }
            }


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
    }
}
</style>
