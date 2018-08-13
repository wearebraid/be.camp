export const state = () => ({
  butterPages: {}
})

export const getters = {
}

export const actions = {
  getPage ({commit, state}, page) {
    this.app.api.butter.page.retrieve('*', page)
      .then((res) => {
        if (!state.butterPages[res.data.data.slug]) {
          commit('setPage', {
            key: res.data.data.slug,
            data: res.data.data.fields
          })
        }
      }).catch((res) => {
        console.log(res)
      })
  }
}

export const mutations = {
  setPage(state, payload) {
    state.butterPages[payload.key] = payload.data
  }
}
