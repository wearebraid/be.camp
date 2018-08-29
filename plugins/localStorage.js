import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'be.camp',
      paths: [
        'system.dismissedPrompts'
      ]
  })(store)
}
