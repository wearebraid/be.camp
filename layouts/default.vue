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
      <site-prompt
        prompt-id="becamp-hats"
        message="Embroidered beCamp hats are available for order! Show your support for the local Charlottesville tech community. All proceeds go to support beCamp and beSwarm event expenses."
        cta-link="https://www.customink.com/fundraising/becamp-hat"
        cta-message="Order Now"
      />
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

