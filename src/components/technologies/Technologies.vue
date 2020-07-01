<template>
  <section
    class="technologies header__technologies flex flex-row md:flex-col justify-center items-center"
  >
    <div class="circle flex justify-center flex-wrap">
       <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/firebase.png"
        alt="Firebase Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/jest.png"
        alt="Jest Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/sass-new.png"
        alt="sass Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/graphql.png"
        alt="GraphQL Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/vue.png"
        alt="Vue.js Logo"
      />
       <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/typescript.png"
        alt="Typescript Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/react.png"
        alt="react.js Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/js.png"
        alt="JavaScript Logo"
      />
      <img
        class="rounded-full border-4 w-20 h-20 sm:w-24 sm:h-24 p-2 m-2 md:m-0"
        src="../../assets/images/technologies/node.png"
        alt="Node.js Logo"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Technologies extends Vue {}
</script>
