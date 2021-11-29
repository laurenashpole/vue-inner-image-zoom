import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard'
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(VueClipboard, { autoSetContainer: true }).mount('#app');
