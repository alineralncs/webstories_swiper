
<template>

    <main class="flex justify-center">
        <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="card in cards" :key="card.titulo" >
        <div class="bg-white w-96  h-120 mt-20 rounded-2xl shadow-xl sm:w-80 md:w-67 ">
        <div class="nome text-8xl font-title text-pink-400 justify-center text-center p-20 typewriter">
                {{card.titulo}}
            </div>
            <div class="imagem "> 
                <div class="h-14 bg-gradient-to-r from-pink-500 to-rose-500"></div>
            <img class="w-full cursor-pointer" src="../assets/Tenor.gif" alt="" />
            <div class="h-14 bg-gradient-to-r from-pink-500 to-rose-500"></div>
        </div>
           
            <div class="texto text-6xl p-20 text-center text-gray-500 pt-5 font-mono">
                {{ card.texto }}
            </div>
           
            <div class="flex p-4 justify-between bg-white">
      <div class="flex items-center space-x-2">
        <img class="w-10 rounded-full" src="https://pps.whatsapp.net/v/t61.24694-24/353788851_1004147064359973_3733577537835661240_n.jpg?ccb=11-4&oh=01_AdRxUn7RVETbI8VWe2tl2Tbte9IkFOikdFcknmERmsQWYw&oe=64B3C81C" alt="sara" />
        <h2 class="text-gray-800 font-bold cursor-pointer">Liz Castro
</h2>
      </div>
      <div class="flex space-x-2">
        <p> Imagem: Thumb/ Gfycat</p>
      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span>22</span>
        </div>
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span>20</span>
        </div>
        </div>
        </div>
        </div>
    </swiper-slide>
  
  </swiper>
        <!-- <div v-for="card in cards" :key="card.titulo" class="bg-white w-96  h-120 mt-20 rounded-2xl shadow-xl sm:w-80 md:w-67 ">
        <div class="nome text-8xl font-title text-pink-400 justify-center text-center p-20 typewriter">
                {{card.titulo}}
            </div>
            <div class="imagem "> 
                <div class="h-14 bg-gradient-to-r from-pink-500 to-rose-500"></div>
            <img class="w-full cursor-pointer" src="../assets/Tenor.gif" alt="" />
            <div class="h-14 bg-gradient-to-r from-pink-500 to-rose-500"></div>
        </div>
            <transition name="fade">
            <div class="texto text-6xl p-20 text-center text-gray-500 pt-5 font-mono">
                {{ card.texto }}
            </div>
            </transition>
            
            <div class="flex p-4 justify-between bg-white">
      <div class="flex items-center space-x-2">
        <img class="w-10 rounded-full" src="https://pps.whatsapp.net/v/t61.24694-24/353788851_1004147064359973_3733577537835661240_n.jpg?ccb=11-4&oh=01_AdRxUn7RVETbI8VWe2tl2Tbte9IkFOikdFcknmERmsQWYw&oe=64B3C81C" alt="sara" />
        <h2 class="text-gray-800 font-bold cursor-pointer">Liz Castro
</h2>
      </div>
      <div class="flex space-x-2">
        <p> Imagem: Thumb/ Gfycat</p>
      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span>22</span>
        </div>
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span>20</span>
        </div>
        </div>
        </div>
        </div>
     -->

    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper';
export default{
    data() {
        return {
            cards: [
                {
                    titulo: "Introdução sobre Chris Rock e a série",
                    imagem: `../assets/Tenor.gif`,
                    imagem_pessoa: `https://pps.whatsapp.net/v/t61.24694-24/353788851_1004147064359973_3733577537835661240_n.jpg?ccb=11-4&oh=01_AdRxUn7RVETbI8VWe2tl2Tbte9IkFOikdFcknmERmsQWYw&oe=64B3C81C`,
                    texto: "Todo Mundo Odeia o Chris é um seriado baseado na vida real do ator Chris Rock e retrata, principalmente, o bullying e o racismo sofrido pelo protagonista na escola, mas nem tudo de fato aconteceu. Confira algumas dessas diferenças da vida real do autor com a obra a seguir."
                },
                {
                    titulo: "Introdução sobre Chris Rock e a série",
                    imagem: `../assets/Tenor.gif`,
                    imagem_pessoa: `https://pps.whatsapp.net/v/t61.24694-24/353788851_1004147064359973_3733577537835661240_n.jpg?ccb=11-4&oh=01_AdRxUn7RVETbI8VWe2tl2Tbte9IkFOikdFcknmERmsQWYw&oe=64B3C81C`,
                    texto: "Todo Mundo Odeia o Chris é um seriado baseado na vida real do ator Chris Rock e retrata, principalmente, o bullying e o racismo sofrido pelo protagonista na escola, mas nem tudo de fato aconteceu. Confira algumas dessas diferenças da vida real do autor com a obra a seguir."
                },
            ]
        };
    },
    components: { 
        Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>