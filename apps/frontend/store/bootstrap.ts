import { defineStore } from 'pinia'

interface IState {
  user: any | null
  servers: any[]
  gtmContainers: any[]
}

export const useBootstrapStore = defineStore({
  id: 'auth-store',
  state: (): IState => ({
    user: null,
    servers: [],
    gtmContainers: [],
  }),
  actions: {
    async fetch() {
      const { $api } = useNuxtApp()

      const [user, servers] = await Promise.all([
        $api('/authentication'),
        $api('/servers'),
        this.fetchContainers(),
      ])

      this.user = user
      this.servers = servers
    },

    async fetchContainers() {
      const { $api } = useNuxtApp()

      const result = await $api('/gtm-containers')

      this.gtmContainers = result
    },

    async checkToken(token: string) {
      const { $api } = useNuxtApp()

      const { result } = await $api(`/authentication/validate/${token}`)

      return result
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
  },
})
