import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'
import './assets/index.css'

import App from './App.vue'
import router from './router'

//
import { Icon,   Tabs } from './components/global'

const app = createApp(App)

app.component('Icon', Icon) 
app.component('Tabs', Tabs)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')


// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then(registration => {
//         console.log("ServiceWorker registered with scope:", registration.scope)
//       })
//       .catch(error => {
//         console.error("ServiceWorker registration failed:", error)
//       })
//   })
// }
