import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { loadFonts } from './plugins/webfontloader'
axios.defaults.baseURL = 'http://apitest.cargofive.com/api/ports'
loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
