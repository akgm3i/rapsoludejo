import { APIClass } from '@aws-amplify/api'
import { AuthClass } from '@aws-amplify/auth'

declare class Amplify {
  API: APIClass
  Auth: AuthClass
}

declare module 'vue/types/vue' {
  interface Vue {
    $Amplify: Amplify
  }
}

declare module '@nuxt/types' {
  interface Context {
    $Amplify: Amplify
  }
}
