<template>
  <div>
    <header id="home-header">
      <vue-particles
        class="particle_bg"
        color="#fff"
        :particleOpacity="0.25"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        linesColor="#594E81"
        :linesWidth="0"
        :lineLinked="false"
        :lineOpacity="0"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
      <div class="title">
        <h1 class="header_text">
          Hello, I'm
          <span class="color-text">Kristen Sullivan</span>.
        </h1>
        <h1 class="header_text">I'm a full-stack web developer</h1>
        <button class="button" id="scrollDown" @click="scrollDown">
          <div>View My Work</div>
          <div class="icon">
            <v-icon class="arrow" :size="34">{{ svgPath }}</v-icon>
          </div>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
export default {
  name: "Header",
  components: {},
  methods: {
    scrollDown() {
      document.getElementById("content").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  data: () => ({
    svgPath: mdiArrowRight
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/_header.scss";
@import "@/assets/scss/_button.scss";
</style>
