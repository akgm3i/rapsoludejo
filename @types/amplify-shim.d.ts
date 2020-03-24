// @ts-ignore
import { AmplifyPlugin } from 'aws-amplify-vue'

declare module 'vue/types/vue' {
  interface Vue {
    $Amplify: AmplifyPlugin
  }
}
