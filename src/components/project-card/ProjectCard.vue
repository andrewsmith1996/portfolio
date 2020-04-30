<template>
  <div
    class="p-4 sm:p-2 w-full"
    :class="{
      'md:w-1/2 lg:w-1/3': isLarge,
      'md:w-1/2 lg:w-1/4': isMedium,
      'md:w-1/2 lg:w-1/6': isSmall
    }"
  >
    <div class="project-card h-full flex-col bg-fixed bg-main-blue rounded-card flex flex-col p-4">
      <div class="flex flex-col h-full justify-between">
        <div class="relative z-10 flex flex-col h-full mb-4 justify-between">
          <div class="mb-4">
            <h3 class="text-xl font-semibold mb-2 font-ubuntu">{{ title }}</h3>
            <p class="text-sm mb-2 font-open-sans">{{ description }}</p>
          </div>
          <div class="flex justify-center">
            <img
              v-if="image"
              class="w-24"
              :src="require(`@/assets/images/projects/${this.image}`)"
              alt="MTA Exam"
            />
          </div>
        </div>
        <span class="relative z-10 font-bold text-center">{{ dates }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop({ type: String }) size!: string;
  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) description!: string;
  @Prop({ type: String }) dates!: string;
  @Prop({ type: String }) image!: string;

  get isLarge() {
    return this.size === 'large';
  }

  get isMedium() {
    return this.size === 'medium';
  }

  get isSmall() {
    return this.size === 'small';
  }
}
</script>
