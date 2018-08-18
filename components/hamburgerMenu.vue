<template>
  <div
    :data-is-open="mobileNavDisplay"
    class="navigation-trigger primary"
    @click.stop="toggleNavigation"
  >
    <span
      class="navigation-trigger-word"
      v-text="word"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: {
    word: {
      type: String,
      default: 'Menu'
    }
  },
  computed: {
    ...mapState({
      mobileNavDisplay: state => state.system.mobileNavDisplay,
    })
  },
  methods: {
    toggleNavigation () {
      this.$store.commit('system/setMobileNavDisplay', !this.mobileNavDisplay)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-trigger {
  cursor: pointer;

  &.primary {
    display: block;
    position: absolute;
    height: 18px;
    right: gutter();
    text-transform: uppercase;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;

    .nav-is-open & {
      z-index: 30;
    }

    .navigation-trigger-word {
      display: block;
      font-size: 13px;
      font-weight: 200;
      line-height: 30px;
      padding-right: 10px;
      position: absolute;
      right: 20px;
      vertical-align: center;

      &::before {
        right: -20px;
        top: 7px;
      }
    }

    .navigation-trigger-word::before,
    &::before,
    &::after {
      background-color: $dark;
      content: '';
      display: block;
      height: 3px;
      opacity: 1;
      position: absolute;
      transition: width .2s, transform .2s, opacity .2s, top .2s;
      width: 22px;
    }

    &::before {
      right: 0;
      top: 0px;
      width: 30px;
    }

    &::after {
      right: 0;
      top: 14px;
      width: 26px;
    }

    &:hover {
      .navigation-trigger-word::before,
      &::before,
      &::after {
        width: 30px;
      }
    }

    .nav-is-open & {
      .navigation-trigger-word::before,
      &::before,
      &::after {
        top: 7px;
        transform: rotate(225deg);
        width: 30px;
      }

      &::after {
        top: 7px;
        transform: rotate(135deg);
      }

      .navigation-trigger-word::before {
        opacity: 0;
      }
    }
  }
}
</style>
