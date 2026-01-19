import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Enable Nuxt 4 folder structure
  future: {
    compatibilityVersion: 4,
  },
  
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '', // Important for Tailwind: matches .dark class
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})