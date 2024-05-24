<script setup>
import ContactComponent from '@/components/ContactComponent.vue';
import TitlePageComponent from '@/components/TitlePageComponent.vue';
import ListProjectSection from '../../sections/Projects/ListProjectSection.vue';
import ImageFirstSection from './AboutListImage/ImageFirstSection.vue';
import ImageParallaxSection from './AboutListImage/ImageParallaxSection.vue';
import ExperienceSection from './Experience/ExperienceSection.vue';
import MyGoalSection from './MyGoal/MyGoalSection.vue';
import StatsSection from './StatsSection/StatsSection.vue';




</script>
<template>
    <main class="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
        <TitlePageComponent title="About"
            :subTitle="`I'm a Software Developer, I have experience in modern develop web and mobile apps.`"
            name="Hi, I'm Tuan Xu" />
        <ImageParallaxSection />
        <MyGoalSection />
        <StatsSection />
        <TitlePageComponent title="Projects" :subTitle="`Take a look at some of the ideas <br />
        we’ve helped to implement. Will yours be next?`" />
        <ListProjectSection />
        <ImageFirstSection />
        <TitlePageComponent title="Experience" :subTitle="`Take a look at some of the ideas <br />
        we’ve helped to implement. Will yours be next?`" />
        <ExperienceSection />
        <ContactComponent />
    </main>
</template>

<style scoped></style>
