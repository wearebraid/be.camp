<template>
  <div class="sponsor-cards">
    <div
      class="sponsor-card"
      v-for="sponsor in validSponsors"
      :key="sponsor['Sponsor']"
    >
      <div class="card-content">
        <div class="logo">
          <template v-if="sponsor['Url']">
            <a
              :href="sponsor['Url']"
              target="_blank"
            >
              <img :src="getSponsorLogo(sponsor)">
            </a>
          </template>
          <template v-else>
            <img :src="getSponsorLogo(sponsor)">
          </template>
        </div>
        <div class="writeup">
          {{ sponsor['Write up'] }}
        </div>
        <div
          v-if="sponsor['Url']"
          class="website"
        >
          <a
            :href="sponsor['Url']"
            target="_blank"
          >
            {{ sponsor['Url'] }}
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
        return (target["Logo"] && target["Write up"])
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
}

.card-content {
  padding: gutter();
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 1rem 0 rgba($dark, .1);
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
