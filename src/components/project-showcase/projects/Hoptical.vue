<template>
   <div class="project__simple">
        <div class="project__simple-content project__simple-content--small">
            <h3 class="project__title">Hoptical</h3>
            <h6 class="project__technologies">Android, Java, Firebase</h6>
            <p class="project__description">Craft Beer tracker Android application showcasing a range of advanced Android concepts such as:</p>
            <ul class="project__features-list">
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
            <ProjectTecnologies :technologies="['android', 'java', 'firebase']" />
        </div>
        <div class="project__simple-screenshots project__simple-content--large">
            <img src="../../../assets/images/apps/hoptical-one.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-three.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img src="../../../assets/images/apps/hoptical-two.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Hoptical Craft Beer Tracking app built in Android" />
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