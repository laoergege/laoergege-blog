import { defineClientAppEnhance } from '@vuepress/client'
import Home from './components/home.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Home', Home)
})