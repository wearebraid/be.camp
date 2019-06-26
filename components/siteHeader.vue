<template>
  <header class="site-header">
    <div class="inner">
      <div class="logo">
        <braid-link to="/">
          <img
            src="/beCampLogo1.png"
            alt="beCamp"
          />
        </braid-link>
      </div>

      <hamburger-menu
        :word="''"
        v-show="viewportWidth < 860"
      />

      <nav
        class="site-nav"
        v-show="viewportWidth >= 860"
      >
        <ul class="site-nav">
          <li
            v-for="item in siteNav"
            :key="item.route"
          >
            <braid-link :to="item.route">{{ item.name }}</braid-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      siteNav: state => state.system.navItems
    }),
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

  .inner {
    width: 100%;
    @include row();
    display: flex;

    @include bp($m) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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

  .site-nav {
    padding: gutter()/2 0 0 0;
    display: block;
    font-size: 1rem;
    display: flex;
    list-style-type: none;

    li {
      margin-right: gutter()*2;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: $dark;
        text-decoration: none;
        font-size: 1.25rem;

        &:hover,
        &.nuxt-link-exact-active {
          color: $accent;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
