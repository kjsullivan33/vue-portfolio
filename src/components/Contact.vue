<template>
  <section id="contact">
    <div class="contact-header">
      Would you like to contact me? Send me an email.
    </div>
    <form class="contact-form" @submit.prevent="sendEmail">
      <input
        class="form-section"
        type="text"
        name="user_name"
        placeholder="Name"
      />

      <input
        class="form-section"
        type="email"
        name="user_email"
        placeholder="Email"
      />

      <textarea
        class="form-section"
        name="message"
        placeholder="Message"
      ></textarea>

      <div class="button-box">
        <button id="btn-submit" type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "gmail",
          "template_57tDfwdp",
          e.target,
          "user_AqeTyiBPh5ZSdgCymz0aB"
        )
        .then(
          () => {
            e.target.reset();
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_contact.scss";
</style>
