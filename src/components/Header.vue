<template>
  <header class="header flex justify-center items-center">
    <div class="max-w-screen-xl flex z-10 relative">
        <HeaderContent class="w-1/2" />
        <Technologies class="w-1/2"/>
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