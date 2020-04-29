<template>
  <section>
    <SkillsHeader class="flex max-w-full w-full md:max-w-screen-xl" />
    <div class="flex">
      <div class="w-full md:w-1/2">
        <h2 class="text-xl font-medium mb-4">Front-end development</h2>
        <div class="flex flex-wrap">
          <Skill skill="React.js" image="react.png" />
          <Skill skill="Vue.js" image="vue.png" />
          <Skill skill="Angular" image="angular.png" />
          <Skill skill="TypeScript" image="typescript.png" />
          <Skill skill="Ionic" image="ionic.png" />
          <Skill skill="Android" image="android.png" />
          <Skill skill="SASS/SCSS" image="sass-new.png" />
          <Skill skill="React Native" image="react-native.png" />
          <Skill skill="Bootstrap" image="bootstrap.png" />
          <Skill skill="HTML" image="html.png" />
          <Skill skill="CSS" image="css.png" />
        </div>

          <!-- <li class="mb-1"><span></span>Gatsby.js, Gridsome</li>
          <li class="mb-1"><span></span>JQuery, AJAX</li> -->
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-xl font-medium mb-4">Back-end development</h2>
          <div class="flex flex-wrap">
            <Skill skill="Node.js" image="node.png" />
            <Skill skill="Express" image="express.png" />
            <Skill skill="Google Firebase" image="firebase.png" />
            <Skill skill="JavaScript" image="js.png" />
            <Skill skill="MongoDB" image="mongodb.png" />
            <Skill skill="Socket.io" image="socket-io.png" />
            <Skill skill="PHP" image="php.png" />
            <Skill skill="GCLoud" image="gcloud.png" />
            <Skill skill="python" image="python.png" />
            <Skill skill="Craft CMS" image="craftcms.png" />
            <Skill skill="mySQL" image="mysql.png" />
          </div>

          <!-- 
          <li class="mb-1"><span></span>Travis CI/CD</li>
          <li class="mb-1"><span></span> SQL, mySQL</li>
          <li class="mb-1"><span></span>C++</li>
          <li class="mb-1"><span></span>C#</li>=
          <li class="mb-1"><span></span> PHPmyAdmin</li> -->
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