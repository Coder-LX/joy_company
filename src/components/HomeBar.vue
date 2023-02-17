<template>
  <div class="home-bar">
    <Swiper :modules="modules" :autoplay="true" :navigation="true" :loop="true">
      <SwiperSlide>
        <div class="slide-item">
          <img src="../assets/images/slideCar.jpg" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-item">
          <img src="../assets/images/slide.jpg" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-item">
          <img src="../assets/images/homebg.jpg" alt="">
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="flow-box">
      <MenuBox></MenuBox>
      <MenuBox></MenuBox>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
import MenuBox from '@/components/MenuBox.vue'
import { ref, reactive } from 'vue'
let modules = [Autoplay, Navigation]
</script>
<style lang="scss" scoped>
.home-bar {
  height: 975px;
  width: 100%;
  overflow: hidden;
  position: relative;

  .swiper {
    height: 700px;
    width: 100%;

    .swiper-slide {
      height: 700px;

      .slide-item {
        height: 100%;
        width: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .flow-box {
    display: flex;
    justify-content: center;
    position: relative;
    top: -120px;
    z-index: 100;
  }
}
</style>