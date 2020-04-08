<template>
   <div class="flex">
   <div class="flex flex-col w-1/3">
      <ProjectTitle title="Hoptical" githubLink="https://github.com/andrewsmith1996/hoptical-android-app" />
        <Technologies technologies="Android, Java, Firebase" />
            <p class="font-open-sans text-sm mb-6">Craft Beer tracker Android application showcasing a range of advanced Android concepts such as:</p>
            <ul class="mb-6 text-sm font-open-sans list-disc">
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
       <div class="flex w-3/4 justify-center">
            <img src="../../../assets/images/apps/hoptical-one.png" class="w-1/3" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-three.png" class="w-1/3" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-two.png" class="w-1/3" alt="Hoptical Craft Beer Tracking app built in Android" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectTecnologies from "../../technologies/ProjectTechnologies.vue";
import Technologies from '../elements/TechnologyList.vue';
import ProjectTitle from '../elements/Title.vue';
@Component({
  components: {
    ProjectTecnologies,
    Technologies,
    ProjectTitle
  }
})
export default class Hoptical extends Vue {

}
</script>

<style lang="scss">

</style>