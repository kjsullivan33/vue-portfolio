<template>
  <div class="my-nav">
    <div id="navbar-desktop">
      <scrollactive active-class="-active">
        <a href="#home" class="scrollactive-item" id="home-nav" @click="scrollToTop">Home</a>
        <a href="#about" class="scrollactive-item" id="about-nav" v-on:click="scrollTo(id)">About</a>
        <a
          href="#projects"
          class="scrollactive-item"
          id="projects-nav"
          v-on:click="scrollTo(id)"
        >Projects</a>
        <a
          href="#contact"
          class="scrollactive-item"
          id="contact-nav"
          v-on:click="scrollTo(id)"
        >Contact</a>
      </scrollactive>
    </div>
    <div id="navbar-mobile">
      <font-awesome-icon :icon="burgerIcon" class="burger-icon" @click.prevent="toggleMenu" />
      <div v-show="showMenu" class="menu-options">
        <a href="#home" class="menu-item" id="home-nav" @click="scrollToTop">Home</a>
        <a href="#about" class="menu-item" id="about-nav" v-on:click="scrollTo(id)">About</a>
        <a href="#projects" class="menu-item" id="projects-nav" v-on:click="scrollTo(id)">Projects</a>
        <a href="#contact" class="menu-item" id="contact-nav" v-on:click="scrollTo(id)">Contact</a>
      </div>
    </div>
  </div>
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
    toggleMenu() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    },
    close(e) {
      if (!this.$el.contains(e.target) || !e) {
        this.showMenu = false;
      }
    },
    closeMenu() {
      this.showMenu = false;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
      this.closeMenu();
    }
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_navbar.scss";
</style>
