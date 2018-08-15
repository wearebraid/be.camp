<template>
  <footer
    class="page-hero"
    :style="{backgroundImage: footerBackgroundImage}"
    :data-accent-color="accentColor"
  >
    <div class="content">

    </div>
  </footer>
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
    footerBackgroundImage () {
      return `url("${this.background}")`
    },
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding: 8em gutter() 35vw gutter();
  position: relative;
  border-bottom: 1em solid $accent;
  position: relative;
  overflow: hidden;

  @include bp($ml) {
    padding-top: 10em;
    padding-bottom: 15em;
  }

  @supports (-webkit-clip-path: polygon(0 0, 0 0)) or (clip-path: polygon(0 0, 0 0)) {
    border-bottom: none;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 12vw;
      z-index: 2;
      transform: scale(-1);
    }
    &:before {
      background-color: $accent;
      clip-path: polygon(
        0% 28%, 25% 75%, 100% 0%,
        100% 99.5%, 0% 99.5%
      )
    }
    &:after {
      background-color: #fff;
      clip-path: polygon(
        0% 50%, 25% 100%, 100% 10%,
        100.5% 100.5%, 0% 100.5%
      );
    }

    @include bp($m) {
      &:before {
        clip-path: polygon(
          0% 20%, 25% 85%, 100% 0%,
          100% 99.5%, 0% 99.5%
        )
      }
      &:after {
        clip-path: polygon(
          0% 40%, 25% 100%, 100% 3%,
          100.5% 100.5%, 0% 100.5%
        );
      }
    }

    @include bp($l) {
      &:before {
        clip-path: polygon(
          0% 28%, 25% 92%, 100% 0%,
          100% 99.5%, 0% 99.5%
        )
      }
      &:after {
        clip-path: polygon(
          0% 40%, 25% 100%, 100% 3%,
          100.5% 100.5%, 0% 100.5%
        );
      }
    }

    &[data-accent-color="blue"] {
      &:before { background-color: $accent4 !important; }
    }
    &[data-accent-color="black"] {
      &:before { background-color: $dark !important; }
    }
  }

  @include bp($ml) {
    margin-top: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
