import { action, mutation } from 'vuex-class-component'
import {
  graphqlOperation,
  GraphQLResult,
  GRAPHQL_AUTH_MODE,
} from '@aws-amplify/api'

import { CreateUserInput, GetUserQuery } from '~/utils/API'
import * as queries from '~/utils/graphql/queries'
import * as mutations from '~/utils/graphql/mutations'
import VuexModule from '~/utils/baseModule'
import { $Amplify } from '~/utils/amplify'

export default class UserStore extends VuexModule.With({ namespaced: 'user' }) {
  id = ''
  username = ''
  email = ''
  icon = ''
  roomId = ''
  createdAt = ''
  updatedAt = ''
  isSignedIn = false

  @mutation changeUserId(id: string) {
    this.id = id
  }

  @mutation changeUsername(username: string) {
    this.username = username
  }

  @mutation changeEmail(email: string) {
    this.email = email
  }

  @mutation updateIsSignedIn(status: boolean) {
    this.isSignedIn = status
  }

  @action async signUp(payload: {
    username: string
    email: string
    password: string
  }) {
    await $Amplify.Auth.confirmSignUp(payload.email, 'isVerifiedEmail').catch(
      (err) => {
        if (err.name !== 'UserNotFoundException') {
          return Promise.reject(err)
        }
      }
    )

    const user = await $Amplify.Auth.signUp({
      username: payload.email,
      password: payload.password,
    })

    const userInput: CreateUserInput = {
      id: user.userSub,
      username: payload.username,
      email: user.user.getUsername(),
    }

    await $Amplify.API.graphql({
      query: mutations.createUser,
      variables: { input: userInput },
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    })
  }

  @action async signIn(payload: { email: string; password: string }) {
    const user = await $Amplify.Auth.signIn(payload.email, payload.password)

    const result = (await $Amplify.API.graphql(
      graphqlOperation(queries.getUser, { id: user.attributes.sub })
    )) as GraphQLResult<GetUserQuery>

    if (!result.data?.getUser) {
      return
    }

    const userdata = result.data.getUser

    this.updateIsSignedIn(true)
    this.changeUserId(userdata.id)
    this.changeUsername(userdata.username)
    this.changeEmail(userdata.email)
  }

  @action async signOut() {
    await $Amplify.Auth.signOut()
    this.updateIsSignedIn(false)
  }

  @action async sendConfirmMail(payload: { email: string }) {
    await $Amplify.Auth.resendSignUp(payload.email)
  }

  @action async retrieveSession() {
    const user = await $Amplify.Auth.currentAuthenticatedUser().catch(() =>
      this.updateIsSignedIn(false)
    )

    if (!user) {
      return
    }

    const result = (await $Amplify.API.graphql(
      graphqlOperation(queries.getUser, { id: user.attributes.sub })
    )) as GraphQLResult<GetUserQuery>

    if (!result.data?.getUser) {
      return
    }

    const userdata = result.data.getUser

    this.updateIsSignedIn(true)
    this.changeUserId(userdata.id)
    this.changeUsername(userdata.username)
    this.changeEmail(userdata.email)
  }
}
