<template>
  <div class="scroll-up" @click="scrollToTop">
    <font-awesome-icon :icon="arrowIcon" class="arrow-icon" />
  </div>
</template>

<script>
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "ScrollTopButton",
  computed: {
    arrowIcon() {
      return faAngleDoubleUp;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_scrollButton.scss";
</style>
