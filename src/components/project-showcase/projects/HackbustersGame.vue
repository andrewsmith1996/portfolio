<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/2">
      <ProjectTitle
        title="Hackbusters - Lincoln Hack 2018"
        githubLink="https://github.com/andrewsmith1996/hackbusters-game-lincoln-hack-2018"
      />
      <Technologies technologies="Socket.IO, Node.js, Express" />
      <p class="font-open-sans font-semibold text-sm mb-6">
        My entry for <a href="https://2018.lincolnhack.org/" target="_blank">Lincoln Hack</a> - a
        Dambusters, RAF &amp; Lincoln themed game using web sockets to make it playable across
        multiple phones positioned next to each other in a row. <br /><br />This game involved
        keeping a plane in the air and once it came to end of one phone screen it would move to the
        next phone’s screen and so forth, with the goal of making the game playable across 20+
        phones. <br /><br />A blog post on building this game and my experience at Lincoln Hack 2018
        can be found
        <a
          href="https://thisdeveloperslife.wordpress.com/2018/11/11/my-weekend-at-lincoln-hack-2018-featuring-websockets-pixelated-lancaster-bombers-and-winning-24-cans-of-red-bull/"
          target="_blank"
          >here</a
        >.
      </p>
      <ViewGitHub
        githubLink="https://github.com/andrewsmith1996/hackbusters-game-lincoln-hack-2018"
      />
      <ProjectTecnologies class="mb-6" :technologies="['node', 'express', 'socketio', 'jquery']" />
    </div>
    <div class="w-full lg:w-1/2 items-center">
      <img
        class="px-4"
        src="../../../assets/images/apps/hackbusters.png"
        alt="Socket.IO, Node.js and Express interactive Dambusters Game"
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
export default class Gluco extends Vue {}
</script>
