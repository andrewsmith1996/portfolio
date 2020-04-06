


<template>
  <div class="flex flex-col">
    <div class="flex">
      <div class="w-2/3">
        <div class="flex items-center">
          <h3 class="text-white">Gluco - AI &amp; Machine Learning</h3>
          <a href="https://github.com/andrewsmith1996/gluco-api-node" target="_blank">
            <img class="w-10" src="../../../assets/images/icons/github.png">
          </a>
        </div>
        <h6 class="text-white">Ionic 3, Node.js, MongoDB, Express, Angular</h6>
        <p>
            Final Year Project for BSc (Hons) Computer Science entitled <em>"Using Artificial Intelligence and Machine Learning to improve the Glycaemic Control of Insulin Dependent Diabetics"</em> - (awarded 100%)
            <br><br>
            I built an API in Node.js, MongoDB and Express to provide various artificial intelligence and machine learning techniques to diabetic patients through a mobile application built in Ionic 3.  
            <br><br>
            Scoring 100% in the final written report, this project looked into the provision of various artificial intelligence and machine learning techniques to identify patterns of poor blood sugar control, give recommendations to patients on fixing patterns, identfiying the causes of patterns, validating when a pattern has been fixed and a machine learning enabled insulin dose calculator.
        </p>
        <ProjectTecnologies :technologies="['ionic', 'typescript', 'mongo', 'node', 'express', 'angular', 'sass', 'heroku']" />
      </div>
      <div class="w-1/3 flex justify-center">
        <img src="../../../assets/images/apps/gluco_one.png" class="w-32" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />  
        <img src="../../../assets/images/apps/gluco_two.png" class="w-32" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" /> 
      </div>
    </div>
    <div>
      <div class="flex">
        <img src="../../../assets/images/apps/gluco_four.png" class="w-1/4" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img src="../../../assets/images/apps/gluco_three.png" class="w-1/4" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img src="../../../assets/images/apps/gluco_five.png" class="w-1/4" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img src="../../../assets/images/apps/gluco_six.png" class="w-1/4" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
      </div>
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
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>