<template>
  <div class="flex flex-col justify-center p-4 items-center">
    <div class="w-full max-w-xl flex flex-col md:items-center">
      <div v-show="isIncorrectParameters" class="auth-error" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >ユーザー名かパスワードが正しくありません。</span
        >
      </div>
      <div v-show="isUserNotConfirmed" class="auth-error" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >メールアドレスが認証されていません。</span
        >
        <n-link
          :to="{ path: 'confirm', query: { email: email } }"
          class="text-blue-700 underline"
          >認証メールを再送信する</n-link
        >
      </div>
    </div>
    <form class="w-full max-w-xl" @submit.prevent="signIn">
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
            placeholder="boardgame.suki@rapsol.com"
            :class="{ 'input-error': isInputError.email }"
            @blur="validateInputEmail"
          />
          <p v-show="isInputError.email" class="text-red-500 text-xs italic">
            正しいメールアドレスを入力してください
          </p>
        </div>
        <div class="md:w-1/4" />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            パスワード
          </label>
        </div>
        <div class="md:w-2/4">
          <input
            id="inline-password"
            v-model="password"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="********"
            :class="{ 'input-error': isInputError.password }"
            @blur="validateInputPassword"
          />
          <p v-show="isInputError.password" class="text-red-500 text-xs italic">
            パスワードを入力してください
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
            ログイン
          </button>
        </div>
        <div class="w-1/4 md:w-0"></div>
        <div class="flex-shrink-0">
          <nuxt-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to=""
          >
            パスワードを忘れた場合
          </nuxt-link>
        </div>
        <div class="flex-shrink-0 md:w-1/4" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { vxm } from '~/store'

const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

@Component({
  components: {},
})
export default class signIn extends Vue {
  email = ''
  password = ''
  isIncorrectParameters = false
  isUserNotConfirmed = false
  user = vxm.user
  isInputError: { [key: string]: boolean } = {
    email: false,
    password: false,
  }

  validateInputEmail() {
    if (!this.email.trim()) {
      this.isInputError.email = true
      return
    }
    if (!emailRE.test(this.email)) {
      this.isInputError.email = true
      return
    }

    this.isInputError.email = false
  }

  validateInputPassword() {
    this.isInputError.password = !this.password.trim()
  }

  get validation(): { [key: string]: Function } {
    return {
      email: this.validateInputEmail,
      password: this.validateInputPassword,
    }
  }

  get isValid() {
    return Object.keys(this.isInputError).every((key) => {
      return !this.isInputError[key]
    })
  }

  async signIn() {
    Object.keys(this.validation).map((key) => {
      this.validation[key]()
    })
    if (this.isValid) {
      this.isIncorrectParameters = false
      this.isUserNotConfirmed = false

      try {
        await this.user.signIn({
          email: this.email,
          password: this.password,
        })
      } catch (err) {
        switch (err.name) {
          case 'UserNotFoundException': // username is incorrect
          case 'NotAuthorizedException': // password is incorrect
            this.isIncorrectParameters = true
            break

          case 'UserNotConfirmedException':
            this.isUserNotConfirmed = true
            break
        }
        return
      }

      this.$router.push('profile')
    }
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
</style>
