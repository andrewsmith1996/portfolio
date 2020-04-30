

<template>
  <a :href="githubLink" target="_blank" class="font-ubuntu text-base mb-6 font-medium underline">View on GitHub</a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ViewGitHub extends Vue {
  @Prop({ type: String }) githubLink!: string;
}
</script>

<style lang="scss">

</style>