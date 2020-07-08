<template>
  <section id="about">
    <h1 class="section_header">About</h1>
    <div class="header_bar"></div>
    <div class="top_skills">
      <div class="skill">
        <div class="icon-box">
          <v-icon class="icon" :size="50">{{ responsive }}</v-icon>
        </div>
        <div>Responsive</div>
        <div class="skill_details">
          Layouts for all devices with a mobile first methodology
        </div>
      </div>
      <div class="skill">
        <div class="icon-box">
          <v-icon class="icon" :size="50">{{ dynamic }}</v-icon>
        </div>
        <div>Dynamic</div>
        <div class="skill_details">
          Frontend and backend capabilities to produce an interactive user
          experience.
        </div>
      </div>
      <div class="skill">
        <div class="icon-box">
          <v-icon class="icon" :size="50">{{ intuitive }}</v-icon>
        </div>
        <div>Intuitive</div>
        <div class="skill_details">
          Easy to use and follow UX/UI is always the goal.
        </div>
      </div>
      <div class="skill">
        <div class="icon-box">
          <v-icon class="icon" :size="50">{{ fast }}</v-icon>
        </div>
        <div>Fast</div>
        <div class="skill_details">
          Fast load times and lag free interaction are a priority.
        </div>
      </div>
    </div>
    <div class="details">
      <div class="summary">
        <img
          class="profile-img"
          src="https://s3.us-east-2.amazonaws.com/ks-portfoli.com/images/profile.jpg"
          alt="profile photo"
        />
        <div class="personal-info">
          I'm a full stack developer with a strong emphasis on frontend
          development in Atlanta, GA. I am passionate about creating intuitive,
          dynamic user experiences with an intense focus on developing clean,
          readable and maintainable code.
        </div>
      </div>
      <div class="technical">
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">CSS</div>
            <div class="fill" style="width: 85%"></div>
          </div>
          <div class="percentage">85%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">HTML</div>
            <div class="fill" style="width: 85%"></div>
          </div>
          <div class="percentage">85%</div>
        </div>
        <div class="skill-bar">
          <div class="label">Javascript</div>
          <div class="fill" style="width: 80%"></div>
          <div class="percentage">80%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">React</div>
            <div class="fill" style="width: 80%"></div>
          </div>
          <div class="percentage">80%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">Node.js</div>
            <div class="fill" style="width: 75%"></div>
          </div>
          <div class="percentage">75%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">PHP</div>
            <div class="fill" style="width: 60%"></div>
          </div>
          <div class="percentage">60%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">Vue.js</div>
            <div class="fill" style="width: 50%"></div>
          </div>
          <div class="percentage">50%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">Python</div>
            <div class="fill" style="width: 50%"></div>
          </div>
          <div class="percentage">50%</div>
        </div>
        <div class="skill-bar">
          <div class="label-fill">
            <div class="label">Ruby/Rails</div>
            <div class="fill" style="width: 30%"></div>
          </div>
          <div class="percentage">30%</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mdiCellphoneLink } from "@mdi/js";
import { mdiRocketLaunch } from "@mdi/js";
import { mdiLightbulb } from "@mdi/js";
import { mdiSpeedometer } from "@mdi/js";
export default {
  name: "About",
  components: {},
  data: () => ({
    responsive: mdiCellphoneLink,
    dynamic: mdiRocketLaunch,
    intuitive: mdiLightbulb,
    fast: mdiSpeedometer
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/_about.scss";
</style>
