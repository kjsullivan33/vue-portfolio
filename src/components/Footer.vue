<template>
  <footer id="footer">
    <div id="icons">
      <a
        class="footer-icon_box"
        href="https://www.github.com/kjsullivan33"
        target="__blank"
      >
        <font-awesome-icon :icon="githubIcon" class="footer-icon" />
      </a>
      <a
        class="footer-icon_box"
        href="https://www.linkedin.com/in/kristenjsullivan83/"
        target="__blank"
      >
        <font-awesome-icon :icon="linkedinIcon" class="footer-icon" />
      </a>
      <a
        class="footer-icon_box"
        href="https://www.facebook.com/kristen.sullivan.14"
        target="__blank"
      >
        <font-awesome-icon :icon="facebookIcon" class="footer-icon" />
      </a>
      <a
        class="footer-icon_box"
        href="https://twitter.com/KayJaySully"
        target="__blank"
      >
        <font-awesome-icon :icon="twitterIcon" class="footer-icon" />
      </a>
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
