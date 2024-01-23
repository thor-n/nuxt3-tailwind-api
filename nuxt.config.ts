// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    baseURL: '/nuxt3-tailwind-api/'
   
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },

  
})

