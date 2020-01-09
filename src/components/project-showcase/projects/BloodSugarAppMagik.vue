<template>
  <div class="project__simple">
        <div class="project__simple-content project__simple-content--small">
        <div class="project__simple-header">
            <h3 class="project__title">BloodSugarAppMagik</h3>
          <a href="https://github.com/andrewsmith1996/blood-sugar-app-magik" target="_blank">
            <img src="../../../assets/images/icons/github.png">
            </a>
        </div>
            <h6 class="project__technologies">Ionic 3, Angular, TypeScript, SASS </h6>
            <p class="project__description">Built at <a href="https://www.hack24.co.uk/" target="_blank">Hack24</a> this cross platform mobile app tracks and analyses the blood sugar results of Diabetics, 
                giving graph illustrations and a practical representation of blood sugar results over time.</p>
        <ProjectTecnologies :technologies="['ionic', 'angular', 'typescript', 'sass']" />
        </div>
        <div class="project__simple-screenshots project__simple-content--large">
            <img src="../../../assets/images/apps/bloodsugarappmagik-one.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Blood Sugar App Magik built at Hack24" />
            <img src="../../../assets/images/apps/bloodsugarappmagik-two.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Blood Sugar App Magik built at Hack24" />
            <img src="../../../assets/images/apps/bloodsugarappmagik-three.png" class="project__simple-screenshot project__simple-screenshot--third" alt="Blood Sugar App Magik built at Hack24" />
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
export default class BloodSugarAppMagik extends Vue {

}
</script>

<style lang="scss">

</style>