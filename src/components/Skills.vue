<template>
  <section>
    <div>
      <SkillsHeader class="max-w-full w-full md:max-w-screen-xl" />
      <FrontendSkills class="max-w-full w-full md:max-w-screen-xl"/>
      <BackendSkills class="max-w-full w-full md:max-w-screen-xl" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "./skills/SkillsHeader.vue";
import FrontendSkills from "./FrontendSkills.vue";
import BackendSkills from "./BackendSkills.vue";

@Component({
  components: {
    SkillsHeader,
    FrontendSkills,
    BackendSkills
  }
})
export default class Skills extends Vue {
  
}
</script>

<style lang="scss">

</style>