
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
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      pageName: 'homepage'
    }
  },
  created () {
    this.getPage(this.pageName)
  },
  computed: {
    ...mapState([
      'butterPages'
    ]),
    page () {
      return this.butterPages[this.pageName]
    }
  },
  methods: {
    ...mapActions([
      'getPage'
    ])
  }
}
</script>


<style scoped lang="scss">

</style>
