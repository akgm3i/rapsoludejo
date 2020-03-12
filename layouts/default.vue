<template>
  <div>
    <Header />
    <div class="py-12">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: { Header, Footer },
})
export default class Default extends Vue {}
</script>
