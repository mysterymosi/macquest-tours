<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <h3 class="section-title">
            Choose from a wide selection of options between destinations and
            attractions
          </h3>
        </div>
      </div>
      <DestinationOptionList />
    </div>
  </section>
</template>

<script>
import DestinationOptionList from "./DestinationOptionList.vue"
export default {
  components: {
    DestinationOptionList
  },
  setup() {
    
  },
}
</script>
