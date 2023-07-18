import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  fallback: false,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash || to.path === from.path)
      return

    if (savedPosition)
      return savedPosition

    return { top: 0, left: 0 }
  },

  routes: _routes => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home.vue'),
    },
  ],
}
