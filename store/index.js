import moment from 'moment'

export const state = () => ({
  butterPages: {},
  timeToEvent: null
})

export const getters = {
  eventTimeObject (state) {
    let duration = state.timeToEvent
    if (duration) {
      return {
        months: duration.months() >= 10 ? duration.months() : '0' + duration.months(),
        days: duration.days() >= 10 ? duration.days() : '0' + duration.days(),
        hours: duration.hours() >= 10 ? duration.hours() : '0' + duration.hours(),
        minutes: duration.minutes() >= 10 ? duration.minutes() : '0' + duration.minutes(),
        seconds: duration.seconds() >= 10 ? duration.seconds() : '0' + duration.seconds()
      }
    }
  }
}

export const actions = {
  getPage ({commit, state}, page) {
    this.app.api.butter.page.retrieve('*', page)
      .then((res) => {
        if (!state.butterPages[res.data.data.slug]) {
          commit('setPage', {
            key: res.data.data.slug,
            data: res.data.data.fields
          })
        }
      }).catch((res) => {
        console.log(res)
      })
  },
  getSponsors({commit, state}) {
    let base = this.app.api.airtable
    base('Past & Potential Sponsors').select({
      maxRecords: 99,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        console.log(record);
      });
      fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  },
  setEventTime({commit, dispatch}, time) {
    let currentTime = moment().unix()
    let ts = moment(time, 'YYYY-M-D H:mm').unix()
    let diffTime = ts - currentTime
    let duration = moment.duration(diffTime * 1000, 'milliseconds')

    commit('setEventCountdown', duration)
    setInterval(() => {
      dispatch('updateEventCountdown', 1000)
    }, 1000);
  },
  updateEventCountdown ({commit, dispatch, state}, interval) {
    let duration = moment.duration(state.timeToEvent.asMilliseconds() - interval, 'milliseconds');
    commit('setEventCountdown', duration)
  }
}

export const mutations = {
  setPage(state, {key, data}) {
    state.butterPages = Object.assign({}, state.butterPages, {[key]: data})
  },
  setEventCountdown(state, duration) {
    state.timeToEvent = duration
  }
}
