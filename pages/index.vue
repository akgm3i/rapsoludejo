<template>
  <div class="contents">
    <div class="hero">
      <h1 class="message">
        <span>ボードゲームを</span>
        <span class="pl-4">もっと楽しく。</span>
      </h1>
      <div class="button">
        <nuxt-link to="signUp">はじめる</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>
.contents {
  @apply absolute inset-0;
}

.hero {
  background: linear-gradient(#7b341e30, #feebc820), url('~assets/img/hero.jpg');
  @apply flex flex-col items-center h-full bg-cover bg-center pt-20;
}

.message {
  @apply flex flex-col text-center text-4xl text-gray-100;
}

.button {
  @apply mt-8 px-4 py-1 bg-blue-500 rounded-lg text-xl text-gray-100;
}
</style>
