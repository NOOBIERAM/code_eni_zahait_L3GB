import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import router from './router/router'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

app.use(router)

app.mount('#app')
app.directive('scroll', {
    created: (el, binding) => {
        window.addEventListener("scroll", binding.value);
      },
      unmounted: (el, binding) => {
        window.removeEventListener("scroll", binding.value);
      },
})