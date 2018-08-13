import axios from 'axios'
import Butter from 'buttercms';

class Api {
  /**
   * Create our instance of the api class.
   */
  constructor (context, options) {
    this.axios = axios
    this.context = context
    this.options = options
    this.api = this.axios.create({
      timeout: 10000,
      headers: {
        Accept: 'application/json'
      }
    })
    this.butter = Butter(this.options.butterKey);
  }
}

export default function (context, options) {
  return new Api(context, options)
}
