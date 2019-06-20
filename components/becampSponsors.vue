<template>
  <div class="sponsors">
    <div
      class="sponsor-tier premier"
      v-if="Object.keys(premierSponsors).length > 0"
    >
      <h2>Premier Sponsors</h2>
      <sponsor-cards :sponsors="premierSponsors" />
    </div>
    <div
      class="sponsor-tier sponsors"
      v-if="Object.keys(sponsors).length > 0"
    >
      <h2>Sponsors</h2>
      <logo-grid :sponsors="sponsors" />
    </div>
    <div
      class="sponsor-tier supporters"
      v-if="Object.keys(supporters).length > 0"
    >
      <h2>Supporters</h2>
      <div class="supporters-list">
        <div
          class="supporter"
          v-for="supporter in supporters"
          :key="supporter['Sponsor']"
        >
          <template v-if="supporter['Url']">
            <a
              :href="supporter['Url']"
              target="_blank"
              rel="noopener"
              :name="`${supporter['Sponsor']} website link`"
            >
              {{supporter['Sponsor']}}<span class="sep">,</span>
            </a>
          </template>
          <template v-else>
            {{supporter['Sponsor']}}<span class="sep">,</span>
          </template>
        </div>
      </div>
    </div>
    <div class="sponsor-tier become-a-sponsor">
      <div class="cta">
        <h2>Want to become a beCamp sponsor?</h2>
        <p>We're always in need of an extra helping hand.</p>
        <a
          href="mailto:ron.duplain@gmail.com?subject=beCamp/beSwarm Sponsorship&body=Hello! I'd like to learn more about becoming a sponsor for beCamp/beSwarm!"
          name="Email beCamp/beSwarm organizer"
        >
          <button>Become a Sponsor</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { filter } from '../libs/util'

export default {
  computed:{
    ...mapGetters({
      premierSponsors: 'premierSponsors',
      sponsors: 'sponsors',
      supporters: 'supporters'
    })
  }
}
</script>

<style lang="scss" scoped>
.sponsors {
  @include row();
  max-width: 1440px;
}
.sponsor-tier {
  margin-bottom: gutter();
  padding-top: gutter();
  border-top: 1px solid #f5f5f5;

  @include bp($m) {
    padding-top: gutter()*2;
  }

  &:first-child {
    border-top: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
  }

  .supporters-list {
    text-align: center;
    padding: gutter()*2 0;
    line-height: 1.4;
  }
  .supporter {
    display: inline-block;
    margin-right: gutter()/2;
  }
  .supporter:last-child {
    margin-right: 0;
    .sep {
      display: none;
    }
  }

  .cta {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
