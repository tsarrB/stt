import { defineStore } from 'pinia'

interface IState {
  user: any | null
  gtmContainers: any[]
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: (): IState => ({
    user: null,
    gtmContainers: [],
  }),
  actions: {
    async fetchUser() {
      const { $api } = useNuxtApp()

      const [user, gtmContainers] = await Promise.all([
        $api('/authentication'),
        $api('/gtm-containers'),
      ])

      this.user = user
      this.gtmContainers = gtmContainers
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
