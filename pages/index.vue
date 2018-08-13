
<template>
  <div class="page-wrapper">
    <page-hero>

    </page-hero>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      pageName: 'homepage'
    }
  },
  created () {
    this.getPage(this.pageName)
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
