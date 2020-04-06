<template>
    <div class="flex">
    <div class="flex flex-col w-1/3">
      <div class="flex items-center">
        <h3>Personal Data Dashboard</h3>
          <a href="https://github.com/andrewsmith1996/data-dashboard" target="_blank">
            <img class="w-10" src="../../../assets/images/icons/github.png">
            </a>
        </div>
        <h6>React, Flexbox, SASS</h6>
        <p>A ReactJS project that utilises a variety of third-party APIs to display and organise useful personal information including unique iCal calendar integration, WunderList integration and both news and weather APIs.<br><br>This web app also features on-demand refreshing of information, CSS animation and a layout built using Flexbox.</p>
        <ProjectTecnologies :technologies="['react', 'node', 'sass']" />
    </div>
     <div class="flex w-2/3">
        <img src="../../../assets/images/websites/dashboard-reactjs.png" alt="ReactJS data dashboard project" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectTecnologies from "../../technologies/ProjectTechnologies.vue";

@Component({
  components: {
    ProjectTecnologies
  }
})
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>