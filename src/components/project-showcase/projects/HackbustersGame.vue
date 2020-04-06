<template>
  <div class="flex">
    <div class="flex flex-col w-1/3">
      <div class="flex items-center">
      <h3>Hackbusters - Lincoln Hack 2018</h3>
          <a href="https://github.com/andrewsmith1996/HackBusters-Lincoln-Hack-2018" target="_blank">
            <img class="w-10" src="../../../assets/images/icons/github.png">
            </a>
        </div>
      <h6>Socket.IO, Node.js, Express</h6>
      <p>My entry for <a href="https://2018.lincolnhack.org/" target="_blank">Lincoln Hack</a> - a Dambusters, RAF &amp; Lincoln themed game using web sockets to make it playable across multiple phones positioned next to each other in a row.
      <br><br>This game involved keeping a plane in the air and once it came to end of one phone screen it would move to the next phone’s screen and so forth, with the goal of making the game playable across 20+ phones. 
      <br><br>A blog post on building this game and my experience at Lincoln Hack 2018 can be found <a href="https://thisdeveloperslife.wordpress.com/2018/11/11/my-weekend-at-lincoln-hack-2018-featuring-websockets-pixelated-lancaster-bombers-and-winning-24-cans-of-red-bull/" target="_blank">here</a>.
      <br><br><a href="https://github.com/andrewsmith1996/HackBusters-Lincoln-Hack-2018" target="_blank">View on GitHub</a>
      </p>
      <ProjectTecnologies :technologies="['node', 'express', 'socketio', 'jquery']" />
      </div>
       <div class="flex justify-center w-1/2">
        <img src="../../../assets/images/apps/hackbusters.png"  alt="Socket.IO, Node.js and Express interactive Dambusters Game" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectTecnologies from "../../technologies/ProjectTechnologies.vue";

@Component({
  components: {
    ProjectTecnologies
  }
})
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>