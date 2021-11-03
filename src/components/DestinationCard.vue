<template>
  <div class="destination card">
    <img :src="image" class="card-img-top" alt="..." />
    <span class="btn btn-primary">attraction</span>
    <div class="card-body py-4">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ destination.name }}</h5>
        <span class="badge bg-warning text-dark">&#8358; 30, 000</span>
      </div>
      <p class="card-text">
        {{ destination.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import importAssets from "../utils/importAssets";
export default {
  props: ["destination"],
  setup(props) {
    const image = ref("");

    onMounted(() => {
      importAssets()
        .modules[`../assets/images/${props.destination.image}.png`]()
        .then((mod) => {
          image.value = mod.default;
        });
    });
    return { image };
  },
};
</script>
