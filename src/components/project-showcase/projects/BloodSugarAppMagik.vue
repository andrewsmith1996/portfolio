<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/3">
      <ProjectTitle
        title="BloodSugarAppMagik"
        githubLink="https://github.com/andrewsmith1996/blood-sugar-app-magik"
      />
      <Technologies technologies="Ionic 3, Angular, TypeScript, SASS" />
      <p class="font-open-sans font-semibold text-sm mb-6">
        Built at <a href="https://www.hack24.co.uk/" target="_blank">Hack24</a> this cross platform
        mobile app tracks and analyses the blood sugar results of Diabetics, giving graph
        illustrations and a practical representation of blood sugar results over time.
      </p>
      <ProjectTecnologies class="mb-6" :technologies="['ionic', 'angular', 'typescript', 'sass']" />
    </div>
    <div class="flex w-full flex-col flex-wrap sm:flex-row lg:w-3/4 justify-center items-center">
      <img
        src="../../../assets/images/apps/bloodsugarappmagik-one.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Blood Sugar App Magik built at Hack24"
      />
      <img
        src="../../../assets/images/apps/bloodsugarappmagik-two.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Blood Sugar App Magik built at Hack24"
      />
      <img
        src="../../../assets/images/apps/bloodsugarappmagik-three.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Blood Sugar App Magik built at Hack24"
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
export default class BloodSugarAppMagik extends Vue {}
</script>
