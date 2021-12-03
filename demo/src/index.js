import { createApp } from 'vue';
import App from './App.vue';

createApp(App, {
  srcs: ['/assets/unsplash.jpg', '/assets/unsplash-large.jpg']
}).mount('#app');
