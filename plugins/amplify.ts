import Vue from 'vue'
import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
// @ts-ignore
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from '@/src/aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
API.configure(awsconfig)

declare module 'vue/types/vue' {
  interface Vue {
    $Amplify: AmplifyPlugin
  }
}

Vue.prototype.$Amplify = Amplify
