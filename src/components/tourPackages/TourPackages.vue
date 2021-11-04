<template>
  <section id="packages" class="tour-packages">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <h3 class="section-title">
            Select from our exciting tour packages. You are one step away from
            the experience of a lifetime
          </h3>
        </div>
      </div>
      <TourPackagesDesktop />
      <TourPackagesMobile />
    </div>
  </section>
</template>

<script>
import TourPackagesDesktop from "./TourPackagesDesktop.vue";
import TourPackagesMobile from "./TourPackagesMobile.vue";
export default {
  components: {
    TourPackagesDesktop,
    TourPackagesMobile,
  },
  setup() {},
};
</script>
