<template>
  <div id="projects-header">
    <a name="projects" id="projects" />
    <section id="projects-section">
      <h1 class="section_header">Projects</h1>
      <div class="header_bar"></div>
      <div class="project-grid">
        <div
          class="project"
          v-for="(project, index) in projectData"
          v-bind:key="index"
        >
          <div class="grid-box-picture">
            <div
              class="grid-box-picturebox"
              id="blend-in"
              v-bind:style="{
                'background-image': 'url(' + project.backgroundUrl + ')'
              }"
              v-lazy="project.backgroundUrl"
            ></div>
          </div>
          <div class="project-text">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-tech">{{ project.tech }}</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
      </div>
    </section>
  </div>
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
@import "@/assets/scss/_projects.scss";
</style>
