import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
    fonts: {
    families: [
      {
        name: "Roboto",
        weights: [400, 500, 600, 700, 800, 900],
      },
      {
        name: "Kantumruy Pro",
        weights: [500, 600, 700, 800, 900],
      },
    ],
  },
})