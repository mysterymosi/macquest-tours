<template>
  <!-- Modal -->
  <div
    v-for="tourPackage in tourPackages" :key="tourPackage.id"
    class="modal fade"
    :id="tourPackage.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="tour-packages modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5 class="tour-packages__sub-title">features</h5>
          <div class="row">
            <div class="col-md-12">
              <ul v-for="(feature, index) in tourPackage.features" :key="index" class="tour-packages__features">
                <li>
                  <img src="../assets/images/check.png" alt="" /> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          <h5 class="tour-packages__sub-title mt-4">Facilities</h5>
          <div class="row">
            <div class="col-md-12">
              <ul class="tour-packages__features" v-for="(facility, index) in tourPackage.facilities" :key="index">
                <li>
                  <img src="../assets/images/check.png" alt="" /> {{ facility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tourPackages"],
  setup() {},
};
</script>
