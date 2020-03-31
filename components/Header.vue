<template>
  <div class="header">
    <n-link class="header-logo" to="/">
      <img class="h-8" src="@/assets/img/logo.svg" />
    </n-link>
    <div v-if="user.isSignedIn" class="user-icon flex">
      {{ user.username }}
      <n-link to="profile">
        <img class="h-8" src="@/assets/img/icon.png" />
      </n-link>
    </div>
    <div v-else>
      <n-link to="signIn">
        ログイン
      </n-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { vxm } from '~/store'

@Component({
  components: {},
})
export default class Header extends Vue {
  user = vxm.user

  mounted() {
    this.user.retrieveSession()
  }
}
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
