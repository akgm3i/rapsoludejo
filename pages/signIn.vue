<template>
  <div class="contents items-center">
    <form class="w-full max-w-xl" @submit.prevent="signIn">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            ユーザーID または メールアドレス
          </label>
        </div>
        <div class="md:w-2/4">
          <input
            v-model="username"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="BoardGameSuki"
            :class="{ 'input-error': isInputError.username }"
            @input="validateInputUsername()"
            @blur="validateInputUsername()"
          />
          <p v-show="isInputError.username" class="text-red-500 text-xs italic">
            ユーザー名を入力してください
          </p>
        </div>
        <div class="md:w-1/4" />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            パスワード
          </label>
        </div>
        <div class="md:w-2/4">
          <input
            v-model="password"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="********"
            :class="{ 'input-error': isInputError.password }"
            @input="validateInputPassword()"
            @blur="validateInputPassword()"
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

import { vxm } from '@/store'
@Component({
  components: {},
})
export default class signIn extends Vue {
  username = ''
  password = ''
  isIncorrectParameters = false
  user = vxm.user
  isInputError: { [key: string]: boolean } = {
    username: false,
    password: false,
  }

  validateInputUsername() {
    this.isInputError.username = !this.username.trim()
  }

  validateInputPassword() {
    this.isInputError.password = !this.password.trim()
  }

  validation(): { [key: string]: Function } {
    return {
      username: this.validateInputUsername,
      password: this.validateInputPassword,
    }
  }

  get isValid() {
    return Object.keys(this.isInputError).every((key) => {
      return !this.isInputError[key]
    })
  }

  async signIn() {
    Object.keys(this.validation()).every((key) => {
      this.validation()[key]()
    })
    if (this.isValid) {
      try {
        await this.user.signIn({
          username: this.username,
          password: this.password,
        })
      } catch (err) {
        if (
          ['NotAuthorizedException', 'UserNotFoundException'].includes(err.name)
        ) {
          this.isIncorrectParameters = true
        }
      }

      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  @apply flex flex-col justify-center p-4;
}

.input-error {
  @apply border-red-500;
}
</style>
