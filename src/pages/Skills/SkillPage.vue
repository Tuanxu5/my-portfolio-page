<script setup>
import SkillBackend from './components/SkillBackend.vue'
import SkillFrontend from './components/SkillFrontend.vue'
import SkillMobile from './components/SkillMobile.vue'
import SkillTools from './components/SkillTools.vue'
</script>
<template>
  <section class="skills-page">
    <div class="title-page">
      <h5>Skills</h5>
      <h1>Programming Languages & Tools</h1>
    </div>
    <SkillFrontend />
    <SkillMobile />
    <SkillBackend />
    <SkillTools />
  </section>
</template>

<style scoped>
.skills-page {
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
}
</style>
