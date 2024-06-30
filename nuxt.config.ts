// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],

  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'}
      ]

    }
  },

  css: [
    '~/assets/css/main.css'
  ]
})
