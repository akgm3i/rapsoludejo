import { Plugin } from '@nuxt/types'
import Amplify from '@aws-amplify/core'
import API from '@aws-amplify/api'
import Auth from '@aws-amplify/auth'
import awsconfig from '~/src/aws-exports'

import { initializeAmplify } from '~/utils/amplify'

Amplify.register(API)
Amplify.register(Auth)

Amplify.configure(awsconfig)

const accessor: Plugin = (_context, inject) => {
  inject('Amplify', Amplify)
  initializeAmplify(Amplify)
}

export default accessor
