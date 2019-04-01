<template>
  <nav
    class="off-canvas-nav"
    :class="{'open': mobileNavDisplay}"
  >
    <ul class="site-nav">
      <li @click.stop="$store.commit('system/setMobileNavDisplay', false)">
        <nuxt-link to="/swarm">
          <img
            src="/beCampLogo1.png"
            alt="beCamp"
          />
        </nuxt-link>
      </li>
      <li
        v-for="item in siteNav"
        :key="item.route"
        @click.stop="$store.commit('system/setMobileNavDisplay', false)"
      >
        <nuxt-link :to="item.route">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      mobileNavDisplay: state => state.system.mobileNavDisplay,
      siteNav: state => state.system.navItems
    })
  }
}
</script>

<style lang="scss" scoped>
.off-canvas-nav {
  position: fixed;
  left: 100%;
  top: 0;
  bottom: 0;
  width: 90%;
  max-width: 250px;
  background: #fff;
  box-shadow: inset 0 0 2em 0 rgba($dark, .1);
  z-index: 99;
  transition: transform .5s;

  &.open {
    transform: translate3d(-100%, 0, 0);
    transition: transform .5s;
  }
}

.site-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: block;
    margin: 0;

    &:last-child {
      a {
        border-bottom: 1px solid #f5f5f5;
      }
    }
    a {
      display: block;
      padding: gutter()/2 gutter();
      border-top: 1px solid #f5f5f5;
      text-decoration: none;

      &.nuxt-link-exact-active {
        background-color: rgba($accent, .05);
      }
    }
    img {
      display: block;
      margin: gutter() auto;
      width: 175px;
    }
  }
}
</style>
