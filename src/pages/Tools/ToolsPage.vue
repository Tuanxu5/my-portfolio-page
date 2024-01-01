<script setup>
import { ref } from 'vue';
import { mockDataTools } from '../../mock/_mockTools';

const tools = ref(mockDataTools);

</script>

<template>
    <section class="tools-page">
        <div class="title-page">
            <h5>Tools</h5>
            <h1>
                Tools for developer,
                <br />
                <div class="flex gap-3 items-center ">
                    Recommend by me
                    <div class="flex gap-1">
                        <img src="https://media.tenor.com/XXAXt1WWm3YAAAAi/pepe-hack-hack.gif" alt="" class="w-7 h-7">
                        <img src="https://media.tenor.com/XXAXt1WWm3YAAAAi/pepe-hack-hack.gif" alt="" class="w-7 h-7">
                        <img src="https://media.tenor.com/XXAXt1WWm3YAAAAi/pepe-hack-hack.gif" alt="" class="w-7 h-7">
                    </div>
                </div>
            </h1>
        </div>

        <div class="list-tools grid grid-cols-3 gap-x-[40px] gap-y-[20px]">

            <router-link :to="'/tools/' + tool.id" v-for="tool in tools" :key="tool.id">
                <div class="tools-item">
                    <span>{{ tool?.name }} ({{ tool?.children?.length }})</span>
                    <box-icon name='chevron-right' size="md"></box-icon>
                </div>
            </router-link>
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

    .list-tools {
        margin-top: 50px;

        .tools-item {
            border: 2px solid #03030f;
            padding: 20px 20px 20px 28px;
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid #111;
            border-radius: 8px;
            box-sizing: border-box;
            cursor: pointer;
            position: relative;
            background: #fff;

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

            &:hover {
                transition: all 0.5s ease-in-out;

                &::before {
                    transform: translate(0, 0);
                }
            }
        }
    }
}
</style>
