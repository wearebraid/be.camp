<template>
  <div class="attendee-directory">
    <div
      class="attendee"
      v-for="attendee in directoryAttendees"
      :key="attendee.key"
    >
      <div class="inner">
        <img v-lazy="`https://secure.gravatar.com/avatar/${attendee.key}?s=200&rating=pg&d=retro`" :alt="attendee['Guest Name']">
        <span>{{ attendee['Guest Name'] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'directoryAttendees'
    ])
  }
}
</script>

<style lang="scss" scoped>
.attendee-directory {
  @include row();
  max-width: 800px;
  padding: 0 0 gutter()*3 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @include bp($m) {
    padding: 0 gutter() gutter()*6 gutter();
  }
  @include bp($ml) {
    justify-content: flex-start;
  }
}
.attendee {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: gutter()/4;
  max-width: 50%;

  @include bp($m) {
    max-width: 33%;
  }
  @include bp($ml) {
    max-width: 25%;
  }

  .inner {
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: gutter()/2;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 .25em 1em 0 rgba($dark, .1);

    span {
      font-size: 1rem;
      margin-top: gutter()/2;
    }
  }
}
</style>
