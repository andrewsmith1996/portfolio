<template>
 <div class="flex flex-row">
    <a class="mr-4" href="https://www.linkedin.com/in/andrewsmithdeveloper/" target="_blank"><img src="../../assets/images/social/linkedin.png" class="w-8" alt="LinkedIn Icon"  /></a>
    <a class="mr-4" href="https://github.com/andrewsmith1996" target="_blank"><img src="../../assets/images/social/github.png" class="w-8" alt="GitHub Icon" /></a>
    <a class="mr-4" href="https://technottingham.slack.com/messages/andrewsmith96" target="_blank"><img src="../../assets/images/social/slack-icon.png" class="w-8" alt="Slack Icon" /></a>
    <a class="mr-4" href="https://stackoverflow.com/users/4561107/andrew1996" target="_blank"><img src="../../assets/images/social/stack-overflow-icon.png" class="w-7 h-8" alt="Stack Overflow Icon"  /></a>
    <a class="mr-4" href="https://dev.to/andrewsmith1996" target="_blank"><img src="../../assets/images/social/devto.png" class="w-8" alt="Andrew Smith's DEV Profile" /></a>       
    <a class="mr-4" href="https://medium.com/@andrew.smith_84400" target="_blank"><img src="../../assets/images/social/medium.png" class="w-8" alt="Andrew Smith's Medium Profile" /></a>       
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class SocialLinks extends Vue {
  @Prop({type: Object}) links!: {}
}
</script>

<style lang="scss">

</style>