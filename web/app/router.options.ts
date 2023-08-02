import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  fallback: false,

  scrollBehavior(to, from, savedPosition) {
    if (!to.hash && to.path === from.path)
      return

    if (to.hash) {
      document
        .querySelector(to.hash)
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' })

      return
    }

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
    {
      name: 'blog',
      path: '/blog',
      component: () => import('~/pages/blog/index.vue'),
    },
    {
      name: 'blog-post',
      path: '/blog/:category/:slug',
      component: () => import('~/pages/blog/_slug.vue'),
    },
    {
      path: '/(privacy-notice|cookie-notice|gdpr|terms-conditions|privacy-notice|dpa|sla)',
      component: () => import('~/pages/_policy.vue'),
    },
  ],
}
