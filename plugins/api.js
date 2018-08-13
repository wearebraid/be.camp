import api from '../libs/api'

export default function (context) {
  context.app.api = api(context, {
    butterKey: process.env.butterKey
  })
}
