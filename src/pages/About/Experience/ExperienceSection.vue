<script setup>
import CollapseComponentVue from '../../../components/shared/Collapse/CollapseComponent.vue';
</script>
<template>
    <section class="container px-[140px] flex flex-wrap">
        <div class="flex justify-start w-full items-start gap-[100px]">
            <div class="text-[40px] font-bold leading-[24px]">Experience</div>
            <div class="flex flex-col gap-16 border-l-[1.5px] pl-[33px]">
                <div class="experience-items">
                    <div class="flex justify-between items-center gap-10">
                        <h1 class="text-[26px] font-bold leading-7">Hong Anh Computer Company Limited</h1>
                        <time class="text-[13px] min-w-max">Aug 2022 - Present</time>
                    </div>
                    <div class="flex flex-col gap-4 mt-2">
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold leading-8 text-[18px]">
                                Position: FrontEnd Developer && Flutter Developer
                            </p>
                            <CollapseComponentVue :title="`<div>Show more</div>`" />
                        </div>
                    </div>
                </div>
                <div class="experience-items">
                    <div class="flex justify-between items-center gap-10">
                        <h1 class="text-[26px] font-bold leading-7">ABCSOFT Information System Solution and Development
                            Join-Stock
                        </h1>
                        <time class="text-[13px] min-w-max">Aug 2021 - Feb 2022</time>
                    </div>
                    <div class="flex flex-col gap-4 mt-2">
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold leading-8 text-[18px]">Position: Frontend Talent Internship</p>
                        </div>
                    </div>
                </div>
                <div class="experience-items">
                    <div class="flex justify-between items-center gap-10">
                        <h1 class="text-[26px] font-bold leading-7">Hung Yen University of Technology and Education
                        </h1>
                        <time class="text-[13px] min-w-max">Aug 2019 - Jun 2023</time>
                    </div>
                    <div class="flex flex-col gap-4 mt-2">
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold leading-8 text-[18px]">Position: Student Talent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.experience-items {
    position: relative;
    font-size: 20px;

    &::before {
        content: "";
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: absolute;
        background-color: #03030f;
        border: 12px solid #d4ecfe;
        left: -50px;
    }
}
</style>
