<template>
  <div id="projects-header">
    <a name="projects" id="projects" />
    <section id="projects-section">
      <h1 class="section_header">Projects</h1>
      <div class="header_bar"></div>
      <div class="project-grid">
        <div class="project project-6">
          <div class="project-text">
            <div class="project-name">Mudstack Digital Art Management</div>
            <div class="project-tech">React/Node</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
        <div class="project project-1">
          <div class="project-text">
            <div class="project-name">Concora Design Studio</div>
            <div class="project-tech">React/Node.js</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
        <div class="project project-3">
          <div class="project-text">
            <div class="project-name">Concora Design Manager</div>
            <div class="project-tech">React/Node</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
        <div class="project project-2">
          <div class="project-text">
            <div class="project-name">Hi-Rez Studios Smite</div>
            <div class="project-tech">Gatsby/React</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
        <div class="project project-4">
          <div class="project-text">
            <div class="project-name">Hi-Rez Studios Paladins</div>
            <div class="project-tech">Gatsby/React</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
        <div class="project project-5">
          <div class="project-text">
            <div class="project-name">Hi-Rez Studios Realm Royale</div>
            <div class="project-tech">Gatsby/React</div>
          </div>
          <button class="btn-learn">Learn More</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/_projects.scss";
</style>
