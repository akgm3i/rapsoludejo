<template>
  <div class="flex flex-col justify-center p-4 items-center">
    <button @click="user.signOut">ログアウト</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { vxm } from '~/store'

@Component({
  components: {},
})
export default class profile extends Vue {
  user = vxm.user
}
</script>
