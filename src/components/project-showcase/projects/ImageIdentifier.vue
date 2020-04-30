



<template>
<div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/3">
      <ProjectTitle title="Image Identifier" githubLink="https://github.com/andrewsmith1996/react-native-ai-image-recognition-app" />
        <Technologies technologies="React Native" />
        <p class="font-open-sans text-sm mb-6">A React Native app that uses AI and a number of React Native components to identify what's in an image taken by a user.
            <br><br>I published a full guide on how to build this app <a href="https://dev.to/andrewsmith1996/how-to-build-an-image-recognition-app-in-react-native-m6g" target="_blank">here</a> as part of a "Let's Build" series of tutorials.
            <br><br>This guide was also a featured article in Tech Nottingham's September newsletter.
        </p>
        <ViewGitHub githubLink="https://github.com/andrewsmith1996/react-native-ai-image-recognition-app" />
        <ProjectTecnologies class="mb-6" :technologies="['react', 'react-native']" />
    </div>

    <div class="flex w-full flex-col flex-wrap sm:flex-row lg:w-3/4 justify-center items-center">
        <img src="../../../assets/images/apps/image-recognition-react-native-1.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0" alt="React Native image recognition app" />
        <img src="../../../assets/images/apps/image-recognition-react-native-2.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0" alt="React Native image recognition app" />
        <img src="../../../assets/images/apps/image-recognition-react-native-3.png" class="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 mb-8 lg:mb-0" alt="React Native image recognition app" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectTecnologies from "../../technologies/ProjectTechnologies.vue";
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
export default class ImageIdentifier extends Vue {

}
</script>

<style lang="scss">

</style>