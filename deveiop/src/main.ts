import { createApp } from 'vue'

import './sass/instaii.sass'
import './sass_tooi/index.sass'

import App from './App.vue'

import router from './himm/router'
import { createPinia } from 'pinia'

const app = createApp(App)

import eos from './eos/eos'
import funny from './funny/funny'
app.use(router).use(createPinia()).use(eos).use(funny).mount('#app')
