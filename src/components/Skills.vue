<template>
  <section>
    <SkillsHeader class="flex max-w-full w-full md:max-w-screen-xl" />
    <div class="flex">
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-medium mb-4 text-center">Frontend</h2>
        <div class="flex flex-wrap justify-center">
          <Skill skill="Vue.js" image="vue.png" />
          <Skill skill="TypeScript" image="typescript.png" />
          <Skill skill="React.js" image="react.png" />
          <Skill skill="Angular" image="angular.png" />
          <Skill skill="Ionic" image="ionic.png" />
          <Skill skill="React Native" image="react.png" />
          <Skill skill="SASS/SCSS" image="sass-new.png" />
          <Skill skill="Android" image="android.png" />
          <Skill skill="Bootstrap" image="bootstrap.png" />
          <Skill skill="JQuery" image="jquery.png" />
          <Skill skill="Gatsby" image="gatsby.png" />
          <Skill skill="Gridsome" image="gridsome.png" />
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-medium mb-4 text-center">Backend</h2>
        <div class="flex flex-wrap justify-center">
          <Skill skill="Node.js" image="node.png" />
          <Skill skill="Express" image="express.png" />
          <Skill skill="MongoDB" image="mongodb.png" />
          <Skill skill="JavaScript" image="js.png" />
          <Skill skill="Firebase" image="firebase.png" />
          <Skill skill="PHP" image="php.png" />
          <Skill skill="Google Cloud" image="gcloud.png" />
          <Skill skill="Socket.io" image="socket-io.png" />
          <Skill skill="Python" image="python.png" />
          <Skill skill="Craft CMS" image="craftcms.png" />
          <Skill skill="mySQL" image="mysql.png" />
          <Skill skill="Travis CI" image="travis.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "./skills/SkillsHeader.vue";
import Skill from '@/components/skills/Skill.vue';
@Component({
  components: {
    Skill
  }
})
export default class Skills extends Vue {
  
}
</script>

<style lang="scss">

</style>