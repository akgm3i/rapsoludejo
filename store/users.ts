import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { ISignUpResult } from 'amazon-cognito-identity-js'
import Vuex from 'vuex'
import {
  createModule,
  // mutation,
  action,
  extractVuexModule,
  createProxy,
} from 'vuex-class-component'
import awsconfig from '@/src/aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const VuexModule = createModule({
  namespaced: 'user',
  strict: false,
  target: 'nuxt',
})

export class UserStore extends VuexModule {
  private id = ''
  username = ''
  email = ''
  nickname = ''
  icon = ''
  roomId = ''
  createdAt = ''
  updatedAt = ''

  @action async signUp(payload: any) {
    try {
      await Amplify.Auth.confirmSignUp(payload.email, 'isVerifiedEmail')
    } catch (err) {
      if (err.code === 'NotAuthorizedException') {
        return 'email already used.'
      } else if (err.code === 'UserNotFoundException') {
        console.log('user not found.')
      } else {
        console.log(err)
        throw err
      }
    }
    try {
      const user: ISignUpResult = await Amplify.Auth.signUp({
        username: payload.username,
        password: payload.password,
        attributes: {
          email: payload.email,
        },
      })
      return user
    } catch (err) {
      console.log(err)
    }
  }

  @action async confirmSignUp(code: string) {
    try {
      const user: ISignUpResult = await Amplify.Auth.confirmSignUp(
        this.username,
        code
      )
      console.log(user)
    } catch (err) {
      console.log(err)
    }
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(UserStore),
  },
})

// Creating proxies.
export const vxm = {
  user: createProxy(store, UserStore),
}
