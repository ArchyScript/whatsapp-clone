import './assets/index.css'
// import './assets/global.css'
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Icon from './components/global/Icon.vue'; 

const app = createApp(App)

app.component('Icon', Icon);

app.use(createPinia())
app.use(router)

app.mount('#app')
