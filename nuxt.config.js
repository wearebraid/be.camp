const dotenv = require('dotenv');
dotenv.config();

const butterKey = process.env.BUTTERKEY || null
const airtableKey = process.env.AIRTABLEKEY || null

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
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e67711' }
    ],
    script: [
      { src: '/youtube.js' },
      { src: 'https://www.youtube.com/iframe_api' }
    ]
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/api',
    {src: '~/plugins/lazyload', ssr: false},
    {src: '~/plugins/events', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/moment'
  ],
  sassResources: [
    './assets/sass/global.scss'
  ],
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

