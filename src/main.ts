import { createApp } from 'vue'
// Quasar CSS library
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// vue-router setup
import router from './router'
// pinia store setup
import { createPinia } from 'pinia'
// vue axios setup
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue'

createApp(App)
	.use(router)
	.use(createPinia())
	.use(Quasar, {
		plugins: {} // import Quasar plugins and add here.
	})
	.use(VueAxios, axios)
	.provide('axios', App.config.globalProperties.axios)
	.mount('#app')
