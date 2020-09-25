<template>
  <Timeline :timeline-items="timelineItems" uniqueTimeline colorDots="#ffffff" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timeline from 'timeline-vuejs';
@Component({
  components: {
    Timeline
  }
})
export default class JobTimeline extends Vue {
  timelineItems = [
    {
      from: new Date(2020, 9),
      title: 'Software Developer at Experian',
      description:
        'Software Developer working primarily with React.js, Redux, TypeScript, C# and .NET.'
    },
    {
      from: new Date(2019, 6),
      title: 'Full Stack Developer at Nuom (formerly Roller Agency)',
      description:
        'Building web applications, APIs, web services and websites using a variety of full-stack technologies, primarily Node.js (ES6+), Vue.js, TypeScript, Express, SCSS, Google Firebase, Jest and Cypress. This role has further involved building applications and systems with Angular, GraphQL, PHP, Nuxt.js, Craft CMS, Tailwind, Vuetify, Clarity and Gridsome.'
    },
    {
      from: new Date(2017, 6),
      title: 'Web Developer at Cursor',
      description:
        'Placement year in industry between the 2nd and 3rd year of University, this role involved working within a dev team building websites, software, web apps and mobile apps across a broad range of industries with HTML5, LESS, JavaScript, JQuery, CraftCMS and PHP.'
    },
    {
      from: new Date(2016, 0),
      title: 'Freelance Web Developer',
      description:
        'Dsigning, developing and building both the front-end and back-end of websites and web applications for a number of clients, primarily HTML5, CSS, JavaScript, PHP, JQuery, Bootstrap and MySQL.'
    }
  ];
}
</script>
