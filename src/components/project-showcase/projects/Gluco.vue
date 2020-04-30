


<template>
  <div class="flex flex-col">
    <div class="flex flex-col lg:flex-row mb-8 justify-center">
      <div class="w-full lg:w-1/2">
        <ProjectTitle title="Gluco - AI &amp; Machine Learning" githubLink="https://github.com/andrewsmith1996/gluco-api-node" />
        <Technologies technologies="Ionic 3, Node.js, MongoDB, Express, Angular" />
        <p class="font-open-sans text-sm mb-6">
            Final Year Project for BSc (Hons) Computer Science entitled <em>"Using Artificial Intelligence and Machine Learning to improve the Glycaemic Control of Insulin Dependent Diabetics"</em> - (awarded 100%)
            <br><br>
            I built an API in Node.js, MongoDB and Express to provide various artificial intelligence and machine learning techniques to diabetic patients through a mobile application built in Ionic 3.  
            <br><br>
            Scoring 100% in the final written report, this project looked into the provision of various artificial intelligence and machine learning techniques to identify patterns of poor blood sugar control, give recommendations to patients on fixing patterns, identfiying the causes of patterns, validating when a pattern has been fixed and a machine learning enabled insulin dose calculator.
        </p>
        <ProjectTecnologies class="mb-6" :technologies="['ionic', 'typescript', 'mongo', 'node', 'express', 'angular', 'sass', 'heroku']" />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col sm:flex-row justify-center items-center">
        <img src="../../../assets/images/apps/gluco_one.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/2 px-4 mb-8 md:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />  
        <img src="../../../assets/images/apps/gluco_two.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/2 px-4 mb-8 sm:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" /> 
      </div>
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <img src="../../../assets/images/apps/gluco_four.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/4 px-4 mb-8 lg:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
      <img src="../../../assets/images/apps/gluco_three.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/4 px-4 mb-8 lg:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
      <img src="../../../assets/images/apps/gluco_five.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/4 px-4 mb-8 lg:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
      <img src="../../../assets/images/apps/gluco_six.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/4 px-4 mb-8 lg:mb-0" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
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
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>

