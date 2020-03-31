import { Amplify } from '~/@types/amplify-shim'

// eslint-disable-next-line import/no-mutable-exports
let $Amplify: Amplify

export function initializeAmplify(amplifyInstance: Amplify) {
  $Amplify = amplifyInstance
}

export { $Amplify }
