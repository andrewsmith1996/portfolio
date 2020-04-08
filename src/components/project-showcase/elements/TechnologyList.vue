

<template>
  <h6 class="text-gray-400 text-sm font-medium mb-4 -mt-1" v-if="technologies">{{ technologies }}</h6>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TechnologyList extends Vue {
  @Prop({ type: String }) technologies!: string;
}
</script>

<style lang="scss">

</style>