<template>
  <div class="logo-grid">
    <div
      class="logo"
      v-for="sponsor in validSponsors"
      :key="sponsor.sponsor"
    >
      <template v-if="sponsor.url">
        <a
          :href="sponsor.url"
          target="_blank"
          rel="noopener"
          :name="`${sponsor.sponsor} website link`"
        >
          <img
            v-lazy="getSponsorLogo(sponsor)"
            :alt="`sponsor ${sponsor.sponsor}`"
          />
        </a>
      </template>
      <template v-else>
        <img v-lazy="getSponsorLogo(sponsor)" />
      </template>
    </div>
  </div>
</template>

<script>
import {filter} from '../libs/util'

export default {
  props: {
    sponsors: {
      type: Object,
      required: true
    }
  },
  computed: {
    validSponsors () {
      return filter(this.sponsors, (sponsor) => {
        let target = this.sponsors[sponsor]
        return target.logo
      })
    }
  },
  methods: {
    getSponsorLogo(sponsor) {
      return sponsor.logo[0].thumbnails.large.url
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: gutter()/2 0 gutter()*2 0;
}

.logo {
  max-width: 50%;
  padding: gutter();

  @include bp($m) {
    max-width: 33%;
    filter: grayscale(1);
    transition: filter .33s;

    &:hover  {
      filter: grayscale(0);
    }
  }
  @include bp($l) {
    padding: gutter();
    max-width: 25%;
  }
  @include bp($xl) {
    max-width: 20%;
  }

  img {
    max-height: 120px;
  }
}
</style>
