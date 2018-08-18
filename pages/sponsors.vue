<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <page-hero
      :background="page.homepage_hero_image"
      :accent-color="page.page_accent_color"
    >

    </page-hero>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  async fetch ({store, params}) {
    try {
      await store.dispatch('getPage', 'sponsors')
    } catch(err) {
      console.log(err)
    }
  },
  computed: {
    ...mapState({
      butterPages: state => state.butterPages,
      attendees: state => state.attendees
    }),
    page () {
      return this.butterPages['sponsors'] ? this.butterPages['sponsors'] : {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
