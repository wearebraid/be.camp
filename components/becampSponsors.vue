<template>
  <div class="sponsors">
    <div class="sponsor-tier premier">
      <h2>Premier Sponsors</h2>
      <sponsor-cards :sponsors="premierSponsors" />
    </div>
    <div class="sponsor-tier sponsors">
      <h2>Sponsors</h2>
      <logo-grid :sponsors="sponsors" />
    </div>
    <div class="sponsor-tier supporters">
      <h2>Supporters</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters({
      premierSponsors: 'premierSponsors',
      sponsors: 'sponsors'
    }),
  }
}
</script>

<style lang="scss" scoped>
.sponsors {
  @include row();
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
}
</style>
