import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()

  if (to.meta.auth !== true)
    return

  try {
    if (!authStore.isAuthenticated)
      await authStore.fetchUser()
  }
  catch (error) {
    return navigateTo('/login')
  }
})
