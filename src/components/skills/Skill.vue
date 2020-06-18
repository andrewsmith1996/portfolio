<template>
  <div class="flex flex-col justify-center items-center m-2 ">
    <img
      class="w-20 h-20 p-1 rounded-full border-4 mb-2"
      :src="require(`@/assets/images/technologies/${this.image}`)"
      :alt="`${skill} Logo`"
    />
    <p class="text-xs font-medium">{{ skill }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Skill extends Vue {
  @Prop({ type: String }) skill!: string;
  @Prop({ type: String }) image!: string;
}
</script>
