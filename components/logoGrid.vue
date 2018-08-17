<template>
  <div class="logo-grid">
    <div
      class="logo"
      v-for="sponsor in validSponsors"
      :key="sponsor['Sponsor']"
    >
      <template v-if="sponsor['Url']">
        <a :href="sponsor['Url']" target="_blank" rel="noopener">
          <img :src="getSponsorLogo(sponsor)" />
        </a>
      </template>
      <template v-else>
        <img :src="getSponsorLogo(sponsor)" />
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
        return target["Logo"]
      })
    }
  },
  methods: {
    getSponsorLogo(sponsor) {
      return sponsor['Logo'][0].thumbnails.large.url
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
  filter: grayscale(1);
  max-width: 50%;
  padding: gutter();
  transition: filter .33s;

  &:hover {
    filter: grayscale(0);
  }

  @include bp($m) {
    max-width: 33%;
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
