
<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <page-hero
      :background="page.homepage_hero_image"
      :accent-color="page.page_accent_color"
    >
      <div class="inner">
        <div class="event-headline">
          <div v-html="page.homepage_hero_content"></div>
          <button>Register Now</button>
        </div>

        <div class="event-countdown">
          <div class="countdown-timer">
            <div class="countdown-label">
              {{ page.event_date_label }}
            </div>
            <countdown-clock />
          </div>
          <div class="intro-video">
            <img src="/play.svg">
            <p>What is beCamp?</p>
          </div>
        </div>
      </div>
    </page-hero>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      pageName: 'homepage'
    }
  },
  created () {
    this.getPage(this.pageName)
  },
  computed: {
    ...mapState([
      'butterPages'
    ]),
    page () {
      return this.butterPages[this.pageName]
    }
  },
  methods: {
    ...mapActions([
      'getPage',
      'setEventTime'
    ])
  },
  watch: {
    page () {
      this.setEventTime(this.page.event_start_date)
    }
  }
}
</script>


<style scoped lang="scss">
  .page-hero {
    .inner {
      display: flex;
      flex-direction: column;
      max-width: 800px;

      @include bp($ml) {
        flex-direction: row;
        align-items: center;
        margin: auto;
      }
    }

    .event-headline {
      text-align: center;
      font-size: 1rem;
      max-width: 350px;
      margin: auto auto 2em auto;

      @include bp($ml) {
        text-align: left;
        padding-left: gutter()*2;
        order: 2;
      }
    }

    .event-countdown {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .countdown-timer {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include bp($ml) {
        align-items: flex-start;
      }
    }
    .countdown-label {
      color: $accent;
      font-size: 4.5vw;
      margin-bottom: .25em;
      font-style: italic;

      @include bp($ms) {
        font-size: 1.1em;
      }
    }

    .intro-video {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5em;

      img {
        max-width: 75px;
        margin-bottom: .25em;
        cursor: pointer;
        transition: transform .33s;

        &:hover {
          transform: scale(1.05);
        }
      }

      p {
        font-size: 1rem;
      }
    }
  }
</style>
