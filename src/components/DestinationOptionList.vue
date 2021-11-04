<template>
  <div class="container">
    <slider
      v-slot="props"
      :values="destinationList"
      :slidesPerView="3.2"
      :slidesPerViewMobile="1.15"
      :spaceBetween="60"
      :spaceBetweenMobile="20"
    >
      <DestinationCard :destination="props.value" :destinationList="destinationList" />
    </slider>
  </div>
</template>

<script>
import DestinationCard from "./DestinationCard.vue";
import Slider from "./Slider.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    DestinationCard,
    Slider,
  },

  setup() {
    const destinationList = ref([
      {
        image: "destination-1",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "destination-2",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "destination-3",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "destination-1",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "destination-2",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "destination-3",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ]);
    return {
      destinationList,
    };
  },
};
</script>
