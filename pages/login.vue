<template>
  <div class="contents">
    <div v-if="signedIn">Hello, {{ username }}!</div>
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            ユーザーID
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="username"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="BoardGameSuki"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            メールアドレス
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="email"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="rapsolu.dejo@mail.com"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            パスワード
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="password"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="******************"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-1/3">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="signUp"
          >
            新規登録
          </button>
        </div>
        <div class="md:w-1/3 mt-4">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="signIn"
          >
            ログイン
          </button>
        </div>
        <div class="md:w-1/3 mt-4">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="signOut"
          >
            ログアウト
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CognitoUser } from 'amazon-cognito-identity-js'

@Component({
  components: {},
})
export default class login extends Vue {
  signedIn = false
  username = ''
  password = ''
  email = ''

  signIn() {
    this.$Amplify.Auth.signIn({
      username: this.username,
      password: this.password,
    })
      .then((user: CognitoUser) => {
        this.username = user.getUsername()
        this.signedIn = true
        return console.log(user)
      })
      .catch((err: Error) => {
        return console.log(err)
      })
  }

  signUp() {
    this.$Amplify.Auth.signUp({
      username: this.username,
      password: this.password,
    })
      .then((data: any) => {
        return console.log(data)
      })
      .catch((err: Error) => {
        return console.log(err)
      })
  }

  signOut() {
    this.$Amplify.Auth.signOut()
      .then((data: any) => {
        this.signedIn = false
        return console.log(data)
      })
      .catch((err: Error) => {
        return console.log(err)
      })
  }

  beforeCreate() {
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        this.signedIn = true
        this.username = user.getUsername()
      })
      .catch((err: Error) => {
        return console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.contents {
  @apply flex flex-col justify-center p-4;
}

.form {
  @apply flex flex-col;
}
</style>
