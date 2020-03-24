import { action, mutation } from 'vuex-class-component'
import { CognitoUser } from 'amazon-cognito-identity-js'
import consola from 'consola'

import VuexModule from '~/utils/baseModule'
import { $Amplify } from '~/utils/amplify'

export default class UserStore extends VuexModule.With({ namespaced: 'user' }) {
  private id = ''
  username = ''
  email = ''
  nickname = ''
  icon = ''
  roomId = ''
  createdAt = ''
  updatedAt = ''
  isSignedIn = false

  @mutation changeUsername(username: string) {
    this.username = username
  }

  @mutation updateIsSignedIn(status: boolean) {
    this.isSignedIn = status
  }

  @action async signUp(payload: {
    username: string
    email: string
    password: string
  }) {
    try {
      await $Amplify.Auth.confirmSignUp(payload.email, 'isVerifiedEmail')
    } catch (err) {
      if (err.name === 'NotAuthorizedException') {
        throw new Error('this email already used.')
      } else if (err.name !== 'UserNotFoundException') {
        throw err
      }
    }
    try {
      const user = await $Amplify.Auth.signUp({
        username: payload.username,
        password: payload.password,
        attributes: {
          email: payload.email,
        },
      })
      return user
    } catch (err) {
      consola.error(err)
    }
  }

  @action async signIn(payload: { username: string; password: string }) {
    try {
      const user = await $Amplify.Auth.signIn(
        payload.username,
        payload.password
      )
      this.changeUsername(user.getUsername())
      this.updateIsSignedIn(true)
    } catch (err) {
      if (err.name === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.name === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else {
        throw err
      }
    }
  }

  @action async signOut() {
    await $Amplify.Auth.signOut()
      .then((data: any) => {
        this.isSignedIn = false
        return consola.log(data)
      })
      .catch((err: Error) => {
        throw err
      })
  }

  @action async retrieveSession() {
    await $Amplify.Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        consola.log(user)
        this.isSignedIn = true
        this.username = user.getUsername()
      })
      .catch((err: Error) => {
        throw err
      })
  }
}
