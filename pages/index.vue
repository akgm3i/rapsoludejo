<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">rapsoludejo</h1>
        <h2 class="subtitle">Utilities for playing board games.</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green"
            >Documentation</a
          >
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
            >GitHub</a
          >
        </div>
      </div>
    </div>
    <dir></dir>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo },
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #3b8070;
  }
}

.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid #35495e;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #35495e;
  }
}
</style>
