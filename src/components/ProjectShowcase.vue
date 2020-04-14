<template>
  <section>
    <div class="flex flex-col justify-center items-center">
      <ProjectShowcaseHeader class="mt-20 max-w-full w-full md:max-w-screen-xl" />
      <Gluco class="mb-20 mt-8 max-w-full w-full md:max-w-withPadding" />
      <Memories  class="my-20 md:max-w-withPadding" />
      <Hoptical  class="my-20 md:max-w-withPadding" />
      <ImageIdentifier class="my-20 md:max-w-withPadding" />
      <DataDashboard  class="my-20 md:max-w-withPadding" />
      <BloodSugarAppMagik  class="my-20 md:max-w-withPadding" />
      <GeolocationWeatherApp  class="my-20 md:max-w-withPadding" />
      <HackbustersGame class="my-20 md:max-w-withPadding" />  
      
      <div class="flex flex-col md:flex-row max-w-full w-full md:max-w-withPadding">
        <InconnectCables />
        <EspressoDesign />
      </div>
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
import InconnectCables from "./project-showcase/websites/InconnectCables.vue";
import EspressoDesign from "./project-showcase/websites/EspressoDesign.vue";


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
    HackbustersGame,
    InconnectCables,
    EspressoDesign
  }
})
export default class ProjectShowcase extends Vue {

}
</script>

<style lang="scss">

</style>