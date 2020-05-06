<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/3">
      <ProjectTitle
        title="Memories"
        githubLink="https://github.com/andrewsmith1996/memories-ionic-app"
      />
      <Technologies technologies="Ionic 4, Angular, Firebase" />
      <p class="font-open-sans text-sm mb-6">
        Diary and journaling application for capturing and collecting social experiences. Share,
        scan and collect friends’ memories with QR codes to build memory diaries together.
      </p>
      <ul class="mb-6 text-sm font-open-sans list-disc list-inside">
        <li>Google Firebase Authentication, Realtime Database & Storage</li>
        <li>Device Contacts List &amp; Camera Integration</li>
        <li>Geolocation &amp; Interactive Map with Custom Markers</li>
        <li>Google Maps API, Google Nearby Places API</li>
        <li>Geofencing &amp; Local Notifications</li>
        <li>QR Code Generation &amp; QR Code Scanner</li>
        <li>Social Media Sharing</li>
      </ul>
      <ProjectTecnologies
        class="mb-6"
        :technologies="['ionic', 'typescript', 'firebase', 'angular', 'googlemaps', 'cordova']"
      />
    </div>
    <div class="flex w-full flex-col flex-wrap sm:flex-row lg:w-3/4 justify-center items-center">
      <img
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        src="../../../assets/images/apps/memories_one.png"
        alt="Memories app built in Ionic 4"
      />
      <img
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        src="../../../assets/images/apps/memories_two.png"
        alt="Memories app built in Ionic 4"
      />
      <img
        class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0"
        src="../../../assets/images/apps/memories_four.png"
        alt="Memories app built in Ionic 4"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectTecnologies from '../../technologies/ProjectTechnologies.vue';
import Technologies from '../elements/TechnologyList.vue';
import ProjectTitle from '../elements/Title.vue';
@Component({ components: { ProjectTecnologies, Technologies, ProjectTitle } })
export default class Memories extends Vue {}
</script>
