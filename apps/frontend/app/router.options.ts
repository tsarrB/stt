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
      meta: {
        auth: true,
      },
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('~/pages/login.vue'),
    },
    {
      name: 'sign-up',
      path: '/sign-up',
      component: () => import('~/pages/sign-up.vue'),
    },
  ],
}
