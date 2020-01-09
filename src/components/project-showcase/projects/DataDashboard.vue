<template>
   <div class="project__simple">
    <div class="project__simple-content project__simple-content--half">
        <h3 class="project__title">Personal Data Dashboard</h3>
        <h6 class="project__technologies">React, Flexbox</h6>
        <p class="project__description">A ReactJS project that utilises a variety of third-party APIs to display and organise useful personal information including unique iCal calendar integration, WunderList integration and both news and weather APIs.<br><br>This web app also features on-demand refreshing of information, CSS animation and a layout built using Flexbox.</p>
        <ProjectTecnologies :technologies="['react', 'node', 'sass']" />
    </div>
    <div class="project__simple-screenshots project__simple-content--half">
        <img src="../../../assets/images/websites/dashboard-reactjs.png" class="project__simple-screenshot project__simple-screenshot--full" alt="ReactJS data dashboard project" />
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