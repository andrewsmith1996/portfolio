<template>
<section class="about-panel">
  <div class="flex flex-row justify-center">
    <div class="flex flex-col justify-center items-center">
      <img class="w-12" src="../assets/images/icons/web.png" alt="Web Development Icon" />
      <h3 class="text-2xl text-white text-center font-medium">Web Development</h3>
      <p class="text-sm text-center">Full-stack web development skills with 1.5 year's experience of working within award-winning agencies and a year's freelance experience.</p>
    </div>

    <div class="flex flex-col justify-center items-center">
      <img class="w-12" src="../assets/images/icons/mobile.png" alt="Mobile Development Icon" />
      <h3 class="text-2xl text-white text-center font-medium">Mobile Development</h3>
      <p class="text-sm text-center">Skills in native Android development in Java and cross-platform mobile development in Ionic and React Native.</p>
    </div>
        
    <div class="flex flex-col justify-center items-center">
      <img class="w-12" src="../assets/images/icons/comp-sci.png" alt="Computer Science Icon" />
      <h3 class="text-2xl text-white text-center font-medium">Computer Science</h3>
      <p class="text-sm text-center">First Class Honours degree in BSc Computer Science (86%) with a year's placement in industry, winning both the 'Best Graduate' and 'Best Project' awards.</p>
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