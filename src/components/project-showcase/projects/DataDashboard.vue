<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/3 mb-8 lg:mb-0">
      <ProjectTitle
        title="Personal Data Dashboard"
        githubLink="https://github.com/andrewsmith1996/reactjs-live-data-dashboard"
      />
      <Technologies technologies="React, Flexbox, SASS" />
      <p class="font-open-sans font-semibold text-sm mb-6">
        A ReactJS project that utilises a variety of third-party APIs to display and organise useful
        personal information including unique iCal calendar integration, WunderList integration and
        both news and weather APIs.<br /><br />This web app also features on-demand refreshing of
        information, CSS animation and a layout built using Flexbox.
      </p>
      <ProjectTecnologies :technologies="['react', 'node', 'sass']" />
    </div>
    <div class="w-full lg:w-2/3 flex justify-center items-center">
      <img
        class="px-4"
        src="../../../assets/images/websites/dashboard-reactjs.png"
        alt="ReactJS data dashboard project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectTecnologies from '../../technologies/ProjectTechnologies.vue';
import Technologies from '../elements/TechnologyList.vue';
import ProjectTitle from '../elements/Title.vue';
@Component({
  components: {
    ProjectTecnologies,
    Technologies,
    ProjectTitle
  }
})
export default class Gluco extends Vue {}
</script>
