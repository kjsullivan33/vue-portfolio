<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_global.scss";
</style>
