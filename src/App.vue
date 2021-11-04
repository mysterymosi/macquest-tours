<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from "./components/TheHeader.vue";
import Banner from "./components/Banner.vue";
import DestinationOptions from "./components/destinationOptions/DestinationOptions.vue";
import TourPackages from "./components/tourPackages/TourPackages.vue";
import Cta from "./components/Cta.vue";
import Contact from "./components/contact/Contact.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <Banner />
  <main>
    <DestinationOptions />
    <TourPackages />
    <Cta />
    <Contact />
  </main>
  <TheFooter />
</template>

<style lang="sass">
@import "./assets/styles/shared"
</style>
