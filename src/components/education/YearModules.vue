

<template>
  <div>
    <h2 class="text-center text-2xl text-main-blue mb-1"><strong>{{ title }}</strong></h2>
    <ul>
      <li class="text-center mb-1 text-sm lg:text-base" v-for="(module, index) in modules" :key="index">{{ module.title }}
        <span>({{module.result}})</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class PlacementYearRow extends Vue {
  @Prop({type: String, default: "Modules"}) title!: string;
  @Prop({type: Array}) modules!: [{}];
}
</script>

<style lang="scss">

</style>