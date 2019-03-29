
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
          <div>
            <h1><strong>beSwarm 2019</strong></h1>
            <h2 style="font-weight: 100;">Saturday Apr 27, 9:30am-4pm</h2>
            <p><braid-link to="https://www.google.com/maps/place/OpenSource+Connections/@38.03502,-78.4864848,15z/data=!4m2!3m1!1s0x0:0xb179d719d7c40a6e?sa=X&ved=2ahUKEwigjf7TqKbhAhUFn-AKHYS7C8YQ_BIwDXoECAgQCA">OpenSource Connections (608 Preston Ave)</braid-link></p>
          </div>
          <braid-link
            to="#"
            class="action"
          >
            <button>Register Now!</button>
          </braid-link>
        </div>
      </div>
    </page-hero>

    <section class="page-section what-is-becamp">
      <h1 class="section-title">What is <strike>beCamp</strike> beSwarm?</h1>
      <div class="wysiwyg-block">
        <p>First, there was beCamp. It's a unique and "very Charlottesville" annual experience. But a year is a long time for a vibrant tech community. beSwarm spunoff in 2010 as a complement to beCamp.</p>

        <ul>
          <li>beCamp happens in the fall; <strong>beSwarm happens in the spring.</strong></li>
          <li>beCamp is a Friday/Saturday event; <strong>beSwarm is a Saturday-only event.</strong></li>
          <li>beCamp puts together a schedule with attendee-organized topics; <strong>beSwarm has no topic schedule.</strong></li>
          <li>beCamp and beSwarm are <strong>un-conferences.</strong></li>
        </ul>
      </div>

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
        <h1 class="section-title small-margin">Why should I attend beSwarm?</h1>
        <div v-html="page.why_attend_becamp"></div>
        <icon-grid :icons="page.sponsorship_perks" />
      </div>

      <div class="cta">
        <h2>Let us know you're attending!</h2>
        <p>It's quick and easy, and helps us order the correct amout of food.</p>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          name="beCamp registration link"
        >
          <button>Register Now!</button>
        </a>
        <div class="wysiwyg-block">
          <div v-html="page.safe_inclusive_accessible"></div>
        </div>
      </div>
    </section>

    <section class="page-section wide tac becamp-sponsors">
      <div class="wysiwyg-block">
        <h1 class="section-title small-margin">beSwarm wouldn't be possible without our <span class="accent">awesome</span>&nbsp;sponsors!</h1>
        <div v-html="page.our_awesome_sponsors"></div>
      </div>
      <becamp-sponsors />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
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
      butterPages: state => state.butterPages
    }),
    ...mapGetters({
      attendeeCount: 'attendeeCount'
    }),
    page () {
      return this.butterPages['swarm-homepage']
    },
    attendeeCountText () {
      return this.attendeeCount >= 20 ? `<strong>${this.attendeeCount}</strong>&nbsp;` : ''
    }
  },
  methods: {
    ...mapActions([
      'setEventTime'
    ]),
    setAttendeeCount(html) {
      return html.replace("[count]&nbsp;", this.attendeeCountText)
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
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    max-width: 900px;
    font-weight: normal;nt-weight: normal;nt-weight: normal;rgin: auto auto 2em auto;

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

.icon-grid {
  & /deep/ .icon:nth-child(3) {
    display: none;
  }
}
</style>
