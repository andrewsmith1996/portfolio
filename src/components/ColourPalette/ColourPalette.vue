<template>
  <div
    class="absolute top-small -translate-x-24 flex flex-col z-50 bg-white justify-center p-3 rounded-r-lg transition duration-500 ease-in-out transition duration-500 ease-in-out transform hover:- hover:translate-x-0"
  >
    <div class="flex flex-row">
      <div
        id="lightblue"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#0072ff', '#00c6ff')"
      ></div>
      <div
        id="red"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#93291e', '#ed213a')"
      ></div>
    </div>

    <div class="flex flex-row">
      <div
        id="purple"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#ad5389', '#3c1053')"
      ></div>
      <div
        id="orange"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#f12711', '#f5af19')"
      ></div>
    </div>
    <div class="flex flex-row">
      <div
        id="green"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#11998e', '#8ef7d')"
      ></div>
      <div
        id="red"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#cb356b', '#bd3f32')"
      ></div>
    </div>
    <div class="flex flex-row">
      <div
        id="yellow"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#f2994a', '#f2c94c')"
      ></div>
      <div
        id="purpleBlue"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#c33764', '#1d2671')"
      ></div>
    </div>
    <div class="flex flex-row">
      <div
        id="greenBlack"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#093028', '#237a57')"
      ></div>
      <div
        id="lightBlue"
        class="rounded-full z-100 h-8 w-8 z-100 mx-1 my-2 cursor-pointer"
        @click="changeColour('#24c6dc', '#514a9d')"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ColourPalette extends Vue {
  @Emit('changeColour')
  changeColour(newColour: string) {
    return newColour;
  }
}
</script>

<style lang="scss">
#lightblue {
  background: #0072ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00c6ff, #0072ff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #00c6ff,
    #0072ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#red {
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #93291e, #ed213a); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#purple {
  background: #ad5389; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#orange {
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f5af19, #f12711); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f5af19,
    #f12711
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#green {
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#red {
  background: #cb356b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #bd3f32, #cb356b); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #bd3f32,
    #cb356b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#yellow {
  background: #f2994a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f2c94c, #f2994a); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f2c94c,
    #f2994a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#purpleBlue {
  background: #c33764; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1d2671, #c33764); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1d2671,
    #c33764
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#greenBlack {
  background: #093028; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #237a57, #093028); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #237a57,
    #093028
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#lightBlue {
  background: #24c6dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #514a9d, #24c6dc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
