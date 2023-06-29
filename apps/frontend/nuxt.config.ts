// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  components: [
    { path: '~/Ui', global: true, prefix: 'Ui' },
    '~/components',
  ],

  plugins: ['./plugins/api'],

  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      title: 'Server Tag Tracking - Dashboard',
      link: [
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },

        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
})
