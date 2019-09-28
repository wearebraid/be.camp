<template>
  <div class="becamp-schedule">
    <div
      class="time-block"
      :data-time="[time]"
      v-for="(events, time) in scheduleByTime"
      :key="time[0]['Time']"
    >
      <h3 class="event-time">{{time}}</h3>

      <div class="event-cards">
        <div
          class="event"
          v-for="event in events"
          :key="event['Location']"
          :data-location="getLocationID(event['Location'])"
        >
          <div class="event-data">
            <h4 class="topic">{{ event['Topic'] }}</h4>
            <span
              class="speaker"
              v-if="event['Speaker']"
            >
              {{ event['Speaker'] }}
            </span>
          </div>
          <div class="event-location-wrapper">
            <span
              class="type"
              v-if="event['Type']"
            >
              {{ event['Type'] }}
            </span>
            <div class="event-location">
              <span class="location">{{ getLocationID(event['Location']) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'scheduleByTime'
    ])
  },
  methods: {
    getLocationName(location) {
      if (location) {
        return location
      }
      return ""
    },
    getLocationID(location) {
      if (location) {
        let roomColor =  location.substring(0, location.indexOf(' Room'))
        return roomColor ? roomColor : location
      }
      return ""
    }
  }
}
</script>

<style lang="scss" scoped>
.event-time {
  color: $accent4;
}
.event-cards {
  display: flex;
  flex-direction: column;

  @include bp($m) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .event {
    padding: gutter()/2;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 .25em 1em 0 rgba($dark, .1);
    margin-bottom: gutter();
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include bp($m) {
      padding: gutter();
      width: 49%;
      border-radius: 15px;
      margin-bottom: gutter();
    }

    &[data-location="Red"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, red, darken(red, 5%)) !important;
      }
    }
    &[data-location="Black"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, #555, darken(#555, 5%)) !important;
      }
    }
    &[data-location="Brown"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, #885e27, darken(#885e27, 5%)) !important;
      }
    }
    &[data-location="Pink"] {
      .event-location {
        color: #222;
        background: linear-gradient(to bottom, pink, darken(pink, 5%)) !important;
      }
    }
    &[data-location="Blue"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, #446b97, darken(#446b97, 5%)) !important;
      }
    }
    &[data-location="6"] {
      .event-location {
        color: $dark;
        background: linear-gradient(to bottom, $light-d, darken($light-d, 8%)) !important;
      }
    }

    .event-data {
      margin-right: gutter()/2;
      width: 65%;

      .topic {
        margin: 0;
        font-weight: bold;
        line-height: 1;
        margin-bottom: gutter()/4;
      }
      .speaker {
        color: #666;
        font-size: 1rem;
      }
    }
    .event-location-wrapper {
      width: 35%;
      font-size: .9rem;
      text-align: center;

      .type {
        background-color: #f5f5f5;
        border: 1px solid #aaa;
        border-radius: 3px;
        padding: .25em .5em;
        display: inline-block;
        margin: 0 auto .5em auto;
      }

      .event-location {
        text-align: center;
        padding: gutter()/2;
        background: #eee;
        border-radius: 5px;
      }
    }
  }
}
</style>
