<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/3">
      <ProjectTitle
        title="Hoptical"
        githubLink="https://github.com/andrewsmith1996/hoptical-android-app"
      />
      <Technologies technologies="Android, Java, Firebase" />
      <p class="font-open-sans text-sm mb-6">
        Craft Beer tracker Android application showcasing a range of advanced Android concepts such
        as:
      </p>
      <ul class="mb-6 text-sm font-open-sans list-disc list-inside">
        <li>Google Sign-in</li>
        <li>Google Firebase Realtime Database</li>
        <li>Encrypted local SQL storage</li>
        <li>Geolocation services</li>
        <li>Offline capabilities</li>
        <li>API calls &amp; JSON parsing</li>
        <li>Async tasks</li>
        <li>Camera integration</li>
        <li>Contacts directory integration</li>
        <li>Fragments, Implicit &amp; Explicit intents</li>
      </ul>
      <ProjectTecnologies class="mb-6" :technologies="['android', 'firebase', 'java']" />
    </div>
    <div class="flex w-full flex-col flex-wrap sm:flex-row lg:w-3/4 justify-center items-center">
      <img
        src="../../../assets/images/apps/hoptical-one.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Hoptical Craft Beer Tracking app built in Android"
      />
      <img
        src="../../../assets/images/apps/hoptical-three.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Hoptical Craft Beer Tracking app built in Android"
      />
      <img
        src="../../../assets/images/apps/hoptical-two.png"
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        alt="Hoptical Craft Beer Tracking app built in Android"
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
export default class Hoptical extends Vue {}
</script>
