



<template>
  <div class="flex">
    <div class="flex flex-col w-1/3">
      <div>
      <h3>Memories</h3>
          <a href="https://github.com/andrewsmith1996/memories-ionic-app" target="_blank">
            <img src="../../../assets/images/icons/github.png">
            </a>
        </div>
      <h6>Ionic 4, Angular, Firebase</h6>
      <p>Diary and journaling application for capturing and collecting social experiences. Share, scan and collect friends’ memories with QR codes to build memory diaries together.</p>
      <ul>
          <li>Google Firebase Authentication, Realtime Database & Storage</li>
          <li>Device Contacts List &amp; Camera Integration</li>
          <li>Geolocation &amp; Interactive Map with Custom Markers</li>
          <li>Google Maps API, Google Nearby Places API</li>
          <li>Geofencing &amp; Local Notifications</li>
          <li>QR Code Generation &amp; QR Code Scanner</li>
          <li>Social Media Sharing</li>
      </ul> 
       <ProjectTecnologies :technologies="['ionic', 'typescript', 'firebase', 'angular', 'googlemaps', 'cordova']" />
    </div>
    <div class="flex w-3/4">
      <img class="w-1/3" src="../../../assets/images/apps/memories_one.png" alt="Memories app built in Ionic 4" /> 
      <img class="w-1/3" src="../../../assets/images/apps/memories_two.png" alt="Memories app built in Ionic 4" /> 
      <img class="w-1/3" src="../../../assets/images/apps/memories_four.png" alt="Memories app built in Ionic 4" /> 
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
export default class Memories extends Vue {

}
</script>

<style lang="scss">

</style>