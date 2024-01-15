import { createRouter, createWebHistory } from "vue-router"
import ContactPage from "../pages/Contacts/ContactPage.vue"
import ProjectPage from "../pages/Projects/ProjectPage.vue"
import SkillPage from "../pages/Skills/SkillPage.vue"
import ToolsPage from "../pages/Tools/ToolsPage.vue"
import ToolsDetailPage from "../pages/Tools/ToolsDetailPage.vue"
import AboutPage from "../pages/About/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AboutPage
    },
    {
      path: "/projects",
      component: ProjectPage
    },
    {
      path: "/contacts",
      component: ContactPage
    },
    {
      path: "/skills",
      component: SkillPage
    },
    {
      path: "/tools",
      component: ToolsPage
    },
    {
      path: "/tools/:id",
      name: "toolsDetail",
      component: ToolsDetailPage,
      props: true
    }
  ]
})

export default router
