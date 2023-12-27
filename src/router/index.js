import { createRouter, createWebHistory } from 'vue-router'
import ContactPage from '../pages/Contacts/ContactPage.vue'
import ProjectPage from '../pages/Projects/ProjectPage.vue'
import SkillPage from '../pages/Skills/SkillPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projects',
      component: ProjectPage
    },
    {
      path: '/contacts',
      component: ContactPage
    },
    {
      path: '/skills',
      component: SkillPage
    }
  ]
})

export default router
