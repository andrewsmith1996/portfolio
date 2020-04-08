
<template>
  <div>
    <div class="mb-6">
      <h2 class="text-3xl font-medium">Latest from my blog</h2>
      <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="text-sm font-open-sans text-gray-400">thisdeveloperslife.wordpress.com</a>
    </div>
      <vueper-slides v-if="blogPosts" :bullets="false" :visible-slides="postsToShow" slide-multiple :gap="3" :dragging-distance="200">
        <vueper-slide v-for="(post, index) in blogPosts" :key="index" class="bg-main-blue">
          <template v-slot:content>
            <article class="p-8">
              <h4 class=""><strong><a :href=post.url v-html="post.title"></a></strong></h4>
              <span class="text-sm">Posted on {{ post.postDate }}</span>
              <p class="" v-html="post.intro"></p>
              <a :href="post.url" target="_blank">read more</a>
            </article>
          </template>
        </vueper-slide>
      </vueper-slides>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
const { VueperSlides, VueperSlide } = require('vueperslides');
import 'vueperslides/dist/vueperslides.css'
import moment from 'moment';
import axios from 'axios';

@Component({
   components: {
      VueperSlides,
      VueperSlide
   }
})
export default class BlogPreview extends Vue {
    blogPosts: Array<any> = [];
    $mq!: any;
  async mounted() {
     try {
        let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');
        this.blogPosts = response.data.posts.map((post: any): any => {
          return {
            title: post.title,
            url: post.URL,
            intro: post.excerpt,
            postDate: moment(new Date(post.date)).format('MMMM Do YYYY, h:mma')
          } as any;
        });
     } catch (e) {
       console.log(e);
     }
  }

  get postsToShow() : number {
      return 3;
  }
}
</script>

<style lang="scss">

</style>