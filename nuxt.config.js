const dotenv = require('dotenv');
dotenv.config();

const butterKey = process.env.BUTTERKEY || null
const airtableKey = process.env.AIRTABLEKEY || null

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    butterKey,
    airtableKey
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'beCamp - The Charlottesville Unconference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'beCamp is a popular Charlottesville tech conference planned by the people who show up. Come spend the day with your peers and learn something new!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e67711' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:700' }
    ],
    script: [
      { src: '/youtube.js', async: true, rel: 'preload' },
      { src: '/typekit.js', async: true, rel: 'preload' },
      { src: 'https://www.youtube.com/iframe_api', async: true, rel: 'preload' },
    ]
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/api',
    {src: '~/plugins/lazyload', ssr: false},
    {src: '~/plugins/events', ssr: false},
    {src: '~/plugins/localStorage.js', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FF750F' },
  /*
  ** Modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/moment',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
  ],
  sassResources: [
    './assets/sass/global.scss'
  ],
  sitemap: {
    hostname: 'https://be.camp',
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate,
    exclude: [
      '/history'
    ]
  },
  'google-analytics': {
    id: 'UA-124258426-1',
    debug: {
      sendHitTask: isProd
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

