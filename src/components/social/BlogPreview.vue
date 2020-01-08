
<template>
<Layout>
  <div class="contact__blog">
    <h2 class="contact__blog-preview__top-title">Latest from my blog</h2>
    <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="contact__blog-preview__url">thisdeveloperslife.wordpress.com</a>
    <Client-Only>
      <vueper-slides v-if="$static.allBlogPosts.edges" :bullets="false" :visible-slides="2" slide-multiple :gap="3" :dragging-distance="200">
        <vueper-slide v-for="(post, index) in $static.allBlogPosts.edges" :key="index" class="contact__blog-preview">
          <template v-slot:content>
            <article>
              <h4 class="contact__blog-preview__title"><strong><a :href=post.node.url v-html="post.node.title"></a></strong></h4>
              <span>Posted on {{ post.node.PostDate }}</span>
              <p class="contact__blog-preview__content" v-html="post.node.intro"></p>
              <a :href="post.node.url" target="_blank">read more</a>
            </article>
          </template>
        </vueper-slide>
      </vueper-slides>
      </Client-Only>
  </div>
  </Layout>
</template>

<static-query> 
query {
  allBlogPosts {
    edges {
      node {
        title,
        url,
        intro,
        postDate
      }
    }
  }
}
</static-query> 

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import 'vueperslides/dist/vueperslides.css'

@Component({
   components: {
      VueperSlides: () =>
        import ('vueperslides')
        .then(m => m.VueperSlides)
        .catch(),
      VueperSlide: () =>
        import ('vueperslides')
        .then(m => m.VueperSlide)
        .catch()
    }
})
export default class BlogPreview extends Vue {
  mounted() {
      VueperSlides: () =>
        import ('vueperslides')
        .then(m => m.VueperSlides)
        .catch();
      VueperSlide: () =>
        import ('vueperslides')
        .then(m => m.VueperSlide)
        .catch();
  }
}
</script>

<style lang="scss">

</style>