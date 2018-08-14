<template>
  <section
    class="page-hero"
    :style="{backgroundImage: videoURL ? 'none' : heroBackgroundImage}"
    :data-accent-color="accentColor"
  >
    <div class="content">
      <slot />
    </div>

    <div
      class="background-video"
      v-if="videoURL"
    >
      <div class="video-bg cover">
        <div class="video-fg">
          <iframe
            frameborder="0"
            height="100%"
            width="100%"
            :src="videoURL"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    background: {
      type: String,
      default: '/hero-1.jpg'
    },
    accentColor: {
      type: String,
      default: 'orange'
    },
    videoBackground: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      viewportWidth: 'system/getViewportWidth'
    }),
    heroBackgroundImage () {
      return `url("${this.background}")`
    },
    videoURL () {
      if (this.viewportWidth >= 860) {
        return `https://youtube.com/embed/${this.videoBackground}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding: 5em gutter() 35vw gutter();
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
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12vw;
    }
    &:before {
      background-color: $accent;
      clip-path: polygon(
        0% 28%, 25% 75%, 100% 0%,
        100% 99.9%, 0% 99.9%
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
          100% 99.9%, 0% 99.9%
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
          100% 99.9%, 0% 99.9%
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

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }

  .video-bg {
    background: white;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    opacity: .15;
  }
  .video-bg .video-fg,
  .video-bg iframe,
  .video-bg video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /*
  Full page video background
  Simulate object-fit: cover
  Based on http://fvsch.com/code/video-background/
  */
  @media (min-aspect-ratio: 16/9) {
    .video-bg.cover .video-fg { height: 300%; top: -100%; }
  }
  @media (max-aspect-ratio: 16/9) {
    .video-bg.cover .video-fg { width: 300%; left: -100%; }
  }

  @supports (object-fit: cover) {
    .video-bg.cover .video-fg.supports-cover {
      width: 100%;
      height: 100%;
      top: 0; left: 0;
    }
    .video-bg.cover video {
      object-fit: cover;
    }
  }

  /*
    Vertical centering for 16/9 youtube iframes and video elements
    Simulate object-fit: contain for entire element, not just contents of element
  */
  .video-bg.contain {
    font-size: 0;
  }
  .video-bg.contain * {
    font-size: 16px;
  }
  .video-bg.contain:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .video-bg.contain .video-fg {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 */
    pointer-events: none;
  }
  .video-bg.contain iframe,
  .video-bg.contain video {
    pointer-events: auto;
  }

  @media (min-aspect-ratio: 16/9) {
    .video-bg.contain .video-fg {
      height: 100%;
      padding-bottom: 0;
      max-width: ((30vh) * 16 / 9);
      left: 50%;
      margin-left: ((30vh) * 16 / 9) / -2;
    }
  }
}
</style>
