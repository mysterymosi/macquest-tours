<template>
  <Modal :tourPackages="tourPackages"/>
  <div class="d-xs-block d-sm-block d-lg-none">
    <slider
      v-slot="props"
      :values="tourPackages"
      :slidesPerView="3.2"
      :spaceBetween="60"
    >
      <TourPackage :tourPackage="props.value" />
    </slider>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "./Modal.vue";
import Slider from "./Slider.vue";
import TourPackage from "./TourPackage.vue";
export default {
  components: {
    Modal,
    Slider,
    TourPackage
  },
  setup() {
    const tourPackages = ref([
      {
        id: "easterInObudu",
        image: "package-1",
        name: "Easter in Obudu",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        price: "90, 000",
        date: "2nd to 5th April 2021",
        location: "Obudu, CRS",
        features: [
          "Luxury Accommodation",
          "Transportation",
          "Grand Transport",
          "Bonfire",
          "24/7 Stewardship",
          "Guided Tours",
          "Facility Fees (Covered)",
          "Snacks",
        ],
        facilities: [
          "Cable Car",
          "Canopy Walkway",
          "Bird Watching",
          "Gym",
          "Grotto",
          "Holy Mountain",
          "Gym",
        ],
      },
      {
        id: "obuduHoneymoonGateway",
        image: "package-2",
        name: "Obudu Honeymoon Gateway",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        price: "300, 000",
        date: "March, April 2021",
        location: "Obudu, CRS",
        features: [
          "4 Nights, 5 Days",
          "Luxury Accommodation",
          "Daily Meals",
          "Airport Transfer",
          "Grand Tranport",
          "Guided Tours",
          "Facility Fees (Covered)",
          "Snacks",
        ],
        facilities: [
          "Cable Car",
          "Canopy Walkway",
          "Bird Watching",
          "Gym",
          "Grotto",
          "Holy Mountain",
          "Gym",
        ],
      },
    ]);
    return {
      tourPackages,
    };
  },
};
</script>
