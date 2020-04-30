<template>
<section class="about-panel">
  <div class="flex flex-col lg:flex-row justify-center items-center">
    <div class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0">
      <img class="w-12 mb-2" src="../assets/images/icons/web.png" alt="Web Development Icon" />
      <h3 class="text-2xl text-white text-center font-medium mb-2">Web Development</h3>
      <p class="font-open-sans text-sm text-center">Full-stack web development skills with 1.5 year's experience of working within award-winning agencies and a year's freelance experience.</p>
    </div>

    <div class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0">
      <img class="w-12 mb-2" src="../assets/images/icons/mobile.png" alt="Mobile Development Icon" />
      <h3 class="text-2xl text-white text-center font-medium mb-2">Mobile Development</h3>
      <p class="font-open-sans text-sm text-center">Skills in native Android development in Java and cross-platform mobile development in Ionic and React Native.</p>
    </div>
        
    <div class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0">
      <img class="w-12 mb-2" src="../assets/images/icons/comp-sci.png" alt="Computer Science Icon" />
      <h3 class="text-2xl text-white text-center font-medium mb-2">Computer Science</h3>
      <p class="font-open-sans text-sm text-center">First Class Honours degree in BSc Computer Science (86%) with a year's placement in industry, winning both the 'Best Graduate' and 'Best Project' awards.</p>
    </div>
  </div>
</section>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class AboutPanel extends Vue {

}
</script>

<style lang="scss">

</style>