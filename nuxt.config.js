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
    title: 'becamp.org',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Open source website for becamp.org' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/api',
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
    'nuxt-sass-resources-loader'
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

