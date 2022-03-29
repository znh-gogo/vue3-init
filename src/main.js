import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import mitt from '@/utils/mitt'

const app = createApp(App)
app.config.globalProperties.$bus = mitt
app.use(router)
app.use(createPinia())
app.mount('#app')
