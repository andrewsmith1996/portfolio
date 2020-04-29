
<template>
  <div class="flex flex-col justify-center items-center m-1">
    <img class="w-16 h-16 mr-2 mb-2 p-1 rounded-full border-4" :src="require(`@/assets/images/technologies/${this.image}`)" :alt="`${skill} Logo`" />
    <p class="text-xs font-medium">{{ skill }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Skill extends Vue {
  @Prop({type: String}) skill!: string;
  @Prop({type: String}) image!: string;
}
</script>

<style lang="scss">

</style>