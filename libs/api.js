import axios from 'axios'
import Butter from 'buttercms';

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
