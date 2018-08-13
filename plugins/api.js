import Vue from 'vue'
import Api from '../libs/api'

let api = new Api()
Vue.use(api)

export default function (context) {
  context.app.api = api.addContext(context)
}
