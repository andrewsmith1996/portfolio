<template>
  <section>
    <div class="flex flex-col justify-center items-center">
      <ProjectShowcaseHeader class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <Gluco class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <Memories class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <Hoptical class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <ImageIdentifier class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <DataDashboard  class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <BloodSugarAppMagik class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <GeolocationWeatherApp class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />
      <HackbustersGame class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" />  
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectShowcaseHeader from "./project-showcase/ProjectShowcaseHeader.vue";
import Gluco from "./project-showcase/projects/Gluco.vue";
import Memories from "./project-showcase/projects/Memories.vue";
import Hoptical from "./project-showcase/projects/Hoptical.vue";
import ImageIdentifier from "./project-showcase/projects/ImageIdentifier.vue";
import BloodSugarAppMagik from "./project-showcase/projects/BloodSugarAppMagik.vue";
import DataDashboard from "./project-showcase/projects/DataDashboard.vue";
import GeolocationWeatherApp from "./project-showcase/projects/GeolocationWeatherApp.vue";
import HackbustersGame from "./project-showcase/projects/HackbustersGame.vue";

@Component({
  components: {
    ProjectShowcaseHeader,
    Gluco,
    Memories,
    Hoptical,
    ImageIdentifier,
    BloodSugarAppMagik,
    DataDashboard,
    GeolocationWeatherApp,
    HackbustersGame
  }
})
export default class ProjectShowcase extends Vue {

}
</script>

<style lang="scss">

</style>