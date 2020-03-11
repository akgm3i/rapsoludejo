<template>
  <div class="header">
    <nuxt-link class="header-logo" to="/">
      <img src="@/assets/img/logo.png" alt="ラプソル" />
    </nuxt-link>
    <div class=" user-icon">
      <img src="@/assets/img/icon.png" class="rounded-full" alt="user icon" />
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
