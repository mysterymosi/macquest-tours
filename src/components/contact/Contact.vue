<template>
  <section id="contact" class="contact padd-section">
    <div class="container">
      <div class="row align-items-center">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "../contact/ContactForm.vue";
import ContactInfo from "../contact/ContactInfo.vue";
export default {
  components: {
    ContactForm,
    ContactInfo
  }
}
</script>
