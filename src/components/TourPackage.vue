<template>
  <div>
    <img class="tour-packages__image" :src="image" alt="" />
    <h3 class="tour-packages__title mt-3">{{ tourPackage.name }}</h3>
    <p class="tour-packages__description mb-3">
      {{ tourPackage.description }}
    </p>
    <div class="d-flex mb-3 align-items-center">
      <span class="badge bg-success text-dark me-3 py-2"
        ><img class="me-2" src="../assets/images/user.png" alt="" /> &#8358;
        {{ tourPackage.price }}</span
      >
      <span class="badge bg-warning text-dark"
        ><img class="me-2" src="../assets/images/calendar.png" alt="" />
        {{ tourPackage.date }}</span
      >
    </div>
    <span class="badge bg-primary text-dark"
      ><img class="me-2" src="../assets/images/location.png" alt="" />
      {{ tourPackage.location }}</span
    >

    <a
      href=""
      data-bs-toggle="modal"
      :data-bs-target="'#' + tourPackage.id"
      class="d-flex align-items-center"
      >Read More <i class="ti-angle-double-right"></i
    ></a>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import importAssets from "../utils/importAssets";
export default {
  props: ["tourPackage"],
  setup(props) {
    const image = ref("");

    onMounted(() => {
      importAssets()
        .modules[`../assets/images/${props.tourPackage.image}.png`]()
        .then((mod) => {
          image.value = mod.default;
        });
    });
    return { image };
  },
};
</script>
