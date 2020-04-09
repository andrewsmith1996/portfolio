<template>
  <header class="header flex justify-center items-center py-24">
    <div class="max-w-full px-8 md:max-w-screen-xl flex flex-col md:flex-row z-10 relative">
        <HeaderContent class="w-full md:w-1/2 mb-4" />
        <Technologies class="w-full md:w-1/2"/>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Technologies from "./technologies/Technologies.vue";
import HeaderContent from "./header/HeaderContent.vue";

@Component({
  components: {
    Technologies,
    HeaderContent
  }
})
export default class Header extends Vue {
  globalContent!: {};
}
</script>

<style lang="scss">

</style>