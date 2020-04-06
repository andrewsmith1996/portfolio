<template>
  <div class="flex">
    <div class="flex flex-col w-1/3">
      <div class="flex items-center">
            <h3>BloodSugarAppMagik</h3>
          <a href="https://github.com/andrewsmith1996/blood-sugar-app-magik" target="_blank">
            <img class="w-10" src="../../../assets/images/icons/github.png">
            </a>
        </div>
            <h6>Ionic 3, Angular, TypeScript, SASS </h6>
            <p>Built at <a href="https://www.hack24.co.uk/" target="_blank">Hack24</a> this cross platform mobile app tracks and analyses the blood sugar results of Diabetics, 
                giving graph illustrations and a practical representation of blood sugar results over time.</p>
        <ProjectTecnologies :technologies="['ionic', 'angular', 'typescript', 'sass']" />
        </div>
           <div class="flex w-3/4">
            <img src="../../../assets/images/apps/bloodsugarappmagik-one.png" class="w-1/3" alt="Blood Sugar App Magik built at Hack24" />
            <img src="../../../assets/images/apps/bloodsugarappmagik-two.png" class="w-1/3" alt="Blood Sugar App Magik built at Hack24" />
            <img src="../../../assets/images/apps/bloodsugarappmagik-three.png" class="w-1/3" alt="Blood Sugar App Magik built at Hack24" />
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