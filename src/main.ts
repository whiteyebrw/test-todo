import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'

import { createPinia } from 'pinia';

const vuetify = createVuetify({
	components,
});

const pinia = createPinia();

createApp(App).use(vuetify).use(pinia).mount('#app')
