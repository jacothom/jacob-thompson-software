export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en-us',
    },
    titleTemplate: '%s | Jacob Thompson Software',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#00bcd4',
          accent: '#cddc39',
          error: '#f44336',
          warning: '#ff9800',
          info: '#607d8b',
          success: '#4caf50',
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://jacobthompsonsoftware.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const posts = await $content('articles').fetch()
      return posts.map((article) => `/blog/${article.slug}`)
    },
  },
  googleAnalytics: {
    id: 'G-H52BXGY28R',
  },
}
