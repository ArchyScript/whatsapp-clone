import './assets/index.css'  
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 
import {Icon, Tooltip, Tabs} from './components/Global'; 

const app = createApp(App)

app.component('Icon', Icon);
app.component('Tooltip', Tooltip);
app.component('Tabs', Tabs);

app.use(createPinia())
app.use(router)

app.mount('#app')
