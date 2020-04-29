
<template>
  <div>
    <div class="mb-6">
      <h2 class="text-3xl font-medium">Latest from my blog</h2>
      <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="text-sm font-open-sans text-gray-400">thisdeveloperslife.wordpress.com</a>
    </div>
      <vueper-slides v-if="blogPosts" :bullets="false" slide-multiple :gap="2" :dragging-distance="200" :breakpoints="breakpoints">
        <vueper-slide v-for="(post, index) in blogPosts" :key="index" class="bg-main-blue rounded-card blog-preview" :link="post.url">
          <template v-slot:content>
            <article class="h-full">
              <div class="relative z-10 h-full flex flex-col p-6">
                  <h4 class="text-xl mb-1"><strong><a :href=post.url v-html="post.title"></a></strong></h4>
                  <span class="text-xs text-gray-400 block mb-2">Posted on {{ post.postDate }}</span>
                  <hr class="mb-2" />
                <div class="flex flex-col justify-between h-full">
                  <div v-html="post.intro" />
                  <a :href="post.url" class="underline" target="_blank">read more</a>
                </div>
              </div>
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
import { BlogAPIResponseInterface } from '@/interfaces/BlogAPIResponse.model';
import { BlogPreviewInterface } from '@/interfaces/BlogPreview.model';

@Component({
   components: {
      VueperSlides,
      VueperSlide
   }
})
export default class BlogPreview extends Vue {
    blogPosts: Array<BlogPreviewInterface> = [];

  async mounted() {
    const characterLimit: number = 300;
     try {
        let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');
        this.blogPosts = response.data.posts.map((post: BlogAPIResponseInterface): BlogPreviewInterface => {
          return {
            title: post.title,
            url: post.URL,
            intro: post.excerpt.length > characterLimit ? `${post.excerpt.slice(0, characterLimit)}...` : post.excerpt,
            postDate: moment(new Date(post.date)).format('MMMM Do YYYY, h:mma')
          } as BlogPreviewInterface;
        });
     } catch (e) {
       console.log(e);
     }
  }

  get breakpoints() {
    return {
      2100: {
        visibleSlides: 3
      },
      1900: {
        visibleSlides: 3
      },
      1000: {
        visibleSlides: 2
      },
      800: {
        visibleSlides: 1
      }
    }
  }
}
</script>