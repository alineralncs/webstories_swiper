import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';

const app = createApp(App);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.mount('#app');