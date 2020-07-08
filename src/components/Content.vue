<template>
  <section id="content">
    <Navbar />
    <About />
    <Projects />
    <Contact />
  </section>
</template>

<script>
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default {
  name: "Content",
  components: { Navbar, About, Projects, Contact }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/_content.scss";
</style>
