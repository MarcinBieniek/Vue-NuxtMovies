// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      }
    ],
  ],
  css: [
    '@/assets/css/main.css',
  ],
  imports: {
    dirs: ["stores"]
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
