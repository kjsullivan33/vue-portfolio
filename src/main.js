import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VueParticles from "vue-particles";
import VueScrollactive from "vue-scrollactive";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

Vue.use(VueScrollactive);

Vue.use(VueParticles);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
