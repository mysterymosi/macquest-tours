<template>
  <section class="contact padd-section">
    <div class="container">
      <div class="row align-items-center">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm.vue";
import ContactInfo from "./ContactInfo.vue";
export default {
  components: {
    ContactForm,
    ContactInfo
  }
}
</script>
