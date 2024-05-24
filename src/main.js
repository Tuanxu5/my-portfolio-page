import "./main.css"

import setupLocatorUI from "@locator/runtime"
import { createPinia } from "pinia"
import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"

setupLocatorUI({
  adapter: "vue"
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
