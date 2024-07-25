// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      include: [
        "Toast",
        "FileUpload",
      ],
    },
  },
  css: [
    // "primeflex/primeflex.css",
    // "primeicons/primeicons.css",
    "primevue/resources/themes/aura-dark-green/theme.css"
  ],
})
