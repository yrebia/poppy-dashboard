// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-headlessui'
  ],
  tailwindcss: {
    viewer: false
  },
  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google' },
      { name: 'DM Mono', provider: 'google' }
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic']
    }
  }
})
