<template>
  <div class="container">
    <slider
      v-slot="props"
      :values="destinationList"
      :slidesPerView="3.2"
      :spaceBetween="60"
    >
      <DestinationCard :destination="props.value" />
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
        image: "../assets/images/destination-1.png",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "../assets/images/destination-2.png",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "../assets/images/destination-3.png",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "../assets/images/destination-1.png",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "../assets/images/destination-2.png",
        name: "Kwa Falls",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "../assets/images/destination-3.png",
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
