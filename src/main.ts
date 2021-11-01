import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'


// scss読み込み
import './assets/css/default.css';

createApp(App).use(store).mount('#app')
