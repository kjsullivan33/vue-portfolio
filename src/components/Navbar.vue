<template>
  <scrollactive active-class="-active" class="my-nav">
    <a
      href="#home"
      class="scrollactive-item"
      id="home-nav"
      @click="scrollToTop"
    >
      Home
    </a>
    <a
      href="#about"
      class="scrollactive-item"
      id="about-nav"
      @click="scrollToAbout"
    >
      About
    </a>
    <a
      href="#projects"
      class="scrollactive-item"
      id="projects-nav"
      @click="scrollToProjects"
    >
      Projects
    </a>
  </scrollactive>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToAbout() {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollToProjects() {
      document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_navbar.scss";
</style>
