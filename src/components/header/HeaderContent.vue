<template>
  <div>
    <h1 class="text-6xl font-medium">Andrew Smith</h1>
    <h2 class="text-4xl -mt-6 mb-4">Developer</h2>
    <p class="mb-4 font-open-sans text-sm">A double award winning First Class BSc (Hons) Computer Science graduate and agency experienced developer specialising in full-stack web development and software architecture design.<br /><br />Currently working in a full-stack developer role in Nottingham at <a href="https://nuom.co.uk/" target="_blank">Nuom</a> using Node.js, Vue.js, Express, MongoDB and Google Firebase to build APIs, cloud-hosted microservices and front-end UI. </p>
    <SocialLinks />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SocialLinks from "../social/SocialLinks.vue";

@Component({
  components: {
    SocialLinks
  }
})
export default class HeaderContent extends Vue {}
</script>

<style lang="scss">

</style>