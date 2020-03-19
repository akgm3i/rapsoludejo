<template>
  <div class="contents">
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            部屋名
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="makingRoomInfo.name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="BoardGameRoom"
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
            v-model="makingRoomInfo.password"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="****"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-1/3">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="makeRoom"
          >
            部屋作成
          </button>
        </div>
      </div>
    </form>
    <div class="room-list">
      <div v-for="(room, index) in rooms" :key="index">
        <div>部屋名: {{ room.name }}</div>
        <div>オーナー: {{ room.owner }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { CreateRoomInput } from '@/src/API'
import { createRoom, updateUser } from '@/src/graphql/mutations'

@Component({
  components: {},
})
export default class rooms extends Vue {
  signedIn = false
  username = ''
  rooms = []
  makingRoomInfo: CreateRoomInput = {
    name: '',
    password: '',
    ownerId: '',
  }

  makeRoom() {
    this.$Amplify.API.graphql({
      query: createRoom,
      variables: { input: this.makingRoomInfo },
    })
      .then((newRoom: any) => {
        console.log(newRoom)

        this.$Amplify.API.graphql({
          query: updateUser,
          variables: {
            input: {
              id: this.username,
              userRoomId: newRoom.data.createRoom.id,
            },
          },
        })
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
        this.makingRoomInfo.ownerId = this.username
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
</style>
