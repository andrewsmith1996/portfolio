<template>
  <footer class="bg-light-blue py-8">
    <p class="text-center font-bold">Copyright &copy; {{ currentYear }}</p>
    <p class="text-center text-sm"><a href="https://andrewsmithdeveloper.com">Andrew Smith - Developer</a></p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  get currentYear() : number {
    return new Date().getFullYear();
  }
}
</script>

<style lang="scss">

</style>