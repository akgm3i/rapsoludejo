<template>
  <nav class="header">
    <nuxt-link class="header-logo" to="/">
      <img src="@/assets/img/logo.png" alt="unko" />
    </nuxt-link>
    <div class=" header-icon">
      <img src="@/assets/img/icon.png" class="rounded-full" alt="icon" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  @apply flex items-center justify-between flex-wrap bg-teal-500 px-2 py-2;
}

.header-logo {
  @apply flex items-center flex-shrink-0 text-white mr-6;
}

.header-icon {
  @apply flex items-center px-2 text-teal-200 border-teal-400 rounded-full block;
}
</style>
