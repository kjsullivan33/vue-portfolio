<template>
  <div class="project-container">
    <nav>
      <router-link to="/" replace>
        <font-awesome-icon :icon="arrowIcon" class="btn-back" />
      </router-link>
      <div
        id="other-project-menu"
        @mouseover="showMenu = true"
        @mouseleave="showMenu = false"
      >
        <div
          class="menu"
          :class="{ active: showMenu }"
          @click.prevent="toggleMenu"
        >
          View Another Project
        </div>
        <transition name="slide">
          <div v-show="showMenu" class="menu-options">
            <div
              class="other-project"
              v-for="project in otherProjects"
              v-bind:key="project.id"
            >
              <router-link
                :to="{ name: 'project', params: { id: project.id } }"
                replace
                >{{ project.name }}</router-link
              >
            </div>
          </div>
        </transition>
      </div>
    </nav>
    <div class="project-content" v-if="projectData">
      <div class="project-header">
        <h1>{{ projectData.name }}</h1>
        <h5 class="summary">{{ projectData.summary }}</h5>
      </div>
      <div class="content">
        <div class="responsibilities">
          <h3>Responsibilities</h3>
          <ul
            v-for="(responsibility, index) in projectData.responsibilities"
            v-bind:key="index"
          >
            <li>{{ responsibility }}</li>
          </ul>
        </div>
        <div class="slideshow" v-if="projectData.slides">
          <div class="slideshow-content">
            <div
              @click="prev"
              :class="{ disabled: state.imageIndex === 0 }"
              class="btn-slideshow prev"
            ></div>
            <img
              class="slideshow-image"
              :src="state.image"
              rel="preload"
              alt="slideshowImage"
            />
            <div
              @click="next"
              :class="{
                disabled: state.imageIndex === projectData.slides.length - 1
              }"
              class="btn-slideshow next"
            ></div>
          </div>
          <div class="slideshow-pagination">
            <div
              class="pagination-dot"
              v-for="(image, i) in projectData.slides"
              v-bind:key="i"
              :class="{ active: state.imageIndex === i }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { projectData } from "../helpers/projectData";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Project",
  components: {},
  computed: {
    arrowIcon() {
      return faArrowLeft;
    }
  },
  data: () => ({
    selectedOption: null,
    showMenu: false,
    projectData: [],
    otherProjects: [],
    state: { imageIndex: 0, image: "", yPosition: 0 }
  }),
  created() {
    this.getContent(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.id);
    next();
  },
  mounted() {
    document.addEventListener("click", this.close);
    document.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
    document.removeEventListener("scroll", this.scroll);
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    close(e) {
      if (!this.$el.contains(e.target) || !e) {
        this.showMenu = false;
      }
    },
    closeMenu() {
      this.showMenu = false;
    },
    getContent(id) {
      this.projectData = projectData.filter(project => project.id === id)[0];
      this.state.image = this.projectData.slides
        ? this.projectData.slides[0]
        : null;
      this.otherProjects = projectData.filter(project => project.id !== id);
    },
    next() {
      const currentIndex = this.state.imageIndex;
      const imageCount = this.projectData.slides.length;

      currentIndex < imageCount - 1
        ? this.state.imageIndex++
        : (this.state.imageIndex = 0);
      this.state.image = this.projectData.slides[this.state.imageIndex];
    },
    prev() {
      const currentIndex = this.state.imageIndex;
      const imageCount = this.projectData.slides.length;

      currentIndex !== 0
        ? this.state.imageIndex--
        : (this.state.imageIndex = imageCount - 1);
      this.state.image = this.projectData.slides[this.state.imageIndex];
    },
    scroll() {
      const nav = document.querySelector("nav");
      window.scrollY > this.state.yPosition
        ? (nav.style.opacity = "0")
        : (nav.style.opacity = "1");
      this.state.yPosition = window.scrollY;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_project.scss";
</style>
