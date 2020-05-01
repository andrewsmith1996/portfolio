<template>
  <section>
    <div
      class="flex flex-col w-full max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 mb-8"
    >
      <h2 class="text-3xl font-medium">Say hello</h2>
      <p class="text-gray-400 text-sm font-medium mb-4 -mt-1">Get in touch</p>
      <SocialLinks class="mb-4" />
    </div>
    <BlogPreview
      class="max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SocialLinks from './social/SocialLinks.vue';
import BlogPreview from './social/BlogPreview.vue';

@Component({
  components: {
    SocialLinks,
    BlogPreview
  }
})
export default class Contact extends Vue {}
</script>
