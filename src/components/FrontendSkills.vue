<template>
  <div>
    <div>
      <div class="flex">
        <div class="w-1/2">
          <h3 class="text-2xl text-white">Back-end development</h3>
          <ul>
              <li class="mb-1"><span></span>ReactJS, Vue.js, Angular</li>
              <li class="mb-1"><span></span>TypeScript</li>
              <li class="mb-1"><span></span>Gatsby.js, Gridsome</li>
              <li class="mb-1"><span></span>HTML, CSS, LESS, SASS</li>
              <li class="mb-1"><span></span>Ionic Framework, React Native</li>
              <li class="mb-1"><span></span>Bootstrap, Flexbox</li>
              <li class="mb-1"><span></span>JQuery, AJAX</li>
              <li class="mb-1"><span></span>Android Development (Java)</li>
          </ul>
        </div>
        <div class="w-1/2">
            <LincolnHack />
        </div>
      </div>
      <div>
        <div class="flex">
          <GreenstockLighting />
          <NicholsonMcBride />
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "./skills/SkillsHeader.vue";

import LincolnHack from "./project-showcase/websites/LincolnHack.vue";
import GreenstockLighting from "./project-showcase/websites/GreenstockLighting.vue";
import NicholsonMcBride from "./project-showcase/websites/NicholsonMcBride.vue";

@Component({
  components: {
    SkillsHeader,
    LincolnHack,
    GreenstockLighting,
    NicholsonMcBride
  },
})
export default class FrontendSkills extends Vue {
  // content!: {skills_one: any, skills_two: any, skills_three: any, skills_four: any};

  // get frontEndSkills() {
  //   return `${this.content.skills_one}-${this.content.skills_two}-${this.content.skills_three}-${this.content.skills_four}}`.split("-");
  // }
}
</script>

<style lang="scss">

</style>