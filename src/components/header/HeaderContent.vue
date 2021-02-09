<template>
  <div>
    <h1 class="text-6xl font-medium">Andrew Smith</h1>
    <h2 class="text-2xl -mt-5 mb-4">Full Stack Developer</h2>
    <p class="mb-4 font-open-sans font-semibold text-sm">
      A double award winning First Class BSc (Hons) Computer Science graduate and software developer
      at
      <a
        href="https://www.experianplc.com/about-us/our-business-activities/consumer-services/"
        target="_blank"
        class="underline"
        >Experian Consumer Services</a
      >.
    </p>
    <p class="mb-4 font-open-sans font-semibold text-sm">
      Building front-end UI and complex back-ends for web applications, APIs and web services using
      a variety of full-stack technologies, primarily React.js, Node.js, TypeScript, .NET/C# and AWS.
    </p>
    <p class="mb-8 font-open-sans font-semibold text-sm">
      Actively involved in continuous improvement of software development processes through
      automated testing and QA solutions, code reviews, documentation and software architecture
      design.
    </p>
    <SocialLinks />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SocialLinks from '../social/SocialLinks.vue';

@Component({
  components: {
    SocialLinks
  }
})
export default class HeaderContent extends Vue {}
</script>
