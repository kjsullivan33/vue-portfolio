<template>
  <section id="projects">
    <h1 class="section_header">Projects</h1>
    <div class="header_bar"></div>
    <div class="project-grid">
      <div
        class="project"
        v-for="project in projectData"
        v-bind:key="project.id"
      >
        <div class="grid-box-picture">
          <picture class="grid-box-picturebox blend-in">
            <source
              v-bind:srcset="project.backgroundUrl.jp2"
              type="image/jp2"
            />
            <img
              v-bind:src="project.backgroundUrl.png"
              alt="project"
              rel="preload"
            />
          </picture>
        </div>
        <div class="project-text">
          <div class="project-name">{{ project.name }}</div>
          <div class="project-tech">{{ project.tech }}</div>
        </div>
        <router-link
          class="desktop-link"
          :to="{ name: 'project', params: { id: project.id } }"
          replace
        >
          <button class="btn-learn">Learn more about this project</button>
        </router-link>
        <router-link
          :to="{ name: 'project', params: { id: project.id } }"
          replace
        >
          <div class="mobile-link">
            Click to learn more about this project.
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { projectData } from "../helpers/projectData";
export default {
  name: "Projects",
  components: {},
  data: () => ({
    projectData: projectData
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/_button.scss";
@import "@/assets/scss/_projects.scss";
</style>
