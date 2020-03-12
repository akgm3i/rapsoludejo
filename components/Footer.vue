<template>
  <div class="footer">
    <nav></nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  @apply fixed h-12 inset-x-0 bottom-0 bg-orange-400 z-50;
}
</style>
