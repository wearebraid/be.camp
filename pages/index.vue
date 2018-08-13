
<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <page-hero
      :background="page.homepage_hero_image"
      :accent-color="page.page_accent_color"
    >
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
          <div class="countdown-clock">
            <div
              class="months"
              v-if="eventTimeObject.months > 0"
            >
              {{ eventTimeObject.months }}
            </div>
            <div class="days">
              {{ eventTimeObject.days }}
            </div>
            <div class="hours">
              {{ eventTimeObject.hours }}
            </div>
            <div class="minutes">
              {{ eventTimeObject.minutes }}
            </div>
            <div class="seconds">
              {{ eventTimeObject.seconds }}
            </div>
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
    ...mapGetters([
      'eventTimeObject'
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

</style>
