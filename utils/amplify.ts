// @ts-ignore
import { AmplifyPlugin } from 'aws-amplify-vue'
// eslint-disable-next-line import/no-mutable-exports
let $Amplify: AmplifyPlugin

export function initializeAmplify(amplifyInstance: AmplifyPlugin) {
  $Amplify = amplifyInstance
}

export { $Amplify }
