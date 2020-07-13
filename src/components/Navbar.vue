<template>
  <nav class="my-nav">
    <div id="navbar-desktop">
      <scrollactive active-class="-active">
        <a href="#home-header" class="scrollactive-item" id="home-nav">Home</a>
        <a
          href="#about"
          class="scrollactive-item"
          id="about-nav"
          v-on:click="e => scrollTo(e.target.id)"
          >About</a
        >
        <a
          href="#projects"
          class="scrollactive-item"
          id="projects-nav"
          v-on:click="e => scrollTo(e.target.id)"
          >Projects</a
        >
        <a
          href="#contact"
          class="scrollactive-item"
          id="contact-nav"
          v-on:click="e => scrollTo(e.target.id)"
          >Contact</a
        >
      </scrollactive>
    </div>
    <!-- <div id="navbar-mobile">
      <font-awesome-icon
        :icon="burgerIcon"
        class="burger-icon"
        @click.prevent="toggleMenu"
      />
      <div v-show="showMenu" class="menu-options">
        <a href="#home" class="menu-item" id="home-nav" @click="scrollToTop"
          >Home</a
        >
        <a
          href="#about"
          class="menu-item"
          id="about-nav"
          v-on:click="scrollTo(id)"
          >About</a
        >
        <a
          href="#projects"
          class="menu-item"
          id="projects-nav"
          v-on:click="scrollTo(id)"
          >Projects</a
        >
        <a
          href="#contact"
          class="menu-item"
          id="contact-nav"
          v-on:click="scrollTo(id)"
          >Contact</a
        >
      </div>
    </div> -->
  </nav>
</template>

<script>
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  computed: {
    burgerIcon() {
      return faBars;
    }
  },
  data() {
    return {
      selectedOption: null,
      showMenu: false
    };
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
      this.closeMenu();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_navbar.scss";
</style>
