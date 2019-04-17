<template>
  <div class="sponsor-cards">
    <div
      class="sponsor-card"
      v-for="sponsor in validSponsors"
      :key="sponsor.sponsor"
    >
      <div class="card-content">
        <div class="logo">
          <template v-if="sponsor.url">
            <a
              :href="sponsor.url"
              target="_blank"
              rel="noopener"
              :name="`${sponsor.sponsor} logo website link`"
            >
              <img
                v-lazy="getSponsorLogo(sponsor)"
                :alt="`sponsor ${sponsor.sponsor}`"
              />
            </a>
          </template>
          <template v-else>
            <img
              v-lazy="getSponsorLogo(sponsor)"
              :alt="`sponsor ${sponsor.sponsor}`"
            />
          </template>
        </div>
        <div class="writeup">
          {{ sponsor.write_up }}
        </div>
        <div
          v-if="sponsor.url"
          class="website"
        >
          <a
            :href="sponsor.url"
            target="_blank" rel="noopener"
            :name="`${sponsor.sponsor} website link`"
          >
            {{ sponsor.url }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {filter} from '../libs/util'

export default {
  props: {
    sponsors: {
      type: Object,
      reqired: true
    }
  },
  computed: {
    validSponsors () {
      return filter(this.sponsors, (sponsor) => {
        let target = this.sponsors[sponsor]
        return (target.logo && target.write_up)
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
.sponsor-cards {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: gutter() 0 gutter() 0;
}

.sponsor-card {
  width: 100%;
  padding: gutter()/2;
  display: flex;

  @include bp($ms) {
    width: 50%;
  }
  @include bp($ml) {
    width: 33%;
  }
  @include bp($l) {
    width: 25%;
  }
  @include bp($xxl) {
    width: 20%;
  }
}

.card-content {
  width: 100%;
  padding: gutter();
  border: 1px solid #efefef;
  background: $light;
  border-radius: 5px;
  box-shadow: 0 .25rem 1rem 0 rgba($dark, .075);
  display: flex;
  flex-direction: column;
}

.logo {
  min-height: 75px;
  display: flex;

  a {
    margin: auto 0;
    display: block;
  }

  img {
    max-height: 55px;
    max-width: 100%;
    margin-bottom: gutter();
  }
}

.writeup {
  font-size: 1rem;
  line-height: 1.4;
}

.website {
  padding-top: gutter();
  margin-top: auto;
  font-size: 1rem;
}
</style>
