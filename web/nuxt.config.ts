// main color -> #3A84FF

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,

  devtools: {
    // Enable devtools (default: true)
    enabled: false,
    // VS Code Server options
    vscode: {},
    // ...other options
  },

  runtimeConfig: {
    // eslint-disable-next-line n/prefer-global/process
    STRAPI_URL: process.env.STRAPI_URL,
    // eslint-disable-next-line n/prefer-global/process
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  app: {
    head: {
      title: 'Easily Implement Server-Side Tagging with ServerTagTracking for Everyone',
      link: [
        // TODO: Add import for Inter font
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Starting server-side tracking can be a difficult task. However, we offer a complete range of services to help you get started right away.' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
})
