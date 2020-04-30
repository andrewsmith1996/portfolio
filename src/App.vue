<template>
  <div id="app" class="font-ubuntu antialiased text-white tracking-wider">
    <Header />
    <div class="gradient-wrapper flex flex-col justify-center items-center">
      <AboutPanel
        class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
      />
      <Skills
        class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
      />
      <ProjectShowcase />
      <Education
        class="mb-20 max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
      />
      <Projects class="mb-20" />
      <Contact
        class="max-w-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4"
      />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
