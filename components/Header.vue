<template>
  <div class="header">
    <nuxt-link class="header-logo" to="/">
      <img class="h-8" src="@/assets/img/logo.svg" />
    </nuxt-link>
    <div class="user-icon">
      <img class="h-8" src="@/assets/img/icon.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed inset-x-0 h-12 flex items-center justify-between bg-orange-400 p-2 z-50;
}

.header-logo {
  @apply flex-shrink-0  mr-6;
}

.user-icon {
  @apply rounded-full;
}
</style>
