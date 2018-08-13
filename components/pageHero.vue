<template>
  <section
    class="page-hero"
    :style="{backgroundImage: heroBackgroundImage}"
    :data-accent-color="accentColor"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: '/hero-1.jpg'
    },
    accentColor: {
      type: String,
      default: 'orange'
    }
  },
  computed: {
    heroBackgroundImage () {
      return `url("${this.background}")`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding-bottom: 23em;
  position: relative;
  border-bottom: 1em solid $accent;
  z-index: -1;

  @supports (-webkit-clip-path: polygon(0 0, 0 0)) or (clip-path: polygon(0 0, 0 0)) {
    border-bottom: none;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12vw;
    }
    &:before {
      background-color: $accent;
      clip-path: polygon(
        0% 28%, 25% 92%, 100% 0%,
        100% 99.9%, 0% 99.9%
      )
    }
    &:after {
      background-color: #fff;
      clip-path: polygon(
        0% 40%, 25% 100%, 100% 1%,
        100.5% 100.5%, 0% 100.5%
      );
    }

    &[data-accent-color="blue"] {
      &:before { background-color: $accent4; }
    }
    &[data-accent-color="black"] {
      &:before { background-color: $dark; }
    }
  }

  @include bp($ml) {
    margin-top: 0;
  }
}
</style>
