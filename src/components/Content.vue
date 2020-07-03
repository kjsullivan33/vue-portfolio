<template>
  <section id="content">
    <Navbar />
    <About />
    <Projects />
  </section>
</template>

<script>
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";

export default {
  name: "Content",
  components: { Navbar, About, Projects }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/_content.scss";
</style>
