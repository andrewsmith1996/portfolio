<template>
  <section>
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 class="text-3xl font-medium mb-4 text-center">Frontend Skills</h2>
        <div class="flex flex-wrap justify-center">
          <Skill skill="Vue.js" image="vue.png" />
          <Skill skill="React.js" image="react.png" />
          <Skill skill="Angular" image="angular.png" />
          <Skill skill="Ionic" image="ionic.png" />
          <Skill skill="Tailwind" image="tailwind.png" />
        </div>
        <div class="flex flex-wrap justify-center">
          <Skill skill="Cypress" image="cypress.png" />
          <Skill skill="React Native" image="react.png" />
          <Skill skill="SASS/SCSS" image="sass-new.png" />
          <Skill skill="Bootstrap" image="bootstrap.png" />
          <Skill skill="JQuery" image="jquery.png" />
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <h2 class="text-3xl font-medium mb-4 text-center">Backend Skills</h2>
        <div class="flex flex-wrap justify-center">
          <Skill skill="Node.js" image="node.png" />
          <Skill skill="TypeScript" image="typescript.png" />
          <Skill skill="Express" image="express.png" />
          <Skill skill="Jest" image="jest.png" />
          <Skill skill="GraphQL" image="graphql.png" />
          </div>
        <div class="flex flex-wrap justify-center">
            <Skill skill="Apollo" image="apollo.png" />
            <Skill skill="Python" image="python.png" />
          <Skill skill="Firebase" image="firebase.png" />
          <Skill skill="MongoDB" image="mongodb.png" />
          <Skill skill="PHP" image="php.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skill from '@/components/skills/Skill.vue';
@Component({
  components: {
    Skill
  }
})
export default class Skills extends Vue {}
</script>
