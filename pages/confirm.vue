<template>
  <div class="flex flex-col justify-center p-4 items-center">
    <div class="w-full max-w-xl flex flex-col md:items-center">
      <div v-show="isSendMailSuccess" class="auth-success" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >認証メールを送信しました。確認してください。</span
        >
        <n-link to="signIn" class="text-blue-700 underline"
          >ログインする</n-link
        >
      </div>
    </div>
    <form class="w-full max-w-xl" @submit.prevent="sendMail">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-email"
          >
            メールアドレス
          </label>
        </div>
        <div class="md:w-2/4">
          <input
            id="inline-email"
            v-model="email"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="BoardGameSuki"
            :class="{ 'input-error': isInputError.email }"
            @blur="validateInputEmail"
          />
          <p v-show="isInputError.email" class="text-red-500 text-xs italic">
            正しいメールアドレスを入力してください
          </p>
        </div>
        <div class="md:w-1/4" />
      </div>
      <div class="flex md:items-center">
        <div class="flex-shrink-0 md:w-1/4"></div>
        <div class="md:w-1/4">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            送信
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { vxm } from '~/store'

@Component({
  components: {},
})
export default class confirm extends Vue {
  email = ''
  isSendMailSuccess = false
  isInputError: { [key: string]: boolean } = {
    email: false,
  }

  user = vxm.user

  validateInputEmail() {
    this.isInputError.username = !this.email.trim()
  }

  get validation(): { [key: string]: Function } {
    return {
      email: this.validateInputEmail,
    }
  }

  get isValid() {
    return Object.keys(this.isInputError).every((key) => {
      return !this.isInputError[key]
    })
  }

  async sendMail() {
    Object.keys(this.validation).map((key) => {
      this.validation[key]()
    })
    if (this.isValid) {
      await this.user.sendConfirmMail({
        email: this.email,
      })
      this.isSendMailSuccess = true
    }
  }

  mounted() {
    this.email = this.$route.query.email as string
  }
}
</script>

<style lang="scss" scoped>
.auth-error {
  @apply bg-red-100 border border-red-400 text-red-700 px-2 py-2 mb-4 rounded relative;
  @media (min-width: theme('screens.md')) {
    @apply w-2/4;
  }
}

.input-error {
  @apply border-red-500;
}

.auth-success {
  @apply bg-blue-100 border border-blue-400 text-blue-700 px-2 py-2 mb-4 rounded relative;
  @media (min-width: theme('screens.md')) {
    @apply w-2/4;
  }
}
</style>
