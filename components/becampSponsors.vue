<template>
  <div class="sponsors">
    <div class="sponsor-tier premier">
      <h2>Premier Sponsors</h2>
      <sponsor-cards :sponsors="premierSponsors" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters({
      premierSponsors: 'premierSponsors'
    }),
  }
}
</script>

<style lang="scss" scoped>
.sponsors {
  @include row();
}
.sponsor-tier {
  h2 {
    text-align: center;
  }
}
</style>
