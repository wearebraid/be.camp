import axios from 'axios'
import Butter from 'buttercms';
import Airtable from 'airtable'

class Api {
  /**
   * Create our instance of the api class.
   */
  constructor () {
    this.axios = axios
    this.butter = Butter(process.env.butterKey);
  }

  /**
   * Installs this instance as a plugin of Vue.
   * @param {Vue} Vue
   * @param {null|Object} options
   */
  install (Vue, options) {
    this.options = options
    this.api = this.axios.create({
      timeout: 10000,
      headers: {
        Accept: 'application/json'
      }
    })
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.airtableKey
    })
    // Access the generated Airtable API docs for the base, and note the URL:
    // https://airtable.com/<key>/api/docs
    //
    // Use this <key> as the string argument to Airtable.base('...').
    this.airtable = Airtable.base('appLR1JlBgJZYqKTc') // beCamp 2022
    Vue.prototype.$api = this
  }

  /**
   * Bind in the context of our current instance.
   */
  addContext (context) {
    this.context = context
    return this
  }
}

export default function () {
  return new Api()
}
