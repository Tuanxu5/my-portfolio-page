<script setup>
import { ref } from 'vue'

const openTab = ref(1)

const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber
}
</script>
<template>
  <section class="project-page">
    <div class="title-page">
      <h5>Projects</h5>
      <h1>
        Take a look at some of the ideas <br />
        we’ve helped to implement. Will yours be next?
      </h1>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-10 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
            <a
              class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border border-[#03030f]"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-[#03030f] bg-[#fff] button-hover': openTab !== 1,
                'text-[#fff] bg-[#03030f]': openTab === 1
              }"
            >
              All Project
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
            <a
              class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border border-[#03030f]"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-[#03030f] bg-[#fff] button-hover': openTab !== 2,
                'text-[#fff] bg-[#03030f]': openTab === 2
              }"
            >
              Web App
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
            <a
              class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border border-[#03030f]"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-[#03030f] bg-[#fff] button-hover': openTab !== 3,
                'text-[#fff] bg-[#03030f]': openTab === 3
              }"
            >
              Mobile App
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
            <a
              class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border border-[#03030f]"
              v-on:click="toggleTabs(4)"
              v-bind:class="{
                'text-[#03030f] bg-[#fff] button-hover': openTab !== 4,
                'text-[#fff] bg-[#03030f]': openTab === 4
              }"
            >
              Design
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
            <a
              class="text-xs font-bold px-6 py-3 shadow-sm rounded-full block leading-normal border border-[#03030f]"
              v-on:click="toggleTabs(5)"
              v-bind:class="{
                'text-[#03030f] bg-[#fff] button-hover': openTab !== 5,
                'text-[#fff] bg-[#03030f]': openTab === 5
              }"
            >
              Other ++
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">All</div>
              <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">Web app</div>
              <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">mobile app</div>
              <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">design</div>
              <div v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">other</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-page {
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
  .button-hover {
    position: relative;
    position: relative;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      color: #fff;
      z-index: 3;
      transition-delay: 1s;
    }
    &:before {
      content: '';
      position: absolute;
      left: 60px;
      top: 50%;
      transform: translateY(-50%) scale(0.6);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      z-index: 1;
      transition-property: left, transform;
      transition-delay: 0s, 0s;
      transition-duration: 1s, 0.5s;
      opacity: 0;
    }
    &:hover:before {
      left: 10px;
      transform: translateY(-50%) scale(50);
      transition-delay: 0s, 1s;
      opacity: 1;
      background: #03030f;
      z-index: -1;
    }
    &:after {
      content: '';
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%) scale(0.6);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      z-index: 1;
      transition-property: right, transform;
      transition-delay: 0s, 0s;
      transition-duration: 1s, 0.5s;
      opacity: 0;
    }
    &:hover:after {
      right: 10px;
      transform: translateY(-50%) scale(50);
      transition-delay: 0s, 1s;
      opacity: 1;
      background: #03030f;
      z-index: -1;
    }
  }
}
</style>
