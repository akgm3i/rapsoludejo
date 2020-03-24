import Vuex from 'vuex'
import { extractVuexModule, createProxy } from 'vuex-class-component'
import UserStore from '~/store/modules/users'

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(UserStore),
  },
})

export const vxm = {
  user: createProxy(store, UserStore),
}
