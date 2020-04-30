<template>
  <div>
    <h1 class="text-6xl font-medium">Andrew Smith</h1>
    <h2 class="text-4xl -mt-6 mb-4">Full Stack Developer</h2>
    <p class="mb-4 font-open-sans text-sm">
      A double award winning First Class BSc (Hons) Computer Science graduate and agency experienced
      developer specialising in Full Stack Web Development.
    </p>
    <p class="mb-4 font-open-sans text-sm">
      Building front-end UI and complex back-ends for web applications, APIs and web services using
      a variety of full-stack technologies, primarily Node.js, Vue.js, TypeScript and Jest.
    </p>
    <p class="mb-8 font-open-sans text-sm">
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
