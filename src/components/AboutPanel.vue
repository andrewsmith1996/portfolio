<template>
  <section class="about-panel">
    <div class="flex flex-col lg:flex-row justify-center items-center">
      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/code.png"
          alt="Web Development Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Frontend Development</h3>
        <p class="font-open-sans font-semibold text-sm text-center">Building frontend UI for web applications primarily in Vue.js or React.js, with TypeScript, Tailwind and automated end-to-end tests with Cypress.
        </p>
      </div>

      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/data.png"
          alt="Mobile Development Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Backend Development</h3>
        <p class="font-open-sans font-semibold text-sm text-center">
          Building APIs and cloud services primarily in Node.js, TypeScript, Express and GraphQL with automated unit tests with Jest.
        </p>
      </div>

      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/graduation.png"
          alt="Computer Science Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Computer Science</h3>
        <p class="font-open-sans font-semibold text-sm text-center">
          First Class Honours in BSc Computer Science with a year in
          industry, winning the 'Best Graduate' and 'Best Project' awards for exceptional
          performance.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AboutPanel extends Vue {}
</script>
