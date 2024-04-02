import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import en from './assets/i18n/en.json'
import nl from './assets/i18n/nl.json'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas)
library.add(far)

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en:  en,
        nl:  nl,
    }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
