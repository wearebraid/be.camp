# be.Camp

Open source website for https://be.camp. Pull requests and issue reports are welcomed.

beCamp is a Charlottesville tech conference planned by the people who show up. On the evening prior to the conference, attendees socialize over food, nominate topics they would like to present on or see discussed during the conference, and then cast their votes. Conference Organizers then tally votes and post the schedule for the following day. 

You don't need to be an expert in a subject to suggest it for discussion! After topics have been voted on, whoever wants to dive in will help arrange Saturday's schedule. We'll post it here so that you'll be able to choose your own path through the day. 

[You can learn more about the Unconference movement here](https://en.wikipedia.org/wiki/Unconference).

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static copy of project
$ npm run generate
```

##3rd-Party APIs
This iteration of the beCamp website pulls data from [ButterCMS](https://buttercms.com) and [Airtable](https://airtable.com) to populate site content. For API access, you can message `@andrew` in the `#becamp` channel on [Cville Slack](http://bit.ly/slack-cville). 

To connect to the APIs, you will need to create a `.env` file in the project root directory and add the API keys in the following format:

```
BUTTERKEY=your_api_key
AIRTABLEKEY=your_api_key
```

**never commit your API keys to the project history. the `.env` is gitignored by default.**

##Docs
This project is built on Nuxt.js, an opinionated framework for building with Vue.js. For a detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

