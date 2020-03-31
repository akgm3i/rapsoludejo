<template>
  <div class="flex flex-col justify-center p-4 items-center">
    <div class="w-full max-w-xl flex flex-col md:items-center">
      <div v-show="isEmailAlreadyUsed" class="auth-error" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >このメールアドレスは既に使用されています。</span
        >
        <n-link to="signIn" class="text-blue-700 underline"
          >ログインする</n-link
        >
      </div>
      <div v-show="isUsernameAlreadyUsed" class="auth-error" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >このユーザーIDは既に使用されています。</span
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
      <div v-show="isSignUpSuccess" class="auth-success" role="alert">
        <strong class="font-bold"></strong>
        <span class="block sm:inline"
          >認証メールを送信しました。確認してください。</span
        >
        <n-link to="signIn" class="text-blue-700 underline"
          >ログインする</n-link
        >
      </div>
    </div>
    <form class="w-full max-w-xl" @submit.prevent="signUp">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            ユーザーID
          </label>
        </div>
        <div class="md:w-2/4">
          <input
            id="inline-username"
            v-model="username"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="BoardGameSuki"
            :class="{ 'input-error': isInputError.username }"
            @blur="validateInputUsername"
          />
          <p v-show="isInputError.username" class="text-red-500 text-xs italic">
            ユーザーIDは半角英数字で、4文字以上である必要があります
          </p>
        </div>
        <div class="md:w-1/4" />
      </div>
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
            パスワードは8文字以上である必要があります
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
            新規登録
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { vxm } from '~/store'

const usernameRE = /^[a-zA-Z0-9]{4,}$/
const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

@Component({
  components: {},
})
export default class signUp extends Vue {
  username = ''
  email = ''
  password = ''
  isIncorrectParameters = false
  isEmailAlreadyUsed = false
  isUserNotConfirmed = false
  isUsernameAlreadyUsed = false
  isSignUpSuccess = false
  user = vxm.user
  isInputError: { [key: string]: boolean } = {
    username: false,
    email: false,
    password: false,
  }

  validateInputUsername() {
    if (!this.username.trim()) {
      this.isInputError.username = true
      return
    }
    if (!usernameRE.test(this.username)) {
      this.isInputError.username = true
      return
    }

    this.isInputError.username = false
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
    if (!this.password.trim()) {
      this.isInputError.password = true
      return
    }
    if (this.password.length < 8) {
      this.isInputError.password = true
      return
    }
    this.isInputError.password = false
  }

  get validation(): { [key: string]: Function } {
    return {
      username: this.validateInputUsername,
      email: this.validateInputEmail,
      password: this.validateInputPassword,
    }
  }

  get isValid() {
    return Object.keys(this.isInputError).every((key) => {
      return !this.isInputError[key]
    })
  }

  async signUp() {
    Object.keys(this.validation).map((key) => {
      this.validation[key]()
    })
    if (this.isValid) {
      this.isUserNotConfirmed = false
      this.isUsernameAlreadyUsed = false
      this.isSignUpSuccess = false
      try {
        await this.user.signUp({
          username: this.username,
          email: this.email,
          password: this.password,
        })
      } catch (err) {
        if (err.name === 'NotAuthorizedException') {
          this.isEmailAlreadyUsed = true
        } else if (err.name === 'CodeMismatchException') {
          this.isUserNotConfirmed = true
        }
        return
      }
      this.isSignUpSuccess = true
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

.auth-success {
  @apply bg-blue-100 border border-blue-400 text-blue-700 px-2 py-2 mb-4 rounded relative;
  @media (min-width: theme('screens.md')) {
    @apply w-2/4;
  }
}

.input-error {
  @apply border-red-500;
}
</style>
