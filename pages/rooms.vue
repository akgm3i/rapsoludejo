<template>
  <div class="contents">
    <form class="w-full max-w-sm" @submit.prevent="makeRoom">
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
            type="text"
            placeholder="****"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-1/3">
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            部屋作成
          </button>
        </div>
      </div>
    </form>
    <div class="room-list">
      <div v-for="(room, index) in rooms" :key="index">
        <div>部屋名: {{ room.name }}</div>
        <div>オーナー: {{ room.owner.username }}</div>
        <button @click="del(room)">del</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import Observable from 'zen-observable'
import { vxm } from '~/store'
import * as API from '~/utils/API'
import * as queries from '~/utils/graphql/queries'
import * as mutations from '~/utils/graphql/mutations'
import * as subscriptions from '~/utils/graphql/subscriptions'

@Component({
  components: {},
})
export default class rooms extends Vue {
  user = vxm.user
  rooms: any[] = []

  subscription: {
    create?: any
    update?: any
    delete?: any
  } = {}

  makingRoomInfo = {
    name: '',
    password: '',
  }

  async makeRoom() {
    const roomInput: API.CreateRoomInput = {
      name: this.makingRoomInfo.name,
      ownerId: this.user.id,
      password: this.makingRoomInfo.password
        ? this.makingRoomInfo.password
        : null,
    }

    const newRoom = (await this.$Amplify.API.graphql(
      graphqlOperation(mutations.createRoom, { input: roomInput })
    )) as GraphQLResult<API.CreateRoomMutation>

    if (!newRoom.data?.createRoom) {
      return
    }

    const updateUserRoomInput: API.UpdateUserInput = {
      id: this.user.id,
      roomId: newRoom.data.createRoom.id,
    }

    await this.$Amplify.API.graphql(
      graphqlOperation(mutations.updateUser, {
        input: updateUserRoomInput,
      })
    )
  }

  async del(room: any) {
    const delRoom: API.DeleteRoomInput = {
      id: room.id,
    }
    await this.$Amplify.API.graphql(
      graphqlOperation(mutations.deleteRoom, { input: delRoom })
    )
  }

  async mounted() {
    const roomData = (await this.$Amplify.API.graphql(
      graphqlOperation(queries.listRooms)
    )) as GraphQLResult<API.ListRoomsQuery>

    if (roomData.data?.listRooms?.items) {
      this.rooms = roomData.data.listRooms.items
    }

    this.subscription.create = (this.$Amplify.API.graphql(
      graphqlOperation(subscriptions.onCreateRoom)
    ) as Observable<any>).subscribe({
      next: (roomData: any) => {
        this.rooms.push(roomData.value.data.onCreateRoom)
      },
    })

    this.subscription.delete = (this.$Amplify.API.graphql(
      graphqlOperation(subscriptions.onDeleteRoom)
    ) as Observable<any>).subscribe({
      next: (roomData: any) => {
        this.rooms.splice(
          this.rooms.findIndex(
            (room) => room.id !== roomData.value.data.onDeleteRoom.id
          )
        )
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.contents {
  @apply flex flex-col justify-center p-4;
}
</style>
