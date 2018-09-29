<template>
  <div
    v-if="page"
    class="page-wrapper"
  >
    <page-hero
      :background="page.hero_image"
      :accent-color="page.page_accent_color"
    >
      <h1 class="page-title">
        {{ page.page_title }}
      </h1>
      <div class="page-description">
        {{ page.page_description }}
      </div>
    </page-hero>

    <section class="page-section">
      <div class="wysiwyg-block">
        <div
          class="cms-content"
          v-html="page.page_content"
        ></div>
        <becamp-schedule />
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  head () {
    return {
      title: 'Schedule | beCamp',
      meta: [
        { hid: 'description', name: 'description', content: 'Here\'s the full schedule of everything that\'s happening and when at beCamp. Don\'t miss a thing!' }
      ]
    }
  },
  created () {
    this.$store.commit('setCurrentPageAccentColor', this.page.page_accent_color)
  },
  mounted () {
    if (this.$route.query.mode) {
      this.$store.commit('setViewMode', this.$route.query.mode)
    }
  },
  computed: {
    ...mapState({
      butterPages: state => state.butterPages,
    }),
    page () {
      return this.butterPages['schedule'] ? this.butterPages['schedule'] : {}
    }
  }
}
</script>

<style lang="scss">
.tv-mode {
  .off-canvas-nav,
  .site-header,
  .global-site-footer,
  .page-hero,
  .cms-content {
    display: none;
  }

  .page-section {
    max-width: 100%;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    border: 1px solid red;
    padding: gutter();

    .wysiwyg-block {
      width: 100%;
      max-width: 100%;
    }
  }

  .time-block[data-time="12:05pm - 12:35pm"],
  .time-block[data-time="12:35pm - 1:25pm"],
  .time-block[data-time="1:25pm - 1:55pm"],
  .time-block[data-time="3:40pm - 4:05pm"],
  .time-block[data-time="4:05pm - Whenever"]{
    width: 33.33%;
    float: left;

    .event {
      width: 90% !important;
    }
  }

  .event {
    width: 19% !important;
  }
  .event-time {
    font-size: 1.2rem;
    margin: 0 0 .25em 0 !important;
  }
  .event-data {
    .topic {
      font-size: 1rem;
    }
  }
}
</style>
