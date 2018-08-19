<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <page-hero
      :background="page.hero_image"
      :accent-color="page.page_accent_color"
    >
      <h1 class="page-title">
        {{ page.page_title }}
      </h1>
      <div class="page-description">
        {{ page.page_description }}
      </div>
    </page-hero>

    <section class="page-section">
      <div class="wysiwyg-block">
        <div v-html="page.page_content"></div>
        <becamp-schedule />
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  async asyncData ({store, params}) {
    try {
      await store.dispatch('getPage', 'schedule')
    } catch(err) {
      console.log(err)
    }
  },
  created () {
    this.$store.commit('setCurrentPageAccentColor', this.page.page_accent_color)
  },
  computed: {
    ...mapState({
      butterPages: state => state.butterPages,
    }),
    page () {
      return this.butterPages['schedule'] ? this.butterPages['schedule'] : {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
