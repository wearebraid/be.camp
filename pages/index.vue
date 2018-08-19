
<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <html-lightbox />

    <page-hero
      :background="page.homepage_hero_image"
      :accent-color="page.page_accent_color"
      :video-background="page.homepage_background_video"
    >
      <div class="inner">
        <div class="event-headline">
          <div v-html="setAttendeeCount(page.homepage_hero_content)"></div>
          <a
            href="https://airtable.com/shr2NPFSOnIHUBvlY"
            target="_blank"
            rel="noopener"
            class="action"
          >
            <button>Register Now</button>
          </a>
          <nuxt-link
            to="/schedule"
            class="action"
          >
            <button class="alt">View Schedule</button>
          </nuxt-link>
        </div>

        <div class="event-countdown">
          <div class="countdown-timer">
            <div class="countdown-label">
              {{ page.event_date_label }}
            </div>
            <countdown-clock />
          </div>
          <div
            class="intro-video"
            v-if="page.homepage_hero_video_youtube_id"
          >
            <a
              :href="`https://www.youtube.com/watch?v=${page.homepage_hero_video_youtube_id}`"
              target="_blank" rel="noopener"
              class="no-decoration"
              @click.prevent.stop="showLightbox(youtubeVideo)"
            >
              <img src="/play.svg">
              <p>What is beCamp?</p>
            </a>
          </div>
        </div>
      </div>
    </page-hero>

    <section class="page-section what-is-becamp">
      <h1 class="section-title">What is beCamp?</h1>
      <template v-for="(block, index) in page.what_is_becamp">
        <media-block
          :content="block"
          :key="block.copy"
          :alt-layout="index%2 === 1"
        />
      </template>
      <div
        class="cta"
        v-if="page.homepage_hero_video_youtube_id"
      >
        <h2>Need a quick overview? </h2>
        <a
          :href="`https://www.youtube.com/watch?v=${page.homepage_hero_video_youtube_id}`"
          target="_blank" rel="noopener"
          @click.prevent="/**/"
        >
          <button @click="showLightbox(youtubeVideo)">
            What is beCamp? (Video)
          </button>
        </a>
      </div>
    </section>

    <section class="page-section tac why-attend-becamp decorative-bg">
      <div class="wysiwyg-block">
        <h1 class="section-title small-margin">Why should I attend beCamp?</h1>
        <div v-html="page.why_attend_becamp"></div>
        <icon-grid :icons="page.sponsorship_perks" />
      </div>

      <div class="cta">
        <h2>Let us know you're attending!</h2>
        <p>It's quick and easy, and guarantees we get your shirt size correct.</p>
        <a
          href="https://airtable.com/shr2NPFSOnIHUBvlY"
          target="_blank" rel="noopener"
        >
          <button>Register Now</button>
        </a>
      </div>
    </section>

    <section class="page-section tac becamp-sponsors">
      <div class="wysiwyg-block">
        <h1 class="section-title small-margin">beCamp wouldn't be possible without our <span class="accent">awesome</span>&nbsp;sponsors!</h1>
        <div v-html="page.our_awesome_sponsors"></div>
      </div>
      <becamp-sponsors />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  async fetch ({store, params}) {
    try {
      await store.dispatch('getPage', 'homepage')
    } catch(err) {
      console.log(err)
    }
  },
  data () {
    return {
      youtubeVideo: `<div class="embed-container"><iframe src="https://www.youtube.com/embed/aVMBvWumoF8?autoplay=1&rel=0" frameborder="0" allowfullscreen autoplay="1"></iframe></div>`
    }
  },
  created () {
    this.$store.commit('setCurrentPageAccentColor', this.page.page_accent_color)
    this.setEventTime(this.page.event_start_date)
  },
  computed: {
    ...mapState({
      butterPages: state => state.butterPages,
      attendees: state => state.attendees
    }),
    page () {
      return this.butterPages['homepage']
    },
    attendeeCount () {
      return this.attendees.length >= 20 ? `<strong>${this.attendees.length}</strong>&nbsp;` : ''
    }
  },
  methods: {
    ...mapActions([
      'setEventTime'
    ]),
    setAttendeeCount(html) {
      return html.replace("[count]&nbsp;", this.attendeeCount)
    },
    showLightbox (content) {
      this.$store.commit('lightbox/setVisibility', true)
      this.$store.commit('lightbox/setContent', content)
    }
  }
}
</script>


<style scoped lang="scss">
  .page-hero {
    .inner {
      display: flex;
      flex-direction: column;
      width: 85%;
      margin: auto;
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
        margin: auto 0 2em auto;
      }

      .action {
        display: block;
      }
      .action + .action {
        margin-top: gutter();
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
      text-align: center;
      margin-top: 1.5em;

      img {
        max-width: 50px;
        margin-bottom: .25em;
        cursor: pointer;
        transition: transform .25s;

        &:hover {
          transform: scale(1.05);
        }

        @include bp($ml) {
          max-width: 75px;
        }
      }

      p {
        font-size: 1rem;
      }
    }
  }
  .cta {
    font-size: 1rem;
    text-align: center;

    h2 {
      margin-bottom: .5em;
    }
  }
</style>
