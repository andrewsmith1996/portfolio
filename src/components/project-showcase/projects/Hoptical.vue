<template>
   <div class="flex">
   <div class="flex flex-col w-1/3">
      <div>
            <h3>Hoptical</h3>
          <a href="https://github.com/andrewsmith1996/hoptical-android-app" target="_blank">
            <img src="../../../assets/images/icons/github.png">
            </a>
        </div>
            <h6>Android, Java, Firebase</h6>
            <p>Craft Beer tracker Android application showcasing a range of advanced Android concepts such as:</p>
            <ul>
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
            <ProjectTecnologies :technologies="['android', 'firebase', 'java']" />
        </div>
       <div class="flex w-3/4">
            <img src="../../../assets/images/apps/hoptical-one.png" class="w-1/4" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-three.png" class="w-1/4" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-two.png" class="w-1/4" alt="Hoptical Craft Beer Tracking app built in Android" />
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
export default class Hoptical extends Vue {

}
</script>

<style lang="scss">

</style>