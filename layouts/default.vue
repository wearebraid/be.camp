<template>
  <div
    class="site-wrapper"
    :class="{'nav-open': mobileNavDisplay}"
  >
    <off-canvas-nav />
    <div
      class="page"
      @click.stop="$store.commit('system/setMobileNavDisplay', false)"
    >
      <easter-egg />
      <site-header />
      <div class="page-content">
        <nuxt />
      </div>
      <site-footer />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      mobileNavDisplay: state => state.system.mobileNavDisplay
    })
  }
}
</script>


<style lang="scss" scoped>
.site-wrapper {
  &.nav-open {
    & > .page {
      transform: translate3d(-250px, 0, 0);
      transition: transform .5s;
    }
  }

  & > .page {
    transition: transform .5s;
  }

  .page-content {
    background-color: #fff;
  }
}
</style>

