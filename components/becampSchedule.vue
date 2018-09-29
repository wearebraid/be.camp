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
              <span class="location">{{ getLocationName(event['Location']) }}</span>
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
      return location.substring(0, location.indexOf(' ['))
    },
    getLocationID(location) {
      let id = location.match(/\[(.*?)\]/)
      return id[0].substring(1, 2)
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

    &[data-location="1"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, $accent2, darken($accent2, 5%)) !important;
      }
    }
    &[data-location="2"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, $accent4, darken($accent4, 5%)) !important;
      }
    }
    &[data-location="3"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, $accent, darken($accent, 5%)) !important;
      }
    }
    &[data-location="4"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, $accent5, darken($accent5, 5%)) !important;
      }
    }
    &[data-location="5"] {
      .event-location {
        color: #fff;
        background: linear-gradient(to bottom, $accent3, darken($accent3, 5%)) !important;
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
        text-align: left;
        padding: gutter()/2;
        background: #eee;
        border-radius: 5px;
      }
    }
  }
}
</style>
