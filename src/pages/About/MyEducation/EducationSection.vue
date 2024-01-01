<script setup>
import EducationItem from './EducationItem.vue';

</script>
<template>
    <section class="container px-[140px] flex flex-wrap">
        <div class="bg-[#d4ecfe] px-[3.75rem] py-[3rem] text-[#03030f] rounded-[16px] w-full">
            <p class="text-[18px] font-medium flex justify-start gap-2 items-end">
                <span class="icon_all icon_education"></span>
                <span>Education</span>
            </p>
            <EducationItem />
        </div>
    </section>
</template>

<style scoped>
.icon_all {
    background-size: 441px 599px;
}

.icon_education {
    background-position: -703px -95px;
    width: 40px;
    height: 40px;
}
</style>
