

export const state = () => ({
  mobileNavDisplay: false,
  viewport: {
    width: 0,
    height: 0
  },
  scroll: {
    top: 0
  },
  navItems: [
    {
      name: 'Sponsors',
      route: 'sponsors'
    },
    {
      name: 'FAQs',
      route: '/faqs'
    },
    {
      name: 'Attendees',
      route: 'attendees'
    },
  ]
})

export const getters = {
  getMobileNavDisplay(state) {
    return state.mobileNavDisplay
  },
  getViewportWidth(state) {
    return state.viewport.width
  }
}

export const actions = {
  setMobileNavDisplay({ commit, state }, value) {
    commit('setMobileNavDisplay', value)
  },
}

export const mutations = {
  setMobileNavDisplay(state, value) {
    state.mobileNavDisplay = value
  },
  setViewport(state, value) {
    state.viewport = value
  },
  setScroll: (state, value) => {
    state.scroll = value
  },
}
