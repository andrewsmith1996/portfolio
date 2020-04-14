

<template>
  <div class="p-2 w-full" :class="{'md:w-1/3': large, 'md:w-1/4': !large}">
    <div class="project-card h-full flex-col bg-fixed bg-main-blue rounded-card flex flex-col p-4">
      <div class="flex flex-col h-full justify-between">
      <div class="relative z-10 flex flex-col ">
        <h3 class="text-xl font-semibold mb-2 font-ubuntu">{{ title }}</h3>
        <p class="text-sm mb-2 font-open-sans">{{ description }}</p>
          <img v-if="image" class="w-24" :src="`../../assets/images/projects/${image}`" alt="MTA Exam" />
      </div>
        <span class="relative z-10 font-bold text-center">{{ dates }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ProjectCard extends Vue {
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) description!: string;
  @Prop({ type: String }) dates!: string;
  @Prop({ type: String }) image!: string;
}
</script>

<style lang="scss">

</style>