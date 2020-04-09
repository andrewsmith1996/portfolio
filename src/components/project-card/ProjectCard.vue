

<template>
 <div class="p-2 w-full" :class="{'md:w-1/3': large, 'md:w-1/2': !large}">
    <div class="project-card h-full   flex-col bg-fixed bg-main-blue rounded-card flex flex-col p-4">
        <div class="relative z-10 ">
            <h3 class="text-xl font-semibold mb-2 font-ubuntu">{{ title }}</h3>
            <p class="text-sm mb-2 font-open-sans">{{ description }}</p>
             <img class="w-24" :src="imageURL" alt="MTA Exam" />
            <span class="text-sm font-medium font-open-sans text-center">{{ dates }}</span>
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
  @Prop({ type: String }) imageURL!: string;
}
</script>

<style lang="scss">

</style>