<template>
  <footer class="bg-light-blue py-8">
    <p class="text-center font-bold">Copyright &copy; {{ currentYear }}</p>
    <p class="text-center text-sm">
      <a href="https://andrewsmithdeveloper.com">Andrew Smith - Developer</a>
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  /**
   * Return the current year.
   * @memberof Footer
   * @returns {Integer} the year.
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
</script>
