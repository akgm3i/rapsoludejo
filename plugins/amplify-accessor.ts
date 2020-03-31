import { Plugin } from '@nuxt/types'
import Amplify from '@aws-amplify/core'
import API from '@aws-amplify/api'
import Auth from '@aws-amplify/auth'
import PubSub from '@aws-amplify/pubsub'
import awsconfig from '~/utils/aws-exports'

import { initializeAmplify } from '~/utils/amplify'

Amplify.register(API)
Amplify.register(Auth)
Amplify.register(PubSub)

Amplify.configure(awsconfig)

const accessor: Plugin = (context, inject): void => {
  context.$Amplify = Amplify
  inject('Amplify', Amplify)
  initializeAmplify(context.$Amplify)
}

export default accessor
