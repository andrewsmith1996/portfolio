

<template>
  <section>
    <div class="flex flex-col w-full max-w-full md:max-w-screen-xl">
      <h2 class="text-3xl font-medium">Say hello</h2> 
      <p class="text-sm mb-4">Get in touch</p>
      <SocialLinks class="mb-4"/>
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