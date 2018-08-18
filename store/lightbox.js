

export const state = () => ({
  visible: false,
  content: ''
})

export const getters = {

}

export const actions = {

}

export const mutations = {
  setVisibility (state, payload) {
    state.visible = payload
  },
  setContent (sate, payload) {
    sate.content = payload
  }
}
