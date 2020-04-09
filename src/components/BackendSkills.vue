<template>
  <div>
    <div class="flex flex-col md:flex-row mb-16">
      <div class="w-full md:w-1/2">
        <h2 class="text-xl font-medium">Back-end development</h2>
        <ul class="mb-6 text-sm font-open-sans list-disc">
          <li class="mb-1"><span></span>NodeJS</li>
          <li class="mb-1"><span></span>Express</li>
          <li class="mb-1"><span></span>Socket.io</li>
          <li class="mb-1"><span></span>MongoDB</li>
          <li class="mb-1"><span></span>Google Firebase, Google Cloud</li>
          <li class="mb-1"><span></span>Travis CI/CD</li>
          <li class="mb-1"><span></span>PHP, SQL, mySQL</li>
          <li class="mb-1"><span></span>C++</li>
          <li class="mb-1"><span></span>C#</li>
          <li class="mb-1"><span></span>Python</li>
          <li class="mb-1"><span></span>CraftCMS, PHPmyAdmin</li>
        </ul>
      </div>
      <div class="w-full md:w-1/2">
          <SteveNashFashion />
      </div>
    </div>
    <div>
      <div class="flex flex-col md:flex-row">
        <SimonsGroup />
        <FosterAC />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SteveNashFashion from "./project-showcase/websites/SteveNashFashion.vue";
import SimonsGroup from "./project-showcase/websites/SimonsGroup.vue";
import FosterAC from "./project-showcase/websites/FosterAC.vue";


@Component({
  components: {
    SteveNashFashion,
    SimonsGroup,
    FosterAC
  }
})
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>