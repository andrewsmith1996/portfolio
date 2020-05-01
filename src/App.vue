<template>
  <div id="app" class="font-ubuntu antialiased text-white tracking-wider">
    <ColourPalette @changeColour="changeColour" />
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
import ColourPalette from '@/components/ColourPalette/ColourPalette.vue';
@Component({
  components: {
    Header,
    AboutPanel,
    Footer,
    Contact,
    Education,
    Projects,
    Skills,
    ProjectShowcase,
    ColourPalette
  }
})
export default class App extends Vue {
  changeColour(newPrimary: string, newSecondary: string) {
    let bodyStyles = document.body.style;
    bodyStyles.setProperty('--primary-color', newPrimary);
    bodyStyles.setProperty('--secondary-color', newSecondary);
  }
}
</script>

<style lang="scss">
:root {
  --primary-color: #0072ff;
  --secondary-color: #00c6ff;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--primary-color);
}

footer {
  background: var(--secondary-color);
}

.project-card {
  background-color: var(--primary-color);
  background: url('./assets/images/backgrounds/bg.png') no-repeat center center;
  background-size: 250%;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.09), 0 4px 6px rgba(0, 0, 0, 0.09);

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) -100%, var(--primary-color) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 18px;
    z-index: 1;
  }
}

@mixin on-circle($item-count, $circle-size) {
  position: relative;
  width: 6em;
  height: 6em;

  > * {
    display: block;
    position: absolute;

    $angle: (360 / $item-count);
    $rot: 0;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg) translate($circle-size / 2) rotate($rot * -1deg);
      }

      $rot: $rot + $angle;
    }
  }
}

.gradient-wrapper {
  background: var(--primary-color);
  background: -webkit-linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
}

.header {
  background: url('./assets/images/backgrounds/bg.png') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  height: 100%;
  width: 100%;

  &__technologies {
    height: 420px;

    .circle {
      @include on-circle($item-count: 8, $circle-size: 19em);

      @media only screen and (max-width: 640px) {
        @include on-circle($item-count: 8, $circle-size: 16em);
      }
    }
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) -100%, var(--primary-color) 100%);
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
  }
}

.blog-preview {
  background: url('./assets/images/backgrounds/bg.png') no-repeat center center;

  article {
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) -100%, var(--primary-color) 80%);
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 18px;
      z-index: 1;
    }
  }
}

.vueperslides__parallax-wrapper {
  &::after,
  &::before {
    box-shadow: none !important;
  }
}
</style>
