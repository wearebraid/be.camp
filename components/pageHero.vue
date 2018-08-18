<template>
  <section
    class="page-hero"
    :style="{backgroundImage: heroBackgroundImage}"
    :data-accent-color="currentPageAccentColor"
  >
    <div class="content">
      <slot />
    </div>

    <no-ssr>
      <div
        class="background-video"
        v-show="showVideo"
        v-if="videoBackground"
      >
        <div
          class="video-bg cover"
          :class="{show: unmaskVideo}"
        >
          <div class="video-fg">
            <div id="yt-player"></div>
          </div>
        </div>
      </div>
    </no-ssr>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  props: {
    background: {
      type: String,
      default: '/hero-1.jpg'
    },
    videoBackground: {
      type: String
    }
  },
  data () {
    return {
      showVideo: true,
      unmaskVideo: false,
      player: null
    }
  },
  computed: {
    ...mapState([
      'youtubeAPIReady',
      'currentPageAccentColor'
    ]),
    ...mapGetters({
      viewportWidth: 'system/getViewportWidth'
    }),
    heroBackgroundImage () {
      return this.background ? `url("${this.background}")` : `url("/hero-1.jpg")`
    },
    shouldBootVideo () {
      return ((!this.player || !this.player.A) && this.viewportWidth >= 860)
    },
  },
  methods: {
    bootBackgroundVideo () {
      if (this.youtubeAPIReady && this.shouldBootVideo) {
        if (document.getElementById('yt-player')) {
          this.player = new YT.Player('yt-player', {
            videoId: this.videoBackground,
            events: {
              'onReady': this.onPlayerReady,
              'onStateChange': this.onPlayerStateChange
            }
          })
        } else {
          window.setTimeout(() => this.bootBackgroundVideo(), 500)
        }
      }
    },
    onPlayerReady(event) {
      this.player.mute()
      this.player.playVideo()
      this.unmaskVideo = true
    },
    onPlayerStateChange(event) {
      if(event.data === 0) {
        this.player.seekTo(0)
      }
    }
  },
  watch: {
    viewportWidth: {
      immediate: true,
      handler () {
        if (this.viewportWidth >= 860) {
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      }
    },
    youtubeAPIReady: {
      immediate: true,
      handler () {
        this.bootBackgroundVideo()
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
  padding: 6em gutter() 20vw gutter();
  position: relative;
  border-bottom: 1em solid $accent;
  position: relative;
  overflow: hidden;

  @include bp($m) {
    padding-top: 7em;
    padding-bottom: 6em;
  }
  @include bp($ml) {
    padding-top: 10em;
    padding-bottom: 12em;
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
      z-index: 2;
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
    z-index: 0;
    pointer-events: none;
  }

  .video-bg {
    background: #fff;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    opacity: 0;
    transition: opacity 2s .5s;

    &.show {
      opacity: 1;

      .video-fg {
        opacity: .15;
        transition: opacity 1s;
      }
    }
  }
  .video-bg,
  .video-fg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & /deep/ iframe {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
    pointer-events: none;
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
.page-title {
  text-align: center;
  font-weight: bold;
}
.page-description {
  text-align: center;
}
</style>
