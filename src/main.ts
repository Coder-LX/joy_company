import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'animate.css'
import 'animate.css/animate.compat.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
