<template>
  <div class="project-view">
    <ProjectContainer />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectContainer from "@/components/ProjectContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Project",
  components: {
    ProjectContainer,
    Footer
  }
};
</script>
