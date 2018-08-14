<template>
  <div class="countdown-clock">
    <div
      class="time-segment months"
      :class="{disabled: parseInt(eventTimeObject.months) === 0}"
    >
      <div class="time">{{ eventTimeObject.months }}</div>
      <div class="unit">Months</div>
    </div>
    <div
      class="time-segment days"
      :class="{disabled: parseInt(eventTimeObject.months) === 0 && parseInt(eventTimeObject.days) === 0}"
    >
      <div class="time">{{ eventTimeObject.days }}</div>
      <div class="unit">Days</div>
    </div>
    <div
      class="time-segment hours"
      :class="{disabled: parseInt(eventTimeObject.months) === 0 && parseInt(eventTimeObject.days) === 0 && parseInt(eventTimeObject.hours) === 0}"
    >
      <div class="time">{{ eventTimeObject.hours }}</div>
      <div class="unit">Hours</div>
    </div>
    <div
      class="time-segment minutes"
      :class="{disabled: parseInt(eventTimeObject.months) === 0 && parseInt(eventTimeObject.days) === 0 && parseInt(eventTimeObject.hours) === 0 && parseInt(eventTimeObject.minutes) === 0}"
    >
      <div class="time">{{ eventTimeObject.minutes }}</div>
      <div class="unit">Minutes</div>
    </div>
    <div
      class="time-segment seconds"
      :class="{disabled: parseInt(eventTimeObject.months) === 0 && parseInt(eventTimeObject.days) === 0 && parseInt(eventTimeObject.hours) === 0 && parseInt(eventTimeObject.minutes) === 0 && parseInt(eventTimeObject.seconds) === 0}"
    >
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
    padding-right: 4vw;
    position: relative;

    @include bp($ms) {
      padding-right: 1em;
    }

    &:after {
      display: block;
      font-size: 10vw;
      font-family: $display;
      font-weight: 700;
      color: $dark-b;
      position: absolute;
      content: ':';
      top: 0;
      right: .333vw;

      @include bp($ms) {
        font-size: 2.25em;
        right: .1em;
      }
      @include bp($ml) {
        font-size: 2.5em;
        right: .025em;
      }
    }

    &:last-child {
      padding-right: 0;

      &:after {
        display: none;
      }
    }

    &.disabled {
      filter: grayscale(1);
      opacity: .25;
    }

    .time {
      font-size: 10vw;
      font-family: $display;
      font-weight: 700;
      color: $dark-b;
      margin-bottom: .15em;

      @include bp($ms) {
        font-size: 2.25em;
      }
      @include bp($ml) {
        font-size: 2.5em;
      }
    }

    .unit {
      font-size: 3vw;
      text-transform: uppercase;

      @include bp($ms) {
        font-size: .75em;
      }
    }
  }
}
</style>
