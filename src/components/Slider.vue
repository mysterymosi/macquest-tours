<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :breakpoints="breakpoints"
    :navigation="true"
  >
    <swiper-slide v-for="value in values" :key="value.id">
      <slot :value="value"></slot>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper-new';
import { Swiper, SwiperSlide } from "swiper-new/vue";
import "swiper-new/swiper.min.css";
import "swiper-new/components/navigation/navigation.min.css"
import { ref } from "@vue/reactivity";
SwiperCore.use([Navigation]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["values", "slidesPerView", "spaceBetween", "slidesPerViewMobile", "spaceBetweenMobile"],
  setup(props) {
    const breakpoints = ref({
      "@0.00": {
        slidesPerView: props.slidesPerViewMobile,
        spaceBetween: props.spaceBetweenMobile,
      },
      "@0.65": {
        slidesPerView: props.slidesPerView,
        spaceBetween: props.spaceBetween,
      },
    });
    return {
      breakpoints,
      modules: [Navigation]
    };
  },
};
</script>