/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// declare module 'swiper/vue' {
//   import _Vue from 'vue'
//   export class Swiper extends _Vue { }
//   export class SwiperSlide extends _Vue { }
// }