<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import ImageFirstSection from './AboutListImage/ImageFirstSection.vue';
import ImageParallaxSection from './AboutListImage/ImageParallaxSection.vue';
import ExperienceSection from './Experience/ExperienceSection.vue';
import EducationSection from './MyEducation/EducationSection.vue';
import MyGoalSection from './MyGoal/MyGoalSection.vue';



</script>
<template>
    <main class="flex flex-col gap-[100px] pt-[120px] pb-[50px] h-full items-center">
        <TitlePageComponent title="About"
            :subTitle="`I'm a Software Developer, I have experience in modern develop web and mobile apps.`"
            name="Hi, I'm Tuan Xu" />
        <ImageParallaxSection />
        <MyGoalSection />
        <!-- <StatsSection /> -->
        <ImageFirstSection />
        <ExperienceSection />
        <EducationSection />
        <ContactComponent />
    </main>
</template>

<style scoped></style>
