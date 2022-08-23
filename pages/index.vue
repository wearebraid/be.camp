
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
          <!-- Wondering where this is? Go to "Guests" in the forked Airtable Base and change the "Grid view" to the form's view. -->
          <a
            href="https://airtable.com/shr8pscmdKHqKEBBN"
            target="_blank" rel="noopener"
          >
            <button>Register Now</button>
          </a>
        </div>

        <div class="event-countdown">
          <div class="countdown-timer">
            <div
              class="countdown-label"
              v-html="page.event_date_label"
            />
            <countdown-clock />
          </div>
          <div
            class="intro-video"
            v-if="page.homepage_hero_video_youtube_id"
          >
            <a
              :href="`https://www.youtube.com/watch?v=${page.homepage_hero_video_youtube_id}`"
              target="_blank"
              rel="noopener"
              @click.prevent="showLightbox(youtubeVideo)"
              name="no-decoration"
            >
              <img src="/play.svg" aria-hidden="true" alt="play button">
              <p id="beCamp-video">What is beCamp?</p>
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
          target="_blank"
          rel="noopener"
          @click.prevent="/**/"
          name="beCamp promo video link"
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
          href="https://airtable.com/shr9v2szGC7jobp8S"
          target="_blank" rel="noopener"
        >
          <button>Register Now</button>
        </a>
        <div class="wysiwyg-block">
          <div v-html="page.safe_inclusive_accessible"></div>
        </div>
      </div>
    </section>

    <section class="page-section wide tac becamp-sponsors">
      <div class="wysiwyg-block">
        <h1 class="section-title small-margin">beCamp wouldn't be possible without our <span class="accent">awesome</span>&nbsp;sponsors!</h1>
        <div v-html="page.our_awesome_sponsors"></div>
      </div>
      <becampSponsors />
    </section>
  </div>
</template>


<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import becampSponsors from '~/components/becampSponsors.vue'
export default {
  components: {
     becampSponsors
  },
  data () {
    return {
      youtubeVideo: `<div class="embed-container"><iframe src="https://www.youtube.com/embed/aVMBvWumoF8?autoplay=1&rel=0" frameborder="0" allowfullscreen autoplay="1"></iframe></div>`
    }
  },
  computed: {
    ...mapState({
      butterPages: state => state.butterPages
    }),
    ...mapGetters({
      attendeeCount: 'attendeeCount',
      directoryAttendees: 'directoryAttendees'
    }),
    page () {
      return this.butterPages['homepage']
    },
    attendeeCountText () {
      return this.attendeeCount >= 20 ? `<strong>${this.attendeeCount}</strong>&nbsp;` : ''
    }
  },
  created () {
    this.$store.commit('setCurrentPageAccentColor', this.page.page_accent_color)
    this.setEventTime(this.page.event_start_date)
  },
  methods: {
    ...mapActions([
      'setEventTime'
    ]),
    setAttendeeCount(html) {
      return html.replace("[count] ", this.attendeeCountText)
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
    width: 95%;
    margin: auto;
    max-width: 1200px;
    @include bp($ml) {
      flex-direction: row;
      align-items: center;
      margin: auto;
    }
  }
  .event-headline {
    text-align: center;
    font-size: 1rem;
    max-width: 900px;
    font-weight: normal;
    order: 2;
    @include bp($l) {
      margin-top: -3em;
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
    order: 1;
    @include bp($m) {
      margin-right: 2em;
    }
    @include bp($l) {
      margin-right: 5em;
    }
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
    margin-bottom: .75em;
    line-height: 1.2;
    font-style: italic;
    @include bp($ms) {
      font-size: 1.5em;
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
.what-is-becamp {
  .section-title {
    margin-bottom: 1em;
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
