<template>
  <footer id="footer">
    <div id="links">
      <div class="link-box">
        <a
          class="footer-icon_box"
          href="https://www.github.com/kjsullivan33"
          target="__blank"
        >
          <font-awesome-icon :icon="githubIcon" class="footer-icon" />
          <p>Github</p>
        </a>
        <p class="link-details">Feel free to browse my repositories</p>
      </div>
      <div class="link-box">
        <a
          class="footer-icon_box"
          href="https://www.linkedin.com/in/kristenjsullivan83/"
          target="__blank"
        >
          <font-awesome-icon :icon="linkedinIcon" class="footer-icon" />
          <p>Linkedin</p>
        </a>
        <p class="link-details">Let's connect on LinkedIn</p>
      </div>
    </div>
    <div class="footer-name">
      <p>
        Kristen Sullivan
        <span class="color-text">2020</span>
      </p>
    </div>
  </footer>
</template>

<script>
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default {
  name: "Footer",
  components: {},
  computed: {
    githubIcon() {
      return faGithub;
    },
    linkedinIcon() {
      return faLinkedin;
    },
    facebookIcon() {
      return faFacebook;
    },
    twitterIcon() {
      return faTwitter;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_footer.scss";
</style>
