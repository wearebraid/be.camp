<template>
  <header class="site-header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/beCampLogo1.png" alt="beCamp">
      </nuxt-link>
    </div>
    <hamburger-menu
      :word="''"
      v-show="viewportWidth < 860"
    />
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      viewportWidth: 'system/getViewportWidth'
    })
  }
}

</script>

<style lang="scss" scoped>
.site-header {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  padding: gutter();
  display: flex;

  @include bp($m) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-width: 250px;
    text-align: center;

    @include bp($m) {
      margin: 0;
      text-align: left;
    }

    img {
      max-height: 50px;
    }
  }

  .nav {
    font-size: 1.1rem;

    @include bp($m) {
      padding-top: gutter()/4;
      display: block;
      color: #444;
    }
  }
}
</style>
