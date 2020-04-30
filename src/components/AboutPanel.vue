<template>
  <section class="about-panel">
    <div class="flex flex-col lg:flex-row justify-center items-center">
      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/web.png"
          alt="Web Development Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Web Development</h3>
        <p class="font-open-sans text-sm text-center">
          Full Stack web development skills from building complex back-ends, to building front-end
          UI for web applications, to writing automated unit tests and end-to-end tests for cloud
          services.
        </p>
      </div>

      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/improvement.png"
          alt="Mobile Development Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Software Processes</h3>
        <p class="font-open-sans text-sm text-center">
          Driving of continuous improvement of software processes through software architecture
          design, automated testing, QA processes, writing documentation, code reviews and
          mentoring.
        </p>
      </div>

      <div
        class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 mx-2 mb-8 lg:mb-0"
      >
        <img
          class="w-16 h-16 mb-2"
          src="../assets/images/icons/comp-sci.png"
          alt="Computer Science Icon"
        />
        <h3 class="text-2xl text-white text-center font-medium mb-2">Computer Science</h3>
        <p class="font-open-sans text-sm text-center">
          First Class Honours degree in BSc Computer Science (86%) with a year's placement in
          industry, winning both the 'Best Graduate' and 'Best Project' awards for exceptional
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
