import Vue from 'vue'
import Amplify from '@aws-amplify/core'
// @ts-ignore
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from '@/src/aws-exports'

Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, {})
