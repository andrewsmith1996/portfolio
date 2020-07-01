<template>
  <div>
    <h1 class="text-7xl font-medium">Andrew Smith</h1>
    <h2 class="text-3.5xl -mt-6 mb-4">Full Stack Web Developer</h2>
    <p class="mb-4 font-open-sans font-semibold text-sm">
      A double award winning First Class BSc (Hons) Computer Science graduate and agency experienced
      developer specialising in Full Stack Web Development.
    </p>
    <p class="mb-4 font-open-sans font-semibold text-sm">
      Building front-end UI and complex back-ends for web applications, APIs and web services using
      a variety of full-stack technologies, primarily Node.js, Vue.js and TypeScript.
    </p>
    <p class="mb-8 font-open-sans font-semibold text-sm">
      Actively involved in continuous improvement of software development processes through
      automated testing and QA solutions, code reviews, documentation and software architecture and
      database schema design.
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
