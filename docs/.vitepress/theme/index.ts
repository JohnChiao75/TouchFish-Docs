/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  enhanceApp({app}) { 
    app.component('Linkcard' , Linkcard)
  }
} 