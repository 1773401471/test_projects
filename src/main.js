import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'
// 引入懒加载插件
import { lazyPlugin } from './directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
