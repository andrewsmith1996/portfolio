<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/2">
      <ProjectTitle
        title="Geolocation Weather Forecast"
        githubLink="https://github.com/andrewsmith1996/react-native-geolocation-weather-app"
      />
      <Technologies technologies="React Native" />
      <p class="font-open-sans font-semibold text-sm mb-6">
        A simple React Native app that uses the Geolocation functionality of a mobile phone and a
        WeatherAPI to retrieve a user's current location and return a 5 day weather forecast for
        that location. <br /><br />I published a full guide on how to build this app
        <a
          href="https://dev.to/andrewsmith1996/how-to-build-an-geolocation-weather-forecast-app-in-react-native-in-30-minutes-1kmo"
          target="_blank"
          >here</a
        >
        as part of a "Let's Build" series of tutorials. <br /><br />This guide was also a featured
        article in Tech Nottingham's October newsletter.
      </p>
      <ViewGitHub
        githubLink="https://github.com/andrewsmith1996/react-native-geolocation-weather-app"
      />
      <ProjectTecnologies class="mb-6" :technologies="['react', 'react-native']" />
    </div>
    <div class="flex flex-col md:flex-row w-full lg:w-1/2 justify-center items-center">
      <img
        src="../../../assets/images/apps/geolocation-one.png"
        class="w-full md:w-2/5 px-4 lg:w-1/2 mb-8 sm:mb-0"
        alt="React Native Geolocation Weather Forecast app"
      />
      <img
        src="../../../assets/images/apps/geolocation-two.png"
        class="w-full md:w-2/5 px-4 lg:w-1/2 mb-8 sm:mb-0"
        alt="React Native Geolocation Weather Forecast app"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectTecnologies from '../../technologies/ProjectTechnologies.vue';
import Technologies from '../elements/TechnologyList.vue';
import ProjectTitle from '../elements/Title.vue';
import ViewGitHub from '../elements/ViewGitHub.vue';
@Component({
  components: {
    ProjectTecnologies,
    Technologies,
    ProjectTitle,
    ViewGitHub
  }
})
export default class GeolocationWeatherApp extends Vue {}
</script>
