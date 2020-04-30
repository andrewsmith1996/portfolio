<template>
  <div class="flex items-center">
    <h3 class="text-2xl font-medium mr-3">{{ title }}</h3>
    <a v-if="githubLink" :href="githubLink" target="_blank">
      <img class="w-8" src="../../../assets/images/icons/github.png" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ProjectTitle extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) githubLink!: string;
}
</script>
