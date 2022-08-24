
const isProd = process.env.NODE_ENV === 'production'
const download = require('image-downloader')
const fs = require('fs')
const { getRemoteImgContentType } = require('./libs/build')
const md5 = require('blueimp-md5')

if (!isProd || process.env.LOCAL_ENV) {
  require('dotenv').config()
}

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
      { hid: 'description', name: 'description', content: 'beCamp is a popular Charlottesville tech conference planned by the people who show up. Come spend the day with your peers and learn something new!' },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'beCamp is a popular Charlottesville tech conference planned by the people who show up. Come spend the day with your peers and learn something new!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e67711' }
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
    {src: '~/plugins/webFontLoader', mode: 'client'},
    {src: '~/plugins/lazyload', mode: 'client'},
    {src: '~/plugins/events', mode: 'client'},
    {src: '~/plugins/localStorage.js', mode: 'client'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FF750F' },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
  ],
  styleResources: {
    scss: [
      './assets/sass/global.scss'
    ],
  },
  sitemap: {
    hostname: 'https://be.camp',
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  'google-analytics': {
    id: 'UA-124258426-1',
    debug: {
      sendHitTask: isProd
    }
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
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
  },

  hooks: {
    generate: {
      async page (payload) {
        // create the remote images directory if it does not exist
        if (!fs.existsSync('./dist/remote_img')) {
          fs.mkdirSync('./dist/remote_img')
          fs.mkdirSync('./dist/remote_img/airtable')
          fs.mkdirSync('./dist/remote_img/buttercms')
        }

        // find all remote image paths
        let matches = payload.html.match(/(http(s?):)([/|.|\w|\s|-|%])*\.(?:jpg|jpeg|gif|png|svg)/g)

        if (matches) {
          // download all remote images to our local build folder
          let localUrls = await Promise.all(
            matches.map(async url => {
              let fileExtension = url.split('.').pop();
              const {filename} = await download.image({
                url: url,
                dest: `./dist/remote_img/airtable/${md5(url)}.${fileExtension}` // calc the md5 to avoid issues with really weird file names
              })
              return filename.replace('/dist/', '/')
            })
          )

          // loop over each image result nad swap the remote path with the local one
          for (let index = 0; index < matches.length; index++) {
            payload.html = payload.html.replace(matches[index], localUrls[index])
          }
        }

        // special second pass for butterCMS images
        // which have no ending file extension suffix
        // and would probably work if I just copied them
        // but not having the file extension feels wrong
        // so here we are...
        let butterMatches = payload.html.match(/(https:\/\/cdn.buttercms.com)([/|a-zA-Z0-9_])*/g)

        if (butterMatches) {
          let localButterUrls = await Promise.all(
            butterMatches.map(async url => {
              let fileFormat = await getRemoteImgContentType(url)
              switch (fileFormat) {
                case 'image/svg+xml':
                  fileFormat = '.svg'
                  break;
                case 'image/jpeg':
                  fileFormat = '.jpg'
                  break;
                case 'image/png':
                  fileFormat = '.png'
                  break;
              }
              const {filename} = await download.image({
                url: url,
                dest: `./dist/remote_img/buttercms/${url.replace('https://cdn.buttercms.com/', '')}${fileFormat}`
              })
              return filename.replace('/dist/', '/')
            })
          )

          // loop over each image result and swap the remote path with the local one
          for (let index = 0; index < butterMatches.length; index++) {
            payload.html = payload.html.replace(butterMatches[index], localButterUrls[index])
          }
        }
      }
    }
  }
}

