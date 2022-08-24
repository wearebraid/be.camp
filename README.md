# be.Camp

Open source website for https://be.camp.

<img src="https://raw.githubusercontent.com/wearebraid/be.camp/master/static/beCampLogo1.png" width="250">

### Pull requests and issue reports are welcomed.

beCamp is a Charlottesville tech conference planned by the people who show up. On the evening prior to the conference, attendees socialize over food and drink, nominate topics they would like to present on or see discussed during the conference, and then cast their votes. You don't need to be an expert in a subject to suggest it for discussion! After topics have been voted on, volunteers (this could be you) dive in and arrange the schedule for the day of the conference.

[You can learn more about the Unconference movement here](https://en.wikipedia.org/wiki/Unconference).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static copy of project
$ npm run generate:local
```

Note that `npm run dev` hosts on 0.0.0.0. Edit `HOST` in package.json to adjust this behavior (e.g. to 127.0.0.1).

## 3rd-Party APIs

This iteration of the beCamp website pulls data from [ButterCMS](https://buttercms.com) and [Airtable](https://airtable.com) to populate site content. For API access, you can message `@andrew` in the `#becamp` channel on [Cville Slack](http://bit.ly/slack-cville).

To connect to the APIs, you will need to create a `.env` file in the project root directory and add the API keys in the following format:

```
BUTTERKEY=<your-butter-key>
AIRTABLEKEY=<your-airtable-key>
```

**never commit your API keys to the project history. the `.env` file is gitignored by default.**

## Docs

This project is built on Nuxt.js, an opinionated framework for building with Vue.js. For a detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
