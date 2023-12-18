import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '../pages/Projects/ProjectPage.vue'
import ContactPage from '../pages/Contacts/ContactPage.vue'

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
    }
  ]
})

export default router
