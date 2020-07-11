<template>
  <section id="contact">
    <div class="contact-header">
      Would you like to contact me? Send me an email.
    </div>
    <div class="container">
      <form @submit.prevent="sendEmail">
        <div class="row">
          <div class="col-10">
            <label for="name">Name</label>
          </div>
          <div class="col-90">
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <label for="email">Email</label>
          </div>
          <div class="col-90">
            <input
              type="text"
              id="email"
              name="user_email"
              placeholder="Your email address.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <label for="message">Message</label>
          </div>
          <div class="col-90">
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              style="height:200px"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    <ScrollTopButton class="home-scroll-up" />
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import ScrollTopButton from "./ScrollTopButton";

export default {
  name: "Contact",
  components: { ScrollTopButton },
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
