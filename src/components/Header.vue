<template>
  <header class="header flex justify-center items-center py-20">
    <div
      class="px-8 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col lg:flex-row z-10 relative"
    > 
      <HeaderContent class="w-full lg:w-1/2 mb-4" />
      <Technologies class="w-full lg:w-1/2" />
    </div>
    <ul class="bg-shapes top-0 left-0 absolute w-full h-full overflow-hidden">
      <li v-for="n in 10" :key="n" class="absolute block list-none rounded-full" />
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Technologies from './technologies/Technologies.vue';
import HeaderContent from './header/HeaderContent.vue';

@Component({
  components: {
    Technologies,
    HeaderContent
  }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>

@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));

  @return $randomNum;
}

$keys: 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten';

.bg-shapes {
  li {
    background: rgba(255, 255, 255, 0.2);
    bottom: -150px;

    @for $i from 1 through 10 {
      &:nth-child(#{$i}){
        $size: #{randomNum(40, 150)}px;
        left: percentage(randomNum(10, 90) / 100);
        width: $size;
        height: $size;

        @keyframes #{nth($keys, $i)}animation {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 1;
        }

        100%{
          transform: translateY(-1000px) translateX(#{randomNum(-600, 600)}px);
          opacity: 0;
        }
      }
        animation: #{nth($keys, $i)}animation 25s linear infinite;
        animation-delay: #{randomNum(0, 12)}s;
        animation-duration: #{randomNum(10, 30)}s;
      }
    }
  }   
}


</style>
