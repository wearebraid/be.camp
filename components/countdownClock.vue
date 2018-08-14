<template>
  <div class="countdown-clock">
    <div
      class="time-segment months"
      v-if="eventTimeObject.months > 0"
    >
      <div class="time">{{ eventTimeObject.months }}</div>
      <div class="unit">Months</div>
    </div>
    <div class="time-segment days">
      <div class="time">{{ eventTimeObject.days }}</div>
      <div class="unit">Days</div>
    </div>
    <div class="time-segment hours">
      <div class="time">{{ eventTimeObject.hours }}</div>
      <div class="unit">Hours</div>
    </div>
    <div class="time-segment minutes">
      <div class="time">{{ eventTimeObject.minutes }}</div>
      <div class="unit">Minutes</div>
    </div>
    <div class="time-segment seconds">
      <div class="time">{{ eventTimeObject.seconds }}</div>
      <div class="unit">Seconds</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'eventTimeObject'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.countdown-clock {
  display: flex;

  .time-segment {
    text-align: center;
    padding-right: 1.25em;
    position: relative;

    &:after {
      display: block;
      font-size: 3.5em;
      font-family: $display;
      font-weight: 700;
      color: $dark-b;
      position: absolute;
      content: ':';
      top: 0;
      right: 0;
      transform: translate(-10%, 0%);
    }

    &:last-child {
      padding-right: 0;

      &:after {
        display: none;
      }
    }

    .time {
      font-size: 3.5em;
      font-family: $display;
      font-weight: 700;
      color: $dark-b;
      margin-bottom: .15em;
    }

    .unit {
      font-size: .75em;
      text-transform: uppercase;
    }
  }
}
</style>
