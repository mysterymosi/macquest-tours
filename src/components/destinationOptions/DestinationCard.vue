<template>
  <!-- lightbox -->
  <teleport to="body">
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    >
      <template v-slot:close-btn="{ close }">
        <button class="btn-close" @click="close"></button>
      </template>
      <!-- remove toolbar at the bottom -->
      <template v-slot:toolbar="{}"></template
    ></vue-easy-lightbox>
  </teleport>
  <!-- end lightbox -->

  <div @click="showMultiple" class="destination card">
    <img :src="image" class="card-img-top" alt="..." />
    <span class="btn btn-primary">attraction</span>
    <div class="card-body py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="card-title">{{ destination.name }}</h5>
        <span class="badge bg-warning text-dark">&#8358; 30, 000</span>
      </div>
      <p class="card-text pb-2">
        {{ destination.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import importAssets from "../../utils/importAssets";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  props: ["destination", "destinationList"],
  setup(props) {
    // light box variable
    const imgs = ref(""); // image url, string or array of strings
    const visible = ref(false);
    let index = ref(0);

    // hold single image
    const image = ref("");

    // hold all imported images
    const images = ref([]);

    const showMultiple = () => {
      imgs.value = images.value; // set multiple images for lightbox
      for (let i in images.value) {
        // set index to the index on the image being cliked on
        if (image.value === images.value[i]) {
          index.value = Number(i); // set type to number because the index props expects a number
        }
      }
      show();
    };

    const show = () => {
      visible.value = true;
    };

    const handleHide = () => {
      visible.value = false;
    };

    onMounted(() => {
      // import all the images from the destination folder
      for (let i in importAssets().destinationImages) {
        importAssets()
          .destinationImages[i]()
          .then((mod) => {
            images.value.push(mod.default);
          });
      }
      // import single image
      importAssets()
        .destinationImages[
          `../assets/images/destination/${props.destination.image}.png`
        ]()
        .then((mod) => {
          image.value = mod.default;
        });
    });
    return {
      image,
      showMultiple,
      handleHide,
      visible,
      imgs,
      index,
    };
  },
};
</script>
