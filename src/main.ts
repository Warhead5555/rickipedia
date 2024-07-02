import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { AgGridVue } from '@ag-grid-community/vue3'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('AgGridVue', AgGridVue)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')

import { ModuleRegistry } from '@ag-grid-community/core'
//import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import {  ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model'

ModuleRegistry.registerModules([
  //ClientSideRowModelModule,
  ServerSideRowModelModule
])
