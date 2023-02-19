import { createApp } from 'vue'

import { icons, clickOutside } from './directives'

import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'

const app = createApp(rootCmp)

app.directive('icon', icons)
app.directive('clickOutside', clickOutside)
app.mount('#app')
