import { defineStore } from 'pinia'

interface IState {
  user: any | null
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: (): IState => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const { $api } = useNuxtApp()

      this.user = await $api('/authentication')
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
  },
})
