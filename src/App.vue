<template>
  <div id="app" class="font-ubuntu antialiased text-white tracking-wider">
  <Header />
  <div class="gradient-wrapper flex flex-col justify-center items-center">
    <div class="max-w-full px-8 md:max-w-screen-xl">
      <AboutPanel class="my-8" />
      <ProjectShowcase class="my-8"/>
      <Skills class="my-8"/>
      <Education class="my-8"/>
      <Projects class="my-8"/>
      <Contact class="my-8"/> 
      </div>
  </div>
  <Footer />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Header from './components/Header.vue';
import AboutPanel from './components/AboutPanel.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
import Education from './components/Education.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';

@Component({
  components: {
    Header,
    AboutPanel,
    Footer,
    Contact,
    Education,
    Projects,
    Skills,
    ProjectShowcase
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
