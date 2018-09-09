

export const state = () => ({
  mobileNavDisplay: false,
  viewport: {
    width: 960,
    height: 0
  },
  dismissedPrompts: [],
  scroll: {
    top: 0
  },
  navItems: [
    {
      name: 'Schedule',
      route: '/schedule'
    },
    {
      name: 'Sponsors',
      route: '/sponsors'
    },
    {
      name: 'FAQs',
      route: '/faqs'
    },
    {
      name: 'History',
      route: '/history'
    },
    {
      name: 'Attendees',
      route: '/attendees'
    },
  ]
})

export const getters = {
  getMobileNavDisplay(state) {
    return state.mobileNavDisplay
  },
  getViewportWidth(state) {
    return state.viewport.width
  },
  getDismissedPrompts(state) {
    return state.dismissedPrompts
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
  setScroll(state, value) {
    state.scroll = value
  },
  setDismissedPrompt(state, value) {
    state.dismissedPrompts.push(value)
  }
}
