<script setup>
import { ref } from 'vue';
import { mockDataSkill } from '../../mock/_mockSkill';
import ListTechStack from './ListTechStack.vue';

const skills = ref(mockDataSkill);
</script>
<template>
    <section class="container px-[140px] flex flex-wrap mt-[-80px] pt-[50px]">
        <ListTechStack :skills="skills" />
    </section>
</template>

<style scoped></style>
