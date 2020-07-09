<template>
  <section id="contact">
    <div class="contact-header">
      Would you like to contact me? Send me an email.
    </div>
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="form-section">
        <label for="name">Name</label>
        <input
          class="field"
          type="text"
          name="user_name"
          id="name"
          placeholder="Provide your full name"
        />
      </div>
      <div class="form-section">
        <label for="email">Email</label>
        <input
          class="field"
          type="email"
          name="user_email"
          id="email"
          placeholder="Add your email address"
        />
      </div>
      <div class="form-section">
        <label for="message">Message</label>
        <textarea
          class="field"
          name="message"
          placeholder="Write a Message"
          id="message"
        ></textarea>
      </div>
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
