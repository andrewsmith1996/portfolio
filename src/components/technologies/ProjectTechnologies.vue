<template>
  <section class="flex">
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('node')" src="../../assets/images/technologies/node.png" alt="Node.js Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('typescript')" src="../../assets/images/technologies/typescript.png" alt="Typescript Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('express')" src="../../assets/images/technologies/express.png" alt="Express Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('ionic')" src="../../assets/images/technologies/ionic.png" alt="Ionic Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('angular')" src="../../assets/images/technologies/angular.png" alt="Angular Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('vue')" src="../../assets/images/technologies/vue.png" alt="Vue.js Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('react')" src="../../assets/images/technologies/react.png" alt="react.js Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('mongo')" src="../../assets/images/technologies/mongodb.png" alt="MongoDB Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('sass')" src="../../assets/images/technologies/sass-new.png" alt="sass Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('js')" src="../../assets/images/technologies/js.png" alt="JavaScript Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('socketio')" src="../../assets/images/technologies/socket-io.png" alt="Socket Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('android')" src="../../assets/images/technologies/android.png" alt="Android Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('firebase')" src="../../assets/images/technologies/firebase.png" alt="Firebase Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('java')" src="../../assets/images/technologies/java.png" alt="Java Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('jquery')" src="../../assets/images/technologies/jquery.png" alt="JQuery Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('googlemaps')" src="../../assets/images/technologies/googlemaps.png" alt="Google Maps Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('heroku')" src="../../assets/images/technologies/heroku.png" alt="Heroku Logo" />
      <img class="w-16 rounded-full border-4" v-if="technologies.includes('cordova')" src="../../assets/images/technologies/cordova.png" alt="Cordova Logo" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ProjectTechnologies extends Vue {
  @Prop({type: Array}) technologies!: Array<string>
}
</script>

<style lang="scss">

</style>