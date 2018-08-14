
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
        <div
          class="event-headline"
          v-html="page.homepage_hero_content"
        >
        </div>

        <div class="event-countdown">
          <div class="countdown-timer">
            <div class="countdown-label">
              {{ page.event_date_label }}
            </div>
            <countdown-clock />
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

    .countdown-timer {
      display: flex;
      flex-direction: column;
      align-items: center;
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
  }
</style>
