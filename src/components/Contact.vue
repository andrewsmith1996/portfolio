

<template>
  <section>
    <div class="flex flex-col">
      <h2>Say hello</h2> 
      <p>Get in touch</p>
      <SocialLinks />
      <BlogPreview />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SocialLinks from "./social/SocialLinks.vue";
import BlogPreview from "./social/BlogPreview.vue";

@Component({
  components: {
    SocialLinks,
    BlogPreview
  }
})
export default class Contact extends Vue {
}
</script>

<style lang="scss">

</style>